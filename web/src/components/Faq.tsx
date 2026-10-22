'use client';

import { useSite } from './SiteContext';

export default function Faq() {
  const { locale, t, c } = useSite();

  return (
    <div className="faq container reveal" id="faq">
      <h2 style={{ fontSize: 36, textAlign: 'center', marginBottom: 10 }}>{t.faqHeading}</h2>
      {c.faq.map((f, i) => (
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
