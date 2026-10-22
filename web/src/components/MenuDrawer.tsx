'use client';

import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './Icons';
import { useSite } from './SiteContext';

export default function MenuDrawer() {
  const { locale, t, c, langHref, menuOpen, setMenuOpen, setCartOpen, count } = useSite();

  const close = () => setMenuOpen(false);

  return (
    <nav className={'mmenu' + (menuOpen ? ' open' : '')}>
      <button className="icon-btn" style={{ color: 'var(--ink)' }} onClick={close}>
        ✕
      </button>
      <div style={{ marginTop: 16 }}>
        <a className="big" href="#shop" onClick={close}>
          {t.navShop}
        </a>
        <a className="big" href="#modalidades" onClick={close}>
          {t.navModes}
        </a>
        <a className="big" href="#surf" onClick={close}>
          {t.navSurf}
        </a>
        <a className="big" href="#addons" onClick={close}>
          {t.navExperiences}
        </a>
        <a className="big" href="#faq" onClick={close}>
          {t.navFaq}
        </a>
      </div>
      <div className="m-lang">
        <a href={langHref.en} className={locale === 'en' ? 'active' : undefined}>
          EN
        </a>
        <a href={langHref.es} className={locale === 'es' ? 'active' : undefined}>
          ES
        </a>
      </div>
      <p style={{ marginTop: 20, fontSize: 13, color: 'var(--muted)' }}>
        {c.contact.address}
        <br />
        <a href={'mailto:' + c.contact.email} style={{ color: 'inherit' }}>
          {c.contact.email}
        </a>
      </p>
      <div className="social-row" style={{ marginTop: 12 }}>
        <a
          className="soc-d"
          href={c.contact.instagram}
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <InstagramIcon />
        </a>
        <a
          className="soc-d"
          href={c.contact.facebook}
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
        >
          <FacebookIcon />
        </a>
        <a
          className="soc-d"
          href={'https://wa.me/' + c.contact.wa}
          target="_blank"
          rel="noopener"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon />
        </a>
      </div>
      <button
        className="btn-pill btn-dark"
        style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}
        onClick={() => {
          close();
          setCartOpen(true);
        }}
      >
        {t.order} ( {count()} ) →
      </button>
    </nav>
  );
}
