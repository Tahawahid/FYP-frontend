export function SkillGapAnalysis() {
  const targetRole = "Senior Data Scientist";
  
  const skillGaps = [
    {
      id: 1,
      skill: "Cloud Computing (AWS)",
      currentLevel: 45,
      requiredLevel: 80,
      gap: 35,
      priority: "High"
    },
    {
      id: 2,
      skill: "Deep Learning",
      currentLevel: 60,
      requiredLevel: 85,
      gap: 25,
      priority: "High"
    },
    {
      id: 3,
      skill: "Big Data Technologies",
      currentLevel: 55,
      requiredLevel: 75,
      gap: 20,
      priority: "Medium"
    },
    {
      id: 4,
      skill: "Data Engineering",
      currentLevel: 65,
      requiredLevel: 80,
      gap: 15,
      priority: "Medium"
    },
    {
      id: 5,
      skill: "Business Communication",
      currentLevel: 70,
      requiredLevel: 80,
      gap: 10,
      priority: "Low"
    }
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Skill Gap Analysis</h2>
        <div className="flex items-center">
          <span className="text-sm text-gray-600 mr-2">Target Role:</span>
          <select className="text-sm border-gray-300 rounded-md focus:ring-brand-primary-500 focus:border-brand-primary-500">
            <option>{targetRole}</option>
            <option>Machine Learning Engineer</option>
            <option>Data Engineer</option>
            <option>AI Research Scientist</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-6">
        {skillGaps.map(gap => (
          <div key={gap.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-gray-900">{gap.skill}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${
                gap.priority === 'High' ? 'bg-red-100 text-red-800' :
                gap.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {gap.priority} Priority
              </span>
            </div>
            
            <div className="relative pt-1">
              <div className="flex items-center justify-between mb-1">
                <div>
                  <span className="text-xs font-semibold inline-block text-brand-primary-800">
                    Current Level: {gap.currentLevel}%
                  </span>
                </div>
                <div>
                  <span className="text-xs font-semibold inline-block text-gray-600">
                    Required: {gap.requiredLevel}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                <div 
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-brand-primary-500"
                  style={{ width: `${gap.currentLevel}%` }}
                ></div>
                <div 
                  className="shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-gray-300"
                  style={{ width: `${gap.gap}%` }}
                ></div>
              </div>
              
              {/* Required level marker */}
              <div 
                className="absolute top-0 w-0.5 h-8 bg-gray-800" 
                style={{ left: `${gap.requiredLevel}%` }}
              ></div>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <div className="text-xs text-gray-500">
                Gap: <span className="font-medium text-red-600">{gap.gap}%</span>
              </div>
              <button className="text-xs bg-brand-primary-600 hover:bg-brand-primary-700 text-white px-3 py-1 rounded-lg">
                Close This Gap
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
        <h3 className="font-medium text-gray-900 mb-2">What This Means</h3>
        <p className="text-sm text-gray-700">
          Based on our analysis of the {targetRole} role requirements, these are the key skill gaps you should focus on. Closing these gaps will significantly increase your competitiveness for this position. We've prioritized them based on importance and the size of the gap.
        </p>
      </div>
    </div>
  );
}
