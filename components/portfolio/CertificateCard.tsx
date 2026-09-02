import { Certification } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ExternalLink, Award } from 'lucide-react';

const categoryColors: Record<string, {
  badge: string;
  iconBg: string;
  glow: string;
}> = {
  'Business Intelligence': {
    badge: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/25',
    iconBg: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/25',
    glow: 'hover:border-amber-500/40 dark:hover:border-amber-500/40 hover:shadow-amber-500/5',
  },
  'Data Analytics': {
    badge: 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/25',
    iconBg: 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/25',
    glow: 'hover:border-cyan-500/40 dark:hover:border-cyan-500/40 hover:shadow-cyan-500/5',
  },
  'Generative AI': {
    badge: 'text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/25',
    iconBg: 'text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/25',
    glow: 'hover:border-purple-500/40 dark:hover:border-purple-500/40 hover:shadow-purple-500/5',
  },
  'MLOps / ML': {
    badge: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
    iconBg: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
    glow: 'hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:shadow-emerald-500/5',
  },
  'Data Engineering': {
    badge: 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/25',
    iconBg: 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/25',
    glow: 'hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-blue-500/5',
  },
  'Data Platform': {
    badge: 'text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border-indigo-500/25',
    iconBg: 'text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border-indigo-500/25',
    glow: 'hover:border-indigo-500/40 dark:hover:border-indigo-500/40 hover:shadow-indigo-500/5',
  },
  'Machine Learning': {
    badge: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
    iconBg: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
    glow: 'hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:shadow-emerald-500/5',
  },
  'AI / LLM': {
    badge: 'text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/25',
    iconBg: 'text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/25',
    glow: 'hover:border-purple-500/40 dark:hover:border-purple-500/40 hover:shadow-purple-500/5',
  },
};

const defaultColor = {
  badge: 'text-primary bg-primary/10 border-primary/25',
  iconBg: 'text-primary bg-primary/10 border-primary/25',
  glow: 'hover:border-primary/40 dark:hover:border-primary/40 hover:shadow-primary/5',
};

interface CertificateCardProps {
  cert: Certification;
  className?: string;
}

export function CertificateCard({ cert, className }: CertificateCardProps) {
  const styles = categoryColors[cert.category] ?? defaultColor;
  const issuer = cert.issuer || cert.provider;
  const issueDate = cert.issueDate || cert.date;

  return (
    <div
      className={cn(
        'relative bg-white dark:bg-card/70 backdrop-blur-sm rounded-2xl border border-border dark:border-white/10 shadow-card p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col group overflow-hidden',
        styles.glow,
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={cn(
            'w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border transition-transform duration-300 group-hover:scale-105',
            styles.iconBg
          )}
        >
          <Award className="w-5 h-5" />
        </div>
        <span
          className={cn(
            'text-xs font-semibold px-2.5 py-1 rounded-full border tracking-wide',
            styles.badge
          )}
        >
          {cert.category}
        </span>
      </div>

      <div className="flex-1">
        <h3 className="font-bold text-base text-foreground leading-snug mb-2 group-hover:text-primary transition-colors duration-200">
          {cert.title}
        </h3>
        <p className="text-xs font-medium text-muted-foreground mb-1">{issuer}</p>
        <p className="text-xs text-muted-foreground/80 font-mono">Issued {issueDate}</p>
      </div>

      {cert.credentialUrl && !cert.credentialUrl.startsWith('[') && (
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-primary transition-colors duration-200"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          View Credential
        </a>
      )}
    </div>
  );
}

