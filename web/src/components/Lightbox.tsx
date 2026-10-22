'use client';

import { useSite } from './SiteContext';

export default function Lightbox() {
  const { lbOpen, lbSrcs, lbIndex, lbNav, closeLB } = useSite();

  return (
    <div
      className={'lbox' + (lbOpen ? ' show' : '')}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeLB();
      }}
    >
      <button className="lbox-x" onClick={closeLB}>
        ✕
      </button>
      <button className="lbox-nav prev" onClick={() => lbNav(-1)}>
        ‹
      </button>
      <img src={lbSrcs[lbIndex] || ''} alt="Vista ampliada" />
      <button className="lbox-nav next" onClick={() => lbNav(1)}>
        ›
      </button>
      <div className="lbox-count">
        {lbIndex + 1} / {lbSrcs.length}
      </div>
    </div>
  );
}
