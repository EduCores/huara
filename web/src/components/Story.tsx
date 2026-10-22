'use client';

import { STORY } from '@/lib/content';
import { useSite } from './SiteContext';

export default function Story() {
  const { locale } = useSite();

  return (
    <div className="container reveal" id="historia">
      <div className="story">
        <p className="story-eyebrow">{STORY.eyebrow[locale]}</p>
        {STORY.paragraphs.map((p, i) => (
          <p key={i}>{p[locale]}</p>
        ))}
        <p className="story-sign">{STORY.sign[locale]}</p>
        <p className="story-name">{STORY.name}</p>
      </div>
    </div>
  );
}
