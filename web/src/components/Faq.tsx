'use client';

import { FAQ } from '@/lib/content';
import { useSite } from './SiteContext';

export default function Faq() {
  const { locale, t } = useSite();

  return (
    <div className="faq container reveal" id="faq">
      <h2 style={{ fontSize: 36, textAlign: 'center', marginBottom: 10 }}>{t.faqHeading}</h2>
      {FAQ.map((f, i) => (
        <details key={i} open={i === 0}>
          <summary>
            <span>{f.q[locale]}</span> <span></span>
          </summary>
          <p style={{ fontSize: 14, color: 'var(--muted)', marginTop: 8 }}>{f.a[locale]}</p>
        </details>
      ))}
    </div>
  );
}
