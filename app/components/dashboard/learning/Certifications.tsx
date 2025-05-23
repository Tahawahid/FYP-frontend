export function Certifications() {
  const certifications = [
    {
      id: 1,
      name: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      issueDate: "May 2023",
      expiryDate: "May 2026",
      credentialId: "AWS-ML-12345",
      status: "active"
    },
    {
      id: 2,
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      issueDate: "January 2023",
      expiryDate: "January 2026",
      credentialId: "TF-DEV-67890",
      status: "active"
    },
    {
      id: 3,
      name: "Microsoft Certified: Azure Data Scientist Associate",
      issuer: "Microsoft",
      issueDate: "October 2022",
      expiryDate: "October 2024",
      credentialId: "MS-AZ-DS-54321",
      status: "active"
    }
  ];
  
  const recommendedCertifications = [
    {
      id: 1,
      name: "Google Professional Machine Learning Engineer",
      issuer: "Google Cloud",
      difficulty: "Advanced",
      relevance: 95,
      estimatedPrep: "2-3 months"
    },
    {
      id: 2,
      name: "Databricks Certified Machine Learning Professional",
      issuer: "Databricks",
      difficulty: "Intermediate",
      relevance: 88,
      estimatedPrep: "1-2 months"
    }
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Certifications</h2>
        <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800">
          Add certification
        </button>
      </div>
      
      <div className="mb-8">
        <h3 className="text-md font-medium text-gray-900 mb-4">Your Certifications</h3>
        
        {certifications.length > 0 ? (
          <div className="space-y-4">
            {certifications.map(cert => (
              <div 
                key={cert.id} 
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">{cert.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">Issued by {cert.issuer}</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-xs text-gray-600">
                      <span>Issued: {cert.issueDate}</span>
                      <span>Expires: {cert.expiryDate}</span>
                      <span>Credential ID: {cert.credentialId}</span>
                    </div>
                  </div>
                  <div className="mt-3 md:mt-0">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      cert.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {cert.status === 'active' ? 'Active' : 'Expiring Soon'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 border border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500">You haven't added any certifications yet.</p>
            <button className="mt-2 text-sm text-brand-primary-600 hover:text-brand-primary-800">
              Add your first certification
            </button>
          </div>
        )}
      </div>
      
      <div>
        <h3 className="text-md font-medium text-gray-900 mb-4">Recommended Certifications</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendedCertifications.map(cert => (
            <div 
              key={cert.id} 
              className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-900">{cert.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">Issued by {cert.issuer}</p>
                </div>
                <span className="text-xs font-bold bg-brand-primary-50 text-brand-primary-800 px-2 py-1 rounded-full">
                  {cert.relevance}% Match
                </span>
              </div>
              
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-gray-600">
                <div>
                  <span className="text-gray-500">Difficulty:</span>
                  <span className="ml-1 text-gray-900">{cert.difficulty}</span>
                </div>
                <div>
                  <span className="text-gray-500">Prep Time:</span>
                  <span className="ml-1 text-gray-900">{cert.estimatedPrep}</span>
                </div>
              </div>
              
              <div className="mt-3">
                <button className="w-full text-xs bg-brand-primary-600 hover:bg-brand-primary-700 text-white py-1.5 rounded-lg">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
