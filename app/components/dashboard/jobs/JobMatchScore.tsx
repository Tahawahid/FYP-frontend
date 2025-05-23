export function JobMatchScore() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Your Job Match Score</h2>
        <select className="text-sm border-gray-300 rounded-md focus:ring-brand-primary-500 focus:border-brand-primary-500">
          <option>Data Scientist</option>
          <option>Machine Learning Engineer</option>
          <option>Data Analyst</option>
        </select>
      </div>
      
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-48 h-48">
          {/* Circular progress indicator */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="#e5e7eb" 
              strokeWidth="10" 
            />
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="#0072ff" 
              strokeWidth="10" 
              strokeDasharray="282.7"
              strokeDashoffset="62.2" // 282.7 * (1 - 0.78)
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
          
          {/* Percentage in the middle */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-gray-900">78%</span>
            <span className="text-sm text-gray-600">Match Score</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">Technical Skills</span>
            <span className="text-sm text-gray-600">85%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="h-2 rounded-full bg-brand-primary-500" style={{ width: "85%" }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">Experience</span>
            <span className="text-sm text-gray-600">70%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="h-2 rounded-full bg-brand-primary-500" style={{ width: "70%" }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">Education</span>
            <span className="text-sm text-gray-600">90%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="h-2 rounded-full bg-brand-primary-500" style={{ width: "90%" }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">Soft Skills</span>
            <span className="text-sm text-gray-600">65%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="h-2 rounded-full bg-brand-primary-500" style={{ width: "65%" }}></div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-brand-primary-50 rounded-lg">
        <h3 className="font-medium text-gray-900 mb-2">How to Improve Your Score</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Develop your skills in Deep Learning</li>
          <li>Gain experience with cloud deployment</li>
          <li>Add more projects to your portfolio</li>
        </ul>
      </div>
    </div>
  );
}
