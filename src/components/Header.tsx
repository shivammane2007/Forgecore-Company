'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';

export const navigation = [
  { name: 'OVERVIEW', href: '/overview' },
  { name: 'OFFERINGS', href: '/offerings' },
  { name: 'SYSTEMS', href: '/systems' },
  { name: 'APPLICATIONS', href: '/applications' },
  { name: 'RESEARCH', href: '/research' },
  { name: 'OPERATIONS', href: '/operations' },
  { name: 'CONTACT', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-industrial-300 dark:border-industrial-700 bg-ivory-50/95 dark:bg-graphite-950/95 backdrop-blur-sm">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group" aria-label="FORGECORE Home">
              <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-graphite-900 dark:border-ivory-100 relative shrink-0">
                <div className="absolute inset-1 border border-graphite-900 dark:border-ivory-100" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-oxide-600" />
              </div>
              <span className="font-serif font-bold text-lg sm:text-xl tracking-tight text-graphite-950 dark:text-ivory-50">
                FORGECORE
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-xs font-medium tracking-widest transition-colors ${
                    pathname === item.href
                      ? 'text-oxide-600 dark:text-oxide-500'
                      : 'text-graphite-700 dark:text-ivory-300 hover:text-graphite-900 dark:hover:text-ivory-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Controls */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              <ThemeToggle />
              
              {/* Mobile menu button */}
              <button
                type="button"
                className="lg:hidden p-2 -mr-2 text-graphite-700 dark:text-ivory-300 hover:text-graphite-900 dark:hover:text-ivory-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Open main menu"
              >
                <span className="sr-only">Open main menu</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        navigation={navigation} 
      />
    </>
  );
}
