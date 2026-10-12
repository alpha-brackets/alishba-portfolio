'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Reveal } from '@/components/ui/Reveal';
import {
  Compass,
  Zap,
  TrendingUp,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';

const coreAdvantages = [
  {
    number: '01',
    badge: 'STRATEGY FIRST',
    icon: Compass,
    title: 'Market-Backed Positioning',
    tagline: 'No guesswork. No generic messaging.',
    description:
      'Before writing a single headline, I audit competitor angles and buyer hesitations to carve out an unmistakable category niche for your brand.',
    points: [
      'In-depth competitor whitespace audit',
      'High-converting value proposition',
      'Messaging that commands premium trust',
    ],
    outcome: 'Immediate category distinction',
  },
  {
    number: '02',
    badge: 'SYSTEMATIC EXECUTION',
    icon: Zap,
    title: 'Done-For-You Content Engines',
    tagline: 'Compounding reach without founder burnout.',
    description:
      'I structure 30-day editorial roadmaps, high-retention copy, and multi-channel distribution so your brand publishes with relentless consistency.',
    points: [
      'Rolling 30-day content roadmaps',
      'High-retention hooks & carousels',
      'Multi-platform publishing cadence',
    ],
    outcome: 'Hands-off authority & consistency',
  },
  {
    number: '03',
    badge: 'BUSINESS IMPACT',
    icon: TrendingUp,
    title: 'Direct-to-Inquiry Funnels',
    tagline: 'Audience attention converted into real revenue.',
    description:
      'Likes and impressions don’t pay invoices. I optimize bio real estate and friction-free inquiry flows that turn profile visitors into signed client contracts.',
    points: [
      'Profile-to-inquiry funnel optimization',
      'High-intent direct response calls-to-action',
      'Transparent weekly pipeline metrics',
    ],
    outcome: 'Measurable pipeline & client inquiries',
  },
];

export function DesignDnaBanner() {
  return (
    <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden bg-[#08080a] border-t border-white/5">
      <Container>
        <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20">
          
          {/* Section Header: Premium, Convincing, Confident */}
          <Reveal className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#fd5b38] text-xs font-sans font-semibold tracking-wide uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>Why Work With Me</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Strategic Leadership. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                Measurable Business Impact.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
              I partner directly with founders to turn audience attention into category authority, qualified inquiries, and lasting market demand.
            </p>
          </Reveal>

          {/* 3 High-Impact Cards: Scannable, Visual, Decisive */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {coreAdvantages.map((item, idx) => {
              const IconComp = item.icon;

              return (
                <Reveal key={item.number} delay={idx * 100} variant="zoom">
                  <div className="group h-full rounded-2xl sm:rounded-3xl bg-[#0e0e12] border border-white/10 p-5 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#fd5b38]/40 hover:-translate-y-1">
                    
                    <div className="space-y-5 sm:space-y-6">
                      
                      {/* Top Header Row: Step Number & Pill Tag */}
                      <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/5">
                        <span className="font-serif text-xl sm:text-2xl font-bold text-white/30 group-hover:text-[#fd5b38] transition-colors">
                          {item.number}
                        </span>
                        <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] sm:text-[10px] font-sans font-semibold text-zinc-300 tracking-wider uppercase">
                          {item.badge}
                        </span>
                      </div>

                      {/* Icon & Title */}
                      <div className="space-y-2.5 sm:space-y-3">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#fd5b38]/10 border border-[#fd5b38]/20 flex items-center justify-center text-[#fd5b38] group-hover:scale-105 transition-transform">
                          <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <h3 className="font-serif text-lg sm:text-2xl font-bold text-white group-hover:text-[#fd5b38] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs font-sans font-medium text-[#fd5b38]">
                          {item.tagline}
                        </p>
                      </div>

                      {/* Short Punchy Summary */}
                      <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                        {item.description}
                      </p>

                      {/* 3 Scannable Key Deliverables */}
                      <div className="space-y-2 pt-2.5 sm:pt-3 border-t border-white/5">
                        {item.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-2 sm:gap-2.5 text-xs text-zinc-300 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="leading-snug">{pt}</span>
                          </div>
                        ))}
                      </div>

                    </div>

                    {/* Bottom Concrete Result Strip */}
                    <div className="mt-6 sm:mt-7 pt-3 sm:pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-1.5">
                      <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-wider text-zinc-400 font-medium">
                        Outcome:
                      </span>
                      <span className="text-xs font-semibold text-emerald-400 text-right">
                        {item.outcome}
                      </span>
                    </div>

                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Bottom Action Strip: Direct Partnership Invitation */}
          <Reveal delay={250}>
            <div className="rounded-2xl bg-gradient-to-r from-white/[0.03] to-[#fd5b38]/10 border border-white/10 p-5 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] sm:text-xs font-sans font-semibold text-[#fd5b38] uppercase tracking-wider">
                    Currently Accepting Clients
                  </span>
                </div>
                <p className="text-xs sm:text-base text-white font-medium">
                  Ready to position your brand as the obvious choice in your market?
                </p>
              </div>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#fd5b38] hover:bg-[#ff7a5c] text-white text-xs font-bold transition-all hover:scale-105 shrink-0"
              >
                <span>Book a Discovery Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  );
}
