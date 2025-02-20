'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 rounded-b-[2rem] shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition-transform">
            roxbyte
          </Link>
          <button
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors relative w-6 h-6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <span
                className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}
              />
            </div>
          </button>
          <div className="hidden md:flex space-x-6">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/services', label: 'Services' },
              { href: '/projects', label: 'Projects' },
              { href: '/blog', label: 'Blog' },
              { href: '/contact', label: 'Contact' }
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${isActive(href) ? 'text-blue-400 scale-105 bg-gradient-to-r from-blue-500/20 to-purple-500/20' : 'text-gray-300'} 
                  relative overflow-hidden group px-6 py-2 rounded-2xl font-semibold
                  hover:text-blue-400 hover:scale-105 transition-all duration-300 ease-in-out
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/20 before:to-purple-500/20
                  before:scale-x-0 before:origin-left before:hover:scale-x-100 before:transition-transform before:duration-300
                  before:rounded-2xl
                  after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500
                  after:scale-x-0 after:origin-center after:hover:scale-x-100 after:transition-transform after:duration-300`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Mobile menu */}
        <div
          className={`md:hidden fixed inset-x-0 top-[73px] bg-gray-900/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'}`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/services', label: 'Services' },
              { href: '/projects', label: 'Projects' },
              { href: '/blog', label: 'Blog' },
              { href: '/contact', label: 'Contact' }
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${isActive(href) ? 'text-blue-400' : 'text-gray-300'} hover:text-blue-400 transition-colors text-lg font-semibold px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}