import { GlassmorphicContainer } from "./common/GlassmorphicContainer";
import { HeroContent } from "./hero/HeroContent";
import { HeroChatbot } from "./hero/HeroChatbot";

export function HeroSection() {
  return (
    <div className="relative z-10 flex items-center justify-center h-full w-full px-4">
      <GlassmorphicContainer className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Hero content */}
        <HeroContent />
        
        {/* Right side - AI Chatbot - with right alignment */}
        <div className="flex justify-start">
          <HeroChatbot />
        </div>
      </GlassmorphicContainer>
    </div>
  );
}
