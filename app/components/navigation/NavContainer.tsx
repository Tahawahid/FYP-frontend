interface NavContainerProps {
  children: React.ReactNode;
}

export function NavContainer({ children }: NavContainerProps) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-xl border-b border-white/20">
      {children}
    </nav>
  );
}
