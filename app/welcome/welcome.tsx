import { useState, useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";

export function Welcome() {
  // Simple dark mode detection - you can replace with a more robust solution if needed
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);
    
    // Listen for changes in color scheme preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/images/bg-img03.jpg')",
          // filter: "blur(1px)",
          transform: "scale(1.1)" 
        }}
      ></div>
      
      {/* Overlay to adjust contrast/brightness if needed */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
    </div>
  );
}
