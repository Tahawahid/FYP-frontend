export function LearningPathMap() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Your Learning Path</h2>
        <div className="flex items-center">
          <span className="text-sm text-gray-600 mr-2">Target Role:</span>
          <select className="text-sm border-gray-300 rounded-md focus:ring-brand-primary-500 focus:border-brand-primary-500">
            <option>Senior Data Scientist</option>
            <option>Machine Learning Engineer</option>
            <option>Data Engineer</option>
            <option>AI Research Scientist</option>
          </select>
        </div>
      </div>
      
      <div className="relative py-8">
        {/* Timeline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-primary-200"></div>
        
        {/* Milestones */}
        <div className="relative z-10">
          {/* Milestone 1 - Completed */}
          <div className="flex items-center mb-12">
            <div className="w-1/2 pr-8 text-right">
              <h3 className="font-medium text-gray-900">Foundations</h3>
              <p className="text-sm text-gray-600 mt-1">Python, SQL, Data Analysis Basics</p>
              <span className="inline-block mt-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Completed</span>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="w-1/2 pl-8"></div>
          </div>
          
          {/* Milestone 2 - In Progress */}
          <div className="flex items-center mb-12">
            <div className="w-1/2 pr-8"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-brand-primary-500 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div className="w-1/2 pl-8">
              <h3 className="font-medium text-gray-900">Intermediate Data Science</h3>
              <p className="text-sm text-gray-600 mt-1">Machine Learning, Data Visualization, Statistics</p>
              <span className="inline-block mt-2 text-xs bg-brand-primary-100 text-brand-primary-800 px-2 py-1 rounded-full">In Progress (65%)</span>
            </div>
          </div>
          
          {/* Milestone 3 - Upcoming */}
          <div className="flex items-center mb-12">
            <div className="w-1/2 pr-8 text-right">
              <h3 className="font-medium text-gray-900">Advanced Techniques</h3>
              <p className="text-sm text-gray-600 mt-1">Deep Learning, NLP, Computer Vision</p>
              <span className="inline-block mt-2 text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">Upcoming</span>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-white font-medium">3</span>
            </div>
            <div className="w-1/2 pl-8"></div>
          </div>
          
          {/* Milestone 4 - Upcoming */}
          <div className="flex items-center">
            <div className="w-1/2 pr-8"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-white font-medium">4</span>
            </div>
            <div className="w-1/2 pl-8">
              <h3 className="font-medium text-gray-900">Specialization</h3>
              <p className="text-sm text-gray-600 mt-1">MLOps, Cloud Computing, Big Data</p>
              <span className="inline-block mt-2 text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">Upcoming</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-brand-primary-50 rounded-lg border border-brand-primary-100">
        <h3 className="font-medium text-gray-900 mb-2">Your Learning Progress</h3>
        <p className="text-sm text-gray-700">
          You're making great progress on your learning path! Continue with your current courses to complete the Intermediate Data Science milestone. Based on your target role, we recommend focusing on machine learning algorithms next.
        </p>
      </div>
    </div>
  );
}
