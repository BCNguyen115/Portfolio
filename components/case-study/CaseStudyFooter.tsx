'use client';

import Link from 'next/link';
import { ArrowLeft, Github, Linkedin } from 'lucide-react';
import { profile } from '@/lib/data';

export function CaseStudyFooter() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="container-wide">
        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-emerald-600/5 p-8 md:p-12 text-center overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            Interested in This Architecture?
          </h3>
          <p className="text-sm text-slate-400 max-w-lg mx-auto mb-8 leading-relaxed">
            I&apos;m open to discussing multi-agent systems, RAG pipelines, and production AI architecture.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-white/[0.06] text-white border border-white/15 hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-white/[0.06] text-white border border-white/15 hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              <ArrowLeft className="w-4 h-4" />
              All Projects
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </div>
    </section>
  );
}
