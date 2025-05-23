export function UpcomingMilestones() {
  const milestones = [
    {
      id: 1,
      title: "Complete Machine Learning Course",
      dueDate: "Aug 20, 2023",
      progress: 75,
      category: "learning"
    },
    {
      id: 2,
      title: "Prepare for AWS Certification Exam",
      dueDate: "Sep 5, 2023",
      progress: 40,
      category: "certification"
    },
    {
      id: 3,
      title: "Update Resume with New Skills",
      dueDate: "Aug 15, 2023",
      progress: 20,
      category: "career"
    },
    {
      id: 4,
      title: "Complete Data Visualization Project",
      dueDate: "Aug 30, 2023",
      progress: 60,
      category: "project"
    }
  ];
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case "learning": return "text-blue-800 bg-blue-100";
      case "certification": return "text-green-800 bg-green-100";
      case "career": return "text-purple-800 bg-purple-100";
      case "project": return "text-yellow-800 bg-yellow-100";
      default: return "text-gray-800 bg-gray-100";
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Upcoming Milestones</h2>
        <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800">
          View all
        </button>
      </div>
      
      <div className="space-y-4">
        {milestones.map(milestone => (
          <div key={milestone.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-medium text-gray-900">{milestone.title}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(milestone.category)}`}>
                {milestone.category.charAt(0).toUpperCase() + milestone.category.slice(1)}
              </span>
            </div>
            
            <div className="flex justify-between items-center text-xs text-gray-600 mb-1">
              <span>Progress</span>
              <span>{milestone.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div 
                className="h-2 rounded-full bg-brand-primary-500"
                style={{ width: `${milestone.progress}%` }}
              ></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">Due: {milestone.dueDate}</span>
              <button className="text-xs text-brand-primary-600 hover:text-brand-primary-800">
                View details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
