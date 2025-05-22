import React from "react";

interface SocialIconGroupProps {
  children: React.ReactNode;
}

export function SocialIconGroup({ children }: SocialIconGroupProps) {
  return (
    <div className="flex gap-4">
      {children}
    </div>
  );
}
