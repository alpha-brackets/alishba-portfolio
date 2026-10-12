import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Reveal } from '@/components/ui/Reveal';
import { certifications } from '@/data/certifications';
import { ArrowUpRight, GraduationCap } from 'lucide-react';

export function CertsHighlight() {
  const topCerts = certifications.slice(0, 3);

  return (
    <section className="py-12 sm:py-16 md:py-20 relative bg-[#09090b]">
      <Container>
        <div className="max-w-5xl mx-auto space-y-10">
          
          <Reveal className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
                Academic Rigor &amp; Credentials
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                Verified Foundations in Marketing &amp; Design
              </h2>
            </div>
            <Link
              href="/certifications"
              className="text-xs font-bold text-[#fd5b38] hover:text-white flex items-center gap-1.5 transition-colors self-start sm:self-auto"
            >
              <span>View All 7 Courses</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </Reveal>

          {/* Minimal 3-Card Credential Strip */}
          <div className="grid sm:grid-cols-3 gap-4">
            {topCerts.map((cert, idx) => (
              <Reveal key={cert.id} delay={idx * 80}>
                <div className="p-6 rounded-2xl clerk-card border border-white/10 space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-[#fd5b38] bg-[#fd5b38]/10 px-2.5 py-0.5 rounded-full border border-[#fd5b38]/20">
                        {cert.issuer}
                      </span>
                      <GraduationCap className="w-4 h-4 text-zinc-500" />
                    </div>
                    <h3 className="font-serif text-base font-bold text-white leading-snug">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                    <span>{cert.period}</span>
                    <span className="text-emerald-400 font-semibold">{cert.status || 'Completed'}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
