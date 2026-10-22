'use client';

import { useSite } from './SiteContext';

export default function PromoBar() {
  const { locale } = useSite();
  const year = new Date().getFullYear();
  const items =
    locale === 'es'
      ? [
          `● Español + Surf — Verano ${year} — matrícula abierta`,
          '● Máx. 4 por grupo',
          '● Casa de Katta · Pichilemu',
          '● Online vía Google Meet',
        ]
      : [
          `● Spanish + Surf — Summer ${year} enroll open`,
          '● Max 4 per group',
          '● Casa de Katta · Pichilemu',
          '● Online via Google Meet',
        ];

  return (
    <div className="promo">
      <div className="promo-track">
        {[...items, ...items].map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
    </div>
  );
}
