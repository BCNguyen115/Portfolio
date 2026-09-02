'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Server } from 'lucide-react';
import { DockerService } from '@/lib/case-study-data';

const serviceAccents: Record<string, string> = {
  'Next.js 14': 'text-blue-400',
  'FastAPI + LangGraph': 'text-purple-400',
  'PostgreSQL 16 + pgvector': 'text-emerald-400',
  'Redis Alpine': 'text-red-400',
  'Langfuse V2': 'text-amber-400',
  'Langfuse Worker V2': 'text-amber-400',
  'HuggingFace TEI': 'text-orange-400',
};

export function DockerTopology({
  services,
}: {
  services: DockerService[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="docker" className="py-20 bg-neutral-900">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-3 block">
            Production Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Docker Service Topology
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            7 containerized microservices orchestrated via Docker Compose for isolated, reproducible deployment.
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
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="hidden sm:grid grid-cols-12 gap-4 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 border-b border-white/5">
            <div className="col-span-3">Service</div>
            <div className="col-span-3">Technology</div>
            <div className="col-span-2">Port</div>
            <div className="col-span-4">Role</div>
          </div>

          {services.map((service, i) => (
            <motion.div
              key={service.name}
              variants={{
                hidden: { opacity: 0, x: -12 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.4, ease: 'easeOut' },
                },
              }}
              className="group grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 px-5 py-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-200"
            >
              <div className="sm:col-span-3 flex items-center gap-2">
                <Server className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                <span className="text-sm font-mono font-medium text-white">
                  {service.name}
                </span>
              </div>
              <div className="sm:col-span-3">
                <span
                  className={`text-sm font-medium ${
                    serviceAccents[service.tech] || 'text-slate-300'
                  }`}
                >
                  {service.tech}
                </span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-sm font-mono text-slate-400">
                  :{service.port}
                </span>
              </div>
              <div className="sm:col-span-4">
                <span className="text-sm text-slate-400">
                  {service.role}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
