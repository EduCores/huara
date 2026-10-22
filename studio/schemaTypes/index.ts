import { bilingualTypes } from './bilingual';
import { program } from './program';
import { extra } from './extra';
import { review } from './review';
import { faq } from './faq';
import { story } from './story';
import { lookbook } from './lookbook';
import { siteSettings } from './siteSettings';

export const schemaTypes = [
  ...bilingualTypes,
  program,
  extra,
  review,
  faq,
  story,
  lookbook,
  siteSettings,
];
