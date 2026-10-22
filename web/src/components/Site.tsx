'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ALL_PRODUCTS, CONTACT, LOOKBOOK, PROGRAMS, type Locale } from '@/lib/content';
import { getDict } from '@/lib/i18n';
import { nextMonday9 } from '@/lib/utils';
import { SiteCtx, type OrderInfo, type SiteCtxValue } from './SiteContext';
import PromoBar from './PromoBar';
import Header from './Header';
import Hero from './Hero';
import BigMarquee from './BigMarquee';
import Shop from './Shop';
import Editorial from './Editorial';
import Method from './Method';
import Surf from './Surf';
import Addons from './Addons';
import Lookbook from './Lookbook';
import Story from './Story';
import Community from './Community';
import Faq from './Faq';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import QuickView from './QuickView';
import MenuDrawer from './MenuDrawer';
import SearchPanel from './SearchPanel';
import OrderModal from './OrderModal';
import Lightbox from './Lightbox';
import Floats from './Floats';
import Toast from './Toast';

export type CheckoutData = {
  name: string;
  email: string;
  modality: string;
  modalityLabel: string;
  levelLabel: string;
  date: string;
  notes: string;
  isPres: boolean;
  acc: string;
  prog: string;
  tz: string;
};

const LIKE_BASE_STORAGE = 'huara_likes';
const LIKES: Record<string, number> = { r1: 24, r2: 18, r3: 31, r4: 15, r5: 27, r6: 12, r7: 19 };

export default function Site({ locale }: { locale: Locale }) {
  const t = useMemo(() => getDict(locale), [locale]);
  const [cart, setCart] = useState<Record<string, number>>({});
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [qvId, setQvId] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');
  const [lbOpen, setLbOpen] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);
  const [order, setOrder] = useState<OrderInfo>({ open: false, url: '', lines: [], total: 0, name: '' });
  const [likes, setLikes] = useState<Record<string, boolean>>({});
  const [now, setNow] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [startAt, setStartAt] = useState<Record<string, number>>({});
  const [surfTarget, setSurfTarget] = useState(0);
  const [toastMsg, setToastMsg] = useState('');
  const [toastOn, setToastOn] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const lbSrcs = useMemo(() => Array.from(new Set([...LOOKBOOK.h, ...LOOKBOOK.v])), []);

  useEffect(() => {
    setMounted(true);
    const base = Date.now();
    const at: Record<string, number> = {};
    PROGRAMS.forEach((p) => (at[p.id] = base + p.startDays * 864e5));
    setStartAt(at);
    const target = nextMonday9().getTime();
    setSurfTarget(target);
    setNow(base);
    try {
      setLikes(JSON.parse(localStorage.getItem(LIKE_BASE_STORAGE) || '{}'));
    } catch {}
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const header = document.getElementById('siteHeader');
      if (header) {
        header.classList.toggle('solid', window.scrollY > window.innerHeight * 0.55);
        const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 140;
        header.classList.toggle('at-bottom', nearBottom);
      }
      const top = document.getElementById('topBtn');
      if (top) top.classList.toggle('show', window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const toast = useCallback((msg: string) => {
    setToastMsg(msg);
    setToastOn(true);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastOn(false), 2600);
  }, []);

  const totals = useCallback(
    () =>
      Object.entries(cart).reduce((sum, [id, q]) => {
        const p = ALL_PRODUCTS.find((x) => x.id === id);
        return sum + (p ? p.price * q : 0);
      }, 0),
    [cart]
  );

  const count = useCallback(() => Object.values(cart).reduce((a, b) => a + b, 0), [cart]);

  const addToCart = useCallback(
    (id: string) => {
      setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
      setCartOpen(true);
      const p = ALL_PRODUCTS.find((x) => x.id === id);
      if (p) toast(t.added + p.title[locale]);
    },
    [locale, t, toast]
  );

  const changeQty = useCallback((id: string, d: number) => {
    setCart((c) => {
      const next = { ...c };
      const q = (next[id] || 0) + d;
      if (q <= 0) delete next[id];
      else next[id] = q;
      return next;
    });
  }, []);

  const toggleLike = useCallback((id: string) => {
    setLikes((prev) => {
      const next = { ...prev };
      if (next[id]) delete next[id];
      else next[id] = true;
      try {
        localStorage.setItem(LIKE_BASE_STORAGE, JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  const likeCount = useCallback(
    (id: string, base: number) => base + (likes[id] ? 1 : 0),
    [likes]
  );

  const openLB = useCallback(
    (src: string) => {
      const i = lbSrcs.indexOf(src);
      setLbIndex(Math.max(0, i));
      setLbOpen(true);
    },
    [lbSrcs]
  );

  const lbNav = useCallback(
    (d: number) => setLbIndex((i) => (i + d + lbSrcs.length) % lbSrcs.length),
    [lbSrcs.length]
  );

  const closeAll = useCallback(() => {
    setMenuOpen(false);
    setCartOpen(false);
    setSearchOpen(false);
    setQvId(null);
    setOrder((o) => ({ ...o, open: false }));
    setLbOpen(false);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAll();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [closeAll]);

  const checkout = useCallback(
    (data: CheckoutData) => {
      const lines = Object.entries(cart).map(([id, q]) => {
        const p = ALL_PRODUCTS.find((x) => x.id === id)!;
        return '- ' + q + 'x ' + p.title[locale] + ' ($' + p.price * q + ')';
      });
      const total = totals();
      let extra = data.modalityLabel + ' · ' + t.waLevel + data.levelLabel;
      if (data.isPres) extra += ' · ' + t.waClasses + data.acc;
      else extra += ' · ' + data.prog + ' · ' + data.tz;
      const msg =
        t.waHello +
        '\n' +
        lines.join('\n') +
        '\nTotal: $' +
        total +
        ' USD\n— ' +
        data.name +
        ' (' +
        data.email +
        ')\n' +
        t.waStart +
        data.date +
        ' · ' +
        extra +
        (data.notes ? '\n' + t.waNotes + data.notes : '');
      const url = 'https://wa.me/' + CONTACT.wa + '?text=' + encodeURIComponent(msg);
      window.open(url, '_blank', 'noopener');
      setOrder({ open: true, url, lines, total, name: data.name });
    },
    [cart, locale, t, totals]
  );

  const ctx: SiteCtxValue = {
    locale,
    t,
    langHref: { en: '/', es: '/es/' },
    cart,
    addToCart,
    changeQty,
    totals,
    count,
    menuOpen,
    setMenuOpen,
    cartOpen,
    setCartOpen,
    searchOpen,
    setSearchOpen,
    qvId,
    openQV: setQvId,
    closeQV: () => setQvId(null),
    lbOpen,
    lbSrcs,
    lbIndex,
    openLB,
    closeLB: () => setLbOpen(false),
    lbNav,
    order,
    closeOrder: () => setOrder((o) => ({ ...o, open: false })),
    emptyBag: () => {
      setCart({});
      setOrder((o) => ({ ...o, open: false }));
    },
    toast,
    likes,
    toggleLike,
    likeCount,
    filter,
    setFilter,
    now,
    mounted,
    startAt,
  };

  return (
    <SiteCtx.Provider value={ctx}>
      <PromoBar />
      <Header />
      <SearchPanel />
      <div
        className={'overlay' + (menuOpen || cartOpen ? ' show' : '')}
        onClick={() => {
          setMenuOpen(false);
          setCartOpen(false);
        }}
      />
      <MenuDrawer />
      <main>
        <Hero />
        <BigMarquee />
        <Shop />
        <Editorial />
        <Method />
        <Surf surfTarget={surfTarget} />
        <Addons onCheckout={checkout} />
        <Lookbook />
        <Story />
        <Community />
        <Faq />
        <BigMarquee />
        <Footer />
      </main>
      <CartDrawer />
      <QuickView />
      <OrderModal />
      <Lightbox />
      <Floats />
      <Toast msg={toastMsg} show={toastOn} />
    </SiteCtx.Provider>
  );
}

