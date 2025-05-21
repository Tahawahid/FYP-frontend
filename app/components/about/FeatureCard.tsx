import { useState } from "react";
import { Icon } from "../common/Icon";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  color: "primary" | "secondary";
}

export function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const colorClasses = {
    primary: {
      bg: "bg-brand-primary-50",
      hoverBg: "bg-brand-primary-100",
      iconBg: "bg-brand-primary-500",
      border: "border-brand-primary-200",
      hoverBorder: "border-brand-primary-400",
      text: "text-brand-primary-800"
    },
    secondary: {
      bg: "bg-brand-secondary-50",
      hoverBg: "bg-brand-secondary-100",
      iconBg: "bg-brand-secondary-500",
      border: "border-brand-secondary-200",
      hoverBorder: "border-brand-secondary-400",
      text: "text-brand-secondary-800"
    }
  };
  
  const classes = colorClasses[color];
  
  return (
    <div className="h-full"> {/* Fixed height container */}
      <div 
        className={`rounded-xl p-6 border-2 ${classes.border} ${classes.bg} transition-all duration-300 h-full
          ${isHovered ? `${classes.hoverBorder} ${classes.hoverBg} shadow-lg` : 'shadow'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
          position: 'relative',
          zIndex: isHovered ? 10 : 1
        }}
      >
        <div className={`w-14 h-14 rounded-full ${classes.iconBg} flex items-center justify-center mb-4`}>
          <Icon name={icon} className="text-white text-xl" />
        </div>
        
        <h3 className={`text-xl font-bold mb-3 ${classes.text}`}>{title}</h3>
        
        <p className="text-gray-700">{description}</p>
        
        {/* Fixed-height container for the button to prevent layout shifts */}
        <div className="h-10 mt-4 flex items-center justify-end">
          <button 
            className={`text-sm font-medium ${classes.text} flex items-center gap-1 transition-opacity duration-300`}
            style={{ opacity: isHovered ? 1 : 0 }}
          >
            Learn more <Icon name="arrow-right" className="text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
}
