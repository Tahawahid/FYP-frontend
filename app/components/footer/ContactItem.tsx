import { Icon } from "../common/Icon";

interface ContactItemProps {
  icon: string;
  children: React.ReactNode;
  href?: string;
}

export function ContactItem({ icon, children, href }: ContactItemProps) {
  const content = (
    <>
      <div className="w-5 h-5 flex-shrink-0 text-brand-primary-500 dark:text-brand-primary-400">
        <Icon name={icon} />
      </div>
      <span className="text-gray-600 dark:text-gray-400">
        {children}
      </span>
    </>
  );
  
  if (href) {
    return (
      <a 
        href={href} 
        className="flex items-center gap-3 hover:text-brand-primary-600 dark:hover:text-brand-primary-400 transition-colors"
      >
        {content}
      </a>
    );
  }
  
  return (
    <div className="flex items-start gap-3">
      {content}
    </div>
  );
}
