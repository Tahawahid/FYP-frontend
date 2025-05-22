interface FooterLogoProps {
  logoSrc: string;
  logoAlt: string;
  companyName: string;
  description: string;
}

export function FooterLogo({ logoSrc, logoAlt, companyName, description }: FooterLogoProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <img 
          src={logoSrc} 
          alt={logoAlt} 
          className="h-10 w-auto"
        />
        <span className="text-2xl font-bold bg-gradient-to-r from-brand-primary-700 to-brand-secondary-700 bg-clip-text text-transparent">
          {companyName}
        </span>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {description}
      </p>
    </div>
  );
}
