'use client';

import React, { useState } from 'react';
import { Container } from '@/components/common/Container';
import { Reveal } from '@/components/ui/Reveal';
import {
  TrendingUp,
  FileSpreadsheet,
  Palette,
  MousePointerClick,
  Layers,
} from 'lucide-react';

export function InteractiveMarketingShowcase() {
  const [activeArtifact, setActiveArtifact] = useState<number>(0);

  const artifacts = [
    {
      id: 0,
      title: 'Performance & ROAS Dashboard',
      subtitle: 'Ad Spend & Organic Reach Modeling',
      icon: TrendingUp,
      accent: 'from-emerald-500 to-teal-500',
      badge: 'Analytics Engine',
      stat: '3.4x ROAS',
      statLabel: 'Average campaign performance index',
      details: 'Weekly synthesis of ad spend, cost per acquisition, and organic retention curves to continuously adjust creative allocation.',
      features: ['Meta Ads Manager Data', 'Organic Virality Metrics', 'Spend Efficiency Post-Mortems'],
    },
    {
      id: 1,
      title: '30-Day Multi-Channel Editorial OS',
      subtitle: 'Structured Content Pillars & Scheduling',
      icon: FileSpreadsheet,
      accent: 'from-indigo-500 to-blue-500',
      badge: 'Content System',
      stat: '100% Cadence',
      statLabel: 'Zero missed publishing windows',
      details: 'Four distinct content pillars (Awareness, Education, Social Proof, Conversion) mapped across LinkedIn, Instagram, and web channels.',
      features: ['Rolling Monthly Calenders', 'Hook Testing Repository', 'Buffer & Meta Publishing'],
    },
    {
      id: 2,
      title: 'Zero-to-Launch Brand Identity Matrix',
      subtitle: 'Visual & Narrative Architecture',
      icon: Palette,
      accent: 'from-orange-500 to-rose-500',
      badge: 'Brand Architecture',
      stat: '100% Custom',
      statLabel: 'Built from ground up for startups',
      details: 'Typography scales, primary/secondary color palettes, logo systems, and founder voice playbooks executed with design-system rigor.',
      features: ['Figma Brand Systems', 'Consistent Typography Rules', 'Pre-Launch Buzz Assets'],
    },
  ];

  const current = artifacts[activeArtifact];
  const Icon = current.icon;

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[var(--card)]/30 border-y border-[var(--border)]">
      <Container>
        <div className="space-y-16 max-w-5xl mx-auto">
          
          {/* Header */}
          <Reveal className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--primary)]/10 text-[var(--primary)]">
              <Layers className="w-3.5 h-3.5" />
              <span>Tangible Work Artifacts</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)]">
              Inside the Marketing Studio
            </h2>
            <p className="text-sm sm:text-base text-[var(--muted-foreground)]">
              Explore the actual systems, dashboards, and strategic assets deployed to drive clients forward.
            </p>
          </Reveal>

          {/* Interactive Bento Showcase Grid */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            
            {/* Left Selector List */}
            <div className="md:col-span-5 space-y-3">
              {artifacts.map((art, idx) => {
                const ArtIcon = art.icon;
                const isSelected = activeArtifact === idx;
                return (
                  <Reveal key={art.id} delay={idx * 80}>
                    <div
                      onClick={() => setActiveArtifact(idx)}
                      className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 ${
                        isSelected
                          ? 'apple-glass border-[var(--primary)]/60 shadow-lg scale-[1.02]'
                          : 'bg-[var(--card)] border-[var(--border)] hover:border-[var(--primary)]/30 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-[var(--primary)] text-white shadow-xs' : 'bg-[var(--background)] text-[var(--muted-foreground)]'}`}>
                          <ArtIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[var(--foreground)]">{art.title}</div>
                          <div className="text-[11px] text-[var(--muted-foreground)] mt-0.5">{art.subtitle}</div>
                        </div>
                      </div>
                      <MousePointerClick className={`w-4 h-4 transition-transform ${isSelected ? 'text-[var(--primary)] scale-110' : 'text-transparent'}`} />
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Right Large Interactive Apple-Grade Monitor Preview */}
            <div className="md:col-span-7">
              <Reveal delay={150} variant="zoom">
                <div className="rounded-3xl apple-glass p-8 sm:p-10 border border-[var(--border)] shadow-2xl relative overflow-hidden space-y-6">
                  {/* Top Bar of the Mock Studio Monitor */}
                  <div className="flex items-center justify-between pb-6 border-b border-[var(--border)]">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="text-xs font-mono text-[var(--muted-foreground)] ml-2">artifact_preview.sys</span>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--accent)] text-[var(--primary)] uppercase tracking-wider">
                      {current.badge}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-amber-500 text-white shadow-md">
                        <Icon className="w-6 h-6 animate-float" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[var(--foreground)]">
                          {current.title}
                        </h3>
                        <p className="text-xs text-[var(--muted-foreground)]">{current.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed pt-2">
                      {current.details}
                    </p>

                    {/* Stat Highlight */}
                    <div className="p-5 rounded-2xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-serif font-black text-[var(--foreground)]">
                          {current.stat}
                        </div>
                        <div className="text-xs text-[var(--muted-foreground)] mt-0.5">
                          {current.statLabel}
                        </div>
                      </div>
                      <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Verified Inbound Result
                      </span>
                    </div>

                    {/* Features Pills */}
                    <div className="pt-2">
                      <div className="text-xs font-mono font-bold uppercase text-[var(--muted-foreground)] mb-2">
                        Deliverable Specifications
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {current.features.map((feat, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-lg bg-[var(--card)] border border-[var(--border)] text-xs font-medium text-[var(--foreground)] shadow-2xs"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
