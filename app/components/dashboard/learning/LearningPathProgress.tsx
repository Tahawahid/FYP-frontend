import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

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

  // Overall progress chart data
  const overallProgressData = {
    labels: learningPaths.map(path => path.title),
    datasets: [
      {
        label: 'Progress (%)',
        data: learningPaths.map(path => path.progress),
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(139, 92, 246, 0.8)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(139, 92, 246, 1)',
        ],
        borderWidth: 1,
        borderRadius: 4,
      }
    ]
  };

  // Completion status doughnut
  const completionData = {
    labels: ['Completed', 'In Progress', 'Not Started'],
    datasets: [
      {
        data: [
          learningPaths.reduce((sum, path) => sum + path.completedCourses, 0),
          learningPaths.reduce((sum, path) => sum + (path.totalCourses - path.completedCourses), 0),
          5 // Placeholder for not started courses
        ],
        backgroundColor: [
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(156, 163, 175, 0.8)',
        ],
        borderWidth: 0,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: function(context: any) {
            return `Progress: ${context.parsed.y}%`;
          }
        }
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 10,
          },
          maxRotation: 45,
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          font: {
            size: 11,
          },
          callback: function(value: any) {
            return value + '%';
          },
        },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          usePointStyle: true,
          padding: 15,
          font: {
            size: 11,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        cornerRadius: 8,
      },
    },
  };

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

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Progress Bar Chart */}
        <div>
          <h3 className="text-md font-medium text-gray-800 mb-4">Progress Overview</h3>
          <div className="h-48">
            <Bar data={overallProgressData} options={barOptions} />
          </div>
        </div>

        {/* Completion Doughnut Chart */}
        <div>
          <h3 className="text          -md font-medium text-gray-800 mb-4">Course Completion Status</h3>
          <div className="h-48">
            <Doughnut data={completionData} options={doughnutOptions} />
          </div>
        </div>
      </div>
      
      {/* Learning Paths List */}
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
            
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div 
                className={`h-3 rounded-full ${getProgressColor(path.progress)} transition-all duration-300`}
                style={{ width: `${path.progress}%` }}
              ></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500 mb-4">
              <div>
                <span className="font-medium text-gray-900">{path.completedCourses}</span> of <span className="font-medium text-gray-900">{path.totalCourses}</span> courses
              </div>
              <div>
                <span className="font-medium text-gray-900">{path.estimatedTimeLeft}</span> remaining
              </div>
              <div>
                <span className="font-medium text-gray-900">{Math.round((path.completedCourses / path.totalCourses) * 100)}%</span> courses done
              </div>
              <div>
                <span className="font-medium text-green-600">
                  {path.progress >= 75 ? 'Excellent' : path.progress >= 50 ? 'Good' : 'Getting Started'}
                </span> pace
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-brand-primary-50 text-brand-primary-700 hover:bg-brand-primary-100 rounded-lg transition-colors text-sm">
                  Continue Learning
                </button>
                <button className="px-3 py-1 bg-gray-50 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-sm">
                  View Details
                </button>
              </div>
              <div className="text-xs text-gray-500">
                Last activity: {Math.floor(Math.random() * 7) + 1} days ago
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Recommended Paths */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-md font-medium text-gray-800">Recommended Learning Paths</h3>
          <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800">
            See All Recommendations
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-md font-medium text-gray-800">Cloud Computing Specialist</h4>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">New</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">Master cloud platforms, architecture, and deployment strategies</p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-500">
                <span className="font-medium">8 courses</span> • <span className="font-medium">3-4 months</span>
              </div>
              <button className="px-3 py-1 bg-brand-primary-600 text-white hover:bg-brand-primary-700 rounded-lg transition-colors text-sm">
                Start Path
              </button>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-md font-medium text-gray-800">DevOps Engineer</h4>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Popular</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">Learn CI/CD, infrastructure as code, and monitoring tools</p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-500">
                <span className="font-medium">10 courses</span> • <span className="font-medium">4-5 months</span>
              </div>
              <button className="px-3 py-1 bg-brand-primary-600 text-white hover:bg-brand-primary-700 rounded-lg transition-colors text-sm">
                Start Path
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Statistics */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600">
            {learningPaths.reduce((sum, path) => sum + path.completedCourses, 0)}
          </div>
          <div className="text-sm text-blue-800">Courses Completed</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600">
            {Math.round(learningPaths.reduce((sum, path) => sum + path.progress, 0) / learningPaths.length)}%
          </div>
          <div className="text-sm text-green-800">Average Progress</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-purple-600">
            {learningPaths.length}
          </div>
          <div className="text-sm text-purple-800">Active Paths</div>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-amber-600">
            {Math.round(Math.random() * 20) + 10}h
          </div>
          <div className="text-sm text-amber-800">This Week</div>
        </div>
      </div>
    </div>
  );
}

