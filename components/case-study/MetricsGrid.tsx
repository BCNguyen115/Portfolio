'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Ban,
  TrendingUp,
  Monitor,
  Crosshair,
  Award,
  Timer,
  TestTube2,
  Container,
} from 'lucide-react';
import { CaseStudyMetric } from '@/lib/case-study-data';

const metricIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Hallucination Rate': Ban,
  'Retrieval Accuracy': TrendingUp,
  'Client-side Compute': Monitor,
  'Tool Call Accuracy': Crosshair,
  'Composite Quality': Award,
  'Reranker Latency': Timer,
  'Test Coverage': TestTube2,
  'Docker Services': Container,
};

const metricAccents: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  'Hallucination Rate': {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20 hover:border-emerald-500/40',
    text: 'text-emerald-400',
    glow: 'hover:shadow-emerald-500/10',
  },
  'Retrieval Accuracy': {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20 hover:border-blue-500/40',
    text: 'text-blue-400',
    glow: 'hover:shadow-blue-500/10',
  },
  'Client-side Compute': {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20 hover:border-cyan-500/40',
    text: 'text-cyan-400',
    glow: 'hover:shadow-cyan-500/10',
  },
  'Tool Call Accuracy': {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20 hover:border-purple-500/40',
    text: 'text-purple-400',
    glow: 'hover:shadow-purple-500/10',
  },
  'Composite Quality': {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20 hover:border-amber-500/40',
    text: 'text-amber-400',
    glow: 'hover:shadow-amber-500/10',
  },
  'Reranker Latency': {
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20 hover:border-orange-500/40',
    text: 'text-orange-400',
    glow: 'hover:shadow-orange-500/10',
  },
  'Test Coverage': {
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20 hover:border-rose-500/40',
    text: 'text-rose-400',
    glow: 'hover:shadow-rose-500/10',
  },
  'Docker Services': {
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20 hover:border-sky-500/40',
    text: 'text-sky-400',
    glow: 'hover:shadow-sky-500/10',
  },
};

const defaultAccent = {
  bg: 'bg-slate-500/10',
  border: 'border-slate-500/20 hover:border-slate-500/40',
  text: 'text-slate-400',
  glow: 'hover:shadow-slate-500/10',
};

export function MetricsGrid({ metrics }: { metrics: CaseStudyMetric[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="metrics" className="py-20 bg-slate-950">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3 block">
            Impact & Results
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Key Performance Indicators
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Measurable outcomes validated through rigorous testing, offline evaluation pipelines, and production monitoring.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {metrics.map((metric) => {
            const accent = metricAccents[metric.label] || defaultAccent;
            const Icon = metricIcons[metric.label] || Award;

            return (
              <motion.div
                key={metric.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: 'easeOut' },
                  },
                }}
                className={`group relative rounded-xl border bg-white/[0.02] backdrop-blur-sm p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${accent.border} ${accent.glow}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-lg ${accent.bg} flex items-center justify-center`}
                  >
                    <Icon className={`w-4.5 h-4.5 ${accent.text}`} />
                  </div>
                </div>

                <div className={`text-2xl sm:text-3xl font-bold ${accent.text} mb-1`}>
                  {metric.value}
                </div>

                <div className="text-sm font-semibold text-white mb-2">
                  {metric.label}
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
