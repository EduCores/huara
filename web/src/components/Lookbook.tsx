'use client';

import { useSite } from './SiteContext';

export default function Lookbook() {
  const { t, c, openLB } = useSite();

  return (
    <div className="container reveal" id="lookbook" style={{ marginBottom: 40 }}>
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.14em' }}>{t.lookbookEyebrow}</p>
      <h2 style={{ fontSize: 'clamp(30px,4vw,44px)', margin: '8px 0 16px' }}>Casa de Katta</h2>
      <div className="strip">
        <div className="strip-track" id="stripTrack">
          {[...c.lookbookH, ...c.lookbookH].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={'Casa de Katta ' + ((i % c.lookbookH.length) + 1)}
              loading="lazy"
              onClick={() => openLB(src)}
            />
          ))}
        </div>
        <div className="strip-track reverse" id="stripTrack2">
          {[...c.lookbookV, ...c.lookbookV].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={'Casa de Katta ' + ((i % c.lookbookV.length) + 1)}
              loading="lazy"
              onClick={() => openLB(src)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
