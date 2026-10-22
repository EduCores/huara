'use client';

import { IMG } from '@/lib/content';
import { pad2 } from '@/lib/utils';
import { useSite } from './SiteContext';

export default function Surf({ surfTarget }: { surfTarget: number }) {
  const { t, mounted, now, addToCart } = useSite();
  const left = mounted && surfTarget ? Math.max(0, surfTarget - now) : 0;
  const total = Math.floor(left / 1000);
  const dd = Math.floor(total / 86400);
  const hh = Math.floor((total % 86400) / 3600);
  const mm = Math.floor((total % 3600) / 60);
  const ss = total % 60;

  return (
    <div className="container reveal" id="surf">
      <div className="surf-full">
        <img src={IMG.surf} alt="Punta de Lobos" />
        <div className="surf-inner">
          <p style={{ fontSize: 12, letterSpacing: '.16em' }}>{t.surfEyebrow}</p>
          <h2>{t.surfTitle}</h2>
          <p style={{ opacity: 0.9, marginTop: 10 }}>{t.surfSub}</p>
          <div className="count">
            <div>
              <strong>{pad2(dd)}</strong>
              <span>{t.days}</span>
            </div>
            <div>
              <strong>{pad2(hh)}</strong>
              <span>{t.hrs}</span>
            </div>
            <div>
              <strong>{pad2(mm)}</strong>
              <span>{t.min}</span>
            </div>
            <div>
              <strong>{pad2(ss)}</strong>
              <span>{t.sec}</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-pill btn-white" onClick={() => addToCart('surf-pack')}>
              {t.addSurfPack}
            </button>
            <button
              className="btn-pill"
              style={{ background: 'transparent', border: '1px solid #fff', color: '#fff' }}
              onClick={() => addToCart('surf-extra')}
            >
              {t.extraLesson}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
