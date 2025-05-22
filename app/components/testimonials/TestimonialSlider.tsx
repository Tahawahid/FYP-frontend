import { useState, useEffect, useCallback } from "react";
import { TestimonialCard } from "./TestimonialCard";
import { Icon } from "../common/Icon";

export function TestimonialSlider() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "UX Designer",
      company: "Creative Solutions",
      avatar: "/images/testimonials/avatar-1.jpg",
      quote: "SkillSync helped me identify the exact skills I needed to transition from graphic design to UX. Within 3 months, I landed my dream job with a 40% salary increase!",
      rating: 5,
      gradient: "from-brand-primary-400 to-brand-primary-600"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Data Scientist",
      company: "TechInnovate",
      avatar: "/images/testimonials/avatar-2.jpg",
      quote: "The job trend predictions were spot-on. I focused on the recommended skills and became a data scientist after being a business analyst for years. Best career decision ever.",
      rating: 5,
      gradient: "from-brand-secondary-400 to-brand-secondary-600"
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Frontend Developer",
      company: "WebSphere",
      avatar: "/images/testimonials/avatar-3.jpg",
      quote: "As a self-taught developer, I struggled to know what to learn next. SkillSync's personalized roadmap helped me fill critical knowledge gaps and land my first tech job.",
      rating: 5,
      gradient: "from-brand-primary-400 to-brand-primary-600"
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Product Manager",
      company: "InnovateTech",
      avatar: "/images/testimonials/avatar-4.jpg",
      quote: "The resume optimizer was a game-changer. After updating my resume based on SkillSync's suggestions, I started getting callbacks from companies that previously ignored me.",
      rating: 4,
      gradient: "from-brand-secondary-400 to-brand-secondary-600"
    },
    {
      id: 5,
      name: "Elena Rodriguez",
      role: "Cybersecurity Analyst",
      company: "SecureNet",
      avatar: "/images/testimonials/avatar-5.jpg",
      quote: "SkillSync helped me pivot from IT support to cybersecurity by identifying transferable skills and suggesting specific certifications. My salary doubled in one year!",
      rating: 5,
      gradient: "from-brand-primary-400 to-brand-primary-600"
    },
    {
      id: 6,
      name: "David Kim",
      role: "AI Engineer",
      company: "FutureTech",
      avatar: "/images/testimonials/avatar-6.jpg",
      quote: "The AI-driven course recommendations were perfectly aligned with industry needs. I completed them all and received three job offers within weeks of updating my profile.",
      rating: 5,
      gradient: "from-brand-secondary-400 to-brand-secondary-600"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Calculate the indices of the two visible testimonials
  const visibleIndices = [
    currentIndex,
    (currentIndex + 1) % testimonials.length
  ];
  
  // Auto-advance the slider
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  const goToNext = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
    
    // Reset animation flag after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating, testimonials.length]);
  
  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      (prevIndex - 2 + testimonials.length) % testimonials.length
    );
    
    // Reset animation flag after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating, testimonials.length]);
  
  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Testimonial Cards */}
      <div className="flex flex-col md:flex-row gap-8 mb-10">
        {visibleIndices.map((index) => (
          <div 
            key={testimonials[index].id}
            className="w-full md:w-1/2 transition-all duration-500"
            style={{ 
              opacity: isAnimating ? 0.5 : 1,
              transform: isAnimating ? 'scale(0.98)' : 'scale(1)'
            }}
          >
            <TestimonialCard testimonial={testimonials[index]} />
          </div>
        ))}
      </div>
      
      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-4">
        {/* Previous Button */}
        <button 
          onClick={goToPrev}
          className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center
            shadow-md hover:shadow-lg transition-all duration-300 border border-white/50
            hover:bg-brand-primary-50 group"
          disabled={isAnimating}
        >
          <Icon 
            name="chevron-left" 
            className="text-gray-700 group-hover:text-brand-primary-600 transition-colors" 
          />
        </button>
        
        {/* Pagination Indicators */}
        <div className="flex gap-2">
          {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
            <button
              key={index}
              className={`h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 2) === index
                  ? 'bg-gradient-to-r from-brand-primary-500 to-brand-primary-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400 w-3'
              }`}
              onClick={() => {
                if (isAnimating) return;
                setIsAnimating(true);
                setCurrentIndex(index * 2);
                setTimeout(() => setIsAnimating(false), 500);
              }}
            />
          ))}
        </div>
        
        {/* Next Button */}
        <button 
          onClick={goToNext}
          className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center
            shadow-md hover:shadow-lg transition-all duration-300 border border-white/50
            hover:bg-brand-primary-50 group"
          disabled={isAnimating}
        >
          <Icon 
            name="chevron-right" 
            className="text-gray-700 group-hover:text-brand-primary-600 transition-colors" 
          />
        </button>
      </div>
    </div>
  );
}
