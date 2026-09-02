'use client';

import { CaseStudyNav } from '@/components/case-study/CaseStudyNav';
import { CaseStudyHero } from '@/components/case-study/CaseStudyHero';
import { MetricsGrid } from '@/components/case-study/MetricsGrid';
import { ArchitectureVisualizer } from '@/components/case-study/ArchitectureVisualizer';
import { PEVStepper } from '@/components/case-study/PEVStepper';
import { InnovationsSection } from '@/components/case-study/InnovationsSection';
import { ChallengesSection } from '@/components/case-study/ChallengesSection';
import { DockerTopology } from '@/components/case-study/DockerTopology';
import { CaseStudyFooter } from '@/components/case-study/CaseStudyFooter';
import { CaseStudyData } from '@/lib/case-study-data';

export function CaseStudyPageClient({ data }: { data: CaseStudyData }) {
  return (
    <main className="bg-slate-950 min-h-screen">
      <CaseStudyNav />
      <CaseStudyHero data={data} />
      <MetricsGrid metrics={data.metrics} />
      <ArchitectureVisualizer layers={data.architectureLayers} />
      <div id="pev-stepper">
        <PEVStepper />
      </div>
      <InnovationsSection innovations={data.keyInnovations} />
      <ChallengesSection challenges={data.engineeringChallenges} />
      <DockerTopology services={data.dockerServices} />
      <CaseStudyFooter />
    </main>
  );
}
