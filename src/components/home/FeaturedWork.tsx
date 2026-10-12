'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Reveal } from '@/components/ui/Reveal';
import { caseStudies } from '@/data/projects';
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export function FeaturedWork() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const activeProject = caseStudies[currentSlide];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#09090b]">
      <Container>
        <div className="space-y-10 max-w-6xl mx-auto">
          
          {/* ── Webfolio Style Header: "OUR PORTFOLIO / SELECTED WORKS." + VIEW ALL ── */}
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#fd5b38] uppercase">
                OUR PORTFOLIO
              </span>
              <div className="flex items-baseline gap-2">
                <h2 className="font-sans text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
                  SELECTED <span className="font-serif italic font-normal text-zinc-300">WORKS.</span>
                </h2>
              </div>
            </div>
            
            <div className="flex items-center gap-3 self-start sm:self-auto">
              {/* Slide Counter */}
              <span className="text-xs font-mono text-zinc-400 mr-2">
                0{currentSlide + 1} / 0{caseStudies.length}
              </span>

              {/* Slider Arrow Controls */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous Project"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next Project"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <Link
                href="/work"
                className="ml-2 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white text-xs font-sans font-bold uppercase tracking-wider transition-all hover:border-[#fd5b38]/50"
              >
                <span>VIEW ALL</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#fd5b38]" />
              </Link>
            </div>
          </Reveal>

          {/* ── Main Webfolio Swiper Card ── */}
          <div className="relative rounded-3xl bg-[#0e0e11] border border-white/10 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl">
            
            {/* Ambient Background Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-[#fd5b38]/10 rounded-full blur-[120px]"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Left Column: Project Info & Description */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-white">
                    {activeProject.client}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[#fd5b38]/10 border border-[#fd5b38]/20 text-[#fd5b38]">
                    {activeProject.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {activeProject.title}
                </h3>

                {/* Summary Body */}
                <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                  {activeProject.summary}
                </p>

                {/* Measurable Results Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                  {activeProject.results.map((res, i) => (
                    <div key={i} className="p-3 rounded-2xl bg-black/50 border border-white/5">
                      <div className="text-xs sm:text-sm font-bold text-[#fd5b38]">
                        {res.metric}
                      </div>
                      <div className="text-[10px] text-zinc-400 truncate mt-0.5">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Link to Case Study */}
                <div className="pt-4">
                  <Link
                    href={`/work/${activeProject.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#fd5b38] text-black hover:text-white text-xs font-bold transition-all duration-300 group shadow-lg"
                  >
                    <span>View Case Study Architecture</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

              </div>

              {/* Right Column: Visual Mockup Canvas (Inspired by Webfolio Hand/Phone Canvas) */}
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl bg-gradient-to-br from-zinc-800/40 via-zinc-900/60 to-black/80 border border-white/10 p-6 sm:p-10 min-h-[360px] sm:min-h-[460px] flex flex-col justify-between overflow-hidden">
                  
                  {/* Subtle Grid / Texture Canvas */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

                  {/* Top Canvas Tag */}
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 relative z-10">
                    <span className="uppercase tracking-widest text-[#fd5b38] font-bold">
                      DELIVERABLES &amp; EXECUTION
                    </span>
                    <span>{activeProject.timeline}</span>
                  </div>

                  {/* Center Canvas Mockup Architecture */}
                  <div className="my-auto py-6 space-y-4 relative z-10">
                    <div className="max-w-md mx-auto space-y-3">
                      {activeProject.deliverables.slice(0, 3).map((item, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between gap-3 shadow-xl transition-all hover:border-[#fd5b38]/40"
                        >
                          <div className="space-y-0.5">
                            <span className="text-xs font-bold text-white block">
                              {item.title}
                            </span>
                            <span className="text-[11px] text-zinc-400 font-light line-clamp-1">
                              {item.description}
                            </span>
                          </div>
                          <span className="w-6 h-6 rounded-full bg-[#fd5b38]/15 text-[#fd5b38] flex items-center justify-center shrink-0 text-xs font-mono font-bold">
                            0{idx + 1}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Canvas Footer: Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10 relative z-10">
                    {activeProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-black/60 border border-white/5 text-[10px] font-mono text-zinc-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

            </div>

            {/* Bottom Dots Pagination */}
            <div className="flex items-center justify-center gap-2 pt-8">
              {caseStudies.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx
                      ? 'w-8 bg-[#fd5b38]'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
