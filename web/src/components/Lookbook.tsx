'use client';

import { LOOKBOOK } from '@/lib/content';
import { useSite } from './SiteContext';

export default function Lookbook() {
  const { t, openLB } = useSite();

  return (
    <div className="container reveal" id="lookbook" style={{ marginBottom: 40 }}>
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.14em' }}>{t.lookbookEyebrow}</p>
      <h2 style={{ fontSize: 'clamp(30px,4vw,44px)', margin: '8px 0 16px' }}>Casa de Katta</h2>
      <div className="strip">
        <div className="strip-track" id="stripTrack">
          {[...LOOKBOOK.h, ...LOOKBOOK.h].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={'Casa de Katta ' + ((i % LOOKBOOK.h.length) + 1)}
              loading="lazy"
              onClick={() => openLB(src)}
            />
          ))}
        </div>
        <div className="strip-track reverse" id="stripTrack2">
          {[...LOOKBOOK.v, ...LOOKBOOK.v].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={'Casa de Katta ' + ((i % LOOKBOOK.v.length) + 1)}
              loading="lazy"
              onClick={() => openLB(src)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
