import { defineType } from 'sanity';

/** Objeto bilingüe: siempre EN + ES — nunca se edita un solo idioma. */
export const bilingual = defineType({
  name: 'bilingual',
  type: 'object',
  title: 'Texto bilingüe',
  description: 'Completa SIEMPRE los dos idiomas (English y Español).',
  fields: [
    {
      name: 'en',
      type: 'string',
      title: 'English',
      validation: (r) => r.required().error('Falta el texto en inglés'),
    },
    {
      name: 'es',
      type: 'string',
      title: 'Español',
      validation: (r) => r.required().error('Falta el texto en español'),
    },
  ],
});

/** Igual que bilingual, pero con caja grande para párrafos. */
export const bilingualText = defineType({
  name: 'bilingualText',
  type: 'object',
  title: 'Texto bilingüe (párrafo)',
  fields: [
    {
      name: 'en',
      type: 'text',
      title: 'English',
      rows: 4,
      validation: (r) => r.required().error('Falta el texto en inglés'),
    },
    {
      name: 'es',
      type: 'text',
      title: 'Español',
      rows: 4,
      validation: (r) => r.required().error('Falta el texto en español'),
    },
  ],
});

export const bilingualTypes = [bilingual, bilingualText];
