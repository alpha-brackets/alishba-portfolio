'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { inquiryOptions } from '@/data/inquiries';
import { siteConfig } from '@/data/siteConfig';
import { InquiryCategory } from '@/types';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import {
  Send,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';
import { cn } from '@/lib/utils';

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
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const activeInquiry = inquiryOptions.find((o) => o.id === selectedCategory) || inquiryOptions[0];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Build structured mailto URL
    const subject = encodeURIComponent(`${activeInquiry.defaultSubject} - ${name} (${company || 'Direct'})`);
    const body = encodeURIComponent(
      `Hello Alishba,\n\nName: ${name}\nEmail: ${email}\nBrand / Organization: ${company || 'N/A'}\nInquiry Type: ${activeInquiry.label}\n\nProject Overview & Message:\n${message}\n\nSent from your portfolio contact hub.`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="clerk-card rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl space-y-8">
      {/* Inquiry Selector Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)]">
            1. Select Your Project Focus
          </label>
          <Badge variant="primary" size="sm">
            {activeInquiry.badge}
          </Badge>
        </div>

        {/* Inquiry Pills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {inquiryOptions.map((opt) => {
            const isSelected = opt.id === selectedCategory;
            return (
              <button
                type="button"
                key={opt.id}
                onClick={() => setOverrideCategory(opt.id)}
                className={cn(
                  'p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[75px]',
                  isSelected
                    ? 'bg-[var(--accent)] border-[var(--primary)] text-[var(--foreground)] shadow-xs ring-1 ring-[var(--primary)]'
                    : 'bg-[var(--background)] border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--muted-foreground)] hover:text-[var(--foreground)]'
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[var(--foreground)]">
                    {opt.label}
                  </span>
                  {isSelected && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)]" />
                  )}
                </div>
                <p className="text-[11px] text-[var(--muted-foreground)] line-clamp-1 mt-1">
                  {opt.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {submitted ? (
        <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
            Email Client Opened!
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
            Your inquiry parameters have been prepared. If your email client didn&apos;t automatically launch, you can copy the email directly below:
          </p>
          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700 text-xs font-semibold text-slate-800 dark:text-white shadow-xs cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied to Clipboard!' : siteConfig.email}</span>
            </button>
          </div>
        </div>
      ) : (
        /* Form Inputs */
        <form onSubmit={handleSubmit} className="space-y-6">
          <label className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)] block">
            2. Share Project & Contact Details
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-medium text-[var(--foreground)]">
                Your Full Name <span className="text-[var(--primary)]">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sarah Jenkins"
                className="w-full px-4 py-2.5 rounded-xl bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-medium text-[var(--foreground)]">
                Email Address <span className="text-[var(--primary)]">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="sarah@company.com"
                className="w-full px-4 py-2.5 rounded-xl bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="company" className="text-xs font-medium text-[var(--foreground)]">
              Brand / Company / Organization (Optional)
            </label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="e.g. Bloom Technologies or Self-Employed"
              className="w-full px-4 py-2.5 rounded-xl bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-medium text-[var(--foreground)]">
              Project Context & Objectives <span className="text-[var(--primary)]">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={`Tell me about your brand, current challenges, and goals for ${activeInquiry.label.toLowerCase()}...`}
              className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto shadow-md">
              <Send className="w-4 h-4" />
              <span>Send Project Inquiry</span>
            </Button>
            <span className="text-xs text-[var(--muted-foreground)]">
              Direct delivery to {siteConfig.email}
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
