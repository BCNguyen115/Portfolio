'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, CheckCircle2, Loader2, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StepData {
  id: number;
  label: string;
  phase: string;
  color: string;
  activeColor: string;
  icon: string;
  detail: string;
  statePreview: Record<string, unknown>;
}

const steps: StepData[] = [
  {
    id: 1,
    label: 'Plan',
    phase: 'Intent Analysis & Agent Routing',
    color: 'text-blue-500',
    activeColor: 'border-blue-500 bg-blue-500/10',
    icon: 'plan',
    detail:
      'Analyzing user intent, classifying query type (RAG / Data Analysis / Web Search / DB Query), selecting target agent and preparing execution context.',
    statePreview: {
      phase: 'PLAN',
      query_type: 'data_analysis',
      target_agent: 'DataAnalystSwarm',
      intent: 'Generate revenue dashboard with YoY comparison',
      retry_count: 0,
      max_retries: 2,
    },
  },
  {
    id: 2,
    label: 'Execute',
    phase: 'Agent Swarm Processing',
    color: 'text-emerald-500',
    activeColor: 'border-emerald-500 bg-emerald-500/10',
    icon: 'execute',
    detail:
      'DataAnalystSwarm dispatching 5 sub-agents: EDA Stats → Layout Architect → Chart Spec Builder → Storyteller → Quality Audit. Processing CSV data via DuckDB WASM.',
    statePreview: {
      phase: 'EXECUTE',
      active_agents: [
        'EDA_Stats',
        'Layout_Architect',
        'Chart_Spec_Builder',
        'Storyteller',
        'Quality_Audit',
      ],
      dashboard_spec: {
        grid_cols: 12,
        charts: ['bar_yoy_revenue', 'line_monthly_trend', 'kpi_cards'],
        status: 'GENERATED',
      },
    },
  },
  {
    id: 3,
    label: 'Verify',
    phase: 'Schema Audit & Quality Gate',
    color: 'text-amber-500',
    activeColor: 'border-amber-500 bg-amber-500/10',
    icon: 'verify',
    detail:
      'Schema Audit Verifier cross-checking 100% of DashboardSpec columns against actual DataFrame. Composite quality score evaluation against Quality Gate >= 0.85.',
    statePreview: {
      phase: 'VERIFY',
      schema_audit: {
        columns_checked: 14,
        columns_valid: 14,
        mismatches: 0,
      },
      composite_quality: 0.956,
      quality_gate: 0.85,
      is_verified: true,
      result: 'RELEASE_APPROVED',
    },
  },
];

export function PEVStepper() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);

  const runSimulation = useCallback(() => {
    setCurrentStep(-1);
    setIsRunning(true);

    setTimeout(() => setCurrentStep(0), 300);
    setTimeout(() => setCurrentStep(1), 2200);
    setTimeout(() => setCurrentStep(2), 4100);
    setTimeout(() => {
      setIsRunning(false);
    }, 5800);
  }, []);

  const reset = () => {
    setIsRunning(false);
    setCurrentStep(-1);
  };

  return (
    <section className="py-20 bg-slate-950">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-3 block">
            Live Simulation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            PEV Self-Correction Loop
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Watch the autonomous Plan → Execute → Verify cycle in action. Each step updates the AgentState in real-time via SSE streaming.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Controls */}
          <div className="flex justify-center gap-3 mb-10">
            <button
              onClick={runSimulation}
              disabled={isRunning}
              className={cn(
                'inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200',
                isRunning
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 hover:-translate-y-0.5'
              )}
            >
              <Play className="w-4 h-4" />
              Run Simulation
            </button>
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-white/[0.06] text-white border border-white/15 hover:bg-white/10 transition-all duration-200"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>

          {/* Stepper bar */}
          <div className="flex items-center justify-between mb-8 px-4">
            {steps.map((step, i) => {
              const isActive = currentStep === i;
              const isComplete = currentStep > i;
              const isPending = currentStep < i;

              return (
                <div key={step.id} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        'w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500',
                        isComplete
                          ? 'border-emerald-500 bg-emerald-500/20'
                          : isActive
                          ? step.activeColor
                          : 'border-slate-700 bg-slate-800/50'
                      )}
                    >
                      {isComplete ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      ) : isActive ? (
                        <Loader2
                          className={cn(
                            'w-5 h-5 animate-spin',
                            step.color
                          )}
                        />
                      ) : (
                        <span className="text-sm font-bold text-slate-500">
                          {step.id}
                        </span>
                      )}
                    </div>
                    <span
                      className={cn(
                        'mt-2 text-xs font-semibold transition-colors duration-300',
                        isActive || isComplete ? step.color : 'text-slate-600'
                      )}
                    >
                      {step.label}
                    </span>
                  </div>

                  {i < steps.length - 1 && (
                    <div className="flex-1 mx-3 h-px relative">
                      <div className="absolute inset-0 bg-slate-800" />
                      <motion.div
                        className="absolute inset-y-0 left-0 bg-emerald-500"
                        initial={{ width: '0%' }}
                        animate={{
                          width: isComplete ? '100%' : '0%',
                        }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            {currentStep >= 0 && currentStep < steps.length && (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-4"
              >
                {/* Info card */}
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className={cn(
                        'w-2 h-2 rounded-full',
                        currentStep === 2 && currentStep === steps.length - 1
                          ? 'bg-emerald-400'
                          : steps[currentStep].color.replace('text-', 'bg-')
                      )}
                    />
                    <span
                      className={cn(
                        'text-xs font-semibold uppercase tracking-wider',
                        steps[currentStep].color
                      )}
                    >
                      {steps[currentStep].phase}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {steps[currentStep].detail}
                  </p>
                </div>

                {/* State preview */}
                <div className="rounded-xl border border-white/10 bg-slate-900/80 overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-800/80 border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                    </div>
                    <span className="text-xs text-slate-500 font-mono ml-2">
                      AgentState
                    </span>
                  </div>
                  <pre className="p-4 text-xs text-slate-300 font-mono leading-relaxed overflow-auto max-h-48">
                    {JSON.stringify(
                      steps[currentStep].statePreview,
                      null,
                      2
                    )}
                  </pre>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {currentStep === -1 && (
            <div className="text-center py-8">
              <p className="text-sm text-slate-600">
                Press &quot;Run Simulation&quot; to watch the PEV loop in action
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
