'use client';

import { esc } from '@/lib/utils';

export default function Toast({ msg, show }: { msg: string; show: boolean }) {
  const html = esc(msg).replace(/✓/g, '<b class="t-check">✓</b>');
  return (
    <div className={'toast' + (show ? ' show' : '')} dangerouslySetInnerHTML={{ __html: html }} />
  );
}
