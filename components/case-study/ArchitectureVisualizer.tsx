'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ChevronRight, Network } from 'lucide-react';
import { ArchitectureLayer } from '@/lib/case-study-data';
import { cn } from '@/lib/utils';

const layerColors: Record<string, {
  accent: string;
  bg: string;
  border: string;
  activeBg: string;
  dot: string;
  badge: string;
}> = {
  blue: {
    accent: 'text-blue-400',
    bg: 'bg-blue-500/5',
    border: 'border-blue-500/20',
    activeBg: 'bg-blue-500/10',
    dot: 'bg-blue-400',
    badge: 'bg-blue-500/15 text-blue-400 border-blue-500/25',
  },
  purple: {
    accent: 'text-purple-400',
    bg: 'bg-purple-500/5',
    border: 'border-purple-500/20',
    activeBg: 'bg-purple-500/10',
    dot: 'bg-purple-400',
    badge: 'bg-purple-500/15 text-purple-400 border-purple-500/25',
  },
  emerald: {
    accent: 'text-emerald-400',
    bg: 'bg-emerald-500/5',
    border: 'border-emerald-500/20',
    activeBg: 'bg-emerald-500/10',
    dot: 'bg-emerald-400',
    badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
  },
  amber: {
    accent: 'text-amber-400',
    bg: 'bg-amber-500/5',
    border: 'border-amber-500/20',
    activeBg: 'bg-amber-500/10',
    dot: 'bg-amber-400',
    badge: 'bg-amber-500/15 text-amber-400 border-amber-500/25',
  },
};

const flowNodes = [
  { label: 'User Request', color: 'text-slate-300', bg: 'bg-slate-800 border-slate-700' },
  { label: 'API Gateway', color: 'text-blue-400', bg: 'bg-blue-950/60 border-blue-500/30' },
  { label: 'LangGraph PEV', color: 'text-purple-400', bg: 'bg-purple-950/60 border-purple-500/30' },
  { label: 'Agent Swarm', color: 'text-emerald-400', bg: 'bg-emerald-950/60 border-emerald-500/30' },
  { label: 'Data & Infra', color: 'text-amber-400', bg: 'bg-amber-950/60 border-amber-500/30' },
];

export function ArchitectureVisualizer({
  layers,
}: {
  layers: ArchitectureLayer[];
}) {
  const [activeLayer, setActiveLayer] = useState(0);

  return (
    <section id="architecture" className="py-20 bg-neutral-900">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3 block">
            System Design
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            4-Layer Architecture
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A production-grade, layered system designed for autonomous AI orchestration, resilience, and observability.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Layer tabs */}
          <div className="lg:w-72 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 flex-shrink-0">
            {layers.map((layer, i) => {
              const colors = layerColors[layer.color];
              const isActive = activeLayer === i;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(i)}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left transition-all duration-200 whitespace-nowrap lg:whitespace-normal min-w-[180px] lg:min-w-0',
                    isActive
                      ? `${colors.activeBg} ${colors.border} shadow-lg`
                      : 'bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]'
                  )}
                >
                  <div
                    className={cn(
                      'w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold',
                      isActive
                        ? `${colors.bg} ${colors.accent}`
                        : 'bg-slate-800 text-slate-500'
                    )}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div
                      className={cn(
                        'text-xs font-semibold',
                        isActive ? colors.accent : 'text-slate-500'
                      )}
                    >
                      {layer.layerNumber}
                    </div>
                    <div
                      className={cn(
                        'text-sm font-medium',
                        isActive ? 'text-white' : 'text-slate-400'
                      )}
                    >
                      {layer.name}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Layer detail */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              {layers.map(
                (layer, i) =>
                  activeLayer === i && (
                    <motion.div
                      key={layer.id}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.3 }}
                      className={`rounded-xl border p-6 sm:p-8 ${layerColors[layer.color].bg} ${layerColors[layer.color].border}`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`w-3 h-3 rounded-full ${layerColors[layer.color].dot}`}
                        />
                        <h3 className={`text-lg font-bold ${layerColors[layer.color].accent}`}>
                          {layer.layerNumber}: {layer.name}
                        </h3>
                      </div>

                      <p className="text-sm text-slate-300 leading-relaxed mb-6">
                        {layer.highlights}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {layer.tech.map((t) => (
                          <span
                            key={t}
                            className={`text-xs px-3 py-1.5 rounded-lg font-medium border ${layerColors[layer.color].badge}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Architecture Flow */}
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-6">
            <Network className="w-4 h-4 text-slate-400" />
            <h3 className="text-sm font-semibold text-white">Request Flow</h3>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 justify-center">
            {flowNodes.map((node, i) => (
              <div key={node.label} className="flex items-center gap-3">
                <div
                  className={`px-4 py-2.5 rounded-lg border text-xs sm:text-sm font-semibold ${node.color} ${node.bg} whitespace-nowrap`}
                >
                  {node.label}
                </div>
                {i < flowNodes.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-slate-600 hidden sm:block flex-shrink-0" />
                )}
                {i < flowNodes.length - 1 && (
                  <div className="w-px h-4 bg-slate-700 sm:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
