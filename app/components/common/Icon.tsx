interface IconProps {
  name: string;
  className?: string;
}

export function Icon({ name, className = "" }: IconProps) {
  // This is a placeholder. In a real app, you'd use a proper icon library
  // like Font Awesome, Heroicons, or Material Icons
  
  // For this example, we'll use a simple mapping to Font Awesome classes
  // assuming you've included Font Awesome in your project
  const iconClass = `fa fa-${name}`;
  
  return <i className={`${iconClass} ${className}`}></i>;
}
