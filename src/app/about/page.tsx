import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/data/siteConfig';
import {
  ArrowUpRight,
  Heart,
  Compass,
  Sparkles,
  Zap,
  Target,
  CheckCircle2,
  Users,
  ShieldCheck,
  Flame,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Alishba Qadir — Story & Philosophy',
  description:
    'Discover Alishba Qadir’s story: why great products fail without clear positioning, why founders trust her with their marketing, and what it truly feels like to partner with her.',
};

const workingPillars = [
  {
    num: '01',
    title: 'I start with the doubt, not the excitement.',
    description:
      'Most marketers begin by writing slogans about how amazing your product is. I do the opposite: I go looking for why an intelligent customer will say no. Once we dismantle their hesitations with honesty, marketing becomes easy.',
    badge: 'Real Empathy',
  },
  {
    num: '02',
    title: 'Zero agency telephone games.',
    description:
      'Because I come from a UI/UX and Computer Science foundation, I don’t write vague creative briefs and wait two weeks for a third-party designer. I design the visuals, write the hooks, and understand the conversion tech myself. Ideas ship in days, not months.',
    badge: 'Direct Execution',
  },
  {
    num: '03',
    title: 'Your runway and reputation are sacred.',
    description:
      'I have sat side-by-side with early-stage founders pouring their personal savings into a launch. I know every dollar and every post counts. I treat your brand budget and audience trust with the same vigilance I would give my own business.',
    badge: 'Founder Alignment',
  },
  {
    num: '04',
    title: 'Clarity over cleverness, always.',
    description:
      'Buzzwords and jargon are usually hiding a lack of understanding. If a 12-year-old or an exhausted buyer can’t immediately grasp what you do and why it matters, we simplify until it cuts through instantly.',
    badge: 'Relentless Focus',
  },
];

const reasonsToConnect = [
  {
    title: 'You have a great product, but explaining it feels exhausting.',
    description:
      'You know what you built is powerful, but when someone asks you what it does, you find yourself using too many words or losing their attention. I help you find that single, razor-sharp angle that makes people say: "Wait, tell me more."',
  },
  {
    title: 'You are tired of generic social media agency fluff.',
    description:
      'Stock photos, uninspired quotes, and "Happy Monday" posts that bring zero inbound leads. I build structured, educational, high-retention content calendars that actually establish authority and warm up buyers.',
  },
  {
    title: 'You need an accountable marketing partner, not an order-taker.',
    description:
      'You don’t have time to micromanage someone. You need someone who proactively audits your competitors, pitches fresh ideas with proof, designs the assets, and owns the calendar from day one.',
  },
];

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 md:py-24">
      <Container>
        <div className="max-w-4xl mx-auto space-y-16 sm:space-y-24">
          
          {/* ── CHAPTER 1: HERO MANIFESTO ── */}
          <Reveal className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#fd5b38] text-xs font-mono font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Story Behind The Work</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              I didn’t get into marketing to make noise. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fd5b38] via-orange-400 to-amber-300">
                I got in to help great things get heard.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
              There is nothing more frustrating than seeing a brilliant product, a thoughtful service, or a hardworking founder get ignored simply because their message was crowded, vague, or lost in the feed.
            </p>
          </Reveal>

          {/* ── CHAPTER 2: THE PERSONAL NARRATIVE (HER STORY) ── */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Story Flow */}
            <div className="md:col-span-8 space-y-6 text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0d0d10] border border-white/10 space-y-4">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Where it began: Watching products struggle to be understood
                </h2>
                <p>
                  My journey started at the intersection of <span className="text-white font-medium">Computer Science</span> and <span className="text-white font-medium">User Interface Design</span>. In tech, you quickly notice something sobering: building a great solution is only half the battle.
                </p>
                <p>
                  Teams would spend 8 months perfecting an application, only to launch it into silence. The problem wasn’t the code. The problem was that <span className="text-white font-medium">nobody took the time to study the person on the other end of the screen</span> — their frustrations, their vocabulary, and the exact reasons they were afraid to switch from their current habits.
                </p>
              </div>

              <div className="space-y-5 pt-2">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                  Why I believe marketing starts before the marketing
                </h3>
                <p>
                  Most people treat marketing as the last coat of paint: throw together some graphics, write a clever tagline, and buy ads. But if the core positioning hasn’t found category whitespace, you are simply paying to shout into a crowded room.
                </p>
                <p>
                  That’s why my methodology begins with <span className="text-white font-medium">Whitespace Teardowns &amp; Pre-Launch Positioning</span>. Before touching creative software, I study every alternative and competitor in your space, asking: &ldquo;What is the one promise competitors are afraid to make? What friction is everyone ignoring?&rdquo; Uncovering that single answer defines your entire identity, your messaging angles, and the reason high-intent buyers choose you without hesitation.
                </p>
                <p>
                  From there, I translate positioning into <span className="text-white font-medium">High-Retention Editorial Architectures</span>. Rather than publishing generic updates, every carousel, campaign narrative, and distribution hook is engineered around customer psychology, educating your market, building compounding brand authority, and creating a direct bridge from passive attention to qualified inbound inquiries.
                </p>
              </div>

            </div>

            {/* Profile Sidebar: Trust & Humanity */}
            <div className="md:col-span-4 space-y-6">
              
              <div className="p-6 rounded-3xl bg-[#0d0d10] border border-white/10 space-y-5">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#fd5b38]">
                    About Me
                  </span>
                  <div className="font-serif text-2xl font-bold text-white">
                    {siteConfig.name}
                  </div>
                  <div className="text-xs text-zinc-400 font-mono">
                    Digital Marketer &amp; Strategist
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-3 text-xs text-zinc-300">
                  <div className="flex items-start gap-2">
                    <Heart className="w-4 h-4 text-[#fd5b38] shrink-0 mt-0.5" />
                    <span>Driven by consumer psychology, honesty, and clear aesthetics.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>7 Specialization Courses completed with Univ. of Illinois Urbana-Champaign.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Direct builder: writes, researches, designs in Figma &amp; executes.</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="w-full shiny-cta text-center inline-flex items-center justify-center gap-1.5 text-xs font-bold text-white py-3 rounded-full"
                  >
                    <span>Say Hello &amp; Connect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Quote Card */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-xs font-serif italic text-zinc-400 leading-snug block">
                  &ldquo;A customer never buys because they understand you. They buy because they feel understood by you.&rdquo;
                </span>
                <span className="text-[10px] font-mono text-[#fd5b38] font-semibold block uppercase">
                  — The Guiding Principle
                </span>
              </div>

            </div>

          </div>

          {/* ── CHAPTER 3: WHY PEOPLE RELATE & CONNECT WITH ALISHBA ── */}
          <div className="space-y-8 pt-4">
            
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#fd5b38]">
                Common Ground
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                You’ll probably enjoy working with me if...
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {reasonsToConnect.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#0f0f13] border border-white/10 flex flex-col justify-between space-y-4 hover:border-[#fd5b38]/40 transition-colors"
                >
                  <div className="space-y-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#fd5b38]/10 text-[#fd5b38] flex items-center justify-center font-mono font-bold text-xs">
                      0{idx + 1}
                    </div>
                    <h3 className="font-serif text-base font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* ── CHAPTER 4: HOW I SHOW UP (THE 4 PRINCIPLES) ── */}
          <div className="space-y-8 pt-4">
            
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#fd5b38]">
                My Work Ethic
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                How I partner with you: No fluff, complete accountability.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {workingPillars.map((pillar) => (
                <div
                  key={pillar.num}
                  className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0d0d11] border border-white/10 space-y-4 hover:border-white/20 transition-all"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="font-mono text-xs font-bold text-[#fd5b38]">
                      {pillar.num}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* ── CHAPTER 5: CALL TO ACTION (LET'S TALK) ── */}
          <Reveal variant="zoom">
            <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-white/[0.03] to-[#fd5b38]/10 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#fd5b38] uppercase tracking-wider">
                  Open For Collaboration
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Have a brand or story ready to be told?
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-xl">
                  Whether you need strategic positioning for a new venture or a steady marketing engine, let’s grab 20 minutes to see if we’re a fit.
                </p>
              </div>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#fd5b38] hover:bg-[#ff7a5c] text-white text-xs font-bold transition-all hover:scale-105 shrink-0"
              >
                <span>Let’s Start a Conversation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>

        </div>
      </Container>
    </div>
  );
}
