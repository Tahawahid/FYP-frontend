import { useState } from "react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, children, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 px-8 text-left focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium text-brand-primary-700">{title}</h3>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <svg className="h-5 w-5 text-brand-primary-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="h-5 w-5 text-brand-primary-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-4 px-12" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

interface AccordionProps {
  items: {
    title: string;
    content: React.ReactNode;
  }[];
  defaultOpen?: number;
}

export function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-3xl border border-gray-300 shadow-lg divide-y divide-gray-200">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => toggleItem(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
