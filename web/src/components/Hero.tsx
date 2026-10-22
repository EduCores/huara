'use client';

import { IMG } from '@/lib/content';
import { useSite } from './SiteContext';

export default function Hero() {
  const { t } = useSite();

  return (
    <div className="hero">
      <div className="hero-bg">
        <img src={IMG.hero} alt="Surf" />
      </div>
      <div className="hero-content">
        <div className="eyebrow">
          <i></i>
          <span>{t.heroEyebrow}</span>
        </div>
        <h1>
          <span>{t.heroTitle1}</span> <u>{t.heroTitle2}</u>
        </h1>
        <p className="sub">
          {t.heroSub.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < t.heroSub.split('\n').length - 1 && <br />}
            </span>
          ))}
        </p>
        <div className="hero-ctas">
          <button
            className="btn-pill btn-white"
            onClick={() =>
              document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <span>{t.heroCtaPrograms}</span>
          </button>
          <a className="link-arrow" href="#historia" style={{ color: '#fff' }}>
            <span>{t.heroCtaStory}</span> →
          </a>
        </div>
      </div>
    </div>
  );
}
