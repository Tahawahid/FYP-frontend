export function SkillRadarChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Skill Proficiency</h2>
        <select className="text-sm border-gray-300 rounded-md focus:ring-brand-primary-500 focus:border-brand-primary-500">
          <option>All Skills</option>
          <option>Technical Skills</option>
          <option>Soft Skills</option>
        </select>
      </div>
      
      <div className="aspect-square max-w-md mx-auto relative">
        {/* This would be replaced with an actual chart library in a real implementation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full p-4">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Background pentagon */}
              <polygon 
                points="50,10 90,40 75,85 25,85 10,40" 
                fill="none" 
                stroke="#e5e7eb" 
                strokeWidth="0.5"
              />
              <polygon 
                points="50,20 80,45 67.5,80 32.5,80 20,45" 
                fill="none" 
                stroke="#e5e7eb" 
                strokeWidth="0.5"
              />
              <polygon 
                points="50,30 70,50 60,75 40,75 30,50" 
                fill="none" 
                stroke="#e5e7eb" 
                strokeWidth="0.5"
              />
              <polygon 
                points="50,40 60,55 52.5,70 47.5,70 40,55" 
                fill="none" 
                stroke="#e5e7eb" 
                strokeWidth="0.5"
              />
              
              {/* Data pentagon */}
              <polygon 
                points="50,15 85,42 72,80 28,80 15,42" 
                fill="rgba(0, 114, 255, 0.2)" 
                stroke="#0072ff" 
                strokeWidth="1"
              />
              
              {/* Axes */}
              <line x1="50" y1="10" x2="50" y2="85" stroke="#e5e7eb" strokeWidth="0.5" />
              <line x1="10" y1="40" x2="90" y2="40" stroke="#e5e7eb" strokeWidth="0.5" />
              <line x1="25" y1="85" x2="75" y2="85" stroke="#e5e7eb" strokeWidth="0.5" />
              <line x1="50" y1="10" x2="25" y2="85" stroke="#e5e7eb" strokeWidth="0.5" />
              <line x1="50" y1="10" x2="75" y2="85" stroke="#e5e7eb" strokeWidth="0.5" />
              
              {/* Data points */}
              <circle cx="50" cy="15" r="2" fill="#0072ff" />
              <circle cx="85" cy="42" r="2" fill="#0072ff" />
              <circle cx="72" cy="80" r="2" fill="#0072ff" />
              <circle cx="28" cy="80" r="2" fill="#0072ff" />
              <circle cx="15" cy="42" r="2" fill="#0072ff" />
              
              {/* Labels */}
              <text x="50" y="5" textAnchor="middle" fontSize="3" fill="#4b5563">Python</text>
              <text x="95" y="40" textAnchor="start" fontSize="3" fill="#4b5563">Machine Learning</text>
              <text x="75" y="92" textAnchor="middle" fontSize="3" fill="#4b5563">Data Analysis</text>
              <text x="25" y="92" textAnchor="middle" fontSize="3" fill="#4b5563">SQL</text>
              <text x="5" y="40" textAnchor="end" fontSize="3" fill="#4b5563">Cloud Computing</text>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-2">
        <div className="text-center">
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="h-1.5 rounded-full bg-brand-primary-500" style={{ width: "85%" }}></div>
          </div>
          <p className="text-xs text-gray-600 mt-1">Python</p>
        </div>
        <div className="text-center">
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="h-1.5 rounded-full bg-brand-primary-500" style={{ width: "75%" }}></div>
          </div>
          <p className="text-xs text-gray-600 mt-1">Machine Learning</p>
        </div>
        <div className="text-center">
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="h-1.5 rounded-full bg-brand-primary-500" style={{ width: "65%" }}></div>
          </div>
          <p className="text-xs text-gray-600 mt-1">Data Analysis</p>
        </div>
        <div className="text-center">
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="h-1.5 rounded-full bg-brand-primary-500" style={{ width: "70%" }}></div>
          </div>
          <p className="text-xs text-gray-600 mt-1">SQL</p>
        </div>
        <div className="text-center">
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="h-1.5 rounded-full bg-brand-primary-500" style={{ width: "60%" }}></div>
          </div>
          <p className="text-xs text-gray-600 mt-1">Cloud Computing</p>
        </div>
      </div>
    </div>
  );
}
