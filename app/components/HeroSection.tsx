import { GlassmorphicContainer } from "./common/GlassmorphicContainer";
import { HeroHeadline } from "./hero/HeroHeadline";
import { HeroSubheadline } from "./hero/HeroSubheadline";
import { HeroButtons } from "./hero/HeroButtons";

export function HeroSection() {
  return (
    <div className="relative z-10 flex items-center justify-center h-full w-full">
      <GlassmorphicContainer className="max-w-3xl mx-auto">
        <HeroHeadline />
        <HeroSubheadline />
        <HeroButtons />
      </GlassmorphicContainer>
    </div>
  );
}
