export function CertificationOptions() {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Data Analytics - Specialty",
      provider: "Amazon Web Services",
      cost: "$300",
      duration: "180 minutes",
      difficulty: "Advanced",
      relevance: 92,
      skills: ["AWS", "Big Data", "Data Analytics", "Cloud Computing"]
    },
    {
      id: 2,
      title: "Microsoft Certified: Azure Data Scientist Associate",
      provider: "Microsoft",
      cost: "$165",
      duration: "180 minutes",
      difficulty: "Intermediate",
      relevance: 88,
      skills: ["Azure", "Machine Learning", "Data Science", "Cloud Computing"]
    },
    {
      id: 3,
      title: "TensorFlow Developer Certificate",
      provider: "Google",
      cost: "$100",
      duration: "300 minutes",
      difficulty: "Intermediate",
      relevance: 85,
      skills: ["TensorFlow", "Deep Learning", "Neural Networks", "Python"]
    }
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recommended Certifications</h2>
        <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800">
          View all certifications
        </button>
      </div>
      
      <div className="space-y-4">
        {certifications.map(cert => (
          <div 
            key={cert.id} 
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">{cert.title}</h3>
                <p className="text-sm text-gray-600 mt-1">Provider: {cert.provider}</p>
              </div>
              <div 
                className="text-sm font-bold rounded-full w-10 h-10 flex items-center justify-center bg-brand-primary-100 text-brand-primary-800"
              >
                {cert.relevance}%
              </div>
            </div>
            
            <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
              <div>
                <span className="text-gray-500">Cost:</span>
                <span className="ml-1 text-gray-900">{cert.cost}</span>
              </div>
              <div>
                <span className="text-gray-500">Duration:</span>
                <span className="ml-1 text-gray-900">{cert.duration}</span>
              </div>
              <div>
                <span className="text-gray-500">Difficulty:</span>
                <span className="ml-1 text-gray-900">{cert.difficulty}</span>
              </div>
            </div>
            
            <div className="mt-3">
              <h4 className="text-xs font-medium text-gray-700 mb-2">Relevant Skills:</h4>
              <div className="flex flex-wrap gap-1">
                {cert.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="text-xs px-2 py-0.5 bg-gray-100 text-gray-800 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <div className="text-xs text-gray-500">
                Relevance score based on your career goals
              </div>
              <div className="flex gap-2">
                <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800 font-medium">
                  Learn More
                </button>
                <button className="text-sm bg-brand-primary-600 hover:bg-brand-primary-700 text-white px-3 py-1 rounded-lg">
                  Prepare
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-brand-secondary-50 rounded-lg border border-brand-secondary-100">
        <h3 className="font-medium text-gray-900 mb-2">Why Get Certified?</h3>
        <p className="text-sm text-gray-700">
          Industry certifications validate your skills to employers and can increase your earning potential. According to our data, professionals with relevant certifications earn 15-20% more than their non-certified counterparts in similar roles.
        </p>
      </div>
    </div>
  );
}
