import React from 'react';

export default function IntroPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Pengantar Statistik</h1>
      <div className="prose max-w-none">
        <p>
          Selamat datang di bagian pengantar materi statistik pada StatRecon. 
          Di sini, kita akan membahas dasar-dasar statistik deskriptif dan inferensial 
          untuk mahasiswa S1-S3. Mulai dari konsep mean, median, hingga uji hipotesis.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Topik Utama</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Statistik Deskriptif: Ringkasan data (rata-rata, varians).</li>
          <li>Distribusi Probabilitas: Normal, binomial.</li>
          <li>Inferensial: Confidence interval, p-value.</li>
        </ul>
        <p className="mt-4">
          Gunakan tools analisis di <a href="/analysis" className="text-blue-600 hover:underline">bagian Analysis</a> 
          untuk praktik langsung.
        </p>
      </div>
    </main>
  );
}