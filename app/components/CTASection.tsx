import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { RevealOnScroll } from "./animations/RevealOnScroll";

export function CTASection() {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Track mouse position for the interactive gradient effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height
      });
    }
  };
  
  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background with lighter theme colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary-50 via-white to-brand-secondary-50"></div>
      
      {/* Interactive following ball */}
      <div 
        className="absolute w-64 h-64 rounded-full transition-all duration-300 ease-out pointer-events-none"
        style={{
          background: `radial-gradient(circle, 
            rgba(255, 108, 45, 0.2), 
            rgba(193, 58, 197, 0.15), 
            rgba(255, 77, 179, 0.1))`,
          left: `calc(${mousePosition.x * 100}% - 128px)`,
          top: `calc(${mousePosition.y * 100}% - 128px)`,
          filter: 'blur(40px)'
        }}
      ></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full bg-brand-primary-200/20 blur-3xl"
          style={{ 
            top: '10%', 
            left: '15%',
            animation: 'float 8s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 rounded-full bg-brand-secondary-200/20 blur-3xl"
          style={{ 
            bottom: '10%', 
            right: '15%',
            animation: 'float 10s ease-in-out infinite reverse'
          }}
        ></div>
      </div>
      
      {/* Content Container with Glassmorphism */}
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto bg-white/30 backdrop-blur-md rounded-3xl p-12 border border-white/50 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-primary-600 via-brand-secondary-600 to-brand-accent-600 bg-clip-text text-transparent text-center">
              Ready to build your future-ready skillset?
            </h2>
            
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto text-center">
              Join thousands of professionals who are already accelerating their careers with personalized skill recommendations and job insights.
            </p>
            
            {/* CTA Button with hover effect */}
            <div className="text-center">
              <div 
                className="relative inline-block"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Animated background for button */}
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-primary-400 via-brand-secondary-400 to-brand-accent-400 transition-all duration-500 ease-out"
                  style={{
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    opacity: isHovered ? 0.8 : 1,
                    filter: `blur(${isHovered ? '8px' : '0px'})`
                  }}
                ></div>
                
                <Link 
                  to="/signup" 
                  className="relative z-10 inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-full bg-gradient-to-r from-brand-primary-600 to-brand-secondary-600 shadow-lg transition-all duration-300 hover:shadow-xl"
                  style={{
                    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)'
                  }}
                >
                  Create Your Free Profile
                  <svg 
                    className="ml-2 w-5 h-5 transition-transform duration-300"
                    style={{
                      transform: isHovered ? 'translateX(4px)' : 'translateX(0)'
                    }}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
              
              {/* Additional text */}
              <p className="mt-6 text-sm text-gray-600">
                No credit card required • Free forever • Join 10,000+ users
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}
