import { FeatureCard } from "./FeatureCard";

export function FeatureCards() {
  const features = [
    {
      id: 1,
      icon: "chart-line",
      title: "Analyze Job Trends",
      description: "Stay ahead with real-time analysis of job market trends and demands.",
      color: "primary"
    },
    {
      id: 2,
      icon: "puzzle-piece",
      title: "Identify Skill Gaps",
      description: "Discover the skills you need to develop to reach your career goals.",
      color: "secondary"
    },
    {
      id: 3,
      icon: "graduation-cap",
      title: "Recommend Courses",
      description: "Get personalized course recommendations based on your skill gaps.",
      color: "primary"
    },
    {
      id: 4,
      icon: "chart-bar",
      title: "Track Skill Progress",
      description: "Monitor your skill development with intuitive progress tracking.",
      color: "secondary"
    },
    {
      id: 5,
      icon: "file-alt",
      title: "Optimize Resumes",
      description: "Create targeted resumes that highlight your most relevant skills.",
      color: "primary"
    }
  ];
  
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-brand-primary-700 mb-6">Key Features</h3>
      {features.map(feature => (
        <FeatureCard 
          key={feature.id}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          color={feature.color as "primary" | "secondary"}
        />
      ))}
    </div>
  );
}
