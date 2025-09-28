/** @type {import('next').NextConfig} */
const nextConfig = {
  // Konfigurasi dasar untuk App Router (v14)
  experimental: {
    // Disable Turbopack di prod (stable webpack)
    // turbopack: false,  // Opsional, default false di v14
  },
  // Tailwind/PostCSS sudah handle via postcss.config.js
  // Tambah jika perlu: images: { domains: ['example.com'] }
  // Atau swcMinify: true untuk faster build
};

module.exports = nextConfig;