import { type ReactNode } from "react";

interface OnboardingStepProps {
  children: ReactNode;
  isAnimating: boolean;
}

export function OnboardingStep({ children, isAnimating }: OnboardingStepProps) {
  return (
    <div 
      className={`transition-all duration-300 ${
        isAnimating ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'
      }`}
    >
      {children}
    </div>
  );
}
