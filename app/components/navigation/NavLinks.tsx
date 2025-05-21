import { NavLink } from "./NavLink";
import { SignInButton } from "./SignInButton";

export function NavLinks() {
  return (
    <div className="flex items-center gap-6">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <SignInButton />
    </div>
  );
}
