export function SkillProgressTracker() {
  const skillProgress = [
    {
      id: 1,
      skill: "Python Programming",
      category: "Programming",
      initialLevel: 75,
      currentLevel: 90,
      growth: 15,
      lastAssessed: "2023-07-15"
    },
    {
      id: 2,
      skill: "SQL",
      category: "Database",
      initialLevel: 60,
      currentLevel: 80,
      growth: 20,
      lastAssessed: "2023-07-15"
    },
    {
      id: 3,
      skill: "Machine Learning",
      category: "AI",
      initialLevel: 50,
      currentLevel: 70,
      growth: 20,
      lastAssessed: "2023-07-15"
    },
    {
      id: 4,
      skill: "Data Visualization",
      category: "Data Analysis",
      initialLevel: 65,
      currentLevel: 75,
      growth: 10,
      lastAssessed: "2023-07-15"
    },
    {
      id: 5,
      skill: "Cloud Computing (AWS)",
      category: "Cloud",
      initialLevel: 30,
      currentLevel: 45,
      growth: 15,
      lastAssessed: "2023-07-15"
    }
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Skill Progress Tracker</h2>
        <div className="flex gap-2">
          <button className="text-xs bg-brand-primary-100 text-brand-primary-800 px-3 py-1 rounded-full">
            Last 3 Months
          </button>
          <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
            Last 6 Months
          </button>
          <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
            Last Year
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Skill
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Initial Level
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Current Level
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Growth
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Assessed
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {skillProgress.map(skill => (
              <tr key={skill.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{skill.skill}</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {skill.category}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{skill.initialLevel}%</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{skill.currentLevel}%</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-sm text-green-600 font-medium">+{skill.growth}%</span>
                    <svg className="w-4 h-4 text-green-500 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {skill.lastAssessed}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
        <h3 className="font-medium text-gray-900 mb-2">Your Progress Summary</h3>
        <p className="text-sm text-gray-700">
          You've shown significant improvement in your skills over the past 3 months. Your strongest growth has been in SQL and Machine Learning, both increasing by 20%. Continue focusing on Cloud Computing to close the largest remaining skill gap.
        </p>
      </div>
    </div>
  );
}
