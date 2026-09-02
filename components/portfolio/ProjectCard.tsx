'use client';

import { useState } from 'react';
import { Project } from '@/lib/data';
import { cn } from '@/lib/utils';
import {
  ExternalLink,
  Github,
  ArrowRight,
  X,
  ChevronRight,
  BrainCircuit,
  Workflow,
  Eye,
  TrendingUp,
  FileText,
  ChartBar as BarChart3,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projectIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BrainCircuit,
  Workflow,
  Eye,
  BarChart3,
  TrendingUp,
  FileText,
};

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const IconComponent = project.icon ? projectIconMap[project.icon] : null;

  return (
    <>
      <div
        className={cn(
          'bg-white dark:bg-card rounded-xl border border-border shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 overflow-hidden group flex flex-col',
          className
        )}
      >
        <div className="relative aspect-video bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 border-b border-border/40 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
          {IconComponent && (
            <IconComponent className="w-12 h-12 text-accent/30 group-hover:text-accent/50 transition-all duration-500 group-hover:scale-110" />
          )}
          <span className="absolute bottom-2 left-3 text-[10px] font-semibold uppercase tracking-wider text-white/40">
            {project.category}
          </span>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="mb-3">
            <h3 className="font-bold text-foreground text-base leading-snug group-hover:text-primary transition-colors duration-200">
              {project.title}
            </h3>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground border border-border/50"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-xs px-2 py-0.5 rounded-md bg-secondary text-muted-foreground border border-border/50">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/60">
            <div className="flex gap-2">
              {project.links
                .filter((l) => l.type === 'github')
                .map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="GitHub repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                ))}
              {project.links
                .filter((l) => l.type === 'demo')
                .map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Live demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ))}
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-primary transition-colors duration-200"
            >
              Case Study
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <CaseStudyModal project={project} onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/30 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="bg-white dark:bg-card rounded-2xl border border-border shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto"
      >
        <div className="h-1.5 bg-gradient-to-r from-primary to-accent rounded-t-2xl" />

        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-1.5 block">
                {project.category} · {project.role}
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                {project.title}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">{project.timeframe}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors flex-shrink-0 ml-4"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Business Problem
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {project.businessProblem}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Solution Approach
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {project.solutionApproach}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Key Contributions
              </h3>
              <ul className="space-y-2">
                {project.keyContributions.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed">
                    <ChevronRight className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary/60 dark:bg-secondary/40 rounded-xl p-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                Impact & Outcome
              </h3>
              <p className="text-sm text-foreground font-medium leading-relaxed">
                {project.impact}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md bg-primary/8 dark:bg-primary/20 text-primary font-medium border border-primary/15"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.links.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-2 border-t border-border">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors"
                  >
                    {link.type === 'github' ? (
                      <Github className="w-4 h-4" />
                    ) : (
                      <ExternalLink className="w-4 h-4" />
                    )}
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
