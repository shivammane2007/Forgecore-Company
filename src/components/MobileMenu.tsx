'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationItem {
  name: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: NavigationItem[];
}

export default function MobileMenu({ isOpen, onClose, navigation }: MobileMenuProps) {
  const pathname = usePathname();

  // Handle scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-graphite-950/80 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Slide-in Menu panel */}
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-[85%] max-w-sm bg-ivory-50 dark:bg-graphite-950 border-l border-industrial-300 dark:border-industrial-700 shadow-2xl flex flex-col lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            {/* Header inside menu */}
            <div className="flex items-center justify-between h-20 px-6 border-b border-industrial-300 dark:border-industrial-700">
              <div className="font-serif font-bold tracking-tight text-graphite-950 dark:text-ivory-50">
                MENU
              </div>
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-graphite-600 dark:text-ivory-400 hover:text-graphite-950 dark:hover:text-ivory-50 transition-colors"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Links container */}
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <div className="flex flex-col space-y-6">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={onClose}
                      className={`text-lg font-medium tracking-widest transition-colors ${
                        isActive
                          ? 'text-oxide-600 dark:text-oxide-500'
                          : 'text-graphite-800 dark:text-ivory-200 hover:text-graphite-950 dark:hover:text-ivory-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <div className="mt-12 pt-8 border-t border-industrial-300 dark:border-industrial-700">
                <Link 
                  href="/contact" 
                  onClick={onClose}
                  className="industrial-btn"
                >
                  REQUEST ARCHITECTURE REVIEW
                </Link>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
