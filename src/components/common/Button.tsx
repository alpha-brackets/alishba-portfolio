import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]';

  const variants = {
    primary:
      'bg-[var(--primary)] text-[var(--primary-foreground)] hover:brightness-110 shadow-sm shadow-[var(--primary)]/20 focus-visible:ring-[var(--primary)]',
    secondary:
      'bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:brightness-110 shadow-sm shadow-[var(--secondary)]/20 focus-visible:ring-[var(--secondary)]',
    outline:
      'border border-[var(--border)] bg-transparent text-[var(--foreground)] hover:bg-[var(--muted)] hover:border-[var(--muted-foreground)] focus-visible:ring-[var(--primary)]',
    ghost:
      'text-[var(--foreground)] hover:bg-[var(--muted)] focus-visible:ring-[var(--primary)]',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 min-h-[36px] gap-1.5',
    md: 'text-sm px-5 py-2.5 min-h-[44px] gap-2',
    lg: 'text-base px-7 py-3.5 min-h-[50px] gap-2.5 font-semibold',
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
