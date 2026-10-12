import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/common/Container';
import { Reveal } from '@/components/ui/Reveal';
import { ContactForm } from '@/components/contact/ContactForm';
import { SocialLinksGrid } from '@/components/contact/SocialLinksGrid';

export const metadata: Metadata = {
  title: 'Contact & Project Inquiries',
  description:
    'Start a conversation with Alishba Qadir for digital marketing campaigns, startup brand launches, and social growth strategy.',
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Header */}
          <Reveal className="space-y-4 max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-[#fd5b38]">
              Get In Touch
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              Let&apos;s talk about what you&apos;re building.
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
              Tell me what you&apos;re working on — an upcoming startup brand launch, an editorial content pipeline, or a growth challenge. I&apos;ll tell you if and how I can help.
            </p>
          </Reveal>

          {/* Contact Layout Grid */}
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="p-8 rounded-3xl clerk-card border border-white/10 animate-pulse h-96" />
                }
              >
                <ContactForm />
              </Suspense>
            </div>

            <div className="lg:col-span-5">
              <SocialLinksGrid />
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}
