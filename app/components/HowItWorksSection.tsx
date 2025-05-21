import { SectionTitle } from "./common/SectionTitle";
import { ProcessSteps } from "./process/ProcessSteps";
import { RevealOnScroll } from "./animations/RevealOnScroll";

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-brand-secondary-50 to-white">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <SectionTitle 
            title="How It Works" 
            subtitle="Your journey to career success in 4 simple steps"
            align="center"
          />
        </RevealOnScroll>
        
        <RevealOnScroll delay={0.2}>
          <ProcessSteps />
        </RevealOnScroll>
      </div>
    </section>
  );
}
