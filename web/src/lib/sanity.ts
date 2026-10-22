import { createClient } from '@sanity/client';
import {
  DEFAULT_CONTENT,
  type EditorialCard,
  type Extra,
  type FaqItem,
  type IGItem,
  type L,
  type Locale,
  type MethodItem,
  type Program,
  type Review,
  type SiteOverrides,
} from './content';

export type { SiteOverrides };

const pid = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const ds = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const av = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01';

const client = pid
  ? createClient({ projectId: pid, dataset: ds, apiVersion: av, useCdn: true })
  : null;

const QUERY = /* groq */ `{
  "programs": *[_type == "program"]{ id, order, cat, badge, bc, tag, title, desc, price, img, startDays, spots },
  "extras": *[_type == "extra"]{ id, order, tag, title, desc, price, img },
  "reviews": *[_type == "review"]{ name, order, avatar, country, quote, "tagsEn": tagsEn, "tagsEs": tagsEs, likes, source },
  "faq": *[_type == "faq"]{ q, a, order } | order(order asc),
  "story": *[_id == "story"][0]{ eyebrow, paragraphs, sign, name },
  "siteSettings": *[_id == "siteSettings"][0]{
    method,
    "editorial": editorial,
    "contact": contact,
    "ig": ig,
    "fb": fb
  },
  "lookbook": *[_id == "lookbook"][0]{ "h": h[].asset->url, "v": v[].asset->url }
}`;

/** Para el documento único editorial los arrays vienen planos; hacemos orden estable. */
function orderKey<T extends { order?: number }>(item: T, i: number) {
  return item.order ?? i;
}

const isL = (v: unknown): v is L =>
  !!v && typeof v === 'object' && typeof (v as L).en === 'string' && typeof (v as L).es === 'string';

export async function fetchSanityContent(): Promise<SiteOverrides | null> {
  if (!client) return null;
  try {
    const raw = await client.fetch<Record<string, unknown>>(QUERY);
    if (!raw || typeof raw !== 'object') return null;
    const override: SiteOverrides = {};

    const programs = (raw.programs as Record<string, unknown>[] | undefined) || [];
    if (programs.length) {
      const mapped = programs
        .map((p, i): (Program & { _order: number }) | null => {
          if (!isL(p.title) || !isL(p.desc) || !isL(p.tag) || typeof p.id !== 'string') return null;
          const cat = p.cat === 'online' || p.cat === 'surf' ? p.cat : 'presencial';
          const badge = isL((p as { badge?: unknown }).badge) ? (p.badge as L) : undefined;
          return {
            id: p.id,
            cat,
            badge,
            bc: p.bc === 'sand' ? 'sand' : 'orange',
            tag: p.tag,
            title: p.title,
            desc: p.desc,
            price: typeof p.price === 'number' ? p.price : 0,
            img: typeof p.img === 'string' ? p.img : DEFAULT_CONTENT.programs[0].img,
            startDays: typeof p.startDays === 'number' ? p.startDays : 4,
            spots: typeof p.spots === 'number' ? p.spots : 4,
            _order: typeof p.order === 'number' ? p.order : i,
          };
        })
        .filter((p): p is Program & { _order: number } => !!p);
      if (mapped.length) {
        mapped.sort((a, b) => a._order - b._order);
        override.programs = mapped.map(({ _order, ...rest }) => rest as Program);
      }
    }

    const extras = (raw.extras as Record<string, unknown>[] | undefined) || [];
    if (extras.length) {
      const mapped = extras
        .map((x, i): (Extra & { _order: number }) | null => {
          if (!isL(x.title) || !isL(x.desc) || !isL(x.tag) || typeof x.id !== 'string') return null;
          return {
            id: x.id,
            tag: x.tag,
            title: x.title,
            desc: x.desc,
            price: typeof x.price === 'number' ? x.price : 0,
            img: typeof x.img === 'string' ? x.img : DEFAULT_CONTENT.extras[0].img,
            _order: typeof x.order === 'number' ? x.order : i,
          };
        })
        .filter((x): x is Extra & { _order: number } => !!x);
      if (mapped.length) {
        mapped.sort((a, b) => a._order - b._order);
        override.extras = mapped.map((x) => {
          const m = x as Extra & { _order?: number };
          const { _order, ...rest } = m;
          return rest;
        });
      }
    }

    const reviews = (raw.reviews as Record<string, unknown>[] | undefined) || [];
    if (reviews.length) {
      const mapped = reviews
        .map((r, i): (Review & { _order: number }) | null => {
          if (!isL(r.quote) || !isL(r.country) || typeof r.name !== 'string') return null;
          const en = Array.isArray(r.tagsEn) ? (r.tagsEn as string[]).filter((t) => typeof t === 'string') : [];
          const es = Array.isArray(r.tagsEs) ? (r.tagsEs as string[]).filter((t) => typeof t === 'string') : [];
          if (!en.length || !es.length) return null;
          return {
            id: `r${i + 1}`,
            name: r.name,
            avatar: typeof r.avatar === 'string' ? r.avatar : '',
            country: r.country,
            quote: r.quote,
            tags: { en, es },
            likes: typeof r.likes === 'number' ? r.likes : 0,
            source: r.source === 'Instagram' ? 'Instagram' : 'Google',
            _order: typeof r.order === 'number' ? r.order : i,
          };
        })
        .filter((r): r is Review & { _order: number } => !!r);
      if (mapped.length) {
        mapped.sort((a, b) => a._order - b._order);
        override.reviews = mapped.map((r) => {
          const m = r as Review & { _order?: number };
          const { _order, ...rest } = m;
          const rr = rest as Review;
          if (!rr.avatar) rr.avatar = DEFAULT_CONTENT.reviews[0].avatar;
          return rr;
        });
      }
    }

    const faq = (raw.faq as Record<string, unknown>[] | undefined) || [];
    if (faq.length) {
      const mapped: FaqItem[] = faq
        .map((f): FaqItem | null => (isL(f.q) && isL(f.a) ? { q: f.q, a: f.a } : null))
        .filter((f): f is FaqItem => !!f);
      if (mapped.length) override.faq = mapped;
    }

    const story = raw.story as Record<string, unknown> | undefined;
    if (story && isL(story.sign)) {
      const paragraphsRaw = Array.isArray(story.paragraphs) ? (story.paragraphs as unknown[]) : [];
      const paragraphs = paragraphsRaw
        .map((p) => (isL(p) ? p : null))
        .filter((p): p is L => !!p);
      if (paragraphs.length && isL(story.eyebrow)) {
        override.story = {
          eyebrow: story.eyebrow,
          paragraphs,
          sign: story.sign,
          name: typeof story.name === 'string' ? story.name : DEFAULT_CONTENT.story.name,
        };
      }
    }

    const ss = raw.siteSettings as Record<string, unknown> | undefined;
    if (ss) {
      const methodRaw = Array.isArray(ss.method) ? (ss.method as Record<string, unknown>[]) : [];
      const method: MethodItem[] = [];
      methodRaw.forEach((m) => {
        if (!isL(m.title) || !isL(m.desc)) return;
        const icon = m.icon === 'pot' || m.icon === 'bag' || m.icon === 'compass' ? m.icon : 'chat';
        method.push({ icon, title: m.title, desc: m.desc });
      });
      if (method.length) override.method = method;

      const edRaw = Array.isArray(ss.editorial) ? (ss.editorial as Record<string, unknown>[]) : [];
      const editorial: EditorialCard[] = [];
      edRaw.forEach((e) => {
        if (!isL(e.label) || !isL(e.title) || !isL(e.meta)) return;
        const hsRaw = Array.isArray(e.hotspots) ? (e.hotspots as Record<string, unknown>[]) : [];
        const hotspots: EditorialCard['hotspots'] = [];
        hsRaw.forEach((h) => {
          if (!isL(h.text)) return;
          hotspots.push({
            en: h.text.en,
            es: h.text.es,
            pos: h.pos === 'top-right' ? 'top-right' : 'top-left',
          });
        });
        const add = typeof e.add === 'string' && e.add ? e.add : null;
        const qv = typeof e.qv === 'string' && e.qv ? e.qv : null;
        editorial.push({
          label: e.label,
          title: e.title,
          meta: e.meta,
          img: typeof e.img === 'string' ? e.img : DEFAULT_CONTENT.editorial[0].img,
          hotspots,
          add,
          addLabel: isL(e.addLabel) ? e.addLabel : DEFAULT_CONTENT.editorial[0].addLabel,
          qv,
        });
      });
      if (editorial.length) override.editorial = editorial;

      const cRaw = ss.contact as Record<string, unknown> | undefined;
      if (cRaw) {
        const contact = { ...DEFAULT_CONTENT.contact };
        if (typeof cRaw.address === 'string') contact.address = cRaw.address;
        if (typeof cRaw.email === 'string') contact.email = cRaw.email;
        if (typeof cRaw.phone === 'string') contact.phone = cRaw.phone;
        if (typeof cRaw.whatsapp === 'string') contact.wa = cRaw.whatsapp;
        if (typeof cRaw.instagram === 'string') contact.instagram = cRaw.instagram;
        if (typeof cRaw.facebook === 'string') contact.facebook = cRaw.facebook;
        if (cRaw.instagram === null) contact.instagram = DEFAULT_CONTENT.contact.instagram;
        override.contact = contact;
      }

      const igRaw = Array.isArray(ss.ig) ? (ss.ig as Record<string, unknown>[]) : [];
      const ig: IGItem[] = [];
      igRaw.forEach((g) => {
        if (typeof g.img !== 'string') return;
        ig.push({
          img: g.img,
          likes: typeof g.likes === 'number' ? g.likes : 0,
          alt: typeof g.alt === 'string' ? g.alt : 'Photo',
        });
      });
      if (ig.length) override.ig = ig;

      const fbRaw = Array.isArray(ss.fb) ? (ss.fb as unknown[]) : [];
      const fb = fbRaw.filter((u): u is string => typeof u === 'string' && u.startsWith('http'));
      if (fb.length) override.fb = fb;
    }

    const lb = raw.lookbook as Record<string, unknown> | undefined;
    if (lb) {
      if (Array.isArray(lb.h)) {
        const h = (lb.h as unknown[]).filter((u): u is string => typeof u === 'string');
        if (h.length) override.lookbookH = h;
      }
      if (Array.isArray(lb.v)) {
        const v = (lb.v as unknown[]).filter((u): u is string => typeof u === 'string');
        if (v.length) override.lookbookV = v;
      }
    }

    return Object.keys(override).length ? override : null;
  } catch (err) {
    console.warn('[sanity] fetch failed, using local content:', err instanceof Error ? err.message : err);
    return null;
  }
}

export const sanityDatasetName = ds;
export type { Locale };
