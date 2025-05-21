import { Link } from "react-router";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export function NavLink({ to, children }: NavLinkProps) {
  return (
    <Link 
      to={to} 
      className="text-brand-primary-600 hover:text-brand-primary-400 transition-colors"
    >
      {children}
    </Link>
  );
}
