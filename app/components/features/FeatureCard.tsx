import { useState, useRef } from "react";
import { Link } from "react-router";
import { Icon } from "../common/Icon";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  gradient: string;
  learnMoreLink: string;
}

export function FeatureCard({ 
  icon, 
  title, 
  description, 
  gradient,
  learnMoreLink 
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="h-full perspective-1000">
      <div 
        ref={cardRef}
        className={`h-full rounded-xl overflow-hidden transition-all duration-500
          backdrop-blur-md bg-white/20 border border-white/30
          ${isHovered ? 'shadow-xl' : 'shadow'}
        `}
        style={{
          transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
          boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Icon with gradient background */}
        <div className={`w-full h-24 bg-gradient-to-r ${gradient} flex items-center justify-center relative overflow-hidden`}>
          {/* Animated circles in background */}
          <div 
            className="absolute w-32 h-32 rounded-full bg-white/10"
            style={{
              top: '-10px',
              left: '-10px',
              transform: isHovered ? 'scale(1.2)' : 'scale(1)',
              transition: 'transform 1s ease-out'
            }}
          ></div>
          <div 
            className="absolute w-24 h-24 rounded-full bg-white/10"
            style={{
              bottom: '-10px',
              right: '-10px',
              transform: isHovered ? 'scale(1.2)' : 'scale(1)',
              transition: 'transform 1s ease-out 0.2s'
            }}
          ></div>
          
          {/* Icon */}
          <div 
            className="relative z-10 text-white text-4xl"
            style={{
              transform: isHovered ? 'scale(1.2) rotateY(180deg)' : 'scale(1) rotateY(0)',
              transition: 'transform 0.6s ease-out'
            }}
          >
            <Icon name={icon} />
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            {title}
          </h3>
          
          <p className="text-gray-600 mb-6">
            {description}
          </p>
          
          {/* Learn More Link */}
          <div className="mt-auto">
            <Link 
              to={learnMoreLink}
              className={`inline-flex items-center gap-2 text-sm font-medium 
                ${gradient.includes('primary') ? 'text-brand-primary-600' : 'text-brand-secondary-600'}
                transition-all duration-300
              `}
              style={{
                transform: isHovered ? 'translateX(8px)' : 'translateX(0)',
              }}
            >
              Learn more 
              <Icon 
                name="arrow-right" 
                className="transition-transform duration-300"
                style={{
                  transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
