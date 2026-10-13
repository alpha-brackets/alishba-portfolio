'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { InquiryCategory } from '@/types';
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Streamlined 4 Core Project Tracks (Instant 1-click decision)
const quickTracks: { id: InquiryCategory; label: string }[] = [
  { id: 'brand-identity', label: 'Brand Launch from Zero' },
  { id: 'social-growth', label: 'Social Content & Growth' },
  { id: 'content-strategy', label: 'Positioning & Messaging' },
  { id: 'consulting', label: 'Strategic Audit & Advisory' },
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const queryInquiry = (searchParams.get('inquiry') as InquiryCategory) || 'brand-identity';
  const initialCategory = quickTracks.some((t) => t.id === queryInquiry)
    ? queryInquiry
    : 'brand-identity';

  const [selectedTrack, setSelectedTrack] = useState<InquiryCategory>(initialCategory);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const activeTrackObj = quickTracks.find((t) => t.id === selectedTrack) || quickTracks[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          inquiryType: activeTrackObj.label,
          message: message.trim(),
        }),
      });

      if (!res.ok) {
        throw new Error('Something went wrong. Please check your details and try again.');
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.error('Contact submission error:', err);
      setErrorMessage(
        err instanceof Error ? err.message : 'Failed to send inquiry. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl bg-[#0c0c0f] border border-white/10 p-6 sm:p-9 shadow-2xl relative overflow-hidden">
      
      {/* Ambient Corner Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 bg-[#fd5b38]/10 rounded-full blur-[90px]"
      />

      {submitted ? (
        <div className="py-12 px-4 text-center space-y-5">
          <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
            <Check className="w-7 h-7" />
          </div>
          <div className="space-y-1.5">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Inquiry Sent Successfully
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed font-light">
              Thanks for reaching out, <span className="text-white font-medium">{name}</span>. Your brief has been sent directly to Alishba. She will review your goals and reply within 24 hours.
            </p>
          </div>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setName('');
                setEmail('');
                setCompany('');
                setMessage('');
              }}
              className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-semibold text-zinc-300 hover:text-white transition cursor-pointer"
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          
          {/* Track Selector: 4 Clean Clickable Chips */}
          <div className="space-y-2.5">
            <label className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 flex items-center justify-between">
              <span>What do you need help with?</span>
              <span className="text-[10px] text-zinc-500 lowercase font-normal">select one</span>
            </label>

            <div className="grid grid-cols-2 gap-2">
              {quickTracks.map((track) => {
                const isSelected = track.id === selectedTrack;
                return (
                  <button
                    type="button"
                    key={track.id}
                    onClick={() => setSelectedTrack(track.id)}
                    className={cn(
                      'px-3.5 py-3 rounded-xl text-left text-xs font-medium transition-all duration-200 cursor-pointer flex items-center justify-between border',
                      isSelected
                        ? 'bg-[#fd5b38]/10 border-[#fd5b38] text-white shadow-sm ring-1 ring-[#fd5b38]'
                        : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:border-white/20 hover:text-white'
                    )}
                  >
                    <span className="truncate">{track.label}</span>
                    {isSelected && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#fd5b38] shrink-0 ml-1.5" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {errorMessage && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400">
              {errorMessage}
            </div>
          )}

          {/* Contact Fields: Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-medium text-zinc-300">
                Your Name <span className="text-[#fd5b38]">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Morgan"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#fd5b38] transition"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-medium text-zinc-300">
                Work Email <span className="text-[#fd5b38]">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@company.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#fd5b38] transition"
              />
            </div>
          </div>

          {/* Company / Brand (Optional) */}
          <div className="space-y-1.5">
            <label htmlFor="company" className="text-xs font-medium text-zinc-300 flex items-center justify-between">
              <span>Brand / Company Name</span>
              <span className="text-[10px] text-zinc-500">Optional</span>
            </label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="e.g. Acme Studio or Early-Stage Startup"
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#fd5b38] transition"
            />
          </div>

          {/* Short Project Overview */}
          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-medium text-zinc-300">
              Project Overview <span className="text-[#fd5b38]">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me what you are building, your timeline, or current roadblocks..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#fd5b38] transition resize-none leading-relaxed"
            />
          </div>

          {/* Clean High-End Action Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-white hover:bg-[#fd5b38] text-black hover:text-white text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin shrink-0 group-hover:border-white/30 group-hover:border-t-white" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Send Inquiry</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>

            <div className="flex items-center gap-1.5 text-xs text-zinc-400">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Personal reply in &lt; 24h</span>
            </div>
          </div>

        </form>
      )}

    </div>
  );
}
