export function InDemandSkills() {
  const skillCategories = [
    {
      id: 1,
      name: "Technical Skills",
      skills: [
        { name: "Python", demand: 95, growth: "+12%" },
        { name: "Machine Learning", demand: 90, growth: "+18%" },
        { name: "SQL", demand: 85, growth: "+5%" },
        { name: "Data Visualization", demand: 80, growth: "+8%" },
        { name: "Cloud Computing (AWS/Azure)", demand: 78, growth: "+15%" }
      ]
    },
    {
      id: 2,
      name: "Soft Skills",
      skills: [
        { name: "Communication", demand: 92, growth: "+4%" },
        { name: "Problem Solving", demand: 90, growth: "+6%" },
        { name: "Teamwork", demand: 85, growth: "+3%" },
        { name: "Critical Thinking", demand: 82, growth: "+5%" }
      ]
    }
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">In-Demand Skills</h2>
      
      <div className="space-y-8">
        {skillCategories.map(category => (
          <div key={category.id}>
            <h3 className="font-medium text-gray-900 mb-4">{category.name}</h3>
            <div className="space-y-4">
              {category.skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <span className="text-gray-800 font-medium">{skill.name}</span>
                      <span className="ml-2 text-xs text-green-600 font-medium">{skill.growth}</span>
                    </div>
                    <span className="text-sm text-gray-600">Demand: {skill.demand}/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${
                        skill.demand >= 90 ? 'bg-green-500' :
                        skill.demand >= 80 ? 'bg-brand-primary-500' :
                        skill.demand >= 70 ? 'bg-brand-secondary-500' :
                        'bg-brand-accent-500'
                      }`}
                      style={{ width: `${skill.demand}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-brand-primary-50 rounded-lg border border-brand-primary-100">
        <h3 className="font-medium text-gray-900 mb-2">Skill Trend Insights</h3>
        <p className="text-sm text-gray-700">
          Machine Learning and AI-related skills are showing the strongest growth, with a 18% increase in demand over the past year. Cloud computing skills are also becoming increasingly important, particularly for data-related roles.
        </p>
        <p className="text-sm text-gray-700 mt-2">
          While technical skills are crucial, employers increasingly value soft skills like communication and problem-solving, especially for senior positions and roles requiring cross-functional collaboration.
        </p>
        <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800 font-medium mt-2">
          View detailed skill analysis →
        </button>
      </div>
    </div>
  );
}
