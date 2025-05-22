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
            <Link to="/#about" className="text-brand-primary-700 hover:text-brand-primary-500 transition-colors font-medium">
              About
            </Link>
            <Link to="/#features" className="text-brand-primary-700 hover:text-brand-primary-500 transition-colors font-medium">
              Features
            </Link>
            <Link to="/blog" className="text-brand-primary-700 hover:text-brand-primary-500 transition-colors font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-brand-primary-700 hover:text-brand-primary-500 transition-colors font-medium">
              Contact
            </Link>
            <Link to="/auth/login" className="px-4 py-2 bg-brand-secondary-600 hover:bg-brand-secondary-700 text-white rounded-lg transition-colors">
              Sign In
            </Link>
            
            {/* Glassmorphic AI Chat Button with Racing Border */}
            <Link 
              to="/chat" 
              className="ai-chat-button relative px-5 py-2.5 rounded-lg font-medium transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              {/* Glassmorphic background */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-lg z-0"></div>
              
              {/* Racing border effect container */}
              <div className="racing-border absolute inset-0 rounded-lg z-0"></div>
              
              {/* Button text */}
              <span className="relative z-10 flex items-center gap-2 text-brand-secondary-500">
                <i className="fas fa-robot "></i>
                AI Chat
              </span>
            </Link>
            
            {/* Add the racing border and glassmorphic styles */}
            <style>{`
              .ai-chat-button {
                box-shadow: 0 4px 15px rgba(0, 114, 255, 0.2);
              }
              
              .racing-border::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                border-radius: inherit;
                padding: 2px;
                background: linear-gradient(
                  90deg,
                  var(--color-brand-primary-500),
                  var(--color-brand-secondary-500),
                  var(--color-brand-accent-500),
                  var(--color-brand-primary-500)
                );
                background-size: 300% 100%;
                animation: moveGradient 8s linear infinite;
                -webkit-mask: 
                  linear-gradient(#fff 0 0) content-box, 
                  linear-gradient(#fff 0 0);
                -webkit-mask-composite: xor;
                mask-composite: exclude;
              }
              
              @keyframes moveGradient {
                0% { background-position: 0% 50%; }
                100% { background-position: 300% 50%; }
              }
            `}</style>
          </div>
        </div>
      </div>
    </nav>
  );
}
