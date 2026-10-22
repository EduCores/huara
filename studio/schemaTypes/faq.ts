import { defineType } from 'sanity';

export const faq = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    { name: 'q', type: 'bilingual', title: 'Pregunta', validation: (r) => r.required() },
    { name: 'a', type: 'bilingualText', title: 'Respuesta', validation: (r) => r.required() },
    { name: 'order', type: 'number', title: 'Orden de aparición', validation: (r) => r.required() },
  ],
  preview: {
    select: { title: 'q' },
    prepare: (v) => ({
      title: typeof v.title === 'object' && v.title ? (v.title as Record<string, string>).en || '' : '',
    }),
  },
});
