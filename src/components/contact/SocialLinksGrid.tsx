import React from 'react';
import {
  Sparkles,
  Clock,
  ShieldCheck,
  Compass,
  ArrowUpRight,
} from 'lucide-react';
import { LinkedinIcon } from '@/components/common/SocialIcons';
import { siteConfig } from '@/data/siteConfig';

const collaborationGuarantees = [
  {
    icon: Clock,
    title: 'Guaranteed 24-Hour Response',
    description: 'Every project inquiry is personally reviewed by Alishba with honest strategic feedback within one business day.',
  },
  {
    icon: Compass,
    title: 'Preliminary Whitespace Audit',
    description: 'Before committing to a contract, we discuss your competitor landscape and immediate category whitespace on an initial discovery call.',
  },
  {
    icon: ShieldCheck,
    title: 'Direct Strategic Ownership',
    description: 'No account managers or delegated interns. You collaborate directly with Alishba from initial positioning to final distribution.',
  },
];

export function SocialLinksGrid() {
  return (
    <div className="space-y-6">
      
      {/* Availability Status Card */}
      <div className="p-6 sm:p-7 rounded-3xl bg-[#0d0d10] border border-white/10 space-y-4 shadow-xl">
        <div className="flex items-center justify-between pb-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
              Accepting Select Projects
            </span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
            Q4 Active
          </span>
        </div>

        <div className="space-y-1.5">
          <h3 className="font-serif text-xl font-bold text-white leading-snug">
            {siteConfig.availability}
          </h3>
          <p className="text-xs text-zinc-400 font-light leading-relaxed">
            Partnering directly with founders and teams on market positioning, brand identity launches, and high-retention content engines.
          </p>
        </div>

        <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-zinc-400">
          <Sparkles className="w-3.5 h-3.5 text-[#fd5b38]" />
          <span>Global Remote • US, EU &amp; APAC friendly</span>
        </div>
      </div>

      {/* What Happens Next Card */}
      <div className="p-6 sm:p-7 rounded-3xl bg-[#0d0d10] border border-white/10 space-y-5 shadow-xl">
        <div className="space-y-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#fd5b38]">
            What to Expect
          </span>
          <h4 className="font-serif text-lg font-bold text-white">
            How we begin collaborating
          </h4>
        </div>

        <div className="space-y-4 pt-1">
          {collaborationGuarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 text-[#fd5b38] mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h5 className="text-xs font-semibold text-white">
                    {item.title}
                  </h5>
                  <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Professional Network Verification */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* LinkedIn */}
        <a
          href={siteConfig.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-4 rounded-2xl bg-[#0d0d10] border border-white/10 hover:border-[#fd5b38]/40 transition-all flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
              <LinkedinIcon className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white group-hover:text-[#fd5b38] transition-colors flex items-center gap-1">
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </div>
              <span className="text-[10px] text-zinc-500 block font-mono">Professional Profile</span>
            </div>
          </div>
        </a>

        {/* Medium Articles */}
        <a
          href={siteConfig.socials.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-4 rounded-2xl bg-[#0d0d10] border border-white/10 hover:border-[#fd5b38]/40 transition-all flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                <span>Medium</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </div>
              <span className="text-[10px] text-zinc-500 block font-mono">Case Essays</span>
            </div>
          </div>
        </a>
      </div>

    </div>
  );
}
