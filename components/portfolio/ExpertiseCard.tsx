import { cn } from '@/lib/utils';
import { SkillCategory } from '@/lib/data';
import { Code as Code2, ChartBar as BarChart3, BrainCircuit, ChartPie as PieChart, Database, Wrench, Users, Workflow, Languages } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  BarChart3,
  BrainCircuit,
  PieChart,
  Database,
  Wrench,
  Users,
  Workflow,
  Languages,
};

interface ExpertiseCardProps {
  category: SkillCategory;
  className?: string;
}

export function ExpertiseCard({ category, className }: ExpertiseCardProps) {
  const Icon = iconMap[category.icon] ?? Code2;

  return (
    <div
      className={cn(
        'bg-white dark:bg-card rounded-xl border border-border p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 group',
        className
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg bg-primary/8 dark:bg-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors duration-300">
          <Icon className="w-4.5 h-4.5 text-primary dark:text-primary group-hover:text-accent transition-colors duration-300" />
        </div>
        <h3 className="font-semibold text-sm text-foreground">{category.category}</h3>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {category.skills.map((skill) => (
          <span
            key={skill.name}
            className="inline-block text-xs px-2.5 py-1 rounded-md bg-secondary dark:bg-secondary text-secondary-foreground font-medium border border-border/50 hover:border-accent/40 hover:text-accent transition-colors duration-200 cursor-default"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
