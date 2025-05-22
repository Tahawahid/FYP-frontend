import { HeroHeadline } from "./HeroHeadline";
import { HeroSubheadline } from "./HeroSubheadline";
import { HeroButtons } from "./HeroButtons";

export function HeroContent() {
  return (
    <div className="flex flex-col items-start justify-center">
      <HeroHeadline />
      <HeroSubheadline />
      <HeroButtons />
    </div>
  );
}
