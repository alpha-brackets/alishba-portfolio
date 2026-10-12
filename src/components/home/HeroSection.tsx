'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface PillarItem {
  id: string;
  num: string;
  title: string;
  category: string;
  headline: string;
  description: string;
  deliverables: string[];
  keyOutcome: string;
}

const marketingPillars: PillarItem[] = [
  {
    id: 'research',
    num: '01.',
    title: 'Market & Audience Research',
    category: 'MARKET INTELLIGENCE',
    headline: 'Find the gap competitors missed before writing a single word.',
    description:
      'I teardown competitor campaigns and isolate buyer objections so your brand message has immediate category whitespace.',
    deliverables: [
      'Competitor Messaging Teardown',
      'Buyer Pain Point & Friction Map',
      'Core Brand Positioning Angle',
    ],
    keyOutcome: 'Clear market proof before spending on creative.',
  },
  {
    id: 'campaigns',
    num: '02.',
    title: 'Campaigns & Content Planning',
    category: 'EDITORIAL STRATEGY',
    headline: 'Turn positioning into structured campaigns people actually read.',
    description:
      'I plan monthly editorial calendars with high-retention hooks and content themes designed to educate and persuade.',
    deliverables: [
      '30-Day Monthly Content Calendar',
      'High-Intent Hook & Headline Bank',
      'Cross-Platform Publishing Strategy',
    ],
    keyOutcome: 'Predictable cadence that builds brand authority.',
  },
  {
    id: 'leadflow',
    num: '03.',
    title: 'Distribution & Lead Inquiries',
    category: 'CONVERSION FLOW',
    headline: 'Turn audience attention into qualified business inquiries.',
    description:
      'I audit social bios, calls-to-action, and lead paths to guide viewers directly from passive viewers into direct inquiries.',
    deliverables: [
      'Profile Bio & Link Funnel Audit',
      'Direct-Response CTA Strategy',
      'Inquiry Flow & Lead Tracking',
    ],
    keyOutcome: 'A measurable bridge from attention to client leads.',
  },
];

export function HeroSection() {
  const [hoveredIdx, setHoveredIdx] = useState(0);

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-8 pb-20 md:pt-14 md:pb-28 overflow-hidden">

      <Container>
        <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24">
          
          {/* Main Hero Header */}
          <div className="text-center space-y-6 max-w-4xl mx-auto pt-4">
            <Reveal delay={60} threshold={0.01}>
              <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white leading-[1.05]">
                Marketing starts <br className="hidden sm:block" />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#fd5b38] via-orange-400 to-[#fd5b38] animate-sweep">
                  before the marketing.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={140} threshold={0.01}>
              <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
                I research consumer behavior, nail competitive positioning, and run content and campaign pipelines that turn market attention into qualified leads.
              </p>
            </Reveal>

            <Reveal delay={220} threshold={0.01}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link
                  href="/work"
                  className="shiny-cta inline-flex items-center justify-center gap-2 text-sm font-bold text-white"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>View Case Studies</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="btn-glass px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2"
                >
                  <span>Start a Conversation</span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Webfolio-Inspired Interactive Hover Stage */}
          <Reveal delay={280} threshold={0.05}>
            <div className="pt-8 pb-4">
              
              {/* Prominent Section Header Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#fd5b38]" />
                  <span className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Core Marketing Framework
                  </span>
                  <span className="text-zinc-600 hidden sm:inline">•</span>
                  <span className="text-xs font-sans font-medium text-zinc-400 tracking-wide uppercase hidden sm:inline">
                    Strategy & Execution
                  </span>
                </div>

                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/15 text-zinc-200 hover:text-white hover:border-[#fd5b38]/60 hover:bg-[#fd5b38]/10 transition-all text-xs font-mono uppercase tracking-wider group self-start sm:self-auto"
                >
                  <span>View All Work</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#fd5b38] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              {/* ── Mobile/Tablet View (<lg): Horizontal Swipeable Cards with Indicators ── */}
              <div className="block lg:hidden pt-8">
                {/* Horizontal Swipeable Track */}
                <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-4 px-4 pb-4">
                  {marketingPillars.map((pillar, idx) => (
                    <div
                      key={pillar.id}
                      className="snap-center shrink-0 w-[86vw] sm:w-[420px] rounded-3xl bg-[#0c0c0f] border border-white/10 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
                    >
                      {/* Ambient Accent Light */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-12 -right-12 w-36 h-36 rounded-full bg-[#fd5b38]/15 blur-2xl"
                      />

                      <div className="space-y-4 relative z-10">
                        {/* Header Badge & Stage Number */}
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-sans font-semibold tracking-wider text-[#fd5b38] uppercase">
                            {pillar.category}
                          </span>
                          <span className="text-xs font-mono font-medium text-zinc-400">
                            Stage {pillar.num}
                          </span>
                        </div>

                        {/* Title & Headline */}
                        <h3 className="font-serif text-2xl font-bold text-white leading-tight">
                          {pillar.headline}
                        </h3>

                        <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                          {pillar.description}
                        </p>

                        {/* Deliverables Produced */}
                        <div className="space-y-2.5 pt-4 border-t border-white/10">
                          <span className="text-[11px] font-sans uppercase tracking-wider text-zinc-400 block font-semibold">
                            Tangible Deliverables
                          </span>
                          <div className="space-y-2">
                            {pillar.deliverables.map((d, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs text-zinc-200">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#fd5b38] shrink-0" />
                                <span>{d}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Bottom Primary Outcome */}
                      <div className="mt-5 pt-3.5 border-t border-white/5 flex items-center justify-between text-xs font-sans relative z-10">
                        <span className="text-zinc-400">Outcome:</span>
                        <span className="text-emerald-400 font-medium text-right">
                          {pillar.keyOutcome}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile Swipe Hint */}
                <div className="flex items-center justify-center gap-2 pt-2 text-zinc-400 text-[11px] font-sans">
                  <span>← Swipe to explore stages (1 of 3) →</span>
                </div>
              </div>

              {/* ── Desktop View (lg+): Webfolio Interactive Split Stage ── */}
              <div className="hidden lg:grid grid-cols-12 gap-8 lg:gap-14 pt-10 items-stretch">
                
                {/* Left (5 Cols): Dynamic Detail Showcase with Cross-Fade Transitions */}
                <div className="col-span-5 flex flex-col">
                  <div className="h-full min-h-[460px] rounded-3xl bg-[#0c0c0f] border border-white/10 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
                    
                    {/* Subtle ambient light from top right with smooth scale/glow */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-12 -right-12 w-44 h-44 rounded-full bg-[#fd5b38]/15 blur-3xl transition-transform duration-700 ease-out"
                      style={{
                        transform: `translate(${hoveredIdx * 10}px, ${hoveredIdx * 15}px)`,
                      }}
                    />

                    {/* Stacked Panels for Perfectly Smooth Cross-Fade Transitions */}
                    <div className="relative flex-1 flex flex-col justify-between">
                      {marketingPillars.map((pillar, idx) => {
                        const isActive = hoveredIdx === idx;

                        return (
                          <div
                            key={pillar.id}
                            className={`flex flex-col justify-between h-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                              isActive
                                ? 'opacity-100 translate-y-0 relative z-10 pointer-events-auto'
                                : 'opacity-0 translate-y-2 absolute inset-0 -z-10 pointer-events-none'
                            }`}
                          >
                            {/* Stage Header */}
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-sans font-semibold tracking-wider text-[#fd5b38] uppercase">
                                  {pillar.category}
                                </span>
                                <span className="text-xs font-sans font-medium text-zinc-400">
                                  Stage {pillar.num}
                                </span>
                              </div>

                              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight min-h-[72px] flex items-center">
                                {pillar.headline}
                              </h3>

                              <p className="text-sm text-zinc-300 font-light leading-relaxed min-h-[48px]">
                                {pillar.description}
                              </p>
                            </div>

                            {/* Deliverables Produced */}
                            <div className="space-y-3 pt-6 border-t border-white/10 mt-6">
                              <span className="text-xs font-sans uppercase tracking-wider text-zinc-400 block font-semibold">
                                Tangible Deliverables
                              </span>
                              <div className="space-y-2">
                                {pillar.deliverables.map((d, i) => (
                                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#fd5b38] shrink-0" />
                                    <span>{d}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Bottom Primary Outcome */}
                            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-sans">
                              <span className="text-zinc-400">Outcome:</span>
                              <span className="text-emerald-400 font-medium text-right max-w-[240px]">
                                {pillar.keyOutcome}
                              </span>
                            </div>

                          </div>
                        );
                      })}
                    </div>

                  </div>
                </div>

                {/* Right (7 Cols): Webfolio-Style Hover Rows */}
                <div className="col-span-7 flex flex-col justify-center divide-y divide-white/[0.08]">
                  {marketingPillars.map((item, idx) => {
                    const isHovered = hoveredIdx === idx;

                    return (
                      <div
                        key={item.id}
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onClick={() => setHoveredIdx(idx)}
                        className={`group py-7 sm:py-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer flex items-center justify-between gap-4 ${
                          isHovered ? 'pl-4' : 'hover:pl-2'
                        }`}
                      >
                        <div className="flex items-baseline gap-4 sm:gap-6">
                          {/* Number 01. / 02. / 03. */}
                          <span
                            className={`font-mono text-base sm:text-lg font-bold transition-all duration-300 ${
                              isHovered ? 'text-[#fd5b38] scale-105' : 'text-zinc-400 group-hover:text-zinc-400'
                            }`}
                          >
                            {item.num}
                          </span>

                          {/* Interactive Webfolio Typography with Smooth Fill & Lettering */}
                          <span
                            className={`font-sans text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                              isHovered
                                ? 'text-white translate-x-1'
                                : 'text-stroke group-hover:text-white/70'
                            }`}
                          >
                            {item.title}
                          </span>
                        </div>

                        {/* Category Tag on the Right */}
                        <div className="flex items-center gap-3 shrink-0">
                          <span
                            className={`text-xs sm:text-xs font-sans font-medium tracking-wide transition-colors duration-300 uppercase ${
                              isHovered ? 'text-zinc-300' : 'text-zinc-400 group-hover:text-zinc-400'
                            }`}
                          >
                            / {item.category}
                          </span>

                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                              isHovered
                                ? 'bg-[#fd5b38] text-white scale-110'
                                : 'bg-white/5 text-zinc-400 group-hover:bg-white/10 group-hover:text-white'
                            }`}
                          >
                            <ArrowUpRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isHovered ? 'translate-x-0.5 -translate-y-0.5' : ''}`} />
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>

              </div>

            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  );
}
