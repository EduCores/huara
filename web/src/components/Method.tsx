'use client';

import { METHOD } from '@/lib/content';
import { MethodIcon } from './Icons';
import { useSite } from './SiteContext';

export default function Method() {
  const { locale, t } = useSite();

  return (
    <div className="container reveal" id="metodo">
      <div className="method-panel">
        <p className="eyebrow-lite">● {t.methodEyebrow}</p>
        <h2 style={{ fontSize: 'clamp(34px,4.5vw,58px)', margin: '10px 0' }}>
          {t.methodHeading}
        </h2>
        <p className="sub">{t.methodSub}</p>
        <div className="met4">
          {METHOD.map((m) => (
            <div className="m-item" key={m.num}>
              <div className="m-top">
                <span className="m-num">{m.num}</span>
                <span className="m-ico">
                  <MethodIcon name={m.icon} />
                </span>
              </div>
              <strong>{m.title[locale]}</strong>
              <p>{m.desc[locale]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
