import { SectionTitle } from "./common/SectionTitle";
import { FeatureCards } from "./about/FeatureCards";
import { AboutDescription } from "./about/AboutDescription";
import { RevealOnScroll } from "./animations/RevealOnScroll";
import { AboutAnimation } from "./about/AboutAnimation";

export function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-brand-primary-50">
      <div className="container mx-auto px-4">
        {/* First break: Title and Description (centered) */}
        <div className="mb-16">
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
        </div>
        
        {/* Second break: Features and Animation (side by side) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Feature Cards */}
          <RevealOnScroll delay={0.3}>
            <div className="order-2 lg:order-1 max-w-lg mx-auto lg:mx-0">
              <FeatureCards />
            </div>
          </RevealOnScroll>
          
          {/* Right side: Lottie Animation - made larger */}
          <RevealOnScroll delay={0.4}>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end h-[400px] md:h-[500px]">
              <AboutAnimation />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
