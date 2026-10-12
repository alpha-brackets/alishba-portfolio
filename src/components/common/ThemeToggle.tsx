'use client';

import React, { useSyncExternalStore } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

const emptySubscribe = () => () => {};

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isClient = useSyncExternalStore(emptySubscribe, () => true, () => false);

  if (!isClient) {
    return (
      <div
        className={cn(
          'w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--card)] opacity-0',
          className
        )}
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      className={cn(
        'relative w-10 h-10 rounded-full flex items-center justify-center border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-200 cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]',
        className
      )}
    >
      {theme === 'light' ? (
        <Moon className="w-4 h-4 transition-transform duration-300 hover:rotate-12 text-slate-700" />
      ) : (
        <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-45 text-amber-400" />
      )}
    </button>
  );
}
