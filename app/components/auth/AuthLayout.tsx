import { type ReactNode } from "react";
import { Link } from "react-router";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  showAnimation?: boolean;
  animationPath?: string;
}

export function AuthLayout({ 
  children, 
  title, 
  subtitle, 
  showAnimation = false,
  animationPath = "/animations/login-animation.lottie"
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-primary-50 to-white flex flex-col">
      {/* Header with logo */}
      <header className="py-6 px-4">
        <div className="container mx-auto">
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="SkillSync" className="h-10 w-auto" />
            <span className="text-xl font-bold text-brand-primary-700">SkillSync</span>
          </Link>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-1 flex items-center justify-center py-10 px-4">
        <div className={`container mx-auto ${showAnimation ? 'max-w-6xl' : 'max-w-md'}`}>
          {showAnimation ? (
            // Two-column layout with animation
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
              {/* Left column - Form */}
              <div className="w-full lg:w-1/2 p-8 md:p-12">
                <div className="max-w-md mx-auto">
                  <h1 className="text-3xl font-bold text-brand-primary-800 mb-2">{title}</h1>
                  <p className="text-gray-600 mb-8">{subtitle}</p>
                  {children}
                </div>
              </div>
              
              {/* Right column - Animation - Updated to take full height */}
              <div className="w-full lg:w-1/2 bg-brand-primary-50 flex items-center justify-center h-full">
                <div className="w-full h-full">
                  <DotLottieReact
                    src={animationPath}
                    loop
                    autoplay
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ) : (
            // Single column layout for forgot password, reset password, etc.
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <img src="/images/logo.png" alt="SkillSync" className="h-16 w-auto mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-brand-primary-800 mb-2">{title}</h1>
                <p className="text-gray-600">{subtitle}</p>
              </div>
              {children}
            </div>
          )}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-6 px-4 text-center text-gray-500 text-sm">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} SkillSync. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
