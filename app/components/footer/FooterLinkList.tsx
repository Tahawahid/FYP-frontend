import React from "react";

interface FooterLinkListProps {
  children: React.ReactNode;
  spacing?: "tight" | "normal" | "loose";
}

export function FooterLinkList({ children, spacing = "normal" }: FooterLinkListProps) {
  const spacingClasses = {
    tight: "space-y-1",
    normal: "space-y-2",
    loose: "space-y-4"
  };
  
  return (
    <ul className={spacingClasses[spacing]}>
      {React.Children.map(children, (child) => (
        <li>{child}</li>
      ))}
    </ul>
  );
}
