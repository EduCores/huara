'use client';

import { useSite } from './SiteContext';

export default function Story() {
  const { locale, c } = useSite();

  return (
    <div className="container reveal" id="historia">
      <div className="story">
        <p className="story-eyebrow">{c.story.eyebrow[locale]}</p>
        {c.story.paragraphs.map((p, i) => (
          <p key={i}>{p[locale]}</p>
        ))}
        <p className="story-sign">{c.story.sign[locale]}</p>
        <p className="story-name">{c.story.name}</p>
      </div>
    </div>
  );
}
