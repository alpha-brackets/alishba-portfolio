'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

const dockLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/certifications', label: 'Certifications' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* ─── Top Brand Header: Creative Signature Monogram Logo + "Alishba Qadir" (Temporarily Commented Out) ─── */}
      {/*
      <header className="sticky top-0 z-40 w-full px-6 py-4 sm:py-5 bg-[#09090b]/85 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <Link
            href="/"
            className="group flex items-center gap-3 focus-visible:outline-none select-none"
            aria-label="Alishba Qadir Homepage"
          >
            <div className="relative w-8 h-8 rounded-xl overflow-hidden bg-[#111113] border border-white/10 flex items-center justify-center p-1 group-hover:border-[#fd5b38]/50 group-hover:scale-105 transition-all duration-300">
              <Image
                src="/favicon.svg"
                alt="Alishba Qadir Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
                priority
              />
            </div>

            <span className="font-serif italic font-bold text-2xl sm:text-3xl text-white tracking-tight group-hover:text-[#fd5b38] transition-colors">
              Alishba Qadir
            </span>
          </Link>

          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-sans text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="lowercase tracking-wide font-medium">available for work</span>
          </div>

        </div>
      </header>
      */}

      {/* ─── Bottom Floating Dock Navigation: Exact Match to Portfolix Screenshot ─── */}
      <nav
        aria-label="Floating Navigation Dock"
        className="fixed bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4"
      >
        <div className="pointer-events-auto flex items-center gap-1 sm:gap-1.5 p-1.5 sm:p-2 rounded-full bg-[#1c1c20]/95 backdrop-blur-2xl border border-white/10 transition-all duration-300">
          
          {dockLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-sans transition-all duration-200 select-none',
                  isActive
                    ? 'text-white font-semibold bg-white/10 border border-white/20'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                )}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Solid White / Coral CTA Capsule Button */}
          <Link
            href="/contact"
            className="ml-1 inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-white hover:bg-[#fd5b38] text-black hover:text-white text-xs sm:text-sm font-semibold transition-all duration-200 select-none shrink-0"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
          </Link>

        </div>
      </nav>
    </>
  );
}
