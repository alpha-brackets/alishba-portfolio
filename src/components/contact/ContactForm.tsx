'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { inquiryOptions } from '@/data/inquiries';
import { InquiryCategory } from '@/types';
import { Button } from '@/components/common/Button';
import {
  Send,
  CheckCircle2,
  Clock,
  DollarSign,
  Building,
  User,
  Mail,
  FileText,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const timelineOptions = [
  { id: 'immediate', label: 'Immediately (Next 1–2 weeks)' },
  { id: '1-month', label: 'Within 1 Month' },
  { id: 'exploring', label: 'Exploring / Planning Phase' },
];

const budgetOptions = [
  { id: 'tier-1', label: '$1,000 – $2,500' },
  { id: 'tier-2', label: '$2,500 – $5,000' },
  { id: 'tier-3', label: '$5,000+' },
  { id: 'flexible', label: 'To Be Discussed' },
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const queryInquiry = (searchParams.get('inquiry') as InquiryCategory) || 'social-growth';
  const initialCategory = inquiryOptions.some((o) => o.id === queryInquiry)
    ? queryInquiry
    : 'social-growth';

  const [overrideCategory, setOverrideCategory] = useState<InquiryCategory | null>(null);
  const selectedCategory = overrideCategory ?? initialCategory;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [timeline, setTimeline] = useState('immediate');
  const [budget, setBudget] = useState('flexible');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const activeInquiry = inquiryOptions.find((o) => o.id === selectedCategory) || inquiryOptions[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const activeTimelineLabel = timelineOptions.find((t) => t.id === timeline)?.label || timeline;
    const activeBudgetLabel = budgetOptions.find((b) => b.id === budget)?.label || budget;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          company,
          inquiryType: activeInquiry.label,
          timeline: activeTimelineLabel,
          budget: activeBudgetLabel,
          message,
        }),
      });

      if (!res.ok) {
        throw new Error('Something went wrong submitting your inquiry. Please try again.');
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
    <div className="rounded-3xl bg-[#0c0c0f] border border-white/10 p-6 sm:p-10 shadow-2xl space-y-8">
      
      {/* ── SECTION 1: INQUIRY CATEGORY PILLS ── */}
      <div className="space-y-3.5">
        <div className="flex items-center justify-between pb-2 border-b border-white/5">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
            <span className="w-5 h-5 rounded-md bg-[#fd5b38]/10 text-[#fd5b38] flex items-center justify-center text-[10px] font-bold">
              01
            </span>
            <span>Select Project Focus</span>
          </label>
          <span className="text-[10px] font-mono text-[#fd5b38] uppercase tracking-wider font-semibold">
            {activeInquiry.badge}
          </span>
        </div>

        {/* 2x2 Grid of Inquiries */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {inquiryOptions.map((opt) => {
            const isSelected = opt.id === selectedCategory;
            return (
              <button
                type="button"
                key={opt.id}
                onClick={() => setOverrideCategory(opt.id)}
                className={cn(
                  'p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[76px]',
                  isSelected
                    ? 'bg-gradient-to-br from-white/[0.08] to-[#fd5b38]/10 border-[#fd5b38] text-white ring-1 ring-[#fd5b38]'
                    : 'bg-black/40 border-white/10 text-zinc-400 hover:border-white/20 hover:text-white'
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-white leading-tight">
                    {opt.label}
                  </span>
                  {isSelected && (
                    <CheckCircle2 className="w-4 h-4 text-[#fd5b38] shrink-0" />
                  )}
                </div>
                <p className="text-[11px] text-zinc-400 line-clamp-1 mt-1 font-light">
                  {opt.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {submitted ? (
        <div className="p-8 sm:p-12 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Inquiry Received!
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed font-light">
            Thank you for reaching out, <span className="text-white font-medium">{name}</span>. Your project parameters have been delivered directly to Alishba. She will review your objectives and follow up within 24 hours.
          </p>
          <div className="pt-3">
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setName('');
                setEmail('');
                setCompany('');
                setMessage('');
              }}
              className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-semibold text-zinc-200 hover:text-white transition cursor-pointer"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        /* Form Inputs */
        <form onSubmit={handleSubmit} className="space-y-6 pt-2">
          
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-[#fd5b38]/10 text-[#fd5b38] flex items-center justify-center text-[10px] font-bold">
                02
              </span>
              <span>Project &amp; Contact Details</span>
            </label>
          </div>

          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400">
              {errorMessage}
            </div>
          )}

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#fd5b38]" />
                <span>Your Name</span>
                <span className="text-[#fd5b38]">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Morgan"
                className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#fd5b38] focus:ring-1 focus:ring-[#fd5b38] transition"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#fd5b38]" />
                <span>Work / Contact Email</span>
                <span className="text-[#fd5b38]">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@company.com"
                className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#fd5b38] focus:ring-1 focus:ring-[#fd5b38] transition"
              />
            </div>
          </div>

          {/* Company / Brand */}
          <div className="space-y-2">
            <label htmlFor="company" className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-zinc-400" />
              <span>Company / Project Name</span>
              <span className="text-zinc-500 text-[10px]">(Optional)</span>
            </label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="e.g. Acme Tech or Stealth Startup"
              className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#fd5b38] focus:ring-1 focus:ring-[#fd5b38] transition"
            />
          </div>

          {/* Project Timeline & Budget Scope Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            
            {/* Timeline */}
            <div className="space-y-2">
              <label htmlFor="timeline" className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-zinc-400" />
                <span>Target Timeline</span>
              </label>
              <select
                id="timeline"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-sm text-white focus:outline-none focus:border-[#fd5b38] focus:ring-1 focus:ring-[#fd5b38] transition cursor-pointer"
              >
                {timelineOptions.map((t) => (
                  <option key={t.id} value={t.id} className="bg-[#121216] text-white">
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <label htmlFor="budget" className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-zinc-400" />
                <span>Estimated Budget Scope</span>
              </label>
              <select
                id="budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-sm text-white focus:outline-none focus:border-[#fd5b38] focus:ring-1 focus:ring-[#fd5b38] transition cursor-pointer"
              >
                {budgetOptions.map((b) => (
                  <option key={b.id} value={b.id} className="bg-[#121216] text-white">
                    {b.label}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Message / Brief */}
          <div className="space-y-2 pt-1">
            <label htmlFor="message" className="text-xs font-medium text-zinc-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#fd5b38]" />
                <span>Project Overview &amp; Objectives</span>
                <span className="text-[#fd5b38]">*</span>
              </span>
              <span className="text-[10px] font-mono text-zinc-500">
                The more context, the faster the response
              </span>
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={`Tell me what you are building, your audience target, and current marketing roadblocks...`}
              className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#fd5b38] focus:ring-1 focus:ring-[#fd5b38] transition resize-none leading-relaxed"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="w-full sm:w-auto shadow-xl min-w-[220px]"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin shrink-0" />
                  <span>Delivering to Alishba...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Project Inquiry</span>
                </>
              )}
            </Button>

            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Personal response within 24 hours guaranteed</span>
            </div>
          </div>

        </form>
      )}

    </div>
  );
}
