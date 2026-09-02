'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import { EngineeringChallenge } from '@/lib/case-study-data';

export function ChallengesSection({
  challenges,
}: {
  challenges: EngineeringChallenge[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="challenges" className="py-20 bg-slate-950">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-3 block">
            Battle-Tested
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Engineering Challenges & Solutions
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real-world problems encountered during development and the production-hardened solutions that resolved them.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="space-y-5 max-w-4xl mx-auto"
        >
          {challenges.map((challenge) => (
            <motion.div
              key={challenge.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: 'easeOut' },
                },
              }}
              className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden"
            >
              <div className="p-5 sm:p-6 border-b border-white/5">
                <h3 className="text-base font-bold text-white mb-1">
                  {challenge.title}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
                {/* Problem */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                      Problem
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {challenge.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                      Solution
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {challenge.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
