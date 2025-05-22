import { useState } from "react";
import { Icon } from "../common/Icon";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  gradient: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="h-full rounded-2xl overflow-hidden transition-all duration-500
        backdrop-blur-md bg-white/40 border border-white/50
        hover:shadow-xl"
      style={{
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered 
          ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Header */}
      <div className={`h-4 bg-gradient-to-r ${testimonial.gradient}`}></div>
      
      {/* Content */}
      <div className="p-8 relative">
        {/* Subtle background gradient for the content */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 pointer-events-none"></div>
        
        {/* Quote */}
        <div className="mb-6 relative">
          <div className="absolute -top-4 -left-2 text-4xl opacity-20 text-gray-400">
            <Icon name="quote-left" />
          </div>
          <p className="text-gray-700 relative z-10 italic">
            "{testimonial.quote}"
          </p>
        </div>
        
        {/* Rating */}
        <div className="flex mb-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <Icon 
              key={index}
              name="star" 
              className={`${
                index < testimonial.rating 
                  ? testimonial.gradient.includes('primary') 
                    ? 'text-brand-primary-500' 
                    : 'text-brand-secondary-500'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        
        {/* User Info */}
        <div className="flex items-center">
          {/* Avatar with gradient border */}
          <div className={`relative rounded-full p-0.5 bg-gradient-to-r ${testimonial.gradient} mr-4`}>
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-white"
            />
          </div>
          
          {/* Name, Role, Company */}
          <div>
            <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
