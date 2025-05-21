export function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <button className="px-6 py-3 rounded-lg bg-brand-primary-600 hover:bg-brand-primary-700 text-white font-medium transition-colors">
        Get Started
      </button>
      <button className="px-6 py-3 rounded-lg bg-brand-secondary-600 hover:bg-brand-secondary-700 text-white font-medium transition-colors">
        Try a Demo
      </button>
      <button className="px-6 py-3 rounded-lg bg-brand-accent-600 hover:bg-brand-accent-700 text-white font-medium transition-colors">
        Explore Features
      </button>
    </div>
  );
}
