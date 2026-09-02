'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { HeroStat } from '@/lib/data';

interface MetricCardProps {
  stat: HeroStat;
  className?: string;
}

export function MetricCard({ stat, className }: MetricCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (inView && !shown) {
      setShown(true);
    }
  }, [inView, shown]);

  return (
    <div
      ref={ref}
      className={cn(
        'relative bg-white dark:bg-card rounded-xl p-5 border border-border shadow-card text-center group transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1',
        className
      )}
    >
      <div
        className={cn(
          'text-2xl font-bold text-primary transition-all duration-700',
          shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        )}
      >
        {stat.value}
      </div>
      <div className="text-xs text-muted-foreground font-medium mt-1 leading-snug">
        {stat.label}
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-accent rounded-full transition-all duration-300 group-hover:w-10" />
    </div>
  );
}
