# HUARA° Spanish School — web

Next.js 15 (App Router, static export) migration of the original single-file site.
Two static routes:

| URL | Language |
| --- | --- |
| `/` | English |
| `/es/` | Spanish |

Both are prerendered at build time and can be hosted for **$0** on Cloudflare Pages.

## Commands

```bash
npm install
npm run dev        # http://localhost:3000  (ES: http://localhost:3000/es/)
npm run build      # static site in ./out
npm run typecheck  # tsc --noEmit
```

Preview the real export:

```bash
npx serve out
```

## Structure

```
src/
  app/
    globals.css          legacy stylesheet ported 1:1
    (en)/layout.tsx      <html lang="en"> + metadata/hreflang
    (en)/page.tsx        /        -> <Site locale="en" />
    (es)/layout.tsx      <html lang="es"> + metadata/hreflang
    (es)/es/page.tsx     /es/     -> <Site locale="es" />
  components/            sections + overlays (client)
    Site.tsx             state: cart, drawers, countdown, checkout
    SiteContext.tsx      shared context
  lib/
    content.ts           all editable content (programs, prices, reviews, FAQ...)
    i18n.ts              EN/ES UI strings
    utils.ts             money/countdown/validation helpers
public/
  img/                   22 photos (1h–10h, 1v–12v)
  1.mp4                  footer background video
  favicon.svg, robots.txt, sitemap.xml
```

## Editing content (today)

Everything the school changes lives in two files:

- `src/lib/content.ts` — programs, prices, spots, start delays, extras, reviews,
  story, FAQ, lookbook, Instagram/Facebook links, contact.
- `src/lib/i18n.ts` — every UI string in EN and ES.

Rule kept from the legacy site: **never change one language only**. Both `en` and
`es` values must be updated together.

Program prices/spots live in `PROGRAMS`; extras in `EXTRAS`. `startDays` drives the
countdown pill on each card; `spots` drives the “4 spots / 3 left! / Last spot!”
label. The surf banner countdown targets the next Monday 09:00 automatically.

## Deploy — Cloudflare Pages (free)

1. Push this repo to GitHub (the site is in the `web/` subfolder).
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - Framework preset: **Next.js** (or None)
   - Root directory: `web`
   - Build command: `npm run build`
   - Build output directory: `out`
   - Environment variable: `NODE_VERSION=20`
4. Deploy. Static assets are unlimited; the free plan includes 500 builds/month,
   files up to 25 MiB, 20,000 files per deployment.

Do **not** enable Workers Paid, R2, or any add-on. Never add a payment method.

### Domain `huara.cl`

- Buy/renew at NIC Chile (~US$10/year — the only real cost).
- Add `huara.cl` as a custom domain in Cloudflare Pages.
- Change the nameservers at NIC Chile to the two Cloudflare provides.
- No MX records exist yet, so moving DNS does not affect email. When
  `hola@huara.cl` is created later, add its MX records in Cloudflare DNS.

## Free-tier safeguards

- Cloudflare Pages Free: no overage billing (builds simply stop at 500/month).
- Sanity Free (when connected): hard caps with no overages; refuse the Growth trial
  and switch back to Free.
- Brevo Free: 300 emails/day, no card. Do not upgrade.
- No Vercel (Hobby prohibits commercial use; Pro is $20/month).

## Pending integrations

### Sanity (content editing UI)

Not wired yet — the site currently reads `src/lib/content.ts`. Next phase:

1. Create a Sanity project + `production` dataset (public).
2. Schemas: `program`, `extra`, `review`, `faq`, `siteSettings`, `lookbook`.
3. Add `@sanity/client`, fetch in the server pages, and fall back to
   `content.ts` when `NEXT_PUBLIC_SANITY_PROJECT_ID` is missing.
4. Sanity webhook (free plan allows 2) → Cloudflare Deploy Hook → rebuild.

### Brevo newsletter

The footer form validates the email and shows a success toast, but does not store
it yet. When the Brevo account exists, either embed the hosted form or POST to a
Cloudflare Pages Function (free) that calls the Brevo API.

## Notes

- `?admin=1` from the legacy site was intentionally removed; Sanity replaces it.
- Online program prices ($300/$600/$900) were marked “TODO: precio real cliente”
  in the legacy file — confirm them before launch.
- Hero/editorial/Instagram images are still Unsplash URLs, same as the legacy site.
