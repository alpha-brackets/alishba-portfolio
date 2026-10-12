import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Container } from '@/components/common/Container';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { caseStudies } from '@/data/projects';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Sparkles,
  Target,
} from 'lucide-react';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((c) => c.slug === slug);

  if (!project) {
    return { title: 'Case Study Not Found' };
  }

  return {
    title: `${project.title} | ${project.client}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} - Alishba Qadir Case Study`,
      description: project.summary,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const projectIndex = caseStudies.findIndex((c) => c.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = caseStudies[projectIndex];
  const nextProject = caseStudies[(projectIndex + 1) % caseStudies.length];

  return (
    <article className="py-12 md:py-20">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Back to Work Link */}
          <div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors min-h-[44px]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all campaigns</span>
            </Link>
          </div>

          {/* Header & Meta */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="primary" size="md">
                {project.client}
              </Badge>
              <span className="text-xs font-medium text-[var(--muted-foreground)]">
                {project.category}
              </span>
              <span className="text-xs text-[var(--muted-foreground)]">•</span>
              <span className="text-xs text-[var(--muted-foreground)] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {project.timeline}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-[var(--muted-foreground)] leading-relaxed">
              {project.summary}
            </p>

            {/* Results Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {project.results.map((res, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-xs"
                >
                  <div className="font-serif text-base sm:text-lg font-bold text-[var(--primary)]">
                    {res.metric}
                  </div>
                  <div className="text-xs text-[var(--muted-foreground)] mt-0.5">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Overview & Challenge */}
          <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-[var(--border)]">
            <div className="p-6 rounded-3xl bg-[var(--card)] border border-[var(--border)] space-y-3">
              <div className="flex items-center gap-2 text-[var(--primary)]">
                <Sparkles className="w-4 h-4" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)]">
                  Project Overview
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[var(--foreground)] leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[var(--card)] border border-[var(--border)] space-y-3">
              <div className="flex items-center gap-2 text-[var(--secondary)]">
                <Target className="w-4 h-4" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)]">
                  The Core Challenge
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[var(--foreground)] leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </div>

          {/* Strategic Execution Framework */}
          <div className="space-y-6 pt-6 border-t border-[var(--border)]">
            <div className="space-y-2">
              <Badge variant="secondary" size="sm">
                Execution Method
              </Badge>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--foreground)]">
                Strategic Framework & Approach
              </h2>
            </div>

            <div className="space-y-3">
              {project.strategy.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex items-start gap-3.5"
                >
                  <div className="w-7 h-7 rounded-full bg-[var(--accent)] text-[var(--primary)] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--foreground)] leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-6 pt-6 border-t border-[var(--border)]">
            <div className="space-y-2">
              <Badge variant="primary" size="sm">
                Deliverables
              </Badge>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--foreground)]">
                Key Outputs & Creative Assets
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {project.deliverables.map((del, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[var(--card)] border border-[var(--border)] space-y-2 shadow-xs"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[var(--foreground)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{del.title}</span>
                  </div>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed pl-6">
                    {del.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-[var(--border)] flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)] mr-2">
              Tags:
            </span>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Next Project & Contact CTA */}
          <div className="pt-10 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href={`/work/${nextProject.slug}`}
              className="group text-left space-y-1"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)] block">
                Next Case Study
              </span>
              <div className="font-serif text-lg font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors flex items-center gap-2">
                <span>{nextProject.title}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Button href="/contact" variant="primary" size="md">
              <span>Discuss a Similar Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Container>
    </article>
  );
}
