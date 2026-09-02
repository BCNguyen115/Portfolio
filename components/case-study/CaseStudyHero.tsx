'use client';

import { motion, Transition } from 'framer-motion';
import {
  ArrowLeft,
  ArrowDown,
  Layers,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';
import { CaseStudyData } from '@/lib/case-study-data';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' } as Transition,
});

const badgeCategoryColors: Record<string, string> = {
  AI: 'bg-blue-500/15 text-blue-400 border-blue-500/25',
  RAG: 'bg-purple-500/15 text-purple-400 border-purple-500/25',
  'Client-Compute': 'bg-cyan-500/15 text-cyan-400 border-cyan-500/25',
  NLP: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
  Tools: 'bg-amber-500/15 text-amber-400 border-amber-500/25',
  Tracing: 'bg-rose-500/15 text-rose-400 border-rose-500/25',
  DevOps: 'bg-orange-500/15 text-orange-400 border-orange-500/25',
};

export function CaseStudyHero({ data }: { data: CaseStudyData }) {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-gradient-radial from-blue-600/8 via-purple-600/4 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-gradient-radial from-emerald-600/6 via-transparent to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="container-wide w-full pt-28 pb-20 relative z-10">
        <motion.div {...fadeUp(0)}>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </motion.div>

        <div className="max-w-4xl">
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Production Ready
            </span>
            <span className="text-xs text-slate-500">|</span>
            <span className="text-xs text-slate-400 font-medium">{data.role}</span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.15)}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3"
          >
            {data.title.split(' ').slice(0, 1)}{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
              {data.title.split(' ').slice(1).join(' ')}
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="text-xl sm:text-2xl text-slate-400 font-medium mb-8"
          >
            {data.subtitle}
          </motion.p>

          <motion.div
            {...fadeUp(0.25)}
            className="relative p-5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm mb-8"
          >
            <div className="absolute top-0 left-6 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 rounded-full" />
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed pl-6 italic">
              {data.tagline}
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-2 mb-10">
            {data.badges.map((badge) => (
              <span
                key={badge.label}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium border ${
                  badgeCategoryColors[badge.category] ||
                  'bg-slate-500/15 text-slate-400 border-slate-500/25'
                }`}
              >
                {badge.label}
              </span>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.35)} className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo('#architecture')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Layers className="w-4 h-4" />
              Explore Architecture
            </button>
            <button
              onClick={() => scrollTo('#innovations')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-white/[0.06] text-white border border-white/15 hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4" />
              Technical Highlights
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-slate-500"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
