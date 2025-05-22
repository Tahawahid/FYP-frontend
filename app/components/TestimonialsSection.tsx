import { useState, useEffect } from "react";
import { SectionTitle } from "./common/SectionTitle";
import { TestimonialSlider } from "./testimonials/TestimonialSlider";
import { RevealOnScroll } from "./animations/RevealOnScroll";

export function TestimonialsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary-50 via-white to-brand-primary-50"></div>
      
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-20 left-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-brand-primary-200/30 to-brand-primary-400/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-gradient-to-tr from-brand-secondary-200/30 to-brand-secondary-400/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <SectionTitle 
            title="Success Stories" 
            subtitle="Hear from our users who transformed their careers with SkillSync"
            align="center"
          />
        </RevealOnScroll>
        
        <RevealOnScroll delay={0.2}>
          <TestimonialSlider />
        </RevealOnScroll>
      </div>
    </section>
  );
}
