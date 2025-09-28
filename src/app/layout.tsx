import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';  // Tailwind + base styles

// Font setup: Inter untuk clean typography
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',  // Async load tanpa block
});

// Metadata: Handle <head> content secara otomatis (no manual <head> needed)
export const metadata: Metadata = {
  title: {
    default: 'StatRecon - Platform Pendidikan Statistik',
    template: '%s | StatRecon',
  },
  description: 'Platform materi statistik, tools analisis data, dan konsultasi untuk mahasiswa S1-S3 di Indonesia.',
  metadataBase: new URL('https://statrecon.vercel.app'),
  authors: [{ name: 'Tim StatRecon' }],
  keywords: ['statistik', 'analisis data', 'pendidikan', 'mahasiswa', 'Next.js'],
  openGraph: {
    title: 'StatRecon',
    description: 'Belajar statistik dengan mudah dan interaktif.',
    url: 'https://statrecon.vercel.app',
    siteName: 'StatRecon',
    locale: 'id_ID',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'StatRecon' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StatRecon',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
};

// Root layout: Compact JSX untuk hindari whitespace nodes
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} font-inter antialiased bg-gray-50 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}