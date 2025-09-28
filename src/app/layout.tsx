import type { Metadata } from 'next';
import { Inter } from 'next/font/google';  // Atau gunakan font custom seperti Inter untuk Indonesia
import './globals.css';
// Import Header jika sudah dibuat: import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });  // Tambah variable untuk konsistensi

export const metadata: Metadata = {
  title: 'StatRecon - Pendidikan Statistik & Konsultasi',
  description: 'Materi pembelajaran statistik, tools analisis, dan layanan konsultasi S1-S3.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">  {/* Ganti ke 'id' untuk Indonesian locale */}
      <body
        suppressHydrationWarning  // Suppress warning untuk atribut eksternal (hapus setelah fix extensions)
        className={`${inter.variable} antialiased`}  // Sederhanakan className (hilangkan geist jika tidak perlu)
      >
        {/* <Header />  // Tambahkan jika siap */}
        <main className="min-h-screen">
          {children}
        </main>
        {/* <Footer />  // Tambahkan nanti */}
      </body>
    </html>
  );
}