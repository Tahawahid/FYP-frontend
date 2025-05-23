export function RecentActivities() {
  const activities = [
    {
      id: 1,
      type: "course_progress",
      title: "Completed Module 3 in Machine Learning Fundamentals",
      date: "Today",
      time: "10:30 AM",
      icon: "book"
    },
    {
      id: 2,
      type: "assessment",
      title: "Took Python Proficiency Assessment",
      date: "Yesterday",
      time: "2:15 PM",
      icon: "clipboard-check"
    },
    {
      id: 3,
      type: "job_application",
      title: "Applied for Senior Data Scientist at TechCorp",
      date: "Yesterday",
      time: "11:45 AM",
      icon: "briefcase"
    },
    {
      id: 4,
      type: "skill_update",
      title: "Added SQL to your skill set",
      date: "Jul 12, 2023",
      time: "4:20 PM",
      icon: "code"
    },
    {
      id: 5,
      type: "certification",
      title: "Earned AWS Machine Learning Certification",
      date: "Jul 10, 2023",
      time: "9:00 AM",
      icon: "certificate"
    }
  ];
  
  const getIconColor = (type: string) => {
    switch(type) {
      case "course_progress": return "text-green-500 bg-green-100";
      case "assessment": return "text-blue-500 bg-blue-100";
      case "job_application": return "text-purple-500 bg-purple-100";
      case "skill_update": return "text-yellow-500 bg-yellow-100";
      case "certification": return "text-red-500 bg-red-100";
      default: return "text-gray-500 bg-gray-100";
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activities</h2>
        <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800">
          View all
        </button>
      </div>
      
      <div className="space-y-4">
        {activities.map(activity => (
          <div key={activity.id} className="flex items-start">
            <div className={`flex-shrink-0 w-10 h-10 rounded-full ${getIconColor(activity.type)} flex items-center justify-center mr-3`}>
              <i className={`fas fa-${activity.icon}`}></i>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{activity.title}</p>
              <p className="text-xs text-gray-500">{activity.date} at {activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
