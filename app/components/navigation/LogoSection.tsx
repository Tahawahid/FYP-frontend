import { Logo } from "./Logo";
import { AppName } from "./AppName";

export function LogoSection() {
  return (
    <div className="flex items-center gap-2">
      <Logo />
      <AppName />
    </div>
  );
}
