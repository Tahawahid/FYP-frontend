import { Link } from "react-router";

interface FooterBottomProps {
  copyrightText: string;
  links: Array<{
    text: string;
    to: string;
  }>;
}

export function FooterBottom({ copyrightText, links }: FooterBottomProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      {/* Copyright */}
      <div className="text-gray-600 dark:text-gray-400 text-sm">
        {copyrightText}
      </div>
      
      {/* Legal Links */}
      <div className="flex flex-wrap gap-6 text-sm">
        {links.map((link, index) => (
          <Link 
            key={index}
            to={link.to} 
            className="text-gray-600 dark:text-gray-400 hover:text-brand-primary-600 dark:hover:text-brand-primary-400 transition-colors"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
