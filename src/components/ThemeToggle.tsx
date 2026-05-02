'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 border border-graphite-900 dark:border-ivory-100 bg-transparent overflow-hidden group"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-0 left-0 w-6 h-full bg-graphite-900 dark:bg-ivory-100 transition-transform duration-300 ${
          theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
        }`}
      />
      <div className="absolute inset-0 flex items-center justify-between px-1.5 text-[10px] font-mono font-medium tracking-wider">
        <span className={`${theme === 'light' ? 'text-ivory-100' : 'text-graphite-900 dark:text-ivory-100'} transition-colors z-10`}>L</span>
        <span className={`${theme === 'dark' ? 'text-graphite-900' : 'text-graphite-900 dark:text-ivory-100'} transition-colors z-10`}>D</span>
      </div>
    </button>
  );
}
