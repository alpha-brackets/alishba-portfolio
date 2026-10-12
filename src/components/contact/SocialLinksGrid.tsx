'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/data/siteConfig';
import {
  Mail,
  BookOpen,
  Copy,
  Check,
  ArrowUpRight,
} from 'lucide-react';
import { LinkedinIcon } from '@/components/common/SocialIcons';

export function SocialLinksGrid() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Availability Status Card */}
      <div className="p-6 rounded-3xl bg-[var(--card)] border border-[var(--border)] space-y-3 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Current Status
          </span>
        </div>
        <h3 className="font-serif text-lg font-bold text-[var(--foreground)]">
          {siteConfig.availability}
        </h3>
        <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
          Open to early-stage brand partnerships, social media retainers, marketing strategy consulting, and full-time remote roles.
        </p>
      </div>

      {/* Direct Email Card */}
      <div className="p-6 rounded-3xl bg-[var(--card)] border border-[var(--border)] space-y-4 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-orange-500/10 text-[var(--primary)] flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] block">
                Direct Email
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[var(--foreground)] break-all">
                {siteConfig.email}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={handleCopy}
            className="flex-1 py-2 px-3 rounded-xl border border-[var(--border)] bg-[var(--background)] hover:border-[var(--muted-foreground)] text-xs font-semibold text-[var(--foreground)] flex items-center justify-center gap-1.5 transition cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy Email'}</span>
          </button>
          <a
            href={siteConfig.socials.emailMailto}
            className="flex-1 py-2 px-3 rounded-xl bg-[var(--primary)] text-white text-xs font-semibold flex items-center justify-center gap-1.5 hover:brightness-110 transition shadow-xs"
          >
            <span>Send Email</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Social Network Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* LinkedIn */}
        <a
          href={siteConfig.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-5 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-blue-500/40 transition-all flex items-center justify-between shadow-xs"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
              <LinkedinIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[var(--foreground)] group-hover:text-blue-600 transition-colors flex items-center gap-1">
                LinkedIn
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </div>
              <div className="text-[11px] text-[var(--muted-foreground)]">Professional Network</div>
            </div>
          </div>
        </a>

        {/* Medium */}
        <a
          href={siteConfig.socials.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-5 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-emerald-500/40 transition-all flex items-center justify-between shadow-xs"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[var(--foreground)] group-hover:text-emerald-600 transition-colors flex items-center gap-1">
                Medium
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </div>
              <div className="text-[11px] text-[var(--muted-foreground)]">Articles & Thought Pieces</div>
            </div>
          </div>
        </a>
      </div>

      {/* Global Remote Collaboration banner */}
      <div className="p-4 rounded-2xl bg-[var(--card)]/50 border border-[var(--border)] flex items-center gap-3 text-xs text-[var(--muted-foreground)]">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
        <span>Global Remote • Collaborating across US, EU &amp; APAC time zones</span>
      </div>
    </div>
  );
}
