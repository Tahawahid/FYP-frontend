import { SectionTitle } from "./common/SectionTitle";
import { FeatureCards } from "./features/FeatureCards";
import { RevealOnScroll } from "./animations/RevealOnScroll";

export function CoreFeaturesSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary-100 via-white to-brand-secondary-100"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-brand-primary-300/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-brand-secondary-300/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <SectionTitle 
            title="Core Features" 
            subtitle="Powerful tools to accelerate your career growth"
            align="center"
          />
        </RevealOnScroll>
        
        <RevealOnScroll delay={0.2}>
          <FeatureCards />
        </RevealOnScroll>
      </div>
    </section>
  );
}
