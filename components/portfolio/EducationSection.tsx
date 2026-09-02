import { SectionHeader } from './SectionHeader';
import { AnimatedSection } from './AnimatedSection';
import { education } from '@/lib/data';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';

export function EducationSection() {
  return (
    <section id="education" className="section-padding bg-white dark:bg-background">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Education"
          title="Academic Foundation"
          subtitle="The academic grounding that underpins strong analytical thinking, technical capability, and problem-solving."
          align="center"
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-white dark:bg-card rounded-xl border border-border shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover">
                <div className="h-1 bg-gradient-to-r from-primary to-accent" />
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/8 dark:bg-primary/15 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground text-base leading-snug">
                        {item.degree}
                      </h3>
                      <p className="text-sm font-semibold text-accent mt-0.5">{item.institution}</p>
                      <div className="flex flex-wrap gap-4 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {item.coursework.length > 0 && (
                    <div className="mt-4">
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Relevant Coursework
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.coursework.map((course) => (
                          <span
                            key={course}
                            className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/50"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.highlights &&
                    item.highlights.filter((h) => !h.startsWith('[OPTIONAL')).length > 0 && (
                      <div className="mt-4 pt-4 border-t border-border/60">
                        <ul className="space-y-1.5">
                          {item.highlights
                            .filter((h) => !h.startsWith('[OPTIONAL'))
                            .map((highlight, hi) => (
                              <li key={hi} className="flex items-start gap-2 text-sm text-foreground/80">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                                {highlight}
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}

                  {item.thesis && !item.thesis.startsWith('[OPTIONAL') && (
                    <div className="mt-4 pt-4 border-t border-border/60">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                        Thesis / Capstone
                      </p>
                      <p className="text-sm text-foreground/80 italic">{item.thesis}</p>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
