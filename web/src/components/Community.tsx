'use client';

import { CONTACT, FB_POSTS, IG_GRID, REVIEWS, type Review } from '@/lib/content';
import { WhatsAppIcon } from './Icons';
import { useSite } from './SiteContext';

function ReviewCard({ r }: { r: Review }) {
  const { locale, t, likes, toggleLike, likeCount } = useSite();
  const n = likeCount(r.id, r.likes);
  const share = () =>
    window.open(
      'https://wa.me/?text=' +
        encodeURIComponent(
          (locale === 'es'
            ? 'Mira esta reseña de Huara Spanish School: '
            : 'Check this Huara Spanish School review: ') +
            r.quote[locale] +
            ' — ' +
            r.name
        ),
      '_blank',
      'noopener'
    );

  return (
    <article className="rev post">
      <div className="post-head">
        <img className="avatar-img" src={r.avatar} alt={r.name} />
        <div>
          <strong>{r.name}</strong>
          <small>{r.country[locale]}</small>
        </div>
        <span className="verified">{t.verifiedStay}</span>
      </div>
      <div className="waves-emoji">🌊🌊🌊🌊🌊</div>
      <p className="pq">{r.quote[locale]}</p>
      <div className="post-tags">
        {r.tags[locale].map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="post-foot">
        <button className={'like' + (likes[r.id] ? ' on' : '')} onClick={() => toggleLike(r.id)}>
          ♥ <b>{n}</b>
        </button>
        <button className="shareb" onClick={share}>
          {t.share}
        </button>
        <span className="via">{r.source === 'Google' ? t.viaGoogle : t.viaInstagram}</span>
      </div>
    </article>
  );
}

export default function Community() {
  const { t, locale } = useSite();

  const shareSite = () =>
    window.open(
      'https://wa.me/?text=' +
        encodeURIComponent(
          (locale === 'es'
            ? 'Te recomiendo Huara Spanish School en Pichilemu, Chile: '
            : 'I recommend Huara Spanish School in Pichilemu, Chile: ') + location.href
        ),
      '_blank',
      'noopener'
    );

  return (
    <div className="container reveal" id="casa">
      <div className="social-head">
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.14em' }}>
            ● {t.communityEyebrow}
          </p>
          <h2>{t.communityHeading}</h2>
          <div className="score">
            <strong>4.9</strong>
            <span className="waves-emoji">🌊🌊🌊🌊🌊</span>
            <small>{t.reviewsCount}</small>
          </div>
          <div className="plats">
            <span>G 5.0 · Google</span>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              ◎ @huaraspanishschool
            </a>
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              f huaraspanishschool
            </a>
          </div>
        </div>
        <div className="social-cta">
          <a className="btn-pill btn-dark" href="#" onClick={() => false}>
            <span>{t.reviewGoogle}</span>
          </a>
          <button className="btn-pill" style={{ background: '#25d366', color: '#fff' }} onClick={shareSite}>
            <WhatsAppIcon className="wa-mini" />
            <span>{t.share}</span>
          </button>
        </div>
      </div>

      <div className="feed">
        <div className="feed-track">
          {[...REVIEWS, ...REVIEWS].map((r, i) => (
            <ReviewCard key={r.id + '-' + i} r={r} />
          ))}
        </div>
      </div>

      <div className="ig-head">
        <span className="ig-ava">
          <b>H</b>
        </span>
        <div>
          <strong>huaraspanishschool</strong>
          <small>{t.igSub}</small>
        </div>
        <a
          className="btn-pill btn-dark ig-follow"
          style={{ padding: '11px 22px' }}
          href={CONTACT.instagram}
          target="_blank"
          rel="noopener"
        >
          <span>{t.follow}</span>
        </a>
      </div>
      <div className="ig-grid">
        {IG_GRID.map((g) => (
          <a
            className="ig-item"
            key={g.img}
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener"
          >
            <img src={g.img} alt={g.alt} />
            <span>♥ {g.likes}</span>
          </a>
        ))}
      </div>

      <div className="ig-head">
        <span className="ig-ava" style={{ background: 'linear-gradient(45deg,#1c6e8c,#0e4457)' }}>
          <b>f</b>
        </span>
        <div>
          <strong>huaraspanishschool</strong>
          <small>{t.fbSub}</small>
        </div>
        <a
          className="btn-pill btn-dark ig-follow"
          style={{ padding: '11px 22px' }}
          href={CONTACT.facebook}
          target="_blank"
          rel="noopener"
        >
          <span>{t.follow}</span>
        </a>
      </div>
      <div className="fb-row">
        {FB_POSTS.map((src, i) => (
          <div className="fb-post" key={src}>
            <iframe
              src={src}
              width="340"
              height="560"
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title={'Huara en Facebook ' + (i + 1)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
