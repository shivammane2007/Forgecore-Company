'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const navigation = [
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-industrial-300 dark:border-industrial-700 bg-ivory-50/95 dark:bg-graphite-950/95 backdrop-blur-sm">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 border-2 border-graphite-900 dark:border-ivory-100 relative">
              <div className="absolute inset-1 border border-graphite-900 dark:border-ivory-100" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-oxide-600" />
            </div>
            <span className="font-serif font-bold text-xl tracking-tight text-graphite-950 dark:text-ivory-50">
              FORGECORE
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
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

          {/* Theme Toggle */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
