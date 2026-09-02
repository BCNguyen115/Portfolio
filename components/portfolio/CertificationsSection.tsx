import { SectionHeader } from './SectionHeader';
import { CertificateCard } from './CertificateCard';
import { StaggerContainer, StaggerItem } from './AnimatedSection';
import { certifications } from '@/lib/data';

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding bg-background dark:bg-background">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Certifications"
          title="Professional Credentials"
          subtitle="Verified knowledge across data analytics, machine learning, cloud platforms, and business intelligence — with a commitment to continuous learning."
          align="center"
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.06}>
          {certifications.map((cert, i) => (
            <StaggerItem key={cert.id || `${cert.title}-${i}`}>
              <CertificateCard cert={cert} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
