import { defineType } from 'sanity';

/** Documento único "lookbook" — carruseles de fotos del sitio. */
export const lookbook = defineType({
  name: 'lookbook',
  title: 'Lookbook (carruseles)',
  type: 'document',
  fields: [
    {
      name: 'h',
      type: 'array',
      title: 'Carrusel horizontal',
      description: 'Fotos apaisadas. Súbelas en orden; se repiten una y otra vez.',
      of: [{ type: 'image' }],
    },
    {
      name: 'v',
      type: 'array',
      title: 'Carrusel vertical',
      description: 'Fotos verticales.',
      of: [{ type: 'image' }],
    },
  ],
  preview: {
    prepare: () => ({ title: 'Carruseles de fotos (Lookbook)' }),
  },
});
