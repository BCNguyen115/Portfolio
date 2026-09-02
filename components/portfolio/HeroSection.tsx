'use client';

import { motion, Transition } from 'framer-motion';
import { ArrowDown, ArrowRight, Download, Eye, Github, Linkedin, Layers } from 'lucide-react';
import Link from 'next/link';
import { profile, heroStats, expertiseTags, projects } from '@/lib/data';
import { enterpriseMultiAgentCaseStudy } from '@/lib/case-study-data';
import { MetricCard } from './MetricCard';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' } as Transition,
});

export function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const otherProjects = projects.slice(0, 2);
  const flagshipPreview = {
    id: enterpriseMultiAgentCaseStudy.id,
    title: enterpriseMultiAgentCaseStudy.title,
    category: 'AI / Multi-Agent',
    isFlagship: true,
  };
  const previewProjects = otherProjects;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-navy-50/60 dark:to-primary/5"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-gradient-radial from-accent/6 via-accent/3 to-transparent dark:from-accent/8 dark:via-accent/4" />
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full bg-gradient-radial from-primary/5 via-primary/2 to-transparent dark:from-primary/10 dark:via-primary/5" />
      </div>

      <div className="container-wide w-full pt-24 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <motion.div {...fadeUp(0.1)} className="mb-2">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent px-3 py-1.5 rounded-full border border-accent/25 bg-accent/5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                AI ENGINEER
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mt-5 mb-4"
            >
              {profile.name.split(' ')[0]}{' '}
              <span className="text-gradient-navy">{profile.name.split(' ').slice(1).join(' ')}</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              className="text-lg font-medium text-foreground/90 leading-relaxed mb-3 max-w-xl"
            >
              {profile.tagline}
            </motion.p>

            <motion.p
              {...fadeUp(0.35)}
              className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-xl"
            >
              {profile.summary}
            </motion.p>

            <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <Eye className="w-4 h-4" />
                View My Work
              </button>

              <a
                href={profile.cvUrl}
                download="Bui_Cao_Nguyen_Resume_Yale.docx"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl border border-border bg-white dark:bg-card text-foreground hover:border-primary/40 hover:bg-secondary shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.5)} className="flex items-center gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-secondary transition-all duration-200"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-secondary transition-all duration-200"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          <div className="lg:pl-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="relative"
            >
              <div className="relative bg-white dark:bg-card rounded-2xl border border-border shadow-card-hover p-6 mb-6">
                <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-accent/20 border border-accent/30" />
                <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-primary/20 border border-primary/30" />

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 flex items-center justify-center ring-2 ring-accent/60 ring-offset-2 ring-offset-white dark:ring-offset-card shadow-[0_0_15px_rgba(0,180,180,0.25)]">
                    <span className="text-xl font-bold text-white/90">{profile.initials}</span>
                  </div>
                  <div>
                    <h2 className="font-bold text-foreground text-base">{profile.name}</h2>
                    <p className="text-sm text-accent font-medium">{profile.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{profile.location}</p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                  Specializing in Enterprise Multi-Agent Systems, Advanced RAG Pipelines, Snowflake/AWS Data Engineering, and ML Forecasting.
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {expertiseTags.slice(0, 10).map((tag) => (
                    <span
                      key={tag.label}
                      className="text-xs px-2 py-0.5 rounded-md bg-secondary dark:bg-secondary text-secondary-foreground border border-border/50 font-medium"
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {heroStats.map((stat) => (
                  <MetricCard key={stat.label} stat={stat} />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
                className="space-y-2.5"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Featured Projects
                  </span>
                  <button
                    onClick={scrollToProjects}
                    className="flex items-center gap-1 text-xs font-semibold text-accent hover:text-primary transition-colors duration-200"
                  >
                    See All
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                {/* Flagship project link */}
                <Link
                  href="/projects/enterprise-multi-agent-system"
                  className="w-full text-left bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-lg border border-blue-500/20 p-3 flex items-center gap-3 transition-all duration-200 hover:border-blue-500/40 hover:shadow-card group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center flex-shrink-0">
                    <Layers className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-white truncate group-hover:text-blue-400 transition-colors duration-200">
                      {flagshipPreview.title}
                    </p>
                    <p className="text-xs text-slate-500 truncate">{flagshipPreview.category}</p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                </Link>
                {previewProjects.map((project) => (
                  <button
                    key={project.id}
                    onClick={scrollToProjects}
                    className="w-full text-left bg-white dark:bg-card rounded-lg border border-border p-3 flex items-center gap-3 transition-all duration-200 hover:border-accent/40 hover:shadow-card group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent/10 dark:bg-accent/15 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-accent">{project.title.charAt(0)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-foreground truncate group-hover:text-primary transition-colors duration-200">
                        {project.title}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">{project.category}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                  </button>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' }}
          className="mt-16 flex justify-center"
        >
          <a
            href={profile.cvUrl}
            download="Bui_Cao_Nguyen_Resume_Yale.docx"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            <div className="text-left">
              <div className="text-sm">Download Resume</div>
              <div className="text-xs opacity-80">View full qualifications</div>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-muted-foreground"
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
