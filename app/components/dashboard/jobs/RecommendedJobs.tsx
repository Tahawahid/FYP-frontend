export function JobRecommendations() {
  const jobs = [
    {
      id: 1,
      title: "Senior Data Scientist",
      company: "TechCorp",
      location: "San Francisco, CA",
      salary: "$120,000 - $150,000",
      matchScore: 92,
      logo: "/images/employers/techcorp.png",
      posted: "2 days ago",
      type: "Full-time"
    },
    {
      id: 2,
      title: "Machine Learning Engineer",
      company: "AI Innovations",
      location: "Remote",
      salary: "$110,000 - $135,000",
      matchScore: 88,
      logo: "/images/employers/ai-innovations.png",
      posted: "1 week ago",
      type: "Full-time"
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "DataSphere",
      location: "New York, NY",
      salary: "$95,000 - $120,000",
      matchScore: 85,
      logo: "/images/employers/datasphere.png",
      posted: "3 days ago",
      type: "Full-time"
    },
    {
      id: 4,
      title: "AI Research Scientist",
      company: "CloudWave",
      location: "Seattle, WA",
      salary: "$130,000 - $160,000",
      matchScore: 82,
      logo: "/images/employers/cloudwave.png",
      posted: "5 days ago",
      type: "Full-time"
    }
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recommended Jobs</h2>
        <div className="flex items-center space-x-2">
          <select className="text-sm border-gray-300 rounded-md focus:ring-brand-primary-500 focus:border-brand-primary-500">
            <option>All Locations</option>
            <option>Remote</option>
            <option>San Francisco</option>
            <option>New York</option>
          </select>
          <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800">
            View all
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map(job => (
          <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                <img 
                  src={job.logo} 
                  alt={`${job.company} logo`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${job.company.charAt(0)}&background=0072ff&color=fff`;
                  }}
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-md font-medium text-gray-900 truncate">{job.title}</h3>
                <p className="text-sm text-gray-600">{job.company} • {job.location}</p>
                <p className="text-sm text-gray-600 mt-1">{job.salary}</p>
              </div>
              
              <div className="ml-4 flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-primary-50">
                  <span className="text-sm font-medium text-brand-primary-700">{job.matchScore}%</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">{job.type}</span>
                <span className="text-xs text-gray-500">{job.posted}</span>
              </div>
              
              <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800 font-medium">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
