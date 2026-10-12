'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

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
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-8 pb-20 md:pt-14 md:pb-28">

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

          {/* Webfolio Overlapping Sticky Stacking Cards on Scroll */}
          <div className="pt-8 pb-4 space-y-8">
            
            {/* Webfolio-Inspired Section Header Banner */}
            <Reveal delay={280} threshold={0.05}>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-white/10">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#fd5b38] uppercase">
                    FRAMEWORK &amp; METHODOLOGY
                  </span>
                  <div className="flex items-baseline gap-2">
                    <h2 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                      CORE <span className="font-serif italic font-normal text-zinc-300">MARKETING.</span>
                    </h2>
                  </div>
                </div>

                <Link
                  href="/work"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white text-xs font-sans font-bold uppercase tracking-wider transition-all hover:border-[#fd5b38]/50 self-start sm:self-auto"
                >
                  <span>VIEW ALL</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#fd5b38]" />
                </Link>
              </div>
            </Reveal>

            {/* Stacking Cards Container: As user scrolls down, each card sticks and the next one overlaps with elevation */}
            <div className="relative pb-16">
              {marketingPillars.map((pillar, idx) => {
                // Tiered sticky top offset so cards form a neat layered deck
                const topOffset = 80 + idx * 30;

                return (
                  <div
                    key={pillar.id}
                    style={{
                      top: `${topOffset}px`,
                      zIndex: 10 + idx,
                    }}
                    className="sticky mb-16 sm:mb-24 rounded-3xl bg-[#0c0c0f] border border-white/12 p-6 sm:p-10 lg:p-12 shadow-[0_-12px_40px_rgba(0,0,0,0.95)] transition-all duration-300"
                  >
                    {/* Ambient Accent Light */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute top-0 right-0 w-80 h-80 bg-[#fd5b38]/10 rounded-full blur-[100px]"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                      
                      {/* Left Column: Stage Info & Headline */}
                      <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                        
                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-white">
                            Stage {pillar.num}
                          </span>
                          <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[#fd5b38]/10 border border-[#fd5b38]/20 text-[#fd5b38]">
                            {pillar.category}
                          </span>
                        </div>

                        {/* Stage Title */}
                        <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                          {pillar.title}
                        </h3>

                        {/* Headline & Description */}
                        <div className="space-y-2">
                          <p className="text-base sm:text-lg font-medium text-white/90">
                            {pillar.headline}
                          </p>
                          <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>

                        {/* Outcome Pill */}
                        <div className="p-4 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-between">
                          <span className="text-xs uppercase tracking-wider font-mono text-zinc-400">
                            Measurable Outcome:
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-emerald-400">
                            {pillar.keyOutcome}
                          </span>
                        </div>

                        {/* CTA Link */}
                        <div className="pt-2">
                          <Link
                            href="/work"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#fd5b38] text-black hover:text-white text-xs font-bold transition-all duration-300 group shadow-lg"
                          >
                            <span>Explore Applied Strategy</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </Link>
                        </div>

                      </div>

                      {/* Right Column: Visual Mockup Canvas Card */}
                      <div className="lg:col-span-7">
                        <div className="relative rounded-2xl bg-gradient-to-br from-zinc-800/40 via-zinc-900/60 to-black/80 border border-white/10 p-6 sm:p-10 min-h-[340px] sm:min-h-[420px] flex flex-col justify-between overflow-hidden">
                          
                          {/* Subtle Grid / Texture Canvas */}
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

                          {/* Top Canvas Tag */}
                          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 relative z-10">
                            <span className="uppercase tracking-widest text-[#fd5b38] font-bold">
                              EXECUTION DELIVERABLES
                            </span>
                            <span>PHASE {pillar.num}</span>
                          </div>

                          {/* Center Deliverable Cards */}
                          <div className="my-auto py-6 space-y-3.5 relative z-10 max-w-md mx-auto w-full">
                            {pillar.deliverables.map((item, dIdx) => (
                              <div
                                key={dIdx}
                                className="p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between gap-3 shadow-xl transition-all hover:border-[#fd5b38]/40 hover:translate-x-1 duration-200"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-lg bg-[#fd5b38]/10 text-[#fd5b38] flex items-center justify-center shrink-0 border border-[#fd5b38]/20">
                                    <CheckCircle2 className="w-4 h-4" />
                                  </div>
                                  <span className="text-xs sm:text-sm font-semibold text-white">
                                    {item}
                                  </span>
                                </div>

                                <span className="text-[11px] font-mono text-zinc-500 shrink-0">
                                  0{dIdx + 1}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Bottom Canvas Footer */}
                          <div className="flex items-center justify-between pt-4 border-t border-white/10 relative z-10 text-[11px] font-mono text-zinc-400">
                            <span>ALISHBA QADIR METHODOLOGY</span>
                            <span className="text-emerald-400 font-medium">100% TAILORED</span>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
