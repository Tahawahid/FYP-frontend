export function JobTrends() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Job Market Trends</h2>
        <div className="flex items-center space-x-2">
          <select className="text-sm border-gray-300 rounded-md focus:ring-brand-primary-500 focus:border-brand-primary-500">
            <option>Last 6 Months</option>
            <option>Last Year</option>
            <option>Last 2 Years</option>
          </select>
          <select className="text-sm border-gray-300 rounded-md focus:ring-brand-primary-500 focus:border-brand-primary-500">
            <option>All Locations</option>
            <option>United States</option>
            <option>Europe</option>
            <option>Asia</option>
          </select>
        </div>
      </div>
      
      <div className="h-64 relative">
        {/* This would be replaced with an actual chart library in a real implementation */}
        <svg className="w-full h-full" viewBox="0 0 300 150">
          {/* Grid lines */}
          <line x1="40" y1="10" x2="40" y2="120" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="40" y1="120" x2="280" y2="120" stroke="#e5e7eb" strokeWidth="1" />
          
          <line x1="40" y1="30" x2="280" y2="30" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2" />
          <line x1="40" y1="60" x2="280" y2="60" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2" />
          <line x1="40" y1="90" x2="280" y2="90" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2" />
          
          {/* X-axis labels */}
          <text x="80" y="135" textAnchor="middle" fontSize="8" fill="#6b7280">Jan</text>
          <text x="120" y="135" textAnchor="middle" fontSize="8" fill="#6b7280">Feb</text>
          <text x="160" y="135" textAnchor="middle" fontSize="8" fill="#6b7280">Mar</text>
          <text x="200" y="135" textAnchor="middle" fontSize="8" fill="#6b7280">Apr</text>
          <text x="240" y="135" textAnchor="middle" fontSize="8" fill="#6b7280">May</text>
          
          {/* Y-axis labels */}
          <text x="35" y="120" textAnchor="end" fontSize="8" fill="#6b7280">0</text>
          <text x="35" y="90" textAnchor="end" fontSize="8" fill="#6b7280">50</text>
          <text x="35" y="60" textAnchor="end" fontSize="8" fill="#6b7280">100</text>
          <text x="35" y="30" textAnchor="end" fontSize="8" fill="#6b7280">150</text>
          
          {/* Data line - Data Science Jobs */}
          <path 
            d="M80,100 L120,90 L160,70 L200,60 L240,40" 
            fill="none" 
            stroke="#0072ff" 
            strokeWidth="2"
          />
          
          {/* Data points - Data Science Jobs */}
          <circle cx="80" cy="100" r="3" fill="#0072ff" />
          <circle cx="120" cy="90" r="3" fill="#0072ff" />
          <circle cx="160" cy="70" r="3" fill="#0072ff" />
          <circle cx="200" cy="60" r="3" fill="#0072ff" />
          <circle cx="240" cy="40" r="3" fill="#0072ff" />
          
          {/* Data line - ML Engineer Jobs */}
          <path 
            d="M80,110 L120,95 L160,80 L200,50 L240,30" 
            fill="none" 
            stroke="#00c6ae" 
            strokeWidth="2"
          />
          
          {/* Data points - ML Engineer Jobs */}
          <circle cx="80" cy="110" r="3" fill="#00c6ae" />
          <circle cx="120" cy="95" r="3" fill="#00c6ae" />
          <circle cx="160" cy="80" r="3" fill="#00c6ae" />
          <circle cx="200" cy="50" r="3" fill="#00c6ae" />
          <circle cx="240" cy="30" r="3" fill="#00c6ae" />
          
          {/* Data line - Data Analyst Jobs */}
          <path 
            d="M80,105 L120,100 L160,90 L200,85 L240,75" 
            fill="none" 
            stroke="#ff4db3" 
            strokeWidth="2"
          />
          
          {/* Data points - Data Analyst Jobs */}
          <circle cx="80" cy="105" r="3" fill="#ff4db3" />
          <circle cx="120" cy="100" r="3" fill="#ff4db3" />
          <circle cx="160" cy="90" r="3" fill="#ff4db3" />
          <circle cx="200" cy="85" r="3" fill="#ff4db3" />
          <circle cx="240" cy="75" r="3" fill="#ff4db3" />
        </svg>
      </div>
      
      <div className="mt-4 flex justify-center gap-6">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-brand-primary-500 mr-2"></div>
          <span className="text-xs text-gray-600">Data Science</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-brand-secondary-500 mr-2"></div>
          <span className="text-xs text-gray-600">ML Engineer</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-brand-accent-500 mr-2"></div>
          <span className="text-xs text-gray-600">Data Analyst</span>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div className="p-3 bg-brand-primary-50 rounded-lg">
          <p className="text-xs text-gray-600">Data Science</p>
          <p className="text-lg font-bold text-brand-primary-700">+35%</p>
          <p className="text-xs text-green-600">Growing</p>
        </div>
        <div className="p-3 bg-brand-secondary-50 rounded-lg">
          <p className="text-xs text-gray-600">ML Engineer</p>
          <p className="text-lg font-bold text-brand-secondary-700">+42%</p>
          <p className="text-xs text-green-600">High Demand</p>
        </div>
        <div className="p-3 bg-brand-accent-50 rounded-lg">
          <p className="text-xs text-gray-600">Data Analyst</p>
          <p className="text-lg font-bold text-brand-accent-700">+15%</p>
          <p className="text-xs text-green-600">Stable</p>
        </div>
      </div>
    </div>
  );
}
