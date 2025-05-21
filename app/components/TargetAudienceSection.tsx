import { SectionTitle } from "./common/SectionTitle";
import { AudienceCards } from "./audience/AudienceCards";
import { RevealOnScroll } from "./animations/RevealOnScroll";

export function TargetAudienceSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-brand-primary-50 to-brand-secondary-50">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <SectionTitle 
            title="Who is it For?" 
            subtitle="SkillSync serves diverse career journeys"
            align="center"
          />
        </RevealOnScroll>
        
        <RevealOnScroll delay={0.3}>
          <AudienceCards />
        </RevealOnScroll>
      </div>
    </section>
  );
}
