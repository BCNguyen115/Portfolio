'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SectionHeader } from './SectionHeader';
import { ProjectCard } from './ProjectCard';
import { StaggerContainer, StaggerItem, AnimatedSection } from './AnimatedSection';
import { projects, profile } from '@/lib/data';
import { enterpriseMultiAgentCaseStudy } from '@/lib/case-study-data';
import {
  Github,
  ExternalLink,
  ArrowRight,
  X,
  ChevronRight,
  Linkedin,
  Layers,
  Sparkles,
  Container,
  TestTube2,
  Ban,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const categories = [
  'All',
  'Machine Learning',
  'Data Engineering',
  'Computer Vision',
  'Business Intelligence',
  'AI / LLM',
];

const spotlightBadges = [
  'LangGraph StateGraph',
  'HyDE + Hybrid RAG',
  'DuckDB WASM',
  'pgvector',
  'Production Ready',
];

const spotlightMetrics = [
  { label: 'Hallucination', value: '~0%', icon: Ban },
  { label: 'Test Cases', value: '102+', icon: TestTube2 },
  { label: 'Docker Services', value: '7', icon: Container },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [caseStudyProject, setCaseStudyProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-white dark:bg-background">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Featured Work"
          title="Projects & Case Studies"
          subtitle="Practical AI and data solutions built around real business problems, measurable outcomes, and scalable delivery."
          align="center"
        />

        {/* Flagship Spotlight: Enterprise Multi-Agent System */}
        <AnimatedSection className="mb-12">
          <div className="relative rounded-2xl border border-border dark:border-white/10 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 shadow-xl">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500" />

            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[400px] h-[300px] rounded-full bg-gradient-radial from-blue-600/8 via-transparent to-transparent blur-2xl" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[200px] rounded-full bg-gradient-radial from-emerald-600/6 via-transparent to-transparent blur-2xl" />
            </div>

            <div className="relative p-7 md:p-10">
              <div className="grid lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                      AI / Multi-Agent Systems
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-semibold border border-emerald-500/25">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Flagship Project
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 leading-tight">
                    {enterpriseMultiAgentCaseStudy.title}
                  </h3>
                  <p className="text-base text-slate-400 font-medium mb-1">
                    {enterpriseMultiAgentCaseStudy.subtitle}
                  </p>
                  <p className="text-xs text-slate-400 font-medium mb-5">
                    {enterpriseMultiAgentCaseStudy.role}
                    {enterpriseMultiAgentCaseStudy.timeframe && (
                      <span className="text-slate-500 font-normal"> · {enterpriseMultiAgentCaseStudy.timeframe}</span>
                    )}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-2xl">
                    {enterpriseMultiAgentCaseStudy.tagline}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {spotlightBadges.map((badge) => (
                      <span
                        key={badge}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-300 font-medium border border-white/10"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/projects/enterprise-multi-agent-system"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <Layers className="w-4 h-4" />
                      View Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-white/[0.08] text-white hover:bg-white/[0.15] border border-white/15 transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {spotlightMetrics.map((m) => (
                      <div
                        key={m.label}
                        className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/5"
                      >
                        <m.icon className="w-4 h-4 text-slate-500 mx-auto mb-1.5" />
                        <div className="text-lg font-bold text-white">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                      Architecture Layers
                    </h4>
                    <div className="space-y-2">
                      {enterpriseMultiAgentCaseStudy.architectureLayers.map(
                        (layer) => {
                          const colorMap: Record<string, string> = {
                            blue: 'bg-blue-400',
                            purple: 'bg-purple-400',
                            emerald: 'bg-emerald-400',
                            amber: 'bg-amber-400',
                          };
                          const textMap: Record<string, string> = {
                            blue: 'text-blue-400',
                            purple: 'text-purple-400',
                            emerald: 'text-emerald-400',
                            amber: 'text-amber-400',
                          };
                          return (
                            <div
                              key={layer.id}
                              className="flex items-center gap-2.5"
                            >
                              <div
                                className={`w-2 h-2 rounded-full flex-shrink-0 ${
                                  colorMap[layer.color]
                                }`}
                              />
                              <span
                                className={`text-xs font-semibold ${
                                  textMap[layer.color]
                                }`}
                              >
                                {layer.layerNumber}
                              </span>
                              <span className="text-xs text-slate-400 truncate">
                                {layer.name}
                              </span>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200',
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-secondary text-secondary-foreground hover:bg-border'
              )}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.07}
        >
          {filteredProjects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="mt-16" delay={0.2}>
          <div className="relative bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 dark:from-primary/10 dark:via-accent/10 dark:to-primary/10 rounded-2xl border border-border/60 p-8 md:p-12 text-center overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary/60" />
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
              Let&apos;s Connect
            </h3>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-6 leading-relaxed">
              Interested in collaborating on AI, data, or analytics projects?
              I&apos;m always open to discussing new opportunities and ideas.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl border border-border bg-white dark:bg-card text-foreground hover:border-primary/40 hover:bg-secondary shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatePresence>
          {caseStudyProject && (
            <CaseStudyOverlay
              project={caseStudyProject}
              onClose={() => setCaseStudyProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function CaseStudyOverlay({
  project,
  onClose,
}: {
  project: ReturnType<typeof projects.find> & {};
  onClose: () => void;
}) {
  if (!project) return null;
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
              <p className="text-sm text-muted-foreground mt-1">
                {project.timeframe}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors flex-shrink-0 ml-4"
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
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed"
                  >
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
