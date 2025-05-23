export function SkillGapSummary() {
  const skillGaps = [
    { 
      name: "Deep Learning", 
      category: "Technical", 
      currentLevel: 2, 
      requiredLevel: 4,
      importance: "high"
    },
    { 
      name: "Cloud Deployment", 
      category: "Technical", 
      currentLevel: 1, 
      requiredLevel: 3,
      importance: "high"
    },
    { 
      name: "Data Visualization", 
      category: "Technical", 
      currentLevel: 3, 
      requiredLevel: 4,
      importance: "medium"
    },
    { 
      name: "Project Management", 
      category: "Soft", 
      currentLevel: 2, 
      requiredLevel: 3,
      importance: "medium"
    }
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Skill Gap Summary</h2>
        <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800">
          View detailed analysis
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Skill
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Current Level
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Required Level
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Gap
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Importance
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {skillGaps.map((skill, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                  {skill.name}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {skill.category}
                </td>
                <td className="px-4 py-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-5 h-2 rounded-sm mr-0.5 ${
                          i < skill.currentLevel ? 'bg-brand-primary-500' : 'bg-gray-200'
                        }`}
                      ></div>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-5 h-2 rounded-sm mr-0.5 ${
                          i < skill.requiredLevel ? 'bg-brand-secondary-500' : 'bg-gray-200'
                        }`}
                      ></div>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    skill.requiredLevel - skill.currentLevel > 2
                      ? 'bg-red-100 text-red-800'
                      : skill.requiredLevel - skill.currentLevel > 1
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                  }`}>
                    {skill.requiredLevel - skill.currentLevel}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    skill.importance === 'high'
                      ? 'bg-red-100 text-red-800'
                      : skill.importance === 'medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                  }`}>
                    {skill.importance.charAt(0).toUpperCase() + skill.importance.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 p-4 bg-brand-primary-50 rounded-lg border border-brand-primary-100">
        <h3 className="font-medium text-gray-900 mb-2">Recommended Actions</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Take the "Deep Learning Specialization" course on Coursera</li>
          <li>Complete the "AWS for Machine Learning" certification</li>
          <li>Join a project that involves data visualization to gain practical experience</li>
          <li>Attend the upcoming "Project Management for Tech Professionals" workshop</li>
        </ul>
      </div>
    </div>
  );
}
