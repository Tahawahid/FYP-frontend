import { NavContainer } from "./navigation/NavContainer";
import { NavContent } from "./navigation/NavContent";
import { LogoSection } from "./navigation/LogoSection";
import { NavLinks } from "./navigation/NavLinks";

export function Navigation() {
  return (
    <NavContainer>
      <NavContent>
        <LogoSection />
        <NavLinks />
      </NavContent>
    </NavContainer>
  );
}
