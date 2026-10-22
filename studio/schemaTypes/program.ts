import { defineType } from 'sanity';

export const program = defineType({
  name: 'program',
  title: 'Programa',
  type: 'document',
  fields: [
    {
      name: 'id',
      type: 'string',
      title: 'ID (letra pequeña, no modificar)',
      description: 'Identificador interno usado por la web (ej: pres-intensivo).',
      validation: (r) => r.required(),
      readOnly: true,
    },
    {
      name: 'order',
      type: 'number',
      title: 'Orden de aparición',
      description: 'Número menor = aparece primero (1, 2, 3...).',
    },
    {
      name: 'cat',
      type: 'string',
      title: 'Categoría',
      options: {
        list: [
          { title: 'Presencial', value: 'presencial' },
          { title: 'Online', value: 'online' },
          { title: 'Surf', value: 'surf' },
        ],
      },
      validation: (r) => r.required(),
    },
    {
      name: 'tag',
      type: 'bilingual',
      title: 'Nivel · etiqueta',
      description: 'Ej: “A1–C1 · In-person / Presencial”.',
      validation: (r) => r.required(),
    },
    {
      name: 'title',
      type: 'bilingual',
      title: 'Título',
      validation: (r) => r.required(),
    },
    {
      name: 'desc',
      type: 'bilingualText',
      title: 'Descripción corta',
      validation: (r) => r.required(),
    },
    {
      name: 'badge',
      type: 'bilingual',
      title: 'Badge (cinta del card)',
      description: 'Ej: “Bestseller / Más vendido”. Déjala vacía si no se quiere badge.',
      validation: (r) => r.required().error('Si el programa tiene badge, completa EN y ES (borra las dos para no mostrar badge)'),
    },
    {
      name: 'bc',
      type: 'string',
      title: 'Color del badge',
      options: {
        list: [
          { title: 'Naranja', value: 'orange' },
          { title: 'Arena', value: 'sand' },
        ],
      },
      initialValue: 'orange',
    },
    { name: 'price', type: 'number', title: 'Precio (USD)', validation: (r) => r.required().min(0) },
    {
      name: 'img',
      type: 'url',
      title: 'Foto del card (URL)',
      description: 'Dirección de la imagen (Unsplash o sitio propio).',
      validation: (r) => r.required(),
    },
    {
      name: 'startDays',
      type: 'number',
      title: 'Días hasta el próximo inicio',
      description: 'El contador “Starts in X days” usa este número desde el día que se publica la web.',
      validation: (r) => r.required().min(0),
    },
    {
      name: 'spots',
      type: 'number',
      title: 'Cupos disponibles',
      description: '2 = “2 spots / 2 left!”, 1 = “Last spot!”, 0 = cupo lleno.',
      validation: (r) => r.required().min(0),
    },
  ],
  preview: {
    select: { title: 'id', subtitle: 'price' },
    prepare: (v) => ({
      title: v.title || '(sin ID)',
      subtitle: v.subtitle != null ? `USD ${v.subtitle}` : '',
    }),
  },
});
