import { Link } from "react-router";

interface ChatOptionProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: "primary" | "secondary" | "accent";
}

export function ChatOption({ id, title, description, icon, color }: ChatOptionProps) {
  const colorClasses = {
    primary: {
      bg: "bg-brand-primary-50",
      text: "text-brand-primary-600",
      shadow: "shadow-brand-primary-100",
      hover: "hover:bg-brand-primary-100"
    },
    secondary: {
      bg: "bg-brand-secondary-50",
      text: "text-brand-secondary-600",
      shadow: "shadow-brand-secondary-100",
      hover: "hover:bg-brand-secondary-100"
    },
    accent: {
      bg: "bg-brand-accent-50",
      text: "text-brand-accent-600",
      shadow: "shadow-brand-accent-100",
      hover: "hover:bg-brand-accent-100"
    }
  };
  
  const classes = colorClasses[color];
  
  return (
    <Link 
      to={`/chat/${id}`}
      className={`block p-4 rounded-xl ${classes.bg} ${classes.hover} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
      style={{
        boxShadow: "4px 4px 8px #e6e6e6, -4px -4px 8px #ffffff"
      }}
    >
      <div className={`w-10 h-10 rounded-full ${classes.bg} ${classes.text} flex items-center justify-center mb-3`}
        style={{
          boxShadow: "inset 2px 2px 5px #d1d1d1, inset -2px -2px 5px #ffffff"
        }}
      >
        <i className={`fas fa-${icon} text-lg`}></i>
      </div>
      
      <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      
      <div className="mt-4 flex justify-end">
        <div className={`flex items-center ${classes.text} font-medium text-sm`}>
          Start chatting <i className="fas fa-arrow-right ml-2 text-xs"></i>
        </div>
      </div>
    </Link>
  );
}
