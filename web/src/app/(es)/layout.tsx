import type { Metadata, Viewport } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://huara.cl'),
  title: 'HUARA° — Escuela de Español Pichilemu | Edición Analog',
  description:
    'Escuela de español para moverse. Inmersión en Pichilemu, Chile: máx. 4 por grupo, surf, salsa y empanadas. Programas presenciales y online.',
  icons: { icon: '/favicon.svg' },
  alternates: {
    canonical: '/es/',
    languages: { en: '/', es: '/es/', 'x-default': '/' },
  },
  openGraph: {
    title: 'HUARA° — Escuela de Español Pichilemu',
    description: 'Inmersión de español + surf en Pichilemu, Chile.',
    url: '/es/',
    siteName: 'HUARA° Spanish School',
    locale: 'es_CL',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f4efe6',
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" translate="no" className="notranslate">
      <head>
        <meta name="google" content="notranslate" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,700&family=Inter:wght@400;500;600&family=Dancing+Script:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
