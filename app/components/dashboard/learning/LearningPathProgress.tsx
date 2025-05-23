import { useState } from "react";

interface LearningPath {
  id: number;
  title: string;
  description: string;
  progress: number;
  totalCourses: number;
  completedCourses: number;
  estimatedTimeLeft: string;
}

export function LearningPathProgress() {
  const [learningPaths, setLearningPaths] = useState<LearningPath[]>([
    {
      id: 1,
      title: "Machine Learning Engineer",
      description: "Master the skills needed to become a professional Machine Learning Engineer",
      progress: 65,
      totalCourses: 12,
      completedCourses: 8,
      estimatedTimeLeft: "3 months"
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      description: "Learn the core concepts and tools of data science",
      progress: 90,
      totalCourses: 10,
      completedCourses: 9,
      estimatedTimeLeft: "2 weeks"
    },
    {
      id: 3,
      title: "Deep Learning Specialization",
      description: "Dive deep into neural networks and deep learning techniques",
      progress: 30,
      totalCourses: 8,
      completedCourses: 2,
      estimatedTimeLeft: "5 months"
    }
  ]);

  const getProgressColor = (progress: number) => {
    if (progress >= 75) return "bg-green-500";
    if (progress >= 50) return "bg-brand-primary-500";
    if (progress >= 25) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Learning Path Progress</h2>
        <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800">
          View All Paths
        </button>
      </div>
      
      <div className="space-y-6">
        {learningPaths.map(path => (
          <div key={path.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-md font-medium text-gray-800">{path.title}</h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-primary-100 text-brand-primary-800">
                {path.progress}% Complete
              </span>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">{path.description}</p>
            
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className={`h-2 rounded-full ${getProgressColor(path.progress)}`}
                style={{ width: `${path.progress}%` }}
              ></div>
            </div>
            
            <div className="flex justify-between text-sm text-gray-500">
              <div>
                <span className="font-medium">{path.completedCourses}</span> of <span className="font-medium">{path.totalCourses}</span> courses completed
              </div>
              <div>
                <span className="font-medium">{path.estimatedTimeLeft}</span> left
              </div>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button className="px-3 py-1 bg-brand-primary-50 text-brand-primary-700 hover:bg-brand-primary-100 rounded-lg transition-colors text-sm">
                Continue Learning
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-md font-medium text-gray-800">Recommended Paths</h3>
          <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800">
            See More
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h4 className="text-md font-medium text-gray-800 mb-2">Cloud Computing Specialist</h4>
            <p className="text-sm text-gray-600 mb-3">Master cloud platforms, architecture, and deployment strategies</p>
            <div className="flex justify-end">
              <button className="px-3 py-1 bg-brand-primary-600 text-white hover:bg-brand-primary-700 rounded-lg transition-colors text-sm">
                Start Path
              </button>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h4 className="text-md font-medium text-gray-800 mb-2">DevOps Engineer</h4>
            <p className="text-sm text-gray-600 mb-3">Learn CI/CD, infrastructure as code, and monitoring tools</p>
            <div className="flex justify-end">
              <button className="px-3 py-1 bg-brand-primary-600 text-white hover:bg-brand-primary-700 rounded-lg transition-colors text-sm">
                Start Path
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
