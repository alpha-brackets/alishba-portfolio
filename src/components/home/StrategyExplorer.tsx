'use client';

import React, { useState } from 'react';
import { Container } from '@/components/common/Container';
import { Reveal } from '@/components/ui/Reveal';
import {
  Compass,
  Palette,
  BarChart,
  Megaphone,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const stages = [
  {
    id: '01',
    name: 'Discovery & White Space',
    subtitle: 'Market & Consumer Analysis',
    icon: Compass,
    color: 'from-orange-500 to-amber-500',
    tagColor: 'text-orange-500 bg-orange-500/10',
    summary:
      'Pinpoint consumer psychology, audience pain points, and competitors gaps before a single post or asset is produced.',
    deliverables: [
      'Audience Persona & Sentiment Map',
      'Competitor Positioning Teardown',
      'Content Whitespace Opportunity Matrix',
    ],
    metric: '100% Data-Driven',
  },
  {
    id: '02',
    name: 'Voice, Identity & Strategy',
    subtitle: 'Brand Narrative Architecture',
    icon: Palette,
    color: 'from-indigo-500 to-purple-500',
    tagColor: 'text-indigo-500 bg-indigo-500/10',
    summary:
      'Craft a bulletproof narrative arc that elevates the brand from commoditized service to an authoritative category leader.',
    deliverables: [
      'Core Brand Messaging & Voice Handbook',
      'Visual Guidelines & Typography Alignment',
      'Multi-Channel 30-Day Content Pillar Map',
    ],
    metric: 'Zero Identity Drift',
  },
  {
    id: '03',
    name: 'High-Retention Creative Lab',
    subtitle: 'Asset & Copy Production',
    icon: Megaphone,
    color: 'from-pink-500 to-rose-500',
    tagColor: 'text-rose-500 bg-rose-500/10',
    summary:
      'Leverage in-house design rigor to create thumb-stopping carousels, clean infographics, and direct-response hooks.',
    deliverables: [
      'High-Engagement Carousel Decks',
      'High-CTR Ad Hooks & Storyboards',
      'Micro-Conversion Landing Page Copy',
    ],
    metric: 'High Organic Virality',
  },
  {
    id: '04',
    name: 'Funnels & Growth Iteration',
    subtitle: 'Publishing & KPI Optimization',
    icon: BarChart,
    color: 'from-emerald-500 to-teal-500',
    tagColor: 'text-emerald-500 bg-emerald-500/10',
    summary:
      'Manage frictionless publishing cadence and conduct weekly data post-mortems to scale winning creative formats.',
    deliverables: [
      'Automated Multi-Platform Scheduling',
      'A/B Creative & Hook Testing Cycles',
      'Weekly Actionable Growth Retrospective',
    ],
    metric: 'Measurable Conversion',
  },
];

export function StrategyExplorer() {
  const [activeStage, setActiveStage] = useState(0);
  const current = stages[activeStage];
  const Icon = current.icon;

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[var(--background)]">
      <Container>
        <div className="space-y-16 max-w-5xl mx-auto">
          
          {/* Section Header */}
          <Reveal className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--accent)] text-[var(--primary)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Campaign Architecture</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)]">
              The 4-Stage Marketing Framework
            </h2>
            <p className="text-sm sm:text-base text-[var(--muted-foreground)]">
              How ambiguous market opportunities become consistent brand growth and measurable pipeline.
            </p>
          </Reveal>

          {/* Interactive Stage Selector Bar */}
          <Reveal delay={100} variant="zoom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-2 rounded-3xl apple-glass shadow-lg">
              {stages.map((stage, idx) => {
                const StageIcon = stage.icon;
                const isSelected = activeStage === idx;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStage(idx)}
                    className={`p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between space-y-3 cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--card)] shadow-md border border-[var(--primary)]/40 scale-[1.02]'
                        : 'hover:bg-[var(--card)]/50 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black tracking-widest text-[var(--muted-foreground)]">
                        {stage.id}
                      </span>
                      <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-[var(--primary)]/10 text-[var(--primary)]' : 'text-[var(--muted-foreground)]'}`}>
                        <StageIcon className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[var(--foreground)] line-clamp-1">
                        {stage.name}
                      </div>
                      <div className="text-[11px] text-[var(--muted-foreground)] truncate mt-0.5">
                        {stage.subtitle}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Active Stage Apple Pro Showcase Display */}
          <Reveal delay={200} variant="zoom">
            <div className="rounded-3xl apple-glass p-8 sm:p-12 border border-[var(--border)] shadow-2xl relative overflow-hidden">
              {/* Background Ambient Aura for selected stage */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -top-32 -right-32 w-80 h-80 rounded-full bg-gradient-to-br ${current.color} opacity-20 blur-3xl transition-all duration-700`}
              />

              <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${current.tagColor}`}>
                      Stage {current.id} Focus
                    </span>
                    <span className="text-xs font-mono text-[var(--muted-foreground)]">
                      {current.metric}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[var(--foreground)] leading-tight">
                    {current.name}
                  </h3>

                  <p className="text-sm sm:text-base text-[var(--muted-foreground)] leading-relaxed">
                    {current.summary}
                  </p>

                  <div className="pt-2 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)] font-mono">
                      Key Deliverables &amp; Artifacts
                    </div>
                    <div className="space-y-2">
                      {current.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--foreground)] font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Interactive Visual Card */}
                <div className="md:col-span-5 p-6 sm:p-8 rounded-2xl bg-[var(--background)]/90 border border-[var(--border)] space-y-6 apple-glow-card">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6 text-[var(--primary)] animate-float" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[var(--primary)] uppercase tracking-wider">
                      Stage {current.id} / 04
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase text-[var(--muted-foreground)]">Strategic Output</div>
                    <div className="text-base font-bold text-[var(--foreground)]">
                      {current.deliverables[0]}
                    </div>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      Engineered for high-conversion omnichannel reach with zero aesthetic compromises.
                    </p>
                  </div>

                  <button
                    onClick={() => setActiveStage((activeStage + 1) % stages.length)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[var(--card)] hover:bg-[var(--accent)] border border-[var(--border)] text-xs font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Inspect Next Stage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  );
}
