import { Icon } from "../common/Icon";

interface SocialIconProps {
  name: string;
  url: string;
  icon: string;
}

export function SocialIcon({ name, url, icon }: SocialIconProps) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={name}
      className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 group"
    >
      <Icon 
        name={icon} 
        className="text-brand-primary-500 dark:text-brand-primary-400 group-hover:text-brand-primary-600 dark:group-hover:text-brand-primary-300 transition-colors" 
      />
    </a>
  );
}
