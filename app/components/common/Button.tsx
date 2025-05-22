import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
}

export function Button({ children, variant, className = "", onClick }: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-brand-primary-600 hover:bg-brand-primary-700 text-white focus:ring-brand-primary-500",
    secondary: "bg-brand-secondary-600 hover:bg-brand-secondary-700 text-white focus:ring-brand-secondary-500",
    outline: "bg-transparent border-2 border-brand-primary-500 text-brand-primary-600 hover:bg-brand-primary-50 focus:ring-brand-primary-500"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
