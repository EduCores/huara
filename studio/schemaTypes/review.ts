import { defineType } from 'sanity';

export const review = defineType({
  name: 'review',
  title: 'Reseña',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre del estudiante',
      validation: (r) => r.required(),
    },
    {
      name: 'avatar',
      type: 'url',
      title: 'Foto de perfil (URL)',
      validation: (r) => r.required(),
    },
    {
      name: 'country',
      type: 'bilingual',
      title: 'País · hace cuánto',
      description: 'Ej: “Germany · 2 weeks ago / Alemania · hace 2 sem”.',
      validation: (r) => r.required(),
    },
    {
      name: 'quote',
      type: 'bilingualText',
      title: 'Reseña (con comillas)',
      description: 'Incluye las comillas al inicio y final: “...”',
      validation: (r) => r.required(),
    },
    {
      name: 'tagsEn',
      type: 'array',
      title: 'Tags en inglés',
      description: 'Ej: B1→B2 · 8 weeks · Surf',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
    {
      name: 'tagsEs',
      type: 'array',
      title: 'Tags en español',
      description: 'Ej: B1→B2 · 8 semanas · Surf',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
    { name: 'likes', type: 'number', title: 'Likes iniciales', initialValue: 0 },
    {
      name: 'source',
      type: 'string',
      title: 'Publicada en',
      options: {
        list: [
          { title: 'Google', value: 'Google' },
          { title: 'Instagram', value: 'Instagram' },
        ],
      },
      validation: (r) => r.required(),
    },
    { name: 'order', type: 'number', title: 'Orden de aparición' },
  ],
  preview: {
    select: { title: 'name', subtitle: 'source' },
    prepare: (v) => ({ title: v.name || '(sin nombre)', subtitle: v.subtitle || '' }),
  },
});
