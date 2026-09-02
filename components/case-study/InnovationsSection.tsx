'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  RefreshCw,
  Brain,
  ChartBar as BarChart3,
  Database,
  ShieldAlert,
  Zap,
} from 'lucide-react';
import { KeyInnovation } from '@/lib/case-study-data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  RefreshCw,
  Brain,
  BarChart3,
  Database,
  ShieldAlert,
  Zap,
};

const cardAccents = [
  { border: 'hover:border-blue-500/30', glow: 'group-hover:bg-blue-500/10', icon: 'text-blue-400' },
  { border: 'hover:border-purple-500/30', glow: 'group-hover:bg-purple-500/10', icon: 'text-purple-400' },
  { border: 'hover:border-emerald-500/30', glow: 'group-hover:bg-emerald-500/10', icon: 'text-emerald-400' },
  { border: 'hover:border-cyan-500/30', glow: 'group-hover:bg-cyan-500/10', icon: 'text-cyan-400' },
  { border: 'hover:border-amber-500/30', glow: 'group-hover:bg-amber-500/10', icon: 'text-amber-400' },
  { border: 'hover:border-orange-500/30', glow: 'group-hover:bg-orange-500/10', icon: 'text-orange-400' },
];

export function InnovationsSection({
  innovations,
}: {
  innovations: KeyInnovation[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="innovations" className="py-20 bg-neutral-900">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-3 block">
            Technical Highlights
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Key Engineering Innovations
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Six core technical breakthroughs that define the system&apos;s autonomous capability, accuracy, and resilience.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {innovations.map((item, i) => {
            const Icon = iconMap[item.icon] || Zap;
            const accent = cardAccents[i % cardAccents.length];

            return (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: 'easeOut' },
                  },
                }}
                className={`group rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${accent.border}`}
              >
                <div
                  className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 transition-colors duration-300 ${accent.glow}`}
                >
                  <Icon className={`w-5 h-5 ${accent.icon}`} />
                </div>

                <h3 className="text-base font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
