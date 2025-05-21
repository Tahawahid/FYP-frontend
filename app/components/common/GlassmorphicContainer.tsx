interface GlassmorphicContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassmorphicContainer({ 
  children, 
  className = '' 
}: GlassmorphicContainerProps) {
  return (
    <div className={`bg-white/10 backdrop-blur-md p-12 rounded-2xl border border-white/20 shadow-xl ${className}`}>
      {children}
    </div>
  );
}
