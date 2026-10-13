import React from 'react';
import {
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { LinkedinIcon } from '@/components/common/SocialIcons';
import { siteConfig } from '@/data/siteConfig';

const highlights = [
  'Direct 1-on-1 collaboration with Alishba',
  'Whitespace & competitor positioning audit',
  'Tailored roadmaps & high-retention content',
  'Response guaranteed within 24 hours',
];

export function SocialLinksGrid() {
  return (
    <div className="space-y-5">
      
      {/* Availability & Scope Card */}
      <div className="p-6 rounded-3xl bg-[#0c0c0f] border border-white/10 space-y-4 shadow-xl">
        <div className="flex items-center justify-between pb-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
              Currently Available
            </span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
            Q4 2026
          </span>
        </div>

        <div className="space-y-1.5">
          <h3 className="font-serif text-lg font-bold text-white leading-snug">
            {siteConfig.availability}
          </h3>
          <p className="text-xs text-zinc-400 font-light leading-relaxed">
            Partnering directly with founders on positioning, brand launches, and ongoing social engines.
          </p>
        </div>

        {/* 4 Quick Value Checkmarks */}
        <div className="space-y-2 pt-2 border-t border-white/5">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300 font-light">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#fd5b38] shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="pt-2 text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>Global Remote • US, EU &amp; APAC timezones</span>
        </div>
      </div>

      {/* Social Networks: Clean Inline Grid */}
      <div className="grid grid-cols-2 gap-3">
        <a
          href={siteConfig.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3.5 rounded-2xl bg-[#0c0c0f] border border-white/10 hover:border-[#fd5b38]/40 transition-all flex items-center justify-between"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
              <LinkedinIcon className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-white group-hover:text-[#fd5b38] transition-colors truncate">
              LinkedIn
            </span>
          </div>
          <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white transition-colors shrink-0" />
        </a>

        <a
          href={siteConfig.socials.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3.5 rounded-2xl bg-[#0c0c0f] border border-white/10 hover:border-[#fd5b38]/40 transition-all flex items-center justify-between"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors truncate">
              Medium
            </span>
          </div>
          <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white transition-colors shrink-0" />
        </a>
      </div>

    </div>
  );
}
