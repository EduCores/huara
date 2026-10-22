'use client';

import { useState } from 'react';
import { CONTACT } from '@/lib/content';
import { emailOk } from '@/lib/utils';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './Icons';
import { useSite } from './SiteContext';

export default function Footer() {
  const { t, toast } = useSite();
  const [nl, setNl] = useState('');
  const year = new Date().getFullYear();

  const subscribe = () => {
    if (!emailOk(nl.trim())) {
      toast(t.newsletterBad);
      return;
    }
    setNl('');
    toast(t.newsletterOk);
  };

  return (
    <footer className="site-footer">
      <video className="foot-video" autoPlay muted loop playsInline preload="auto">
        <source src="/1.mp4" type="video/mp4" />
      </video>
      <div className="container foot-grid">
        <div>
          <h4 style={{ fontFamily: "'Archivo'", fontSize: 28 }}>
            HUARA<span style={{ color: 'var(--accent)' }}>°</span>
          </h4>
          <p style={{ fontSize: 13, opacity: 0.7 }}>{t.footerTagline}</p>
          <div style={{ marginTop: 12 }}>
            <div className="contact-line">
              <i className="fa-solid fa-location-dot"></i>
              <span>{CONTACT.address}</span>
            </div>
            <div className="contact-line">
              <i className="fa-solid fa-clock"></i>
              <span>{t.footerHours}</span>
            </div>
            <div className="contact-line">
              <i className="fa-solid fa-envelope"></i>
              <a href={'mailto:' + CONTACT.email}>{CONTACT.email}</a>
            </div>
            <div className="contact-line">
              <i className="fa-solid fa-phone"></i>
              <a href={'https://wa.me/' + CONTACT.wa} target="_blank" rel="noopener">
                {CONTACT.phone}
              </a>
            </div>
          </div>
          <div className="social-row">
            <a
              className="soc"
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <InstagramIcon stroke="#fff" />
            </a>
            <a
              className="soc"
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
            >
              <FacebookIcon fill="#fff" />
            </a>
            <a
              className="soc"
              href={'https://wa.me/' + CONTACT.wa}
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon fill="#fff" className="soc-wa" />
            </a>
          </div>
        </div>
        <div>
          <h4>{t.footerSchool}</h4>
          <a href="#shop" style={{ display: 'block', fontSize: 13, opacity: 0.7, padding: '3px 0' }}>
            {t.footerAllPrograms}
          </a>
          <a href="#surf" style={{ display: 'block', fontSize: 13, opacity: 0.7, padding: '3px 0' }}>
            {t.footerSurf}
          </a>
          <a href="#metodo" style={{ display: 'block', fontSize: 13, opacity: 0.7, padding: '3px 0' }}>
            {t.footerMethod}
          </a>
          <a href="#casa" style={{ display: 'block', fontSize: 13, opacity: 0.7, padding: '3px 0' }}>
            {t.footerCommunity}
          </a>
        </div>
        <div>
          <h4>{t.footerHelp}</h4>
          <a href="#faq" style={{ display: 'block', fontSize: 13, opacity: 0.7, padding: '3px 0' }}>
            {t.footerFaq}
          </a>
          <a
            href="#booking"
            style={{ display: 'block', fontSize: 13, opacity: 0.7, padding: '3px 0' }}
          >
            {t.footerBook}
          </a>
          <a
            href={'https://wa.me/' + CONTACT.wa}
            target="_blank"
            rel="noopener"
            style={{ display: 'block', fontSize: 13, opacity: 0.7, padding: '3px 0' }}
          >
            {t.footerContact}
          </a>
        </div>
        <div>
          <h4>{t.newsletterHeading}</h4>
          <p style={{ fontSize: 12, opacity: 0.65 }}>{t.newsletterSub}</p>
          <div className="news">
            <input
              value={nl}
              onChange={(e) => setNl(e.target.value)}
              placeholder="email"
              type="email"
            />
            <button onClick={subscribe}>→</button>
          </div>
        </div>
      </div>
      <div className="container pay-strip">
        <span>🔒 {t.securePayment}</span>
        <span>Flow</span>
        <span>MercadoPago</span>
      </div>
      <div className="giant" aria-label="HUARA°">
        <span>H</span>
        <span>U</span>
        <span>A</span>
        <span>R</span>
        <span>A</span>
        <span className="deg">°</span>
      </div>
      <p style={{ textAlign: 'center', fontSize: 11, opacity: 0.5, padding: '0 16px' }}>
        © {year} Huara Spanish School
      </p>
    </footer>
  );
}
