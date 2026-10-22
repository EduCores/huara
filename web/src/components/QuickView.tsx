'use client';

import { ALL_PRODUCTS } from '@/lib/content';
import { useSite } from './SiteContext';

export default function QuickView() {
  const { locale, t, qvId, closeQV, addToCart } = useSite();
  const p = ALL_PRODUCTS.find((x) => x.id === qvId);

  return (
    <div className={'qv' + (qvId ? ' show' : '')}>
      {p && (
        <div className="qv-card">
          <img src={p.img} alt={p.title[locale]} />
          <div className="qv-info">
            <button className="icon-btn" onClick={closeQV}>
              ✕
            </button>
            <p
              style={{
                fontSize: 11,
                letterSpacing: '.14em',
                fontWeight: 700,
                color: 'var(--accent)',
              }}
            >
              ● {p.tag[locale]}
            </p>
            <h2 style={{ fontSize: 'clamp(26px,5vw,36px)', margin: '8px 0' }}>
              {p.title[locale]}
            </h2>
            <p style={{ fontSize: 14, color: 'var(--muted)' }}>{p.desc[locale]}</p>
            <p
              style={{
                fontFamily: "'Archivo'",
                fontWeight: 800,
                fontSize: 24,
                margin: '14px 0',
              }}
            >
              {p.price === 0 ? t.free : '$' + p.price}
            </p>
            <button
              className="btn-pill btn-dark"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => {
                addToCart(p.id);
                closeQV();
              }}
            >
              {t.addToOrder}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
