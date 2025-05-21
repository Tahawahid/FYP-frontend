import { ProcessStep } from "./ProcessStep";

export function ProcessSteps() {
  const steps = [
    {
      id: 1,
      icon: "user-circle",
      title: "Create Your Profile",
      description: "Sign up and build your profile with your education, experience, and skills.",
      color: "primary"
    },
    {
      id: 2,
      icon: "chart-pie",
      title: "Analyze Your Skills & Goals",
      description: "Our AI analyzes your current skills and helps you define clear career goals.",
      color: "secondary"
    },
    {
      id: 3,
      icon: "lightbulb",
      title: "Get Personalized Recommendations",
      description: "Receive tailored course and skill recommendations based on your goals and market trends.",
      color: "primary"
    },
    {
      id: 4,
      icon: "flag-checkered",
      title: "Track Progress & Land the Right Job",
      description: "Monitor your skill development and get matched with opportunities that fit your profile.",
      color: "secondary"
    }
  ];
  
  return (
    <div className="max-w-4xl mx-auto">
      {steps.map((step, index) => (
        <ProcessStep 
          key={step.id}
          number={step.id}
          icon={step.icon}
          title={step.title}
          description={step.description}
          color={step.color}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  );
}
