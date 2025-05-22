import { Link } from "react-router";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and App Name */}
          <div className="flex items-center gap-2">
            <img 
              src="/images/logo.png" 
              alt="SkillSync Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-brand-primary-700">SkillSync</span>
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-brand-primary-600 hover:text-brand-primary-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-brand-primary-600 hover:text-brand-primary-400 transition-colors">
              About
            </Link>
            <Link to="/services" className="text-brand-primary-600 hover:text-brand-primary-400 transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-brand-primary-600 hover:text-brand-primary-400 transition-colors">
              Contact
            </Link>
            <Link to="/auth/login" className="px-4 py-2 bg-brand-secondary-500 hover:bg-brand-secondary-700 text-white rounded-lg transition-colors">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
