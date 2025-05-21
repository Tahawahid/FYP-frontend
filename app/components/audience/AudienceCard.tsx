import { useState, useRef, useEffect } from "react";
import { Icon } from "../common/Icon";

interface AudienceCardProps {
  icon: string;
  title: string;
  description: string;
  color: "primary" | "secondary";
  avatar: string;
  isFutureFeature?: boolean;
}

export function AudienceCard({ 
  icon, 
  title, 
  description, 
  color, 
  avatar,
  isFutureFeature 
}: AudienceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Track mouse position for 3D effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };
  
  // Calculate rotation based on mouse position
  const calculateRotation = () => {
    if (!cardRef.current) return { x: 0, y: 0 };
    
    const cardWidth = cardRef.current.offsetWidth;
    const cardHeight = cardRef.current.offsetHeight;
    
    // Calculate rotation (max 5 degrees - reduced from 10 for subtlety)
    const rotateY = ((mousePosition.x / cardWidth) - 0.5) * 5;
    const rotateX = ((mousePosition.y / cardHeight) - 0.5) * -5;
    
    return { x: rotateX, y: rotateY };
  };
  
  const rotation = calculateRotation();
  
  const colorClasses = {
    primary: {
      border: "border-brand-primary-300",
      glow: "shadow-brand-primary-300/20",
      text: "text-brand-primary-700",
      badge: "bg-brand-primary-600"
    },
    secondary: {
      border: "border-brand-secondary-300",
      glow: "shadow-brand-secondary-300/20",
      text: "text-brand-secondary-700",
      badge: "bg-brand-secondary-600"
    }
  };
  
  const classes = colorClasses[color];
  
  return (
    <div className="h-full w-full max-w-sm"> {/* Fixed height/width container */}
      <div 
        ref={cardRef}
        className={`relative h-full rounded-2xl overflow-hidden transition-all duration-300 
          backdrop-blur-md bg-white/10 border ${classes.border}
          ${isHovered ? `shadow-xl ${classes.glow}` : 'shadow'}
        `}
        style={{
          transform: isHovered 
            ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` 
            : 'perspective(1000px) rotateX(0) rotateY(0)',
          transformStyle: 'preserve-3d',
          position: 'relative',
          zIndex: isHovered ? 10 : 1
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Future Feature Badge */}
        {isFutureFeature && (
          <div className={`absolute top-4 right-4 ${classes.badge} text-white text-xs py-1 px-2 rounded-full z-10`}>
            Coming Soon
          </div>
        )}
        
        {/* Avatar with 3D effect */}
        <div className="relative h-48 overflow-hidden">
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"
            style={{ transform: 'translateZ(20px)' }}
          ></div>
          <img 
            src={avatar} 
            alt={`${title} avatar`} 
            className="w-full h-full object-cover transition-transform duration-500"
            style={{ 
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          />
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${classes.badge}`}>
              <Icon name={icon} className="text-white" />
            </div>
            <h3 className={`text-2xl font-bold ${classes.text}`}>{title}</h3>
          </div>
          
          <p className="text-gray-700 mb-4">{description}</p>
          
          {/* Fixed height container for the button */}
          <div className="h-8">
            <button 
              className={`flex items-center gap-2 font-medium ${classes.text} transition-opacity duration-300`}
              style={{ opacity: isHovered ? 1 : 0 }}
            >
              Learn more <Icon name="arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
