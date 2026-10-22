import { defineType } from 'sanity';

export const extra = defineType({
  name: 'extra',
  title: 'Extra (add-on)',
  type: 'document',
  fields: [
    {
      name: 'id',
      type: 'string',
      title: 'ID (letra pequeña, no modificar)',
      description: 'Identificador interno (ej: salsa, empanada, tour, dinner, surf-extra).',
      validation: (r) => r.required(),
      readOnly: true,
    },
    {
      name: 'order',
      type: 'number',
      title: 'Orden de aparición',
      description: 'Número menor = aparece primero.',
    },
    { name: 'tag', type: 'bilingual', title: 'Etiqueta', validation: (r) => r.required() },
    { name: 'title', type: 'bilingual', title: 'Título', validation: (r) => r.required() },
    {
      name: 'desc',
      type: 'bilingualText',
      title: 'Descripción corta',
      validation: (r) => r.required(),
    },
    { name: 'price', type: 'number', title: 'Precio (USD)', validation: (r) => r.required().min(0) },
    {
      name: 'img',
      type: 'url',
      title: 'Foto (URL)',
      validation: (r) => r.required(),
    },
  ],
  preview: {
    select: { title: 'id', subtitle: 'price' },
    prepare: (v) => ({ title: v.title || '(sin ID)', subtitle: v.subtitle != null ? `USD ${v.subtitle}` : '' }),
  },
});
