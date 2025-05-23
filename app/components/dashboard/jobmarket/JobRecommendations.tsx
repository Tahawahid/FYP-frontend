export function JobRecommendations() {
  const jobs = [
    {
      id: 1,
      title: "Senior Data Scientist",
      company: "TechCorp",
      location: "San Francisco, CA",
      salary: "$120,000 - $150,000",
      matchScore: 92,
      posted: "2 days ago",
      type: "Full-time",
      remote: true
    },
    {
      id: 2,
      title: "Machine Learning Engineer",
      company: "AI Solutions",
      location: "Remote",
      salary: "$110,000 - $140,000",
      matchScore: 88,
      posted: "1 week ago",
      type: "Full-time",
      remote: true
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "HealthTech Partners",
      location: "Chicago, IL",
      salary: "$85,000 - $100,000",
      matchScore: 85,
      posted: "3 days ago",
      type: "Full-time",
      remote: false
    },
    {
      id: 4,
      title: "AI Research Scientist",
      company: "DataViz Inc.",
      location: "Boston, MA",
      salary: "$130,000 - $160,000",
      matchScore: 82,
      posted: "5 days ago",
      type: "Full-time",
      remote: false
    }
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recommended Jobs</h2>
        <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800">
          View all jobs
        </button>
      </div>
      
      <div className="space-y-4">
        {jobs.map(job => (
          <div 
            key={job.id} 
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">{job.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{job.company} • {job.location}</p>
              </div>
              <div 
                className={`text-sm font-bold rounded-full w-10 h-10 flex items-center justify-center ${
                  job.matchScore >= 90 ? 'bg-green-100 text-green-800' :
                  job.matchScore >= 80 ? 'bg-brand-primary-100 text-brand-primary-800' :
                  job.matchScore >= 70 ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}
              >
                {job.matchScore}
              </div>
            </div>
            
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">
                {job.type}
              </span>
              {job.remote && (
                <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                  Remote
                </span>
              )}
              <span className="text-xs px-2 py-1 bg-brand-primary-100 text-brand-primary-800 rounded-full">
                {job.salary}
              </span>
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">
                Posted {job.posted}
              </span>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <div className="text-xs text-gray-500">
                Match score based on your skills and preferences
              </div>
              <div className="flex gap-2">
                <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800 font-medium">
                  View Details
                </button>
                <button className="text-sm bg-brand-primary-600 hover:bg-brand-primary-700 text-white px-3 py-1 rounded-lg">
                  Apply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <button className="bg-brand-primary-50 hover:bg-brand-primary-100 text-brand-primary-700 font-medium py-2 px-4 rounded-lg text-sm transition-colors">
          View More Job Recommendations
        </button>
      </div>
    </div>
  );
}
