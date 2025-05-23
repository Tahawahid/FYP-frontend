import { useEffect, useRef } from "react";

export function SalaryInsights() {
  const chartRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // In a real implementation, you would use a chart library
    // For now, we'll just add a placeholder
    if (chartRef.current) {
      chartRef.current.innerHTML = `
        <div class="h-80 flex items-center justify-center">
          <div class="text-center">
            <p class="text-gray-500 mb-4">Bar chart showing salary ranges by role and experience level</p>
            <img src="/images/placeholder-bar-chart.jpg" alt="Salary Chart" class="mx-auto w-md h-auto" />
          </div>
        </div>
      `;
    }
  }, []);
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Salary Insights</h2>
        <div className="flex gap-2">
          <button className="text-xs bg-brand-primary-100 text-brand-primary-800 px-3 py-1 rounded-full">
            United States
          </button>
          <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
            Change Location
          </button>
        </div>
      </div>
      
      <div ref={chartRef}></div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Data Scientist</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Entry Level:</span>
              <span className="text-gray-900 font-medium">$75,000 - $90,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Mid Level:</span>
              <span className="text-gray-900 font-medium">$90,000 - $120,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Senior Level:</span>
              <span className="text-gray-900 font-medium">$120,000 - $160,000+</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Machine Learning Engineer</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Entry Level:</span>
              <span className="text-gray-900 font-medium">$85,000 - $100,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Mid Level:</span>
              <span className="text-gray-900 font-medium">$100,000 - $130,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Senior Level:</span>
              <span className="text-gray-900 font-medium">$130,000 - $180,000+</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Data Analyst</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Entry Level:</span>
              <span className="text-gray-900 font-medium">$60,000 - $75,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Mid Level:</span>
              <span className="text-gray-900 font-medium">$75,000 - $95,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Senior Level:</span>
              <span className="text-gray-900 font-medium">$95,000 - $120,000+</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-brand-secondary-50 rounded-lg border border-brand-secondary-100">
        <h3 className="font-medium text-gray-900 mb-2">Salary Trend Insights</h3>
        <p className="text-sm text-gray-700">
          Salaries for data science and AI roles have increased by an average of 8-12% over the past year, outpacing the general tech industry average of 5-7%. Companies are offering competitive compensation packages to attract and retain top talent in these high-demand fields.
        </p>
        <p className="text-sm text-gray-700 mt-2">
          Remote work opportunities often come with location-adjusted salaries, but the gap is narrowing as companies compete for talent regardless of location.
        </p>
      </div>
    </div>
  );
}
