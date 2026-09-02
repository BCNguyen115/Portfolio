import { cn } from '@/lib/utils';
import { ExperienceItem } from '@/lib/data';
import { ChevronRight, MapPin, Calendar } from 'lucide-react';

interface TimelineItemProps {
  item: ExperienceItem;
  isLast?: boolean;
  className?: string;
}

export function TimelineItem({ item, isLast = false, className }: TimelineItemProps) {
  return (
    <div className={cn('relative flex gap-6', className)}>
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-3 h-3 rounded-full bg-accent border-2 border-white dark:border-card shadow-sm mt-1.5 flex-shrink-0" />
        {!isLast && (
          <div className="w-px flex-1 bg-border mt-2 mb-0" />
        )}
      </div>

      <div className={cn('pb-10 flex-1', isLast && 'pb-0')}>
        <div className="bg-white dark:bg-card rounded-xl border border-border shadow-card p-6 transition-all duration-300 hover:shadow-card-hover group">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <h3 className="font-bold text-foreground text-base leading-snug group-hover:text-primary transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-accent mt-0.5">{item.company}</p>
            </div>
            <span
              className={cn(
                'text-xs font-semibold px-2.5 py-1 rounded-full border flex-shrink-0 inline-flex items-center gap-1.5',
                item.type.toLowerCase() === 'present' || item.type.toLowerCase() === 'current'
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                  : 'bg-secondary text-secondary-foreground border-border/50'
              )}
            >
              {(item.type.toLowerCase() === 'present' || item.type.toLowerCase() === 'current') && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              )}
              {item.type}
            </span>
          </div>

          <div className="flex flex-wrap gap-4 mb-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {item.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              {item.location}
            </span>
          </div>

          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{item.summary}</p>

          <ul className="space-y-1.5 mb-4">
            {item.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed">
                <ChevronRight className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                {achievement}
              </li>
            ))}
          </ul>

          {item.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground border border-border/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {item.leadership && (
            <div className="mt-3 pt-3 border-t border-border/60">
              <p className="text-xs text-muted-foreground italic">{item.leadership}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
