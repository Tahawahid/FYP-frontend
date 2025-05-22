import { Link } from "react-router";
import { Icon } from "../common/Icon";

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
  icon?: string;
  external?: boolean;
}

export function FooterLink({ to, children, icon = "chevron-right", external = false }: FooterLinkProps) {
  const linkClasses = "text-gray-600 dark:text-gray-400 hover:text-brand-primary-600 dark:hover:text-brand-primary-400 transition-colors flex items-center gap-2";
  
  if (external) {
    return (
      <a 
        href={to} 
        target="_blank" 
        rel="noopener noreferrer"
        className={linkClasses}
      >
        <Icon name={icon} className="text-xs" />
        {children}
      </a>
    );
  }
  
  return (
    <Link 
      to={to} 
      className={linkClasses}
    >
      <Icon name={icon} className="text-xs" />
      {children}
    </Link>
  );
}
