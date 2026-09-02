import { cn } from '@/lib/utils';
import { ValueCard as ValueCardType } from '@/lib/data';
import {
  Brain,
  Cpu,
  Workflow,
  MessageSquare,
  TrendingUp,
  Layers,
  Target,
  Users,
  BrainCircuit,
  LayoutDashboard,
  Database,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Cpu,
  Workflow,
  MessageSquare,
  TrendingUp,
  Layers,
  Target,
  Users,
  BrainCircuit,
  LayoutDashboard,
  Database,
};

interface ValueCardProps {
  card: ValueCardType;
  className?: string;
}

export function ValueCard({ card, className }: ValueCardProps) {
  const Icon = iconMap[card.icon] ?? Brain;

  return (
    <div
      className={cn(
        'bg-white dark:bg-card rounded-xl border border-border shadow-card p-5 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 group',
        className
      )}
    >
      <div className="w-9 h-9 rounded-lg bg-primary/8 dark:bg-primary/15 flex items-center justify-center mb-3 group-hover:bg-accent/15 transition-colors duration-300">
        <Icon className="w-4.5 h-4.5 text-primary group-hover:text-accent transition-colors duration-300" />
      </div>
      <h3 className="font-semibold text-sm text-foreground mb-1.5 group-hover:text-primary transition-colors duration-200">
        {card.title}
      </h3>
      <p className="text-xs text-muted-foreground leading-relaxed">{card.description}</p>
    </div>
  );
}
