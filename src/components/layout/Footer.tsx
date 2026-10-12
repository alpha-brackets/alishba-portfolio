import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/common/Container';
import { siteConfig } from '@/data/siteConfig';
import { ArrowUpRight, Mail, BookOpen, Sparkles } from 'lucide-react';
import { LinkedinIcon } from '@/components/common/SocialIcons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card)]/50 mt-24">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 focus-visible:outline-none select-none"
              aria-label="Alishba Qadir Homepage"
            >
              <div className="relative w-8 h-8 rounded-xl overflow-hidden bg-[#111113] border border-white/10 flex items-center justify-center p-1 group-hover:border-[#fd5b38]/50 group-hover:scale-105 transition-all duration-300">
                <Image
                  src="/favicon.svg"
                  alt="Alishba Qadir Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-serif italic font-bold text-2xl text-white tracking-tight group-hover:text-[#fd5b38] transition-colors">
                Alishba Qadir
              </span>
            </Link>
            <p className="text-sm text-[var(--muted-foreground)] max-w-md leading-relaxed">
              {siteConfig.headline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/certifications"
                  className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect / Socials */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)]">
              Connect
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm">
              <a
                href={siteConfig.socials.emailMailto}
                className="inline-flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
              >
                <Mail className="w-4 h-4 text-[var(--primary)]" />
                <span className="truncate">{siteConfig.email}</span>
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-500" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
              <a
                href={siteConfig.socials.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
              >
                <BookOpen className="w-4 h-4 text-emerald-500" />
                <span>Medium Articles</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>
        </div>

        {/* Huge Red Noir Text Stroke Watermark */}
        <div className="flex justify-center items-center py-6 opacity-10 pointer-events-none select-none overflow-hidden">
          <span className="text-[13vw] font-black tracking-tighter text-stroke leading-none font-sans uppercase">
            ALISHBA
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted-foreground)]">
          <p>© {currentYear} Alishba Qadir. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[var(--primary)]" />
            <span>Digital Marketing &amp; Growth Strategist</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
