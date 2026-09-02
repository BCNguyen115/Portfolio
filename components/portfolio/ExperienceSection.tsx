import { SectionHeader } from './SectionHeader';
import { TimelineItem } from './TimelineItem';
import { AnimatedSection } from './AnimatedSection';
import { experience } from '@/lib/data';

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-background dark:bg-background">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Career Journey"
          title="Work Experience"
          subtitle="A record of professional contribution — from early-stage analytics work to full-stack AI and data delivery."
          align="center"
        />

        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            {experience.map((item, i) => (
              <TimelineItem
                key={`${item.company}-${i}`}
                item={item}
                isLast={i === experience.length - 1}
              />
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
