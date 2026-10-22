'use client';

import { useSite } from './SiteContext';

export default function Header() {
  const { locale, t, langHref, count, setMenuOpen, setSearchOpen, setCartOpen } = useSite();

  return (
    <header id="siteHeader" className="site-header">
      <div className="hbar">
        <div className="hleft">
          <button className="icon-btn" onClick={() => setMenuOpen(true)} aria-label="Menu">
            ☰
          </button>
          <button
            className="icon-btn"
            onClick={() => setSearchOpen(true)}
            aria-label={t.search}
          >
            ⌕
          </button>
        </div>
        <a className="logo" href="#">
          HUARA<span>°</span>
        </a>
        <div className="hright">
          <div className="lang-mini">
            <a href={langHref.en} className={locale === 'en' ? 'active' : undefined}>
              <span>EN</span>
            </a>
            <a href={langHref.es} className={locale === 'es' ? 'active' : undefined}>
              <span>ES</span>
            </a>
          </div>
          <span style={{ opacity: 0.7 }} className="hide-m">
            {t.account}
          </span>
          <button className="bag-btn" onClick={() => setCartOpen(true)}>
            <span>{t.order}</span> (<span>{count()}</span>)
          </button>
        </div>
      </div>
    </header>
  );
}
