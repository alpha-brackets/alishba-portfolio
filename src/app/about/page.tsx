import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/data/siteConfig';
import { skillCategories } from '@/data/skills';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About & Strategic Journey',
  description:
    'Learn how Alishba Qadir bridges consumer psychology, market research, and a UI/UX & CS foundation to build high-converting marketing.',
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Header */}
          <Reveal className="space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-[#fd5b38]">
              About &amp; Philosophy
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              Marketing, to me, starts before the marketing.
            </h1>
            <p className="text-base sm:text-xl text-zinc-400 font-light leading-relaxed">
              I am a digital marketer who starts with the market, the people in it, the problem, and the opportunity before content, campaigns, or channels.
            </p>
          </Reveal>

          {/* Genuine Narrative Story */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-5 text-base text-zinc-300 font-light leading-relaxed">
              <p>
                My interest in marketing is grounded in human behavior: why people click, why they stay, and what transforms an indifferent browser into an active brand believer.
              </p>
              <p>
                At Alpha Brackets, I manage social media marketing across agency initiatives and multiple client projects. I research industries, audiences, and relevant discussions to shape social direction, develop content ideas, and manage end-to-end creative design and publishing.
              </p>
              <p>
                When working with Hostelo, an early-stage hospitality startup, I worked directly with founders to establish their entire brand identity from scratch — designing the logo, establishing the color palette and typography, and sequencing pre-launch social content that built credibility before day one.
              </p>
              <p>
                I stay close to execution because strategy only matters when it becomes something tangible: a campaign, a content system, a stronger message, a clearer offer, or a better path to demand and leads.
              </p>
            </div>

            {/* Profile Sidebar Box */}
            <div className="p-6 rounded-3xl clerk-card border border-white/10 space-y-5">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">
                  Professional Identity
                </span>
                <div className="font-serif text-xl font-bold text-white">
                  {siteConfig.name}
                </div>
                <div className="text-xs text-[#fd5b38] font-semibold font-mono">
                  {siteConfig.title}
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-2 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
                  <span>Global Remote Collaboration</span>
                </div>
                <div className="text-[11px] text-zinc-500">
                  Open for select projects and strategist roles
                </div>
              </div>

              <Link
                href="/contact"
                className="shiny-cta w-full text-center inline-block text-xs font-bold"
              >
                Start a Conversation
              </Link>
            </div>
          </div>

          {/* Strategic Edge: UX & CS Foundation */}
          <div className="p-8 sm:p-10 rounded-3xl clerk-card border border-white/10 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#fd5b38]">
                The Cross-Disciplinary Edge
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Why a UI/UX &amp; Technical Foundation Powers Better Marketing
              </h2>
            </div>

            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              Before specializing in digital marketing, I worked as a UI/UX designer on developer-ready web and mobile products. This gives me three critical advantages as a modern marketer:
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-black/50 border border-white/5 space-y-2">
                <span className="text-xs font-bold text-white font-mono block">
                  01. Zero Creative Friction
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  I don’t just write briefs and wait on external designers; I produce high-retention carousels, decks, and brand assets directly in Figma with aesthetic rigor.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/50 border border-white/5 space-y-2">
                <span className="text-xs font-bold text-white font-mono block">
                  02. Conversion Funnel Empathy
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  I view campaigns through entire user flows. Every social click connects to an intentional, frictionless destination without drop-off surprises.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/50 border border-white/5 space-y-2">
                <span className="text-xs font-bold text-white font-mono block">
                  03. Technical Fluency
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  My Computer Science background allows fluent communication with technical founders, engineers, and modern marketing automation stacks.
                </p>
              </div>
            </div>
          </div>

          {/* Generative AI Workflow */}
          <div className="p-8 sm:p-10 rounded-3xl clerk-card border border-white/10 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#fd5b38]">
                Modern Acceleration
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                How I Use Generative AI in the Workflow
              </h2>
            </div>

            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              AI is a force multiplier for market intelligence, audience simulation, and creative iteration — never a substitute for original strategic thinking:
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-black/50 border border-white/5 space-y-2">
                <div className="text-xs font-bold text-[#fd5b38] font-mono">ChatGPT</div>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Rapid angle exploration, headline variation testing, and early-stage audience persona interview simulations.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/50 border border-white/5 space-y-2">
                <div className="text-xs font-bold text-[#6366f1] font-mono">Claude</div>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Nuanced long-form narrative synthesis, brand messaging playbooks, and structured editorial frameworks.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/50 border border-white/5 space-y-2">
                <div className="text-xs font-bold text-emerald-400 font-mono">Gemini</div>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Multimodal competitive research, industry trend cross-referencing, and visual concept exploration.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Taxonomy */}
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                Capabilities
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Core Competencies &amp; Tooling
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {skillCategories.map((group, idx) => (
                <Reveal key={group.category} delay={idx * 80} variant="zoom">
                  <div className="h-full p-6 rounded-3xl clerk-card border border-white/10 space-y-3">
                    <h3 className="font-serif text-base font-bold text-white">
                      {group.category}
                    </h3>
                    <p className="text-xs text-zinc-400 font-light">
                      {group.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {group.skills.map((s) => (
                        <span
                          key={s}
                          className="text-[11px] font-mono bg-black/60 border border-white/5 text-zinc-300 px-2.5 py-1 rounded-lg"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <Reveal variant="zoom">
            <div className="p-8 sm:p-12 rounded-3xl clerk-card border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#fd5b38] uppercase tracking-wider">
                  Let’s Talk
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Have an upcoming launch or marketing challenge?
                </h3>
                <p className="text-sm text-zinc-400 font-light max-w-lg">
                  Let’s build a campaign that connects with audiences and drives real business leads.
                </p>
              </div>
              <Link
                href="/contact"
                className="shiny-cta shrink-0 text-xs font-bold text-white inline-flex items-center gap-1.5"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Reveal>

        </div>
      </Container>
    </div>
  );
}
