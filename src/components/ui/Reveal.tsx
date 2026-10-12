'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: 'up' | 'zoom';
  as?: React.ElementType;
  threshold?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  variant = 'up',
  as: Tag = 'div',
  threshold,
}: RevealProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>({ threshold });

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        variant === 'zoom' ? 'reveal-zoom' : 'reveal',
        isRevealed && 'is-revealed',
        className
      )}
    >
      {children}
    </Tag>
  );
}
