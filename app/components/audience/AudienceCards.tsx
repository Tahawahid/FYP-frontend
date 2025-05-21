import { AudienceCard } from "./AudienceCard";

export function AudienceCards() {
  const audiences = [
    {
      id: 1,
      icon: "user-graduate",
      title: "Students",
      description: "Choose a future-proof career path with data-driven insights on emerging skills and industries.",
      color: "primary",
      avatar: "/images/avatars/student.jpg"
    },
    {
      id: 2,
      icon: "briefcase",
      title: "Professionals",
      description: "Switch careers with confidence by identifying transferable skills and learning what you need to succeed.",
      color: "secondary",
      avatar: "/images/avatars/professional.jpg"
    },
    {
      id: 3,
      icon: "building",
      title: "Employers",
      description: "Understand skill market trends to make informed hiring decisions and develop your workforce effectively.",
      color: "primary",
      avatar: "/images/avatars/employer.jpg",
      isFutureFeature: true
    }
  ];
  
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {audiences.map(audience => (
        <AudienceCard 
          key={audience.id}
          icon={audience.icon}
          title={audience.title}
          description={audience.description}
          color={audience.color}
          avatar={audience.avatar}
          isFutureFeature={audience.isFutureFeature}
        />
      ))}
    </div>
  );
}
