export function FloatingShapes() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Top left shape */}
      <div 
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-brand-primary-200 opacity-20"
        style={{ filter: "blur(80px)" }}
      ></div>
      
      {/* Bottom right shape */}
      <div 
        className="absolute -bottom-40 -right-20 w-[30rem] h-[30rem] rounded-full bg-brand-secondary-200 opacity-20"
        style={{ filter: "blur(100px)" }}
      ></div>
      
      {/* Middle shape */}
      <div 
        className="absolute top-1/3 -right-20 w-72 h-72 rounded-full bg-brand-accent-200 opacity-10"
        style={{ filter: "blur(60px)" }}
      ></div>
      
      {/* Small floating circles */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-white opacity-70"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        ></div>
      ))}
      
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-30px) translateX(15px);
          }
          50% {
            transform: translateY(-15px) translateX(30px);
          }
          75% {
            transform: translateY(20px) translateX(15px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
