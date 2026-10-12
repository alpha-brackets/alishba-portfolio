import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/common/Container';
import { Reveal } from '@/components/ui/Reveal';
import { certifications, education } from '@/data/certifications';
import { CheckCircle2, Clock, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Certifications & Academic Rigor',
  description:
    'Overview of professional credentials from University of Illinois Urbana-Champaign, Google, and UC San Diego across digital marketing, analytics, and UX design.',
};

export default function CertificationsPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Header */}
          <Reveal className="space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-[#fd5b38]">
              Academic &amp; Professional Rigor
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              Learning applied, not just completed.
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
              Every course and specialization I have undertaken is actively put to work in real client strategies and campaign execution.
            </p>
          </Reveal>

          {/* UIUC DIGITAL MARKETING SPECIALIZATION */}
          {(() => {
            const uiuc = certifications.find((c) => c.id === 'uiuc-digital-marketing');
            if (!uiuc) return null;

            return (
              <div className="p-8 sm:p-10 rounded-3xl clerk-card border border-white/10 space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-[#fd5b38] uppercase tracking-wider">
                      Flagship Specialization
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                      {uiuc.title}
                    </h2>
                    <p className="text-xs font-mono text-zinc-400">
                      Issued by {uiuc.issuer} • {uiuc.period}
                    </p>
                  </div>
                  {uiuc.status === 'Completed' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 self-start sm:self-auto">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Completed (7 of 7 Completed)</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#fd5b38]/10 text-[#fd5b38] border border-[#fd5b38]/20 self-start sm:self-auto">
                      <Clock className="w-3.5 h-3.5" />
                      <span>In Progress</span>
                    </span>
                  )}
                </div>

                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  {uiuc.description}
                </p>

                {/* 7 Courses Breakdown */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                    Curriculum Breakdown (7 Courses)
                  </h3>
                  <div className="space-y-2.5">
                    {uiuc.courses?.map((course) => {
                      const isComplete = course.status === 'Completed';
                      const isInProgress = course.status === 'In Progress';

                      return (
                        <div
                          key={course.courseNumber}
                          className="p-3.5 sm:p-4 rounded-2xl bg-black/50 border border-white/5 flex items-center justify-between gap-4 text-xs sm:text-sm"
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xs font-bold text-zinc-500 w-6 shrink-0">
                              0{course.courseNumber}
                            </span>
                            <span className="font-medium text-white">
                              {course.name}
                            </span>
                          </div>

                          <div className="shrink-0">
                            {isComplete && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                <CheckCircle2 className="w-3 h-3" />
                                <span>Completed</span>
                              </span>
                            )}
                            {isInProgress && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#fd5b38]/10 text-[#fd5b38] border border-[#fd5b38]/20">
                                <Clock className="w-3 h-3" />
                                <span>In Progress</span>
                              </span>
                            )}
                            {course.status === 'Pending' && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-white/5 text-zinc-500 border border-white/5">
                                <span>Pending</span>
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Skills Acquired */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 block">
                    Core Skills Mastered
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {uiuc.skillsAcquired.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 rounded-xl bg-black/60 border border-white/5 text-xs font-mono text-zinc-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Design & UX Credentials */}
          <div className="grid md:grid-cols-2 gap-6">
            {certifications
              .filter((c) => c.id !== 'uiuc-digital-marketing')
              .map((cert) => (
                <div
                  key={cert.id}
                  className="p-6 sm:p-8 rounded-3xl clerk-card border border-white/10 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-[#6366f1] bg-[#6366f1]/10 px-2.5 py-0.5 rounded-full border border-[#6366f1]/20">
                        {cert.issuer}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Completed</span>
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-white">
                      {cert.title}
                    </h3>

                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500 block">
                      Skills
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsAcquired.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono bg-black/60 border border-white/5 text-zinc-300 px-2.5 py-1 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Academic Degree Card */}
          <div className="p-8 rounded-3xl clerk-card border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#fd5b38]/10 text-[#fd5b38] flex items-center justify-center shrink-0 border border-[#fd5b38]/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-bold text-white">
                  {education.degree}
                </h3>
                <p className="text-xs font-mono text-zinc-400">
                  {education.institution} • {education.timeline}
                </p>
                <p className="text-xs text-zinc-400 font-light">
                  {education.focus}
                </p>
              </div>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400">
              In Progress
            </span>
          </div>

        </div>
      </Container>
    </div>
  );
}
