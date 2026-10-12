import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowUpRight, Mail } from 'lucide-react';

const projectTypes = [
  { id: 'brand-launch', label: 'Building a Brand from Zero' },
  { id: 'content-strategy', label: 'Social & Content Growth Pipeline' },
  { id: 'marketing-audit', label: 'Marketing Audit & Whitespace Teardown' },
  { id: 'remote-contract', label: 'Remote Marketing Strategist Role' },
];

export function QuickContactCta() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#09090b] border-t border-white/10">
      {/* Background Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#fd5b38]/10 rounded-full blur-[140px]"
      />

      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
          
          <Reveal className="space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-[#fd5b38]">
              Ready to Collaborate
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              If you’re building something and need marketing that starts with thinking — let’s talk.
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
              Whether you need a full startup brand identity, an ongoing social strategy, or a clearer path to leads, I’d love to learn what you’re working on.
            </p>
          </Reveal>

          {/* Quick Select Buttons */}
          <Reveal delay={120}>
            <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
              {projectTypes.map((opt) => (
                <Link
                  key={opt.id}
                  href={`/contact?inquiry=${opt.id}`}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-zinc-300 hover:text-white transition-all flex items-center gap-1.5 hover:scale-[1.02]"
                >
                  <span>{opt.label}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#fd5b38]" />
                </Link>
              ))}
            </div>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 max-w-full">
              <Link
                href="/contact"
                className="shiny-cta inline-flex items-center justify-center gap-2 text-sm font-bold text-white w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
              <a
                href="mailto:alishbaqadir058@gmail.com"
                className="btn-glass px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 text-zinc-200 w-full sm:w-auto max-w-full"
              >
                <Mail className="w-4 h-4 text-[#fd5b38] shrink-0" />
                <span className="truncate">alishbaqadir058@gmail.com</span>
              </a>
            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  );
}
