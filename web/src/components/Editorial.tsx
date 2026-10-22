'use client';

import { useSite } from './SiteContext';

export default function Editorial() {
  const { locale, t, addToCart, openQV, c: content } = useSite();

  return (
    <div className="container reveal" id="modalidades">
      <div className="edit">
        {content.editorial.map((e, i) => (
          <div className="edit-card" key={i}>
            <img src={e.img} alt={e.title[locale]} />
            {e.hotspots.map((h, j) => (
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
              <p style={{ fontSize: 12, letterSpacing: '.14em' }}>{e.label[locale]}</p>
              <h3>{e.title[locale]}</h3>
              <p style={{ opacity: 0.85, fontSize: 14 }}>{e.meta[locale]}</p>
              <div>
                <button
                  className="btn-pill btn-white"
                  onClick={() =>
                    e.add
                      ? addToCart(e.add)
                      : document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  {e.addLabel[locale]}
                </button>
                <button
                  className="btn-pill"
                  style={{ border: '1px solid #fff', color: '#fff', background: 'transparent' }}
                  onClick={() => openQV(e.qv || null)}
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
