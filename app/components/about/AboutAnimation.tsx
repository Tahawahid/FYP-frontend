import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function AboutAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-brand-secondary-400/10 blur-xl"></div>
      
      {/* Lottie animation - made much larger */}
      <div className="w-[120%] max-w-2xl">
        <DotLottieReact
          src="/animations/career-growth.lottie"
          loop
          autoplay
          className="w-full h-auto relative z-10"
        />
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-4 h-4 rounded-full bg-brand-primary-400/30"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${10 + Math.random() * 80}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
