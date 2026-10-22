'use client';

import { CONTACT } from '@/lib/content';
import { WhatsAppIcon } from './Icons';
import { useSite } from './SiteContext';

export default function Floats() {
  const { locale, t } = useSite();
  const text =
    locale === 'es'
      ? '¡Hola Huara! Quiero info sobre los programas de español en Pichilemu.'
      : 'Hi Huara! I want info about Spanish programs in Pichilemu.';

  return (
    <>
      <button
        className="top-btn"
        id="topBtn"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={t.backToTop}
      >
        ↑
      </button>
      <a
        className="wa-float"
        href={'https://wa.me/' + CONTACT.wa + '?text=' + encodeURIComponent(text)}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </>
  );
}
