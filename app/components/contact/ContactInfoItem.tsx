import { type ReactNode } from "react";
import { Icon } from "../common/Icon";

interface ContactInfoItemProps {
  icon: string;
  title: string;
  content: ReactNode;
}

export function ContactInfoItem({ icon, title, content }: ContactInfoItemProps) {
  return (
    <div className="flex">
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-primary-100 flex items-center justify-center mr-4">
        <Icon name={icon} className="text-brand-primary-600" />
      </div>
      <div>
        <h3 className="text-lg font-medium text-brand-primary-800">{title}</h3>
        <div className="mt-1 text-brand-primary-600">{content}</div>
      </div>
    </div>
  );
}
