export function SalaryInsights() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Salary Insights</h2>
        <select className="text-sm border-gray-300 rounded-md focus:ring-brand-primary-500 focus:border-brand-primary-500">
          <option>Data Scientist</option>
          <option>ML Engineer</option>
          <option>Data Analyst</option>
        </select>
      </div>
      
      <div className="flex justify-center mb-6">
        <div className="text-center">
          <p className="text-sm text-gray-600">Average Salary Range</p>
          <p className="text-2xl font-bold text-gray-900">$95,000 - $120,000</p>
          <p className="text-xs text-green-600">+8% from last year</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">Entry Level</span>
            <span className="text-sm text-gray-600">$75,000 - $90,000</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="h-2 rounded-full bg-brand-primary-300" style={{ width: "60%" }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">Mid Level</span>
            <span className="text-sm text-gray-600">$90,000 - $115,000</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="h-2 rounded-full bg-brand-primary-500" style={{ width: "75%" }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">Senior Level</span>
            <span className="text-sm text-gray-600">$115,000 - $150,000</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="h-2 rounded-full bg-brand-primary-700" style={{ width: "90%" }}></div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-medium text-gray-900 mb-2">Top Paying Companies</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-700">TechCorp</span>
            <span className="text-xs font-medium text-gray-900">$130,000</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-700">DataSphere</span>
            <span className="text-xs font-medium text-gray-900">$125,000</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-700">AI Innovations</span>
            <span className="text-xs font-medium text-gray-900">$122,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
