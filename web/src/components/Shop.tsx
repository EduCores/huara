'use client';

import { PROGRAMS, type Program } from '@/lib/content';
import { fmtLeft } from '@/lib/utils';
import { useSite } from './SiteContext';

function StartPill({ p }: { p: Program }) {
  const { t, mounted, now, startAt } = useSite();
  const s = p.spots;
  const cls = s <= 1 ? 'full' : s <= 3 ? 'warn' : 'ok';
  const txt = s <= 1 ? t.lastSpot : s <= 3 ? s + t.spotsLeft : s + t.spots;
  const time = mounted && startAt[p.id] ? fmtLeft(startAt[p.id] - now) : '…';
  return (
    <div className={'nextart ' + cls}>
      <i></i>
      <b>{txt}</b>
      <span>{time}</span>
    </div>
  );
}

function ProductCard({ p }: { p: Program }) {
  const { locale, t, addToCart, openQV } = useSite();
  return (
    <div className="pcard">
      <div className="ph">
        <img src={p.img} alt={p.title[locale]} />
        {p.badge && <span className={'badge ' + (p.bc || '')}>{p.badge[locale]}</span>}
        <button className="quick" onClick={() => addToCart(p.id)} aria-label={t.add}>
          +
        </button>
        <StartPill p={p} />
      </div>
      <div className="pb">
        <small>{p.tag[locale]}</small>
        <h3>{p.title[locale]}</h3>
        <div className="price-row">
          <span className="price">{p.price === 0 ? t.free : '$' + p.price}</span>
        </div>
        <button
          className="qv-btn"
          onClick={() => openQV(p.id)}
          style={{
            marginTop: 10,
            width: '100%',
            border: '1px solid var(--line)',
            background: '#ff4d00',
            borderRadius: 5,
            padding: 10,
            font: "600 18px Inter",
            cursor: 'pointer',
            color: '#fffdf8',
          }}
        >
          {t.quickView}
        </button>
      </div>
    </div>
  );
}

export default function Shop() {
  const { t, filter, setFilter } = useSite();
  const list = PROGRAMS.filter((p) => filter === 'all' || p.cat === filter);
  const filters = [
    ['all', t.filterAll],
    ['presencial', t.filterPresencial],
    ['online', t.filterOnline],
    ['surf', t.filterSurf],
  ];

  return (
    <div className="container shop reveal" id="shop">
      <div className="shop-head">
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.14em' }}>● {t.shopEyebrow}</p>
          <h2>{t.shopHeading}</h2>
        </div>
        <div className="filters">
          {filters.map(([key, label]) => (
            <button
              key={key}
              className={filter === key ? 'active' : undefined}
              onClick={() => setFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid4" id="productGrid">
        {list.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
}
