'use client';  // Client component untuk interaktivitas (opsional hamburger)
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
          StatRecon
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li><Link href="/" className="text-gray-700 hover:text-blue-500 transition">Home</Link></li>
          <li><Link href="/materials" className="text-gray-700 hover:text-blue-500 transition">Materi</Link></li>
          <li><Link href="/analysis" className="text-gray-700 hover:text-blue-500 transition">Analisis</Link></li>
          <li><Link href="/consultation" className="text-gray-700 hover:text-blue-500 transition">Konsultasi</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <ul className="md:hidden absolute top-16 right-6 bg-white shadow-lg rounded-lg py-4 w-48 space-y-4">
            <li><Link href="/" className="block px-4 py-2 text-gray-700 hover:text-blue-500 transition">Home</Link></li>
            <li><Link href="/materials" className="block px-4 py-2 text-gray-700 hover:text-blue-500 transition">Materi</Link></li>
            <li><Link href="/analysis" className="block px-4 py-2 text-gray-700 hover:text-blue-500 transition">Analisis</Link></li>
            <li><Link href="/consultation" className="block px-4 py-2 text-gray-700 hover:text-blue-500 transition">Konsultasi</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
}