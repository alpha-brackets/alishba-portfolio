'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Reveal } from '@/components/ui/Reveal';
import { caseStudies } from '@/data/projects';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

type FilterType = 'All' | 'Brand & Launch' | 'Marketing Strategy' | 'UX & Product DNA';

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const filteredProjects =
    activeFilter === 'All'
      ? caseStudies
      : caseStudies.filter((c) => c.category === activeFilter);

  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="space-y-16 max-w-5xl mx-auto">
          
          {/* Page Header */}
          <Reveal className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-[#fd5b38]">
              Portfolio Directory
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              Real briefs. Real thinking. Real results.
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
              From zero-to-launch startup brand positioning to multi-channel social growth systems and product UX foundations.
            </p>
          </Reveal>

          {/* Filter Chips */}
          <Reveal delay={100}>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {(['All', 'Marketing Strategy', 'Brand & Launch', 'UX & Product DNA'] as FilterType[]).map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={cn(
                      'px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer',
                      activeFilter === category
                        ? 'bg-[#fd5b38] text-white font-semibold shadow-lg shadow-[#fd5b38]/20'
                        : 'bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10'
                    )}
                  >
                    {category === 'UX & Product DNA' ? 'UX Journey (Foundation)' : category}
                  </button>
                )
              )}
            </div>
          </Reveal>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <Reveal key={project.slug} delay={idx * 100} variant="zoom">
                <div className="group h-full clerk-card rounded-3xl p-8 border border-white/10 clerk-card-hover flex flex-col justify-between space-y-6">
                  <div className="space-y-5">
                    
                    {/* Meta */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#fd5b38] bg-[#fd5b38]/10 px-3 py-1 rounded-full border border-[#fd5b38]/20">
                        {project.client}
                      </span>
                      <span className="text-xs text-zinc-400 flex items-center gap-1 font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        {project.timeline}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl font-bold text-white group-hover:text-[#fd5b38] transition-colors leading-snug">
                      <Link href={`/work/${project.slug}`}>{project.title}</Link>
                    </h2>

                    <p className="text-sm text-zinc-300 font-light leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Results / Deliverables */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
                      {project.results.map((res, i) => (
                        <div key={i} className="p-3 rounded-xl bg-black/60 border border-white/5">
                          <div className="text-xs font-bold text-white truncate">{res.metric}</div>
                          <div className="text-[10px] text-zinc-400 truncate mt-0.5">{res.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono text-zinc-400 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-500">{project.category}</span>
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#fd5b38] group-hover:text-white transition-colors"
                    >
                      <span>Read Story</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </Container>
    </div>
  );
}
