import { FeatureCard } from "./FeatureCard";

export function FeatureCards() {
  const features = [
    {
      id: 1,
      icon: "search",
      title: "Job Trend Prediction",
      description: "Stay ahead with AI-powered analysis of emerging job markets and in-demand skills.",
      gradient: "from-brand-primary-400 to-brand-primary-600",
      learnMoreLink: "/features/job-trends"
    },
    {
      id: 2,
      icon: "brain",
      title: "Skill Gap Analysis",
      description: "Identify the exact skills you need to develop to reach your career goals.",
      gradient: "from-brand-secondary-400 to-brand-secondary-600",
      learnMoreLink: "/features/skill-gaps"
    },
    {
      id: 3,
      icon: "book",
      title: "Course Recommendations",
      description: "Get personalized course suggestions from top platforms based on your skill gaps.",
      gradient: "from-brand-primary-400 to-brand-primary-600",
      learnMoreLink: "/features/courses"
    },
    {
      id: 4,
      icon: "file-alt",
      title: "Resume Optimizer",
      description: "Create ATS-friendly resumes that highlight your most relevant skills for each job.",
      gradient: "from-brand-secondary-400 to-brand-secondary-600",
      learnMoreLink: "/features/resume"
    },
    {
      id: 5,
      icon: "chart-line",
      title: "Career Tracker",
      description: "Monitor your progress and visualize your career growth over time.",
      gradient: "from-brand-primary-400 to-brand-primary-600",
      learnMoreLink: "/features/tracker"
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map(feature => (
        <FeatureCard 
          key={feature.id}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          gradient={feature.gradient}
          learnMoreLink={feature.learnMoreLink}
        />
      ))}
    </div>
  );
}
