'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import {
  Calendar,
  Sparkles,
  ArrowUpRight,
  Send,
  Layers,
  Compass,
  CheckCircle2,
} from 'lucide-react';

const processSteps = [
  {
    stepNumber: '01',
    stepLabel: 'step 1',
    title: "Let's Get In Touch",
    description:
      'Start by reaching out through our contact page. Fill out the inquiry form or book a 1-on-1 discovery call to discuss your brand vision, marketing roadblocks, and revenue goals in detail.',
    icon: Calendar,
    timeline: 'Day 1 - 3',
    deliverable: 'Discovery session & growth roadmap audit',
    badge: 'Initial Alignment',
    highlights: ['Deep dive into brand goals', 'Competitor review', 'Direct strategy kickoff'],
  },
  {
    stepNumber: '02',
    stepLabel: 'step 2',
    title: 'Brand Positioning & Strategic Blueprint',
    description:
      'I research your target audience, identify competitor blindspots, and craft an authoritative value proposition. We lock in messaging that speaks directly to high-intent buyers.',
    icon: Compass,
    timeline: 'Week 1 - 2',
    deliverable: 'Messaging guide & audience persona brief',
    badge: 'Strategy Formulation',
    highlights: ['Unique value proposition', 'Angle validation', 'Objection-tackling copy rules'],
  },
  {
    stepNumber: '03',
    stepLabel: 'step 3',
    title: 'Campaign Architecture & Content Engine',
    description:
      'I map out 30-day editorial roadmaps, high-converting copy banks, and multichannel distribution schedules across core digital and social channels to generate steady, compounding demand.',
    icon: Layers,
    timeline: 'Week 2 - 4',
    deliverable: '30-Day editorial calendar & high-retention creative bank',
    badge: 'Execution & Launch',
    highlights: ['Multi-platform content bank', 'Hook & headline variants', 'Visual aesthetic templates'],
  },
  {
    stepNumber: '04',
    stepLabel: 'step 4',
    title: 'Optimization, Conversion & Scaling',
    description:
      'We review analytics, engagement signals, and inquiry flow. I refine headline hooks, profile conversion funnels, and call-to-actions to turn audience engagement into contracted clients.',
    icon: Sparkles,
    timeline: 'Continuous',
    deliverable: 'Weekly metrics dashboard & conversion funnel tuning',
    badge: 'Growth Compounding',
    highlights: ['Inquiry optimization', 'A/B messaging iteration', 'Measurable pipeline tracking'],
  },
];

export function StrategicProcess() {
  return (
    <section id="process" className="relative py-12 sm:py-16 md:py-24 bg-[#070709] border-y border-white/5 overflow-hidden">

      <Container>
        <div className="max-w-4xl mx-auto space-y-10 sm:space-y-14">
          
          {/* Header Block inspired by Portfolix / Buzz Interactive */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#fd5b38] text-xs font-mono tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>The Strategy Behind Exceptional Results</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12]">
                Our Proven Process
              </h2>
              <p className="text-zinc-400 text-sm max-w-md font-light leading-relaxed">
                A seamless, transparent step-by-step methodology taking your brand from initial discovery to measurable conversion.
              </p>
            </div>
          </div>

          {/* Connected Step Cards Sequence (Portfolix Process Style) */}
          <div className="relative space-y-6 md:space-y-8">

            {processSteps.map((item, idx) => {
              const IconComp = item.icon;
              const isLast = idx === processSteps.length - 1;

              return (
                <div key={item.stepNumber} className="flex items-start gap-2.5 sm:gap-6 group">
                  
                  {/* Left Column: Dedicated Timeline Node & Track */}
                  <div className="flex flex-col items-center shrink-0 w-4 sm:w-8 self-stretch">
                    {/* Node Dot aligned with top card content */}
                    <div className="w-4 h-4 sm:w-5 sm:h-5 mt-5 sm:mt-6 rounded-full bg-[#fd5b38] border-[3px] border-[#070709] ring-2 ring-[#fd5b38]/50 group-hover:ring-[#fd5b38] group-hover:scale-110 transition-all duration-300 flex items-center justify-center shrink-0 z-10" />
                    
                    {/* Continuous Vertical Rail connecting through to the end */}
                    <div className="w-[2px] flex-1 my-2 bg-gradient-to-b from-[#fd5b38] via-white/20 to-white/10" />
                  </div>

                  {/* Right Column: Portfolix Clean Card */}
                  <div className="flex-1 min-w-0 p-4 sm:p-7 md:p-9 rounded-2xl sm:rounded-3xl bg-[#0f0f13] border border-white/10 hover:border-[#fd5b38]/40 transition-all duration-300">
                    
                    {/* Top Row: Step indicator & Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 sm:pb-4 border-b border-white/5">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <span className="text-[11px] sm:text-xs font-sans font-medium text-zinc-400">
                          {item.stepLabel}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-zinc-600 hidden xs:inline-block" />
                        <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full bg-[#fd5b38]/10 border border-[#fd5b38]/20 text-[10px] sm:text-[11px] font-sans font-semibold text-[#fd5b38] tracking-wide uppercase">
                          {item.badge}
                        </span>
                      </div>
                      <span className="text-[11px] sm:text-xs font-sans font-medium text-zinc-400">
                        {item.timeline}
                      </span>
                    </div>

                    {/* Content Section */}
                    <div className="pt-4 sm:pt-5 space-y-3.5 sm:space-y-4">
                      <div className="flex items-start justify-between gap-3 sm:gap-4">
                        <h3 className="font-serif text-lg sm:text-2xl font-bold text-white group-hover:text-[#fd5b38] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 text-zinc-300 group-hover:text-white group-hover:bg-[#fd5b38]/10 group-hover:border-[#fd5b38]/30 transition-all">
                          <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                      </div>

                      <p className="text-xs sm:text-base text-zinc-300 font-light leading-relaxed">
                        {item.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 pt-1 sm:pt-2">
                        {item.highlights.map((highlight, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] sm:text-xs text-zinc-300 font-medium"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="truncate">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Bottom Deliverable & Step Counter Stamp */}
                      <div className="pt-3 sm:pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                        <div className="text-[11px] sm:text-xs text-zinc-400 min-w-0">
                          <span className="text-zinc-400 font-sans text-[10px] sm:text-[11px] font-semibold uppercase block tracking-wider">
                            Deliverable:
                          </span>
                          <span className="font-medium text-white truncate block sm:inline">{item.deliverable}</span>
                        </div>
                        <div className="font-sans text-xs sm:text-sm font-semibold text-zinc-400 select-none shrink-0">
                          — {item.stepNumber}
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}

          </div>

          {/* Bottom Call to Action strip */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-white/[0.04] to-[#fd5b38]/10 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-serif text-lg font-bold text-white">
                Have a project or campaign ready to launch?
              </h4>
              <p className="text-xs text-zinc-400">
                Let’s talk through your timeline, audience objectives, and conversion plan.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#fd5b38] hover:bg-[#ff7a5c] text-white text-xs font-bold transition-all hover:scale-105 shrink-0"
            >
              <span>Get Started Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
}
