interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionTitle({ title, subtitle, align = 'left' }: SectionTitleProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };
  
  return (
    <div className={`mb-12 ${alignmentClasses[align]}`}>
      <h2 className="text-4xl font-bold text-brand-primary-800 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-brand-secondary-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
