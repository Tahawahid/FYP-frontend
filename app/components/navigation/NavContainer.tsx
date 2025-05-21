interface NavContainerProps {
  children: React.ReactNode;
}

export function NavContainer({ children }: NavContainerProps) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-accent-500/10 backdrop-blur-sm">
      {children}
    </nav>
  );
}
