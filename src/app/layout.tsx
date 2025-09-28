import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';  // Tailwind base (pastikan ada)

// Font setup: Inter untuk body text (Indonesian-friendly, sans-serif)
const inter = Inter({
  subsets: ['latin'],  // Latin untuk ID locale
  variable: '--font-inter',  // CSS variable untuk className
  display: 'swap',  // Swap font async—hindari FOIT (flash of invisible text)
});

// Metadata global: Fix hydration dengan explicit title/description (Indonesian)
export const metadata: Metadata = {
  title: {
    default: 'StatRecon - Platform Pendidikan Statistik',
    template: '%s | StatRecon',  // Untuk sub-pages, e.g., "Materi | StatRecon"
  },
  description: 'Platform materi statistik, tools analisis data, dan konsultasi untuk mahasiswa S1-S3 di Indonesia.',
  metadataBase: new URL('https://statrecon.vercel.app'),  // Atau domain custom nanti
  alternates: {
    canonical: '/',  // SEO canonical
  },
  authors: [{ name: 'Tim StatRecon' }],
  keywords: ['statistik', 'analisis data', 'pendidikan', 'mahasiswa', 'Next.js'],
  openGraph: {
    title: 'StatRecon',
    description: 'Belajar statistik dengan mudah dan interaktif.',
    url: 'https://statrecon.vercel.app',
    siteName: 'StatRecon',
    images: [
      {
        url: '/og-image.png',  // Tambah image di public/ nanti (placeholder)
        width: 1200,
        height: 630,
        alt: 'StatRecon Logo',
      },
    ],
    locale: 'id_ID',  // Indonesian locale untuk OG
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StatRecon',
    description: 'Platform statistik Indonesia.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',  // Tambah nanti jika Google Search Console
  },
  icons: {
    icon: '/favicon.ico',  // Tambah di public/
  },
};

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">  {/* Locale Indonesian—konsisten dengan metadata */}
      <head>
        {/* Tambah jika perlu: <link rel="preconnect" href="https://fonts.googleapis.com" /> untuk font faster */}
      </head>
      <body
        className={`${inter.variable} font-inter antialiased`}  // Gunakan CSS variable + fallback class; no suppress needed
        suppressHydrationWarning={false}  // Hilangkan atau set false—fix root cause
      >
        {children}
      </body>
    </html>
  );
}