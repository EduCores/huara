'use client';

const WORDS = ['SURF °', 'ESPAÑOL °', 'PUNTA DE LOBOS °', 'EMPANADAS °', 'SALSA °', 'PICHILEMU °'];

export default function BigMarquee() {
  const items = [...WORDS, ...WORDS];
  return (
    <div className="big-marquee">
      <div>
        {items.map((w, i) => (
          <span key={i} className={i % 2 ? 'o' : undefined}>
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}
