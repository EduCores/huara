'use client';

import { useEffect, useRef, useState } from 'react';
import { ALL_PRODUCTS } from '@/lib/content';
import { useSite } from './SiteContext';

export default function SearchPanel() {
  const { locale, t, searchOpen, setSearchOpen, addToCart } = useSite();
  const [q, setQ] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) {
      const id = setTimeout(() => inputRef.current?.focus(), 120);
      return () => clearTimeout(id);
    }
  }, [searchOpen]);

  const query = q.trim().toLowerCase();
  const results = ALL_PRODUCTS.filter((p) => {
    if (!query) return true;
    const hay = (
      p.title.en +
      ' ' +
      p.title.es +
      ' ' +
      p.tag.en +
      ' ' +
      p.tag.es +
      ' ' +
      p.desc.en +
      ' ' +
      p.desc.es
    ).toLowerCase();
    return hay.includes(query);
  }).slice(0, 8);

  return (
    <div className={'search-panel' + (searchOpen ? ' open' : '')}>
      <div className="search-box">
        <div className="search-bar">
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t.searchPlaceholder}
          />
          <button
            className="btn-pill btn-dark"
            style={{ padding: '14px 22px' }}
            onClick={() => setSearchOpen(false)}
          >
            ✕
          </button>
        </div>
        <div className="sres">
          {results.length ? (
            results.map((p) => (
              <div className="srow" key={p.id}>
                <img src={p.img} alt={p.title[locale]} />
                <div>
                  <strong>{p.title[locale]}</strong>
                  <small>
                    ${p.price} · {p.tag[locale]}
                  </small>
                </div>
                <button onClick={() => addToCart(p.id)}>{t.add}</button>
              </div>
            ))
          ) : (
            <p style={{ color: 'var(--muted)', fontSize: 14, padding: '8px 2px' }}>
              {t.noMatches}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
