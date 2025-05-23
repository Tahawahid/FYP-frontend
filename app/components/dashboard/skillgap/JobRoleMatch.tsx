export function JobRoleMatch() {
  const jobRoles = [
    {
      id: 1,
      title: "Data Scientist",
      matchScore: 72,
      description: "Analyze and interpret complex data to help organizations make better decisions.",
      skillMatch: [
        { skill: "Python Programming", match: 85 },
        { skill: "Machine Learning", match: 55 },
        { skill: "Statistical Analysis", match: 60 },
        { skill: "Data Visualization", match: 75 }
      ]
    },
    {
      id: 2,
      title: "Data Analyst",
      matchScore: 85,
      description: "Collect, process, and analyze data to identify patterns and insights.",
      skillMatch: [
        { skill: "SQL & Database", match: 90 },
        { skill: "Data Visualization", match: 85 },
        { skill: "Statistical Analysis", match: 75 },
        { skill: "Python Programming", match: 85 }
      ]
    },
    {
      id: 3,
      title: "Machine Learning Engineer",
      matchScore: 58,
      description: "Design and implement machine learning models to solve complex problems.",
      skillMatch: [
        { skill: "Python Programming", match: 85 },
        { skill: "Machine Learning", match: 55 },
        { skill: "Deep Learning", match: 30 },
        { skill: "Software Engineering", match: 60 }
      ]
    }
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Job Role Match</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobRoles.map(role => (
          <div 
            key={role.id} 
            className={`border rounded-xl p-5 ${
              role.matchScore >= 80 ? 'border-green-300 bg-green-50' :
              role.matchScore >= 60 ? 'border-yellow-300 bg-yellow-50' :
              'border-red-300 bg-red-50'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-medium text-gray-900">{role.title}</h3>
              <div 
                className={`text-sm font-bold rounded-full w-12 h-12 flex items-center justify-center ${
                  role.matchScore >= 80 ? 'bg-green-100 text-green-800' :
                  role.matchScore >= 60 ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}
              >
                {role.matchScore}%
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">{role.description}</p>
            
            <h4 className="text-xs font-medium text-gray-700 mb-2">Skill Match:</h4>
            <div className="space-y-2">
              {role.skillMatch.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center text-xs text-gray-600 mb-1">
                    <span>{skill.skill}</span>
                    <span>{skill.match}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div 
                      className={`h-1.5 rounded-full ${
                        skill.match >= 80 ? 'bg-green-500' :
                        skill.match >= 60 ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${skill.match}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-4 w-full bg-brand-primary-600 hover:bg-brand-primary-700 text-white text-sm py-2 rounded-lg">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
