import { SectionHeader } from './SectionHeader';
import { ExpertiseCard } from './ExpertiseCard';
import { StaggerContainer, StaggerItem, AnimatedSection } from './AnimatedSection';
import { skillCategories, profile } from '@/lib/data';
import { Download } from 'lucide-react';

export function ExpertiseSection() {
  return (
    <section id="expertise" className="section-padding bg-background dark:bg-background">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Expertise"
          title="Technical Skills & Capabilities"
          subtitle="A structured view of the tools, frameworks, and domains I work across — organized for clarity and designed to grow."
          align="center"
        />

        <StaggerContainer className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5" staggerDelay={0.06}>
          {skillCategories.map((category) => (
            <StaggerItem key={category.category}>
              <ExpertiseCard category={category} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="mt-12 flex justify-center" delay={0.2}>
          <a
            href={profile.cvUrl}
            download="Bui_Cao_Nguyen_Resume_Yale.docx"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
