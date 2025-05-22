import { useState, useEffect } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function HeroChatbot() {
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const fullText = "Hi, I'm Mr. James, your AI Career Path guide! I can help you discover the perfect career path based on your skills and interests.";
  
  // Animate the message bubble appearing after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMessageVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Typewriter effect for the message text
  useEffect(() => {
    if (isMessageVisible && currentText.length < fullText.length) {
      const timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, 30); // Speed of typing
      
      return () => clearTimeout(timer);
    }
  }, [currentText, isMessageVisible, fullText]);
  
  return (
    <div className="relative flex justify-start items-center">
      {/* Container for the chatbot and related elements - aligned to the right */}
      <div className="relative max-w-xs flex justify-end">
        {/* Pulse effect behind the chatbot */}
        <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-brand-primary-400/10 animate-pulse-slow"></div>
        
        {/* AI Chatbot Character */}
        <div className="relative w-full z-10">
          <DotLottieReact
            src="/animations/ai-chatbot.lottie"
            loop
            autoplay
            className="w-full h-auto"
          />
          
          {/* Decorative elements */}
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-2/3 h-6 bg-black/10 rounded-full blur-md"></div>
          
          {/* Interactive elements - floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-2 h-2 rounded-full bg-brand-secondary-400/30"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
                  animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* Message bubble - positioned to the right of the character */}
          <div 
            className={`absolute -top-1/3 -right-3/4 sm:-right-2/3 md:-right-3/4 max-w-xs bg-white/90 backdrop-blur-sm p-3 rounded-xl rounded-bl-none shadow-lg transform transition-all duration-500 z-20 ${
              isMessageVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-brand-primary-800 text-xs md:text-sm">
              {currentText}
              <span className={`inline-block w-1 h-3 ml-1 bg-brand-primary-500 ${
                currentText.length === fullText.length ? "animate-blink" : "opacity-0"
              }`}></span>
            </p>
            {/* Speech bubble pointer - points to the left */}
            <div className="absolute bottom-4 left-0 w-3 h-3 bg-white/90 transform -translate-x-1/2 rotate-45"></div>
          </div>
          
          {/* Name tag */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-brand-primary-600 text-white px-3 py-0.5 rounded-full text-xs font-medium z-20">
            Mr. James
          </div>
        </div>
      </div>
    </div>
  );
}
