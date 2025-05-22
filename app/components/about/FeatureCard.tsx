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
      iconBg: "bg-brand-primary-500",
      text: "text-brand-primary-700",
      hoverText: "text-brand-primary-600"
    },
    secondary: {
      iconBg: "bg-brand-secondary-500",
      text: "text-brand-secondary-700",
      hoverText: "text-brand-secondary-600"
    }
  };
  
  const classes = colorClasses[color];
  
  return (
    <div 
      className="flex items-start space-x-4 p-3 rounded-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateX(8px)' : 'translateX(0)',
      }}
    >
      {/* Icon */}
      <div className={`flex-shrink-0 w-10 h-10 rounded-full ${classes.iconBg} flex items-center justify-center shadow-md`}>
        <Icon name={icon} className="text-white text-lg" />
      </div>
      
      {/* Content */}
      <div className="flex-1">
        <h4 className={`text-lg font-semibold ${isHovered ? classes.hoverText : classes.text} transition-colors duration-300`}>
          {title}
        </h4>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
}
