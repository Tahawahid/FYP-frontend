import { useRef, useState, useEffect } from "react";
import { Icon } from "../common/Icon";

interface ProcessStepProps {
  number: number;
  icon: string;
  title: string;
  description: string;
  color: "primary" | "secondary";
  isLast: boolean;
}

export function ProcessStep({ 
  number, 
  icon, 
  title, 
  description, 
  color,
  isLast 
}: ProcessStepProps) {
  const [isVisible, setIsVisible] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3
      }
    );
    
    if (stepRef.current) {
      observer.observe(stepRef.current);
    }
    
    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, []);
  
  const colorClasses = {
    primary: {
      bg: "bg-brand-primary-600",
      textLight: "text-brand-primary-300",
      textDark: "text-brand-primary-800",
      border: "border-brand-primary-300",
      line: "bg-brand-primary-300"
    },
    secondary: {
      bg: "bg-brand-secondary-600",
      textLight: "text-brand-secondary-300",
      textDark: "text-brand-secondary-800",
      border: "border-brand-secondary-300",
      line: "bg-brand-secondary-300"
    }
  };
  
  const classes = colorClasses[color];
  
  return (
    <div 
      ref={stepRef}
      className="relative flex items-start mb-12 last:mb-0"
    >
      {/* Step Number and Icon */}
      <div 
        className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full ${classes.bg} flex items-center justify-center shadow-lg
          transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
        style={{ 
          transformStyle: 'preserve-3d',
          perspective: '1000px',
          transformOrigin: 'center'
        }}
      >
        <div 
          className="absolute inset-0 rounded-full border-4 border-white"
          style={{ 
            transform: isVisible ? 'translateZ(10px)' : 'translateZ(0px)',
            transition: 'transform 1s ease-out'
          }}
        ></div>
        <span 
          className="absolute text-white font-bold text-lg"
          style={{ 
            transform: isVisible ? 'translateZ(20px)' : 'translateZ(0px)',
            transition: 'transform 1s ease-out 0.2s'
          }}
        >
          {number}
        </span>
        <Icon 
          name={icon} 
          className="absolute text-white text-xl opacity-0"
          style={{ 
            transform: isVisible ? 'translateZ(20px) rotateY(0deg)' : 'translateZ(0px) rotateY(90deg)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s ease-out 0.4s'
          }}
        />
      </div>
      
      {/* Connecting Line */}
      {!isLast && (
        <div 
          className={`absolute left-8 top-16 w-0.5 ${classes.line} ml-px`}
          style={{ 
            height: '100px',
            transform: isVisible ? 'scaleY(1)' : 'scaleY(0)',
            transformOrigin: 'top',
            transition: 'transform 1s ease-out 0.6s'
          }}
        ></div>
      )}
      
      {/* Content */}
      <div 
        className="ml-8 pt-1"
        style={{ 
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
          transition: 'all 1s ease-out 0.3s'
        }}
      >
        <h3 className={`text-2xl font-bold mb-2 ${classes.textDark}`}>
          {title}
        </h3>
        <p className="text-gray-700 max-w-2xl">
          {description}
        </p>
        
        {/* Decorative line */}
        <div 
          className={`mt-4 h-0.5 ${classes.line} rounded-full`}
          style={{ 
            width: isVisible ? '100px' : '0px',
            transition: 'width 1s ease-out 0.7s'
          }}
        ></div>
      </div>
    </div>
  );
}
