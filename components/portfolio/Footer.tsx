'use client';

import { profile } from '@/lib/data';
import { Linkedin, Github, Download, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground dark:bg-foreground/5 dark:border-t dark:border-border text-background dark:text-foreground">
      <div className="container-wide py-14">
        <div className="text-center mb-12 pb-10 border-b border-background/10 dark:border-border">
          <h3 className="text-xl md:text-2xl font-bold text-background dark:text-foreground mb-3">
            Get In Touch
          </h3>
          <p className="text-sm text-background/60 dark:text-muted-foreground max-w-md mx-auto mb-6">
            Open to AI Engineering, Enterprise Multi-Agent Systems, and Data Engineering opportunities. Let&apos;s discuss how I can contribute to your team.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-primary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            Send Me a Message
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center">
                <span className="text-xs font-bold text-accent">{profile.initials}</span>
              </div>
              <span className="font-bold text-sm text-background dark:text-foreground">
                {profile.name}
              </span>
            </div>
            <p className="text-sm text-background/60 dark:text-muted-foreground leading-relaxed max-w-sm mb-5">
              AI Engineer specializing in Enterprise Multi-Agent Systems, Advanced RAG Pipelines, Snowflake/AWS Data Engineering, and ML Forecasting.
            </p>

            <div className="space-y-2 mb-5">
              <div className="flex items-center gap-2 text-sm text-background/60 dark:text-muted-foreground">
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors duration-200">
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/60 dark:text-muted-foreground">
                <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/60 dark:text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{profile.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-background/20 dark:border-border flex items-center justify-center text-background/60 dark:text-muted-foreground hover:text-accent hover:border-accent/40 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-background/20 dark:border-border flex items-center justify-center text-background/60 dark:text-muted-foreground hover:text-accent hover:border-accent/40 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-background/40 dark:text-muted-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 dark:text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-background/40 dark:text-muted-foreground mb-4">
              Resources
            </h4>
            <div className="space-y-2">
              <a
                href={profile.cvUrl}
                download="Bui_Cao_Nguyen_Resume_Yale.docx"
                className="flex items-center gap-2 text-sm text-background/60 dark:text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                <Download className="w-3.5 h-3.5" />
                Download CV / Resume
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-background/60 dark:text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub Projects
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-background/10 dark:border-border">
              <p className="text-xs text-background/40 dark:text-muted-foreground mb-1">Availability</p>
              <p className="text-xs text-background/60 dark:text-muted-foreground leading-relaxed">
                Open to AI Engineer &amp; Data Engineering opportunities — full-time, consulting, and collaborative projects.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 dark:border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/40 dark:text-muted-foreground">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-background/40 dark:text-muted-foreground hover:text-accent transition-colors duration-200"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
