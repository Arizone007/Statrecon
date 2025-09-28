import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Konfigurasi images (untuk load gambar dari public/images atau external seperti Unsplash)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',  // Contoh untuk stock images di materials
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**',  // Allow all HTTPS (restrict di production jika perlu)
      },
    ],
  },

  // Experimental: Opsional untuk Turbopack (jika hydration persist, disable sementara)
  experimental: {
    // turbo: {  // Uncomment jika ingin disable Turbopack
    //   enabled: false,
    // },
  },

  // Tambahan untuk StatRecon: Env vars jika butuh (e.g., API keys untuk form konsultasi nanti)
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Output: 'standalone' untuk deployment Vercel/self-host
  output: 'standalone',
};

export default nextConfig;