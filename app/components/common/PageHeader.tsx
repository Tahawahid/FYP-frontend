interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-brand-primary-800 mb-4">{title}</h1>
      {subtitle && (
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
