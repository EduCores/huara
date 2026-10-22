'use client';

import { useSite } from './SiteContext';

export default function OrderModal() {
  const { t, order, closeOrder, emptyBag } = useSite();

  return (
    <div className={'omodal' + (order.open ? ' show' : '')}>
      <div className="omodal-card">
        <div className="ocheck">✓</div>
        <h2 style={{ textAlign: 'center', fontSize: 30, marginBottom: 6 }}>{t.orderReady}</h2>
        <div>
          <div className="ostep">
            <span className="onum">1</span>
            <span>{t.orderStep1}</span>
          </div>
          <div className="ostep">
            <span className="onum">2</span>
            <span>{t.orderStep2}</span>
          </div>
          <div className="ostep">
            <span className="onum">3</span>
            <span>{t.orderStep3}</span>
          </div>
        </div>
        <div className="omrecap">
          {order.lines.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
          <div style={{ marginTop: 8, fontWeight: 800 }}>
            Total: ${order.total} USD — {order.name}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 16 }}>
          <button
            className="btn-pill"
            style={{
              background: '#25d366',
              color: '#fff',
              flex: 1,
              justifyContent: 'center',
              minWidth: 170,
            }}
            onClick={() => window.open(order.url, '_blank', 'noopener')}
          >
            WhatsApp →
          </button>
          <button
            className="btn-pill btn-dark"
            onClick={closeOrder}
            style={{ flex: 1, justifyContent: 'center', minWidth: 120 }}
          >
            OK
          </button>
        </div>
        <div style={{ textAlign: 'center', marginTop: 10 }}>
          <button
            onClick={emptyBag}
            style={{
              background: 'none',
              border: 0,
              color: 'var(--muted)',
              font: '600 12px Inter',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            {t.emptyOrder}
          </button>
        </div>
      </div>
    </div>
  );
}
