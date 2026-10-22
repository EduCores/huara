import { defineType } from 'sanity';

/** Documento único "story" — la historia de Katterina. */
export const story = defineType({
  name: 'story',
  title: 'Nuestra Historia',
  type: 'document',
  fields: [
    {
      name: 'eyebrow',
      type: 'bilingual',
      title: 'Encabezado pequeño',
      description: 'Ej: “● OUR STORY / ● NUESTRA HISTORIA”.',
      validation: (r) => r.required(),
    },
    {
      name: 'paragraphs',
      type: 'array',
      title: 'Párrafos',
      description: 'Se muestran en el orden de esta lista. Cada uno bilingüe.',
      of: [{ type: 'bilingualText' }],
      validation: (r) => r.min(1).required(),
    },
    {
      name: 'sign',
      type: 'bilingual',
      title: 'Frase final (cursiva)',
      validation: (r) => r.required(),
    },
    {
      name: 'name',
      type: 'string',
      title: 'Firma',
      description: 'Ej: — Katterina',
      validation: (r) => r.required(),
    },
  ],
  preview: {
    prepare: () => ({ title: 'Nuestra Historia (sección “Our Story”)' }),
  },
});
