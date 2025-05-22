import { Link } from "react-router";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
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
            <Link to="/" className="text-brand-primary-700 hover:text-brand-primary-500 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-brand-primary-700 hover:text-brand-primary-500 transition-colors font-medium">
              About
            </Link>
            <Link to="/services" className="text-brand-primary-700 hover:text-brand-primary-500 transition-colors font-medium">
              Services
            </Link>
            <Link to="/chat" className="text-brand-primary-700 hover:text-brand-primary-500 transition-colors font-medium">
              AI Chat
            </Link>
            <Link to="/contact" className="text-brand-primary-700 hover:text-brand-primary-500 transition-colors font-medium">
              Contact
            </Link>
            <Link to="/auth/login" className="px-4 py-2 bg-brand-secondary-600 hover:bg-brand-secondary-700 text-white rounded-lg transition-colors">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
