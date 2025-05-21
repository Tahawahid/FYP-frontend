interface NavContentProps {
  children: React.ReactNode;
}

export function NavContent({ children }: NavContentProps) {
  return (
    <div className="container mx-auto px-4 py-3">
      <div className="flex justify-between items-center">
        {children}
      </div>
    </div>
  );
}
