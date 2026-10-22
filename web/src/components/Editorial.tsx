'use client';

import { EDITORIAL } from '@/lib/content';
import { useSite } from './SiteContext';

export default function Editorial() {
  const { locale, t, addToCart, openQV } = useSite();

  return (
    <div className="container reveal" id="modalidades">
      <div className="edit">
        {EDITORIAL.map((c, i) => (
          <div className="edit-card" key={i}>
            <img src={c.img} alt={c.title[locale]} />
            {c.hotspots.map((h, j) => (
              <span
                className="hotspot"
                key={j}
                style={
                  h.pos === 'top-left'
                    ? { top: 22, left: 22 }
                    : { top: 22, right: 22 }
                }
              >
                {h[locale]}
              </span>
            ))}
            <div className="edit-copy">
              <p style={{ fontSize: 12, letterSpacing: '.14em' }}>{c.label[locale]}</p>
              <h3>{c.title[locale]}</h3>
              <p style={{ opacity: 0.85, fontSize: 14 }}>{c.meta[locale]}</p>
              <div>
                <button
                  className="btn-pill btn-white"
                  onClick={() =>
                    c.add
                      ? addToCart(c.add)
                      : document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  {c.addLabel[locale]}
                </button>
                <button
                  className="btn-pill"
                  style={{ border: '1px solid #fff', color: '#fff', background: 'transparent' }}
                  onClick={() => openQV(c.qv)}
                >
                  {t.quickView}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
