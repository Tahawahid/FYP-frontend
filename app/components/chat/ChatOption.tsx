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
      className={`block p-8 rounded-2xl ${classes.bg} ${classes.hover} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
      style={{
        boxShadow: "8px 8px 16px #e6e6e6, -8px -8px 16px #ffffff"
      }}
    >
      <div className={`w-16 h-16 rounded-full ${classes.bg} ${classes.text} flex items-center justify-center mb-4`}
        style={{
          boxShadow: "inset 2px 2px 5px #d1d1d1, inset -2px -2px 5px #ffffff"
        }}
      >
        <i className={`fas fa-${icon} text-2xl`}></i>
      </div>
      
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      
      <div className="mt-6 flex justify-end">
        <div className={`flex items-center ${classes.text} font-medium`}>
          Start chatting <i className="fas fa-arrow-right ml-2"></i>
        </div>
      </div>
    </Link>
  );
}
