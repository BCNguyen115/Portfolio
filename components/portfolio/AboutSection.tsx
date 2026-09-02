import { SectionHeader } from './SectionHeader';
import { ValueCard } from './ValueCard';
import { StaggerContainer, StaggerItem, AnimatedSection } from './AnimatedSection';
import { valueCards, aboutSummary, dataDrivenVision, profile } from '@/lib/data';
import { MapPin, Mail, Phone, Linkedin, Github, Download } from 'lucide-react';

const boldPhrases = [
  'measurable ROI',
  'strategic partner',
  'practical AI',
  'real business value',
  'scale their data capabilities',
  'competitive advantage',
  'end-to-end pipeline',
];

function highlightText(text: string) {
  const parts: (string | { text: string; bold: boolean })[] = [];
  let remaining = text;

  while (remaining.length > 0) {
    let earliestIndex = remaining.length;
    let matchedPhrase = '';

    for (const phrase of boldPhrases) {
      const idx = remaining.toLowerCase().indexOf(phrase.toLowerCase());
      if (idx !== -1 && idx < earliestIndex) {
        earliestIndex = idx;
        matchedPhrase = phrase;
      }
    }

    if (matchedPhrase && earliestIndex < remaining.length) {
      if (earliestIndex > 0) {
        parts.push(remaining.slice(0, earliestIndex));
      }
      parts.push({ text: remaining.slice(earliestIndex, earliestIndex + matchedPhrase.length), bold: true });
      remaining = remaining.slice(earliestIndex + matchedPhrase.length);
    } else {
      parts.push(remaining);
      remaining = '';
    }
  }

  return parts.map((part, i) => {
    if (typeof part === 'string') return <span key={i}>{part}</span>;
    return (
      <strong key={i} className="font-semibold text-foreground">
        {part.text}
      </strong>
    );
  });
}

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-background">
      <div className="container-wide">
        <AnimatedSection className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 flex items-center justify-center ring-[3px] ring-accent/60 ring-offset-4 ring-offset-background shadow-[0_0_20px_rgba(0,180,180,0.25)]">
            <span className="text-2xl font-bold text-white/90">{profile.initials}</span>
          </div>
        </AnimatedSection>

        <SectionHeader
          eyebrow="About Me"
          title="Thoughtful. Technical. Delivery-Focused."
          subtitle="AI Engineer specializing in Enterprise Multi-Agent Systems, Advanced RAG Pipelines, and Data Engineering."
          align="center"
        />

        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          <AnimatedSection className="lg:col-span-3" direction="left">
            <div className="space-y-4">
              {aboutSummary.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-foreground/80 leading-relaxed text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Focus', value: 'Multi-Agent & RAG' },
                { label: 'Data Platform', value: 'Snowflake & AWS' },
                { label: 'Mindset', value: 'Zero-Hallucination' },
                { label: 'Quality', value: '102+ Tests / 0.956' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-background dark:bg-card rounded-xl border border-border p-4 text-center"
                >
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm font-bold text-foreground">{item.value}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-2" direction="right" delay={0.1}>
            <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-transparent dark:from-primary/10 dark:via-accent/10 rounded-2xl border border-border/60 p-8 h-full flex flex-col justify-center">
              <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-5">
                Professional Identity
              </h3>
              <div className="space-y-3">
                {[
                  'Architects autonomous Multi-Agent Systems and self-correcting PEV loops on LangGraph',
                  'Designs 3-tier Hybrid RAG pipelines with HyDE, pgvector HNSW, and TEI Cross-Encoder rerankers',
                  'Builds production-grade ELT pipelines and dynamic views on Snowflake & AWS',
                  'Implements time-series revenue forecasting with Prophet, Bayesian STS, and Power BI dashboards',
                  'Enforces strict tool security with Model Context Protocol (MCP) and AST SQL validators',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                    <p className="text-sm text-foreground/80 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mb-16" delay={0.15}>
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-accent/5 via-primary/5 to-transparent dark:from-accent/10 dark:via-primary/10 rounded-2xl border border-border/60 p-8">
            <h3 className="font-semibold text-foreground text-lg mb-4">
              {dataDrivenVision.title}
            </h3>
            <div className="space-y-3">
              {dataDrivenVision.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-sm text-foreground/80 leading-relaxed">
                  {highlightText(paragraph)}
                </p>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-16" delay={0.2}>
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-primary/5 via-accent/5 to-transparent dark:from-primary/10 dark:via-accent/10 rounded-2xl border border-border/60 p-8">
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-6">
              Contact Information
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/8 dark:bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-medium text-foreground">{profile.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/8 dark:bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-200"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/8 dark:bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium text-foreground">{profile.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/8 dark:bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-200"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/8 dark:bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Github className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-200"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/8 dark:bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Download className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Resume</p>
                  <a
                    href={profile.cvUrl}
                    download="Bui_Cao_Nguyen_Resume_Yale.docx"
                    className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-200"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-6">
          <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            What I Bring
          </h3>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {valueCards.map((card) => (
            <StaggerItem key={card.title}>
              <ValueCard card={card} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
