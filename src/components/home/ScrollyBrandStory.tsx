'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowUpRight, Compass, Palette, Megaphone, CheckCircle2 } from 'lucide-react';

const storyStages = [
  {
    step: '01',
    label: 'The Blank Brief',
    title: 'A hospitality startup with a launch date, but no name identity.',
    icon: Compass,
    accent: 'from-[#fd5b38] to-amber-500',
    tag: 'Problem Definition',
    situation:
      'Hostelo approached with an early-stage student housing platform concept. They had zero brand presence, no defined voice, and needed to build credibility and student waitlist momentum before launch.',
    actions: [
      'Conducted student demographic interviews (18–24yo university housing pain points).',
      'Audited local and regional competitors: found corporate, impersonal, and unapproachable tone.',
      'Identified the brand opportunity: warmth, trust, peer-to-peer security, and student vibrancy.',
    ],
    outcome: 'Clear strategic whitespace defined before creating a single design asset.',
  },
  {
    step: '02',
    label: 'The Narrative & Visual System',
    title: 'Transforming consumer psychology into a visual identity system.',
    icon: Palette,
    accent: 'from-amber-500 to-[#fd5b38]',
    tag: 'Identity Architecture',
    situation:
      'Brand design without strategy drifts. I crafted an identity that students immediately recognize as modern, energetic, and safe.',
    actions: [
      'Designed core logo mark, responsive badge variants, and social avatar treatments.',
      'Selected primary & secondary color palettes conveying warmth, vibrancy, and clean contrast.',
      'Standardized typography pairings and created founder messaging guidelines for student inquiries.',
    ],
    outcome: 'A developer-ready, founder-aligned brand handbook ready for omni-channel deployment.',
  },
  {
    step: '03',
    label: 'Pre-Launch Distribution',
    title: 'Generating organic anticipation before day one of operations.',
    icon: Megaphone,
    accent: 'from-orange-500 to-rose-500',
    tag: 'Go-To-Market Execution',
    situation:
      'A great brand is useless in a vacuum. We established social profiles and sequenced pre-launch teaser content across Instagram and LinkedIn to validate interest.',
    actions: [
      'Developed 4-week pre-launch editorial calendar: teaser graphics, problem highlights, student spotlights.',
      'Created platform-tailored banners, post templates in Figma, and promotional video storyboards.',
      'Wrote direct-response copy addressing accommodation anxiety with empathetic student-first messaging.',
    ],
    outcome: 'Built initial community recognition and inbound founder inquiries prior to official platform launch.',
  },
];

export function ScrollyBrandStory() {
  const [activeStage, setActiveStage] = useState(0);
  const current = storyStages[activeStage];
  const Icon = current.icon;

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#0c0c0e] border-y border-white/5">
      {/* Background Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#fd5b38]/5 rounded-full blur-[140px]"
      />

      <Container>
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Section Header */}
          <Reveal className="text-center max-w-2xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-[#fd5b38]">
              The Story of a Real Brand
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              How a Blank Brief Became an Launch-Ready Identity
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              Step inside the Hostelo brand journey to see how market research, audience empathy, and visual design come together.
            </p>
          </Reveal>

          {/* Interactive Stage Journey Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {storyStages.map((st, idx) => {
              const StIcon = st.icon;
              const isSelected = activeStage === idx;
              return (
                <button
                  key={st.step}
                  onClick={() => setActiveStage(idx)}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between space-y-3 cursor-pointer ${
                    isSelected
                      ? 'bg-white/10 border border-[#fd5b38]/50 shadow-xl shadow-[#fd5b38]/10 scale-[1.01]'
                      : 'bg-white/[0.02] border border-white/5 hover:border-white/15 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-zinc-500">
                      STAGE {st.step}
                    </span>
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#fd5b38] text-white' : 'text-zinc-500'}`}>
                      <StIcon className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      {st.label}
                    </div>
                    <div className="text-[11px] text-zinc-400 truncate mt-0.5">
                      {st.tag}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Stage Display Card */}
          <Reveal delay={150} variant="zoom">
            <div className="rounded-3xl clerk-card p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                
                {/* Left Story Column */}
                <div className="md:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#fd5b38]/10 text-[#fd5b38] border border-[#fd5b38]/20">
                      {current.tag}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      Stage {current.step} of 03
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                    {current.title}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed font-light">
                    {current.situation}
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                      Key Actions Taken
                    </div>
                    <div className="space-y-2">
                      {current.actions.map((act, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                          <CheckCircle2 className="w-4 h-4 text-[#fd5b38] shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Visual Summary Card */}
                <div className="md:col-span-5 p-6 sm:p-8 rounded-2xl bg-black/60 border border-white/10 space-y-6 clerk-card-hover">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#fd5b38]/20 to-amber-500/10 border border-[#fd5b38]/30 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#fd5b38]" />
                    </div>
                    <span className="text-xs font-mono text-zinc-500 uppercase">
                      Client: Hostelo
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                      Strategic Deliverable
                    </div>
                    <p className="text-sm font-semibold text-white leading-relaxed">
                      {current.outcome}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href="/work/hostelo-brand-launch"
                      className="text-xs font-bold text-[#fd5b38] hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <span>Read Full Hostelo Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  );
}
