export type Locale = 'en' | 'es';
export type L = { en: string; es: string };

export type Category = 'presencial' | 'online' | 'surf';

export type Program = {
  id: string;
  cat: Category;
  badge?: L;
  bc?: 'orange' | 'sand';
  tag: L;
  title: L;
  desc: L;
  price: number;
  img: string;
  startDays: number;
  spots: number;
};

export type Extra = {
  id: string;
  tag: L;
  title: L;
  desc: L;
  price: number;
  img: string;
};

export type Review = {
  id: string;
  name: string;
  avatar: string;
  country: L;
  quote: L;
  tags: { en: string[]; es: string[] };
  likes: number;
  source: 'Google' | 'Instagram';
};

export const IMG = {
  hero: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1600&q=80&auto=format&fit=crop',
  editorial1: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80&auto=format&fit=crop',
  editorial2: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=900&q=80&auto=format&fit=crop',
  surf: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80&auto=format&fit=crop',
};

export const CONTACT = {
  address: 'Casa de Katta · Pichilemu, Chile',
  email: 'hola@huara.cl',
  phone: '+56 9 3373 4134',
  wa: '56933734134',
  instagram: 'https://www.instagram.com/huaraspanishschool/',
  facebook: 'https://www.facebook.com/huaraspanishschool/?locale=es_LA',
};

export const PROGRAMS: Program[] = [
  {
    id: 'pres-intensivo',
    cat: 'presencial',
    badge: { en: 'Bestseller', es: 'Más vendido' },
    bc: 'orange',
    tag: { en: 'A1–C1 · In-person', es: 'A1–C1 · Presencial' },
    title: { en: 'Intensive Immersion 15h/week', es: 'Inmersión Intensiva 15h/sem' },
    desc: {
      en: 'Max 4 · Mon–Fri 10:00–13:00 · Group & 1-on-1. Speak from day 1.',
      es: 'Máx 4 · Lun–Vie 10:00–13:00 · Grupal y personalizada. Habla desde el día 1.',
    },
    price: 280,
    img: IMG.editorial1,
    startDays: 4,
    spots: 4,
  },
  {
    id: 'surf-pack',
    cat: 'surf',
    badge: { en: 'Surf · Hero', es: 'Surf · Estrella' },
    bc: 'orange',
    tag: { en: 'A1–B2 · Surf', es: 'A1–B2 · Surf' },
    title: { en: 'Spanish + Surf Pack', es: 'Pack Español + Surf' },
    desc: {
      en: '15h Spanish + 3 surf @ Lobos + gear. The Analog look.',
      es: '15h español + 3 surf en Lobos + equipo. El look Analog.',
    },
    price: 350,
    img: IMG.hero,
    startDays: 4,
    spots: 2,
  },
  {
    id: 'int-conv',
    cat: 'presencial',
    badge: { en: 'B1–B2', es: 'B1–B2' },
    bc: 'sand',
    tag: { en: 'B1–B2 · In-person', es: 'B1–B2 · Presencial' },
    title: { en: 'Conversation & Culture', es: 'Conversación y Cultura' },
    desc: {
      en: 'Slang, debates, storytelling over empanadas.',
      es: 'Chilenismos, debates, historias con empanadas.',
    },
    price: 280,
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80&auto=format&fit=crop',
    startDays: 6,
    spots: 3,
  },
  {
    id: 'adv-master',
    cat: 'presencial',
    badge: { en: 'C1–C2', es: 'C1–C2' },
    bc: 'sand',
    tag: { en: 'C1–C2 · In-person', es: 'C1–C2 · Presencial' },
    title: { en: 'Advanced Mastery', es: 'Maestría Avanzada' },
    desc: { en: 'Idioms, humor, volunteering, media.', es: 'Modismos, humor, voluntariado, medios.' },
    price: 300,
    img: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=700&q=80&auto=format&fit=crop',
    startDays: 9,
    spots: 5,
  },
  {
    id: 'online-bas12',
    cat: 'online',
    badge: { en: '12 classes', es: '12 clases' },
    bc: 'orange',
    tag: { en: 'A1–A2 · Meet', es: 'A1–A2 · Meet' },
    title: { en: 'Online Basic — 12 classes', es: 'Online Básico — 12 clases' },
    desc: {
      en: 'Google Meet · group & 1-on-1 · PDF guide (5 pages/class) by email.',
      es: 'Google Meet · grupal y personalizada · guía PDF (5 págs/clase) por email.',
    },
    price: 300,
    img: IMG.editorial2,
    startDays: 2,
    spots: 6,
  },
  {
    id: 'online-int24',
    cat: 'online',
    badge: { en: '24 classes', es: '24 clases' },
    bc: 'orange',
    tag: { en: 'B1–B2 · Meet', es: 'B1–B2 · Meet' },
    title: { en: 'Online Intermediate — 24 classes', es: 'Online Intermedio — 24 clases' },
    desc: {
      en: 'Google Meet · group & 1-on-1 · PDF guide (5 pages/class) by email.',
      es: 'Google Meet · grupal y personalizada · guía PDF (5 págs/clase) por email.',
    },
    price: 600,
    img: IMG.editorial1,
    startDays: 2,
    spots: 6,
  },
  {
    id: 'online-adv36',
    cat: 'online',
    badge: { en: '36 classes', es: '36 clases' },
    bc: 'orange',
    tag: { en: 'C1–C2 · Meet', es: 'C1–C2 · Meet' },
    title: { en: 'Online Advanced — 36 classes', es: 'Online Avanzado — 36 clases' },
    desc: {
      en: 'Google Meet · group & 1-on-1 · PDF guide (5 pages/class) by email.',
      es: 'Google Meet · grupal y personalizada · guía PDF (5 págs/clase) por email.',
    },
    price: 900,
    img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&q=80&auto=format&fit=crop',
    startDays: 2,
    spots: 6,
  },
];

export const EXTRAS: Extra[] = [
  {
    id: 'salsa',
    tag: { en: 'Extra', es: 'Extra' },
    title: { en: 'Salsa Class', es: 'Clase Salsa' },
    desc: { en: 'Weekly rhythm.', es: 'Ritmo semanal.' },
    price: 15,
    img: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=200&q=60&auto=format&fit=crop',
  },
  {
    id: 'empanada',
    tag: { en: 'Extra', es: 'Extra' },
    title: { en: 'Empanada Cooking', es: 'Cocina Empanadas' },
    desc: { en: 'Cook with Katta.', es: 'Cocina con Katta.' },
    price: 20,
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&q=60&auto=format&fit=crop',
  },
  {
    id: 'tour',
    tag: { en: 'Extra', es: 'Extra' },
    title: { en: 'Sunset Trip Lobos', es: 'Atardecer Lobos' },
    desc: { en: 'Group + mates.', es: 'Grupal + mates.' },
    price: 25,
    img: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=200&q=60&auto=format&fit=crop',
  },
  {
    id: 'dinner',
    tag: { en: 'Extra', es: 'Extra' },
    title: { en: 'Friday Dinner', es: 'Cena Viernes' },
    desc: { en: 'Family night.', es: 'Noche familiar.' },
    price: 25,
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&q=60&auto=format&fit=crop',
  },
  {
    id: 'surf-extra',
    tag: { en: 'Extra', es: 'Extra' },
    title: { en: 'Extra Surf Lesson', es: 'Clase Extra Surf' },
    desc: { en: 'Punta de Lobos.', es: 'Punta de Lobos.' },
    price: 35,
    img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=200&q=60&auto=format&fit=crop',
  },
];

export const METHOD: { num: string; icon: 'chat' | 'pot' | 'bag' | 'compass'; title: L; desc: L }[] = [
  {
    num: '01',
    icon: 'chat',
    title: { en: "Chilean slang you'll use", es: 'Chilenismos que sí usarás' },
    desc: {
      en: 'Cachai, bacán, fome… local words and expressions from day one.',
      es: 'Cachai, bacán, fome… palabras y expresiones locales desde el día uno.',
    },
  },
  {
    num: '02',
    icon: 'pot',
    title: { en: 'Recipes & ingredients', es: 'Recetas e ingredientes' },
    desc: {
      en: 'Chilean kitchen vocabulary learned by cooking: empanadas, pebre, once.',
      es: 'Vocabulario de cocina chilena aprendido cocinando: empanadas, pebre, once.',
    },
  },
  {
    num: '03',
    icon: 'bag',
    title: { en: 'Numbers at the market', es: 'Números en la feria' },
    desc: {
      en: 'Prices, change and bargaining while shopping for real.',
      es: 'Precios, vuelto y regateo practicando compras reales.',
    },
  },
  {
    num: '04',
    icon: 'compass',
    title: { en: 'Real-life conversation', es: 'Conversación real' },
    desc: {
      en: 'Hotels, tours, restaurants and daily life: speak from day one.',
      es: 'Hotel, tours, restaurantes y vida diaria: habla desde el día uno.',
    },
  },
];

export const EDITORIAL = [
  {
    label: { en: '01 — IN-PERSON', es: '01 — PRESENCIAL' },
    title: { en: 'Immersion in Pichilemu', es: 'Inmersión en Pichilemu' },
    meta: {
      en: '15h/week · Mon–Fri 10:00–13:00 · Group & 1-on-1',
      es: '15h/sem · Lun–Vie 10:00–13:00 · Grupal y personalizada',
    },
    img: IMG.editorial1,
    hotspots: [
      { en: '● max 4', es: '● max 4', pos: 'top-left' },
      { en: '⌂ Casa de Katta', es: '⌂ Casa de Katta', pos: 'top-right' },
    ],
    add: 'pres-intensivo',
    addLabel: { en: 'Add — $280', es: 'Agregar — $280' },
    qv: 'pres-intensivo',
  },
  {
    label: { en: '02 — ONLINE', es: '02 — ONLINE' },
    title: { en: 'Learn from anywhere', es: 'Aprende desde donde sea' },
    meta: {
      en: '12 · 24 · 36 classes · Group & 1-on-1 · PDF by email',
      es: '12 · 24 · 36 clases · Grupal y personalizada · PDF por email',
    },
    img: IMG.editorial2,
    hotspots: [{ en: '● Google Meet', es: '● Google Meet', pos: 'top-left' }],
    add: null,
    addLabel: { en: 'See programs', es: 'Ver programas' },
    qv: 'online-bas12',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Lena M.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80&auto=format&fit=crop',
    country: { en: 'Germany · 2 weeks ago', es: 'Alemania · hace 2 sem' },
    quote: {
      en: '"I came for 2 weeks and stayed 2 months. Classes + surf + Friday dinners feel like family."',
      es: '"Vine por 2 semanas y me quedé 2 meses. Clases + surf + cenas de viernes se sienten como familia."',
    },
    tags: { en: ['B1→B2', '8 weeks', 'Surf'], es: ['B1→B2', '8 semanas', 'Surf'] },
    likes: 24,
    source: 'Google',
  },
  {
    id: 'r2',
    name: 'Jake T.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80&auto=format&fit=crop',
    country: { en: 'USA · 1 month ago', es: 'EE.UU. · hace 1 mes' },
    quote: {
      en: '"Analog vibe, real Chile. Learned more speaking on the terrace than in 2 years of app."',
      es: '"Vibe Analog, Chile real. Aprendí más conversando en la terraza que en 2 años de app."',
    },
    tags: { en: ['A2→B1', '4 weeks', 'Terrace'], es: ['A2→B1', '4 semanas', 'Terraza'] },
    likes: 18,
    source: 'Instagram',
  },
  {
    id: 'r3',
    name: 'Sofia R.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop',
    country: { en: 'Australia · 2 months ago', es: 'Australia · hace 2 meses' },
    quote: {
      en: '"Online pack kept my level sharp from Berlin. Then I flew for the surf pack. Worth it."',
      es: '"El pack online mantuvo afilado mi nivel desde Berlín. Luego volé para el pack de surf. Vale la pena."',
    },
    tags: { en: ['B2→C1', 'Online + Surf'], es: ['B2→C1', 'Online + Surf'] },
    likes: 31,
    source: 'Google',
  },
  {
    id: 'r4',
    name: 'Marie F.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop',
    country: { en: 'France · 3 weeks ago', es: 'Francia · hace 3 sem' },
    quote: {
      en: '"I finally dare to speak. Ordering seafood in Spanish at the cove felt like a victory."',
      es: '"Por fin me atrevo a hablar. Pedir mariscos en español en la caleta se sintió como una victoria."',
    },
    tags: { en: ['A1→A2', '2 weeks', 'Food'], es: ['A1→A2', '2 semanas', 'Comida'] },
    likes: 15,
    source: 'Instagram',
  },
  {
    id: 'r5',
    name: 'Tom H.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop',
    country: { en: 'UK · 1 week ago', es: 'Reino Unido · hace 1 sem' },
    quote: {
      en: '"Surf in the morning, subjunctive in the afternoon. Best combo in Chile."',
      es: '"Surf en la mañana, subjuntivo en la tarde. El mejor combo de Chile."',
    },
    tags: { en: ['B1', '3 weeks', 'Surf'], es: ['B1', '3 semanas', 'Surf'] },
    likes: 27,
    source: 'Google',
  },
  {
    id: 'r6',
    name: 'Lucas P.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop',
    country: { en: 'Brazil · 2 months ago', es: 'Brasil · hace 2 meses' },
    quote: {
      en: '"I learned more Spanish in one month here than in a year of online classes."',
      es: '"Aprendí más español en un mes aquí que en un año de clases online."',
    },
    tags: { en: ['A2→B1', '4 weeks', 'Terrace'], es: ['A2→B1', '4 semanas', 'Terraza'] },
    likes: 12,
    source: 'Instagram',
  },
  {
    id: 'r7',
    name: 'Emma W.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop',
    country: { en: 'USA · 3 months ago', es: 'EE.UU. · hace 3 meses' },
    quote: {
      en: '"Friday dinners are the best classroom. I left with friends from six countries."',
      es: '"Las cenas de viernes son la mejor sala de clases. Me fui con amigos de seis países."',
    },
    tags: { en: ['B2', '6 weeks', 'Dinners'], es: ['B2', '6 semanas', 'Cenas'] },
    likes: 19,
    source: 'Google',
  },
];

export const FAQ: { q: L; a: L }[] = [
  {
    q: { en: 'How many students per group?', es: '¿Cuántos estudiantes por grupo?' },
    a: {
      en: 'Max 4 in-person. Online 1-on-1 or mini-groups of 3.',
      es: 'Máx. 4 presencial. Online personalizada o minigrupos de 3.',
    },
  },
  {
    q: { en: 'Do I need surf experience?', es: '¿Necesito experiencia de surf?' },
    a: {
      en: 'No. Punta de Lobos has beginner breaks + certified local instructors. Board & wetsuit included.',
      es: 'No. Punta de Lobos tiene olas para principiantes + instructores locales certificados. Tabla y traje incluidos.',
    },
  },
  {
    q: { en: 'Where are classes?', es: '¿Dónde son las clases?' },
    a: {
      en: 'Casa de Katta: terrace, kitchen & garden, 10 min walk to the beach. Fast WiFi for nomads.',
      es: 'Casa de Katta: terraza, cocina y jardín, a 10 min caminando de la playa. WiFi rápido para nómadas.',
    },
  },
  {
    q: { en: 'How does booking work?', es: '¿Cómo funciona la reserva?' },
    a: {
      en: 'Add to order → send your booking via WhatsApp → we confirm availability within 24h → pay securely with a Flow or MercadoPago link. No prepayment on this site.',
      es: 'Agrega al pedido → envía tu reserva por WhatsApp → confirmamos disponibilidad en 24h → paga seguro con un link Flow o MercadoPago. Sin pago por adelantado en este sitio.',
    },
  },
  {
    q: { en: 'What study material do I get?', es: '¿Qué material de estudio recibo?' },
    a: {
      en: 'PDF guide (about 5 pages per class) sent by email, plus in-class practice with real Chilean situations.',
      es: 'Guía PDF (unas 5 páginas por clase) enviada por email, más práctica en clase con situaciones chilenas reales.',
    },
  },
];

export const STORY = {
  eyebrow: { en: '● OUR STORY', es: '● NUESTRA HISTORIA' },
  paragraphs: [
    {
      en: "Twenty years ago, it all started with a passion, a passion for teaching Spanish, connecting cultures and changing lives through language. What began as one teacher's journey, became something much bigger.",
      es: 'Hace veinte años todo empezó con una pasión, una pasión por enseñar español, conectar culturas y cambiar vidas a través del idioma. Lo que comenzó como el camino de una profesora se convirtió en algo mucho más grande.',
    },
    {
      en: "I´m Katterina, I´ve been teaching Spanish to people from all over the world. 13 years ago, I created Huara Spanish School, not just as a school, but as a completely different learning experience. It´s a place where tourists don´t just learn Spanish, they live it. Because here language is more than grammar and vocabulary. It´s sharing meals, exploring local traditions, laughing with new friends and feeling at home, even miles away.",
      es: 'Soy Katterina y llevo años enseñando español a personas de todo el mundo. Hace 13 años creé Huara Spanish School, no solo como una escuela, sino como una experiencia de aprendizaje completamente diferente. Es un lugar donde los viajeros no solo aprenden español: lo viven. Porque aquí el idioma es más que gramática y vocabulario. Es compartir comidas, explorar tradiciones locales, reír con amigos nuevos y sentirse en casa, aun estando a miles de kilómetros.',
    },
    {
      en: 'Every class is guided with care, dedication and heart.',
      es: 'Cada clase se guía con cariño, dedicación y corazón.',
    },
    {
      en: 'My goal is creating a community that lives the “Real Chile”, that enjoys visiting the local market, falls in love with our products, and shares a meal connecting with all our life history. Seeing that regardless of our place of origin, we all share something that creates a bond that will be forever in our memories.',
      es: 'Mi objetivo es crear una comunidad que viva el «Chile real», que disfrute visitando la feria local, que se enamore de nuestros productos y que comparta una mesa conectando con toda nuestra historia de vida. Ver que, sin importar nuestro lugar de origen, todos compartimos algo que crea un lazo que quedará para siempre en nuestra memoria.',
    },
    {
      en: "At Huara, every student is more than just a learner, you become part of something real. It´s an experience that transforms the way you see language and the way you see the world.",
      es: 'En Huara, cada estudiante es más que alguien que aprende: pasas a ser parte de algo real. Es una experiencia que transforma la forma en que ves el idioma y la forma en que ves el mundo.',
    },
  ] as L[],
  sign: {
    en: 'Huara Spanish School, learn Spanish, live the culture, feel at Home.',
    es: 'Huara Spanish School, aprende español, vive la cultura, siéntete en casa.',
  },
  name: '— Katterina',
};

export const LOOKBOOK = {
  h: Array.from({ length: 10 }, (_, i) => `/img/${i + 1}h.jpg`),
  v: Array.from({ length: 12 }, (_, i) => `/img/${i + 1}v.jpg`),
};

export const IG_GRID = [
  { img: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&q=80&auto=format&fit=crop', likes: 214, alt: 'Surf' },
  { img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80&auto=format&fit=crop', likes: 186, alt: 'Beach' },
  { img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&auto=format&fit=crop', likes: 158, alt: 'Students' },
  { img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80&auto=format&fit=crop', likes: 243, alt: 'Surf' },
  { img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80&auto=format&fit=crop', likes: 197, alt: 'Empanadas' },
  { img: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600&q=80&auto=format&fit=crop', likes: 229, alt: 'Sunset' },
];

export const FB_POSTS = [
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%3Ffbid%3D1507288571409898%26set%3Da.460912359380863%26locale%3Des_LA&show_text=true&width=340',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%3Ffbid%3D1480846414054114%26set%3Dpcb.1480846454054110%26locale%3Des_LA&show_text=true&width=340',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%3Ffbid%3D1455926969879392%26set%3Da.460912359380863%26locale%3Des_LA&show_text=true&width=340',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%3Ffbid%3D1439158741556215%26set%3Da.460912359380863%26locale%3Des_LA&show_text=true&width=340',
];

export const ALL_PRODUCTS = [...PROGRAMS, ...EXTRAS];
export const productById = (id: string) => ALL_PRODUCTS.find((p) => p.id === id);
