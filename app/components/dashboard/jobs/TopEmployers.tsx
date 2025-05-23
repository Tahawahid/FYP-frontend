export function TopEmployers() {
  const employers = [
    {
      id: 1,
      name: "TechCorp",
      logo: "/images/employers/techcorp.png",
      openPositions: 12,
      industry: "Technology",
      rating: 4.5
    },
    {
      id: 2,
      name: "DataSphere",
      logo: "/images/employers/datasphere.png",
      openPositions: 8,
      industry: "Data Analytics",
      rating: 4.3
    },
    {
      id: 3,
      name: "AI Innovations",
      logo: "/images/employers/ai-innovations.png",
      openPositions: 5,
      industry: "Artificial Intelligence",
      rating: 4.7
    },
    {
      id: 4,
      name: "CloudWave",
      logo: "/images/employers/cloudwave.png",
      openPositions: 9,
      industry: "Cloud Computing",
      rating: 4.2
    },
    {
      id: 5,
      name: "FinTech Solutions",
      logo: "/images/employers/fintech.png",
      openPositions: 6,
      industry: "Financial Technology",
      rating: 4.0
    }
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Top Employers</h2>
        <select className="text-sm border-gray-300 rounded-md focus:ring-brand-primary-500 focus:border-brand-primary-500">
          <option>All Industries</option>
          <option>Technology</option>
          <option>Finance</option>
          <option>Healthcare</option>
        </select>
      </div>
      
      <div className="space-y-4">
        {employers.map(employer => (
          <div key={employer.id} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-3">
              <img 
                src={employer.logo} 
                alt={`${employer.name} logo`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${employer.name.charAt(0)}&background=0072ff&color=fff`;
                }}
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900">{employer.name}</h3>
              <p className="text-xs text-gray-500">{employer.industry}</p>
            </div>
            
            <div className="text-right">
              <div className="flex items-center justify-end mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-3 h-3 ${i < Math.floor(employer.rating) ? 'text-yellow-500' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-xs text-gray-600 ml-1">{employer.rating}</span>
              </div>
              <span className="text-xs text-brand-primary-600">{employer.openPositions} open positions</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800">
          View all employers
        </button>
      </div>
    </div>
  );
}
