import { CourseRecommendations } from "./learning/CourseRecommendations";
import { LearningPath } from "./learning/LearningPath";
import { SavedResources } from "./learning/SavedResources";
import { CertificationOptions } from "./learning/CertificationOptions";

export function LearningResources() {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Learning Resources</h1>
        <p className="text-gray-600">Personalized courses, certifications, and learning paths to help you develop your skills.</p>
      </div>
      
      {/* Learning Overview */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Learning Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-brand-primary-50 rounded-lg p-4 border border-brand-primary-100">
            <h3 className="text-sm font-medium text-gray-700 mb-1">Courses in Progress</h3>
            <p className="text-2xl font-bold text-brand-primary-700">3</p>
            <p className="text-xs text-gray-600 mt-1">2 due this week</p>
          </div>
          
          <div className="bg-brand-secondary-50 rounded-lg p-4 border border-brand-secondary-100">
            <h3 className="text-sm font-medium text-gray-700 mb-1">Completed Courses</h3>
            <p className="text-2xl font-bold text-brand-secondary-700">8</p>
            <p className="text-xs text-gray-600 mt-1">+2 from last month</p>
          </div>
          
          <div className="bg-brand-accent-50 rounded-lg p-4 border border-brand-accent-100">
            <h3 className="text-sm font-medium text-gray-700 mb-1">Learning Hours</h3>
            <p className="text-2xl font-bold text-brand-accent-700">42</p>
            <p className="text-xs text-gray-600 mt-1">This month</p>
          </div>
        </div>
      </div>
      
      {/* Course Recommendations */}
      <CourseRecommendations />
      
      {/* Learning Path */}
      <LearningPath />
      
      {/* Saved Resources */}
      <SavedResources />
      
      {/* Certification Options */}
      <CertificationOptions />
      
      {/* Learning Communities */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Learning Communities</h2>
          <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800">
            View all communities
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-brand-primary-100 flex items-center justify-center mr-3">
                <i className="fas fa-code text-brand-primary-600"></i>
              </div>
              <h3 className="font-medium text-gray-900">Python Developers</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              A community of Python enthusiasts sharing knowledge, tips, and best practices.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">5,280 members</span>
              <button className="text-xs bg-brand-primary-600 hover:bg-brand-primary-700 text-white px-3 py-1 rounded-lg">
                Join
              </button>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-brand-secondary-100 flex items-center justify-center mr-3">
                <i className="fas fa-brain text-brand-secondary-600"></i>
              </div>
              <h3 className="font-medium text-gray-900">Machine Learning Hub</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Discussions on ML algorithms, frameworks, and real-world applications.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">8,120 members</span>
              <button className="text-xs bg-brand-primary-600 hover:bg-brand-primary-700 text-white px-3 py-1 rounded-lg">
                Join
              </button>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-brand-accent-100 flex items-center justify-center mr-3">
                <i className="fas fa-chart-bar text-brand-accent-600"></i>
              </div>
              <h3 className="font-medium text-gray-900">Data Visualization</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Learn how to create effective visualizations and communicate insights.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">3,450 members</span>
              <button className="text-xs bg-brand-primary-600 hover:bg-brand-primary-700 text-white px-3 py-1 rounded-lg">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
