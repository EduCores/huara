'use client';

import { createContext, useContext } from 'react';
import type { Locale } from '@/lib/content';
import type { Dict } from '@/lib/i18n';

export type OrderInfo = {
  open: boolean;
  url: string;
  lines: string[];
  total: number;
  name: string;
};

export type SiteCtxValue = {
  locale: Locale;
  t: Dict;
  langHref: { en: string; es: string };
  cart: Record<string, number>;
  addToCart: (id: string) => void;
  changeQty: (id: string, d: number) => void;
  totals: () => number;
  count: () => number;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  cartOpen: boolean;
  setCartOpen: (v: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (v: boolean) => void;
  qvId: string | null;
  openQV: (id: string) => void;
  closeQV: () => void;
  lbOpen: boolean;
  lbSrcs: string[];
  lbIndex: number;
  openLB: (src: string) => void;
  closeLB: () => void;
  lbNav: (d: number) => void;
  order: OrderInfo;
  closeOrder: () => void;
  emptyBag: () => void;
  toast: (msg: string) => void;
  likes: Record<string, boolean>;
  toggleLike: (id: string) => void;
  likeCount: (id: string, base: number) => number;
  filter: string;
  setFilter: (f: string) => void;
  now: number;
  mounted: boolean;
  startAt: Record<string, number>;
};

export const SiteCtx = createContext<SiteCtxValue | null>(null);

export function useSite(): SiteCtxValue {
  const ctx = useContext(SiteCtx);
  if (!ctx) throw new Error('useSite must be used inside Site');
  return ctx;
}
