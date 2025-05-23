export function RecommendedSkills() {
  const recommendedSkills = [
    {
      id: 1,
      skill: "AWS Lambda",
      category: "Cloud Computing",
      relevance: 95,
      difficulty: "Intermediate",
      timeToLearn: "4-6 weeks",
      demandGrowth: "+45% YoY",
      description: "Serverless computing service for running code without provisioning servers."
    },
    {
      id: 2,
      skill: "TensorFlow",
      category: "Deep Learning",
      relevance: 92,
      difficulty: "Advanced",
      timeToLearn: "8-12 weeks",
      demandGrowth: "+38% YoY",
      description: "Open-source machine learning framework for building and training neural networks."
    },
    {
      id: 3,
      skill: "Apache Spark",
      category: "Big Data",
      relevance: 88,
      difficulty: "Intermediate",
      timeToLearn: "6-8 weeks",
      demandGrowth: "+30% YoY",
      description: "Unified analytics engine for large-scale data processing and machine learning."
    }
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recommended Skills to Develop</h2>
        <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800">
          View more skills
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendedSkills.map(skill => (
          <div 
            key={skill.id} 
            className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="bg-brand-primary-50 p-4 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-gray-900">{skill.skill}</h3>
                <div 
                  className="text-sm font-bold rounded-full w-10 h-10 flex items-center justify-center bg-white text-brand-primary-800 border border-brand-primary-200"
                >
                  {skill.relevance}
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-1">{skill.category}</p>
            </div>
            
            <div className="p-4">
              <p className="text-sm text-gray-700 mb-4">{skill.description}</p>
              
              <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                <div>
                  <span className="text-gray-500">Difficulty:</span>
                  <span className="ml-1 text-gray-900">{skill.difficulty}</span>
                </div>
                <div>
                  <span className="text-gray-500">Time to Learn:</span>
                  <span className="ml-1 text-gray-900">{skill.timeToLearn}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-500">Demand Growth:</span>
                  <span className="ml-1 text-green-600 font-medium">{skill.demandGrowth}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-xs text-gray-500">
                  Relevance score: {skill.relevance}/100
                </div>
                <button className="text-sm bg-brand-primary-600 hover:bg-brand-primary-700 text-white px-3 py-1 rounded-lg">
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-brand-primary-50 rounded-lg border border-brand-primary-100">
        <h3 className="font-medium text-gray-900 mb-2">How We Determine Recommendations</h3>
        <p className="text-sm text-gray-700">
          These skill recommendations are based on your current skill profile, career goals, and market demand. The relevance score indicates how well each skill aligns with your target role of Senior Data Scientist and addresses your identified skill gaps.
        </p>
      </div>
    </div>
  );
}
