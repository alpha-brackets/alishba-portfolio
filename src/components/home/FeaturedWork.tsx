import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Reveal } from '@/components/ui/Reveal';
import { caseStudies } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';

export function FeaturedWork() {
  const featured = caseStudies.filter((c) => c.featured);

  return (
    <section className="py-24 md:py-32 relative">
      <Container>
        <div className="space-y-16 max-w-5xl mx-auto">
          
          {/* Section Header */}
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-[#fd5b38]">
                Proven Campaigns &amp; Identity Work
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Selected Case Studies
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 font-light max-w-xl">
                Real briefs, clear strategic decisions, and measurable deliverables built for startups and client brands.
              </p>
            </div>
            
            <Link
              href="/work"
              className="btn-glass px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 self-start md:self-end"
            >
              <span>Explore All Work</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </Reveal>

          {/* Equal Cinematic Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featured.map((project, idx) => (
              <Reveal key={project.slug} delay={idx * 120} variant="zoom">
                <Link
                  href={`/work/${project.slug}`}
                  className="group block h-full clerk-card rounded-3xl p-8 sm:p-10 border border-white/10 clerk-card-hover transition-all"
                >
                  <div className="flex flex-col justify-between h-full space-y-8">
                    <div className="space-y-5">
                      
                      {/* Top Meta */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#fd5b38] px-3 py-1 rounded-full bg-[#fd5b38]/10 border border-[#fd5b38]/20 font-mono">
                          {project.client}
                        </span>
                        <span className="text-xs font-mono text-zinc-400">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-[#fd5b38] transition-colors leading-snug">
                        {project.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-sm text-zinc-300 leading-relaxed font-light">
                        {project.summary}
                      </p>

                      {/* Primary Metrics Strip */}
                      <div className="grid grid-cols-3 gap-2.5 pt-2">
                        {project.results.map((res, i) => (
                          <div key={i} className="p-3 rounded-xl bg-black/50 border border-white/5">
                            <div className="text-xs sm:text-sm font-bold text-white truncate">
                              {res.metric}
                            </div>
                            <div className="text-[10px] text-zinc-400 truncate mt-0.5">
                              {res.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Link Indicator */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#fd5b38]">
                      <span>Inspect Project Architecture</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
