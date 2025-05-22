import type { ReactNode } from "react";

interface GlassmorphicContainerProps {
  children: ReactNode;
  className?: string;
}

export function GlassmorphicContainer({ children, className = "" }: GlassmorphicContainerProps) {
  return (
    <div className={`bg-white/20 backdrop-blur-lg rounded-3xl border border-white/30 shadow-xl p-8 md:p-12 ${className}`}>
      {children}
    </div>
  );
}
