import React from "react";

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

export function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}
