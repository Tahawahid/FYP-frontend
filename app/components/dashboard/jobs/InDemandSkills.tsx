export function InDemandSkills() {
  const skills = [
    { name: "Machine Learning", demand: 95, growth: "+15%" },
    { name: "Python", demand: 90, growth: "+8%" },
    { name: "Deep Learning", demand: 85, growth: "+20%" },
    { name: "TensorFlow", demand: 80, growth: "+12%" },
    { name: "SQL", demand: 75, growth: "+5%" },
    { name: "Cloud Computing", demand: 70, growth: "+18%" },
    { name: "Data Visualization", demand: 65, growth: "+7%" },
    { name: "Docker", demand: 60, growth: "+10%" }
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">In-Demand Skills</h2>
        <select className="text-sm border-gray-300 rounded-md focus:ring-brand-primary-500 focus:border-brand-primary-500">
          <option>Data Science</option>
          <option>Machine Learning</option>
          <option>Data Analysis</option>
        </select>
      </div>
      
      <div className="space-y-4">
        {skills.slice(0, 5).map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
              <div className="flex items-center">
                <span className="text-xs text-gray-600 mr-2">{skill.demand}%</span>
                <span className="text-xs text-green-600">{skill.growth}</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 rounded-full bg-gradient-to-r from-brand-primary-500 to-brand-secondary-500" 
                style={{ width: `${skill.demand}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800">
          View all skills
        </button>
      </div>
    </div>
  );
}
