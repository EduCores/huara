'use client';

import { ALL_PRODUCTS } from '@/lib/content';
import { useSite } from './SiteContext';

export default function CartDrawer() {
  const { locale, t, cart, cartOpen, setCartOpen, changeQty, addToCart, count, totals } = useSite();
  const ids = Object.keys(cart);
  const n = count();
  const total = totals();
  const pct = Math.min(100, (total / 150) * 100);

  return (
    <aside className={'cart-drawer' + (cartOpen ? ' open' : '')}>
      <div className="cd-head">
        <span>
          {t.cartYourOrder} ({n})
        </span>
        <button className="icon-btn" onClick={() => setCartOpen(false)}>
          ✕
        </button>
      </div>
      <div className="ship">
        <span>{total >= 150 ? t.shipFree : t.shipAdd.replace('${n}', String(150 - total))}</span>
        <div className="ship-bar">
          <i style={{ width: pct + '%' }}></i>
        </div>
      </div>
      <div className="cd-body">
        {ids.length ? (
          ids.map((id) => {
            const p = ALL_PRODUCTS.find((x) => x.id === id)!;
            return (
              <div className="citem" key={id}>
                <img src={p.img} alt={p.title[locale]} />
                <div>
                  <strong style={{ fontSize: 17 }}>{p.title[locale]}</strong>
                  <br />
                  <small style={{ color: 'var(--muted)' }}>${p.price}</small>
                  <br />
                  <span className="qty">
                    <button onClick={() => changeQty(id, -1)}>−</button>
                    <b style={{ padding: '0 8px' }}>{cart[id]}</b>
                    <button onClick={() => changeQty(id, 1)}>+</button>
                  </span>
                </div>
                <b>${p.price * cart[id]}</b>
              </div>
            );
          })
        ) : (
          <p style={{ color: 'var(--muted)', fontSize: 15 }}>{t.emptyCart}</p>
        )}
      </div>
      <div style={{ padding: '0 20px' }}>
        <p style={{ fontSize: 15, fontWeight: 700, letterSpacing: '.1em' }}>{t.frequentlyAdded}</p>
        <div style={{ display: 'flex', gap: 8, margin: '10px 0', flexWrap: 'wrap' }}>
          <button
            onClick={() => addToCart('dinner')}
            style={{
              flex: 1,
              minWidth: 130,
              border: '1px solid var(--line)',
              background: '#fff',
              borderRadius: 5,
              padding: 10,
              cursor: 'pointer',
              font: '700 15px Inter',
            }}
          >
            {t.addDinner}
          </button>
          <button
            onClick={() => addToCart('surf-extra')}
            style={{
              flex: 1,
              minWidth: 130,
              border: '1px solid var(--line)',
              background: '#fff',
              borderRadius: 5,
              padding: 10,
              cursor: 'pointer',
              font: '700 15px Inter',
            }}
          >
            {t.addSurf}
          </button>
        </div>
      </div>
      <div className="cd-foot">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: "'Archivo'",
            fontWeight: 800,
            fontSize: 24,
          }}
        >
          <span>{t.subtotal}</span>
          <span>${total}</span>
        </div>
        <button
          className="btn-pill btn-dark"
          style={{ width: '100%', justifyContent: 'center', marginTop: 12 }}
          onClick={() => {
            setCartOpen(false);
            document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {t.checkout}
        </button>
      </div>
    </aside>
  );
}
