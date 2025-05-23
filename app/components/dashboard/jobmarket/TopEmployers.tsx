export function TopEmployers() {
  const employers = [
    {
      id: 1,
      name: "TechCorp",
      logo: "/images/testimonials/avatar-1.jpg",
      industry: "Technology",
      openPositions: 24,
      rating: 4.5,
      locations: ["San Francisco", "New York", "Remote"]
    },
    {
      id: 2,
      name: "DataViz Inc.",
      logo: "/images/testimonials/avatar-2.jpg",
      industry: "Data Analytics",
      openPositions: 18,
      rating: 4.3,
      locations: ["Boston", "Austin", "Remote"]
    },
    {
      id: 3,
      name: "AI Solutions",
      logo: "/images/testimonials/avatar-3.jpg",
      industry: "Artificial Intelligence",
      openPositions: 15,
      rating: 4.7,
      locations: ["Seattle", "Remote"]
    },
    {
      id: 4,
      name: "HealthTech Partners",
      logo: "/images/testimonials/avatar-4.jpg",
      industry: "Healthcare Technology",
      openPositions: 12,
      rating: 4.2,
      locations: ["Chicago", "Denver", "Remote"]
    }
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Top Employers Hiring</h2>
        <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800">
          View all employers
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {employers.map(employer => (
          <div key={employer.id} className="border border-gray-200 rounded-lg p-4 flex">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              {/* In a real app, this would be the actual logo */}
              <div className="text-xl font-bold text-brand-primary-600">
                {employer.name.substring(0, 2)}
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-gray-900">{employer.name}</h3>
                <span className="text-xs px-2 py-1 bg-brand-primary-100 text-brand-primary-800 rounded-full">
                  {employer.openPositions} jobs
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mt-1">{employer.industry}</p>
              
              <div className="flex items-center mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <i 
                      key={i}
                      className={`fas fa-star text-xs ${
                        i < Math.floor(employer.rating) ? 'text-yellow-500' : 
                        i === Math.floor(employer.rating) && employer.rating % 1 > 0 ? 'text-yellow-500' : 
                        'text-gray-300'
                      }`}
                    ></i>
                  ))}
                </div>
                <span className="text-xs text-gray-600 ml-1">{employer.rating}</span>
              </div>
              
              <div className="mt-2 flex flex-wrap gap-1">
                {employer.locations.map((location, index) => (
                  <span 
                    key={index} 
                    className="text-xs px-2 py-0.5 bg-gray-100 text-gray-800 rounded-full"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <button className="bg-brand-primary-50 hover:bg-brand-primary-100 text-brand-primary-700 font-medium py-2 px-4 rounded-lg text-sm transition-colors">
          Explore More Employers
        </button>
      </div>
    </div>
  );
}
