import React from 'react';
import Link from 'next/link';

// Metadata opsional untuk SEO (Next.js 13+ App Router)
export const metadata = {
  title: 'Materi Statistik - StatRecon',
  description: 'Materi lengkap statistik deskriptif dan inferensial untuk mahasiswa S1-S3.',
};

export default function MaterialsPage() {
  return (
    <main className="container mx-auto px-4 py-8 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Materi Statistik</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Jelajahi materi pendidikan statistik dari dasar hingga lanjutan. 
          Cocok untuk mahasiswa S1, S2, dan S3 di bidang data science dan riset.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card untuk sub-pages */}
        <Link 
          href="/materials/intro" 
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Pengantar Statistik</h2>
          <p className="text-gray-600">
            Dasar-dasar statistik deskriptif, probabilitas, dan konsep inferensial.
          </p>
        </Link>

        {/* Tambah card lain nanti, e.g., descriptive stats */}
        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-green-600 mb-2">Statistik Deskriptif</h2>
          <p className="text-gray-600">
            Mean, median, mode, varians, dan visualisasi data.
          </p>
          <Link href="/materials/descriptive" className="text-blue-500 hover:underline mt-2 block">
            Pelajari Lebih Lanjut →
          </Link>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">Statistik Inferensial</h2>
          <p className="text-gray-600">
            Uji hipotesis, confidence interval, dan regresi.
          </p>
          <Link href="/materials/inferential" className="text-blue-500 hover:underline mt-2 block">
            Pelajari Lebih Lanjut →
          </Link>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-500">
          Butuh bantuan? Coba tools analisis di <Link href="/analysis" className="text-blue-600 hover:underline">/analysis</Link>.
        </p>
      </div>
    </main>
  );
}