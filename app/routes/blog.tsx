import { Navigation } from "../components/Navigation";
import { Footer } from "../components/footer";
import { PageHeader } from "../components/common/PageHeader";

export function meta() {
  return [
    { title: "Blog - SkillSync" },
    { name: "description", content: "Read the latest articles and insights from SkillSync." },
  ];
}

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-24">
        <PageHeader
          title="SkillSync Blog"
          subtitle="Insights, tips, and news about career development and skill enhancement"
        />
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-brand-primary-800 mb-4">Coming Soon!</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We're working on creating valuable content to help you navigate your career journey.
            Check back soon for articles, guides, and insights from industry experts.
          </p>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
