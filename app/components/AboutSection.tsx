import { SectionTitle } from "./common/SectionTitle";
import { FeatureCards } from "./about/FeatureCards";
import { AboutDescription } from "./about/AboutDescription";
import { RevealOnScroll } from "./animations/RevealOnScroll";

export function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-brand-primary-50">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <SectionTitle 
            title="What is SkillSync?" 
            subtitle="Your AI-Powered Career Companion"
            align="center"
          />
        </RevealOnScroll>
        
        <RevealOnScroll delay={0.2}>
          <AboutDescription />
        </RevealOnScroll>
        
        <RevealOnScroll delay={0.4}>
          <FeatureCards />
        </RevealOnScroll>
      </div>
    </section>
  );
}
