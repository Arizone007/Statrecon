/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',  // Jika ada pages dir (Pages Router legacy)
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',  // Komponen reusable
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',  // App Router: Scan semua pages/layout di src/app
    './app/**/*.{js,ts,jsx,tsx,mdx}',  // Fallback jika src/ tidak ada (Next default)
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],  // Extend dari layout.tsx font
      },
      colors: {
        // Default Tailwind colors sudah include blue-500—tidak perlu extend kecuali custom
      },
    },
  },
  plugins: [],  // Tambah plugins nanti (e.g., typography untuk konten materials)
};