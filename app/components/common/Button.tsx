type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '' 
}: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-medium transition-colors";
  
  const variantClasses = {
    primary: "bg-brand-primary-600 hover:bg-brand-primary-700 text-white",
    secondary: "bg-brand-secondary-600 hover:bg-brand-secondary-700 text-white",
    accent: "bg-brand-accent-600 hover:bg-brand-accent-700 text-white",
    outline: "bg-transparent border border-brand-primary-600 text-brand-primary-600 hover:bg-brand-primary-50"
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
