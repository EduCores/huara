import { defineType } from 'sanity';

/** Documento único "siteSettings" — método, cards editoriales, contacto, redes. */
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Ajustes del sitio',
  type: 'document',
  fields: [
    {
      name: 'method',
      type: 'array',
      title: 'Sección “El método Huara” (4 pasos)',
      of: [
        {
          type: 'object',
          title: 'Paso',
          fields: [
            {
              name: 'icon',
              type: 'string',
              title: 'Ícono',
              options: {
                list: [
                  { title: 'Charla (chat)', value: 'chat' },
                  { title: 'Olla (recetas)', value: 'pot' },
                  { title: 'Bolsa (feria)', value: 'bag' },
                  { title: 'Brújula (vida real)', value: 'compass' },
                ],
              },
              validation: (r) => r.required(),
            },
            { name: 'title', type: 'bilingual', title: 'Título', validation: (r) => r.required() },
            { name: 'desc', type: 'bilingualText', title: 'Descripción', validation: (r) => r.required() },
          ],
          preview: {
            select: { icon: 'icon', title: 'title' },
            prepare: (v) => ({
              title:
                typeof v.title === 'object' && v.title
                  ? (v.title as Record<string, string>).en || 'Paso'
                  : 'Paso',
              subtitle: v.subtitle || v.icon || '',
            }),
          },
        },
      ],
    },
    {
      name: 'editorial',
      type: 'array',
      title: 'Cards editoriales (Presencial / Online)',
      of: [
        {
          type: 'object',
          title: 'Card',
          fields: [
            { name: 'label', type: 'bilingual', title: 'Etiqueta pequeña', validation: (r) => r.required() },
            { name: 'title', type: 'bilingual', title: 'Título', validation: (r) => r.required() },
            { name: 'meta', type: 'bilingualText', title: 'Meta (horarios etc.)', validation: (r) => r.required() },
            { name: 'img', type: 'url', title: 'Foto (URL)', validation: (r) => r.required() },
            {
              name: 'hotspots',
              type: 'array',
              title: 'Puntos flotantes sobre la foto',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'text', type: 'bilingual', title: 'Texto', validation: (r) => r.required() },
                    {
                      name: 'pos',
                      type: 'string',
                      title: 'Posición',
                      options: {
                        list: [
                          { title: 'Arriba izquierda', value: 'top-left' },
                          { title: 'Arriba derecha', value: 'top-right' },
                        ],
                      },
                      validation: (r) => r.required(),
                    },
                  ],
                },
              ],
            },
            {
              name: 'add',
              type: 'string',
              title: 'ID de programa que agrega al carro',
              description: 'Ej: pres-intensivo. Déjalo VACÍO si el botón solo lleva a la tienda.',
            },
            { name: 'addLabel', type: 'bilingual', title: 'Texto del botón', validation: (r) => r.required() },
            {
              name: 'qv',
              type: 'string',
              title: 'ID de programa para la vista rápida (quick view)',
            },
          ],
        },
      ],
    },
    {
      name: 'contact',
      type: 'object',
      title: 'Datos de contacto',
      fields: [
        { name: 'address', type: 'string', title: 'Dirección' },
        { name: 'email', type: 'string', title: 'Email' },
        { name: 'phone', type: 'string', title: 'Teléfono' },
        { name: 'whatsapp', type: 'string', title: 'WhatsApp (solo números, con 56...)' },
        { name: 'instagram', type: 'url', title: 'Instagram' },
        { name: 'facebook', type: 'url', title: 'Facebook' },
      ],
    },
    {
      name: 'ig',
      type: 'array',
      title: 'Grid de Instagram (6 fotos)',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'img', type: 'url', title: 'Foto (URL)', validation: (r) => r.required() },
            { name: 'likes', type: 'number', title: 'Likes' },
            { name: 'alt', type: 'string', title: 'Etiqueta (alt)' },
          ],
        },
      ],
    },
    {
      name: 'fb',
      type: 'array',
      title: 'Publicaciones de Facebook (URLs del plugin)',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    prepare: () => ({ title: 'Ajustes del sitio (método, editorial, contacto, redes)' }),
  },
});
