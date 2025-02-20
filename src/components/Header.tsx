'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/50 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-clip-text from-blue-500 to-blue-500">
            roxbyte
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`${isActive('/') ? 'text-blue-400' : 'text-gray-300'} hover:text-blue-400 transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${isActive('/about') ? 'text-blue-400' : 'text-gray-300'} hover:text-blue-400 transition-colors`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`${isActive('/services') ? 'text-blue-400' : 'text-gray-300'} hover:text-blue-400 transition-colors`}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className={`${isActive('/portfolio') ? 'text-blue-400' : 'text-gray-300'} hover:text-blue-400 transition-colors`}
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className={`${isActive('/blog') ? 'text-blue-400' : 'text-gray-300'} hover:text-blue-400 transition-colors`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`${isActive('/contact') ? 'text-blue-400' : 'text-gray-300'} hover:text-blue-400 transition-colors`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}