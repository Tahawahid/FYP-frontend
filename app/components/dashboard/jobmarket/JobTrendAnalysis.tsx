import { useEffect, useRef } from "react";

export function JobTrendAnalysis() {
  const chartRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // In a real implementation, you would use a chart library
    // For now, we'll just add a placeholder
    if (chartRef.current) {
      chartRef.current.innerHTML = `
        <div class="h-80 flex items-center justify-center">
          <div class="text-center">
            <p class="text-gray-500 mb-4">Line chart showing job growth trends over time</p>
            <div class="flex flex-wrap justify-center gap-4 mb-4">
              <div class="flex items-center">
                <span class="w-3 h-3 bg-brand-primary-500 rounded-full mr-2"></span>
                <span class="text-sm">Data Scientist</span>
              </div>
              <div class="flex items-center">
                <span class="w-3 h-3 bg-brand-secondary-500 rounded-full mr-2"></span>
                <span class="text-sm">Data Analyst</span>
              </div>
              <div class="flex items-center">
                <span class="w-3 h-3 bg-brand-accent-500 rounded-full mr-2"></span>
                <span class="text-sm">Machine Learning Engineer</span>
              </div>
              <div class="flex items-center">
                <span class="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                <span class="text-sm">AI Specialist</span>
              </div>
            </div>
            <img src="/images/placeholder-bar-chart.jpg" alt="Job Trend Chart" class="mx-auto w-md h-auto" />
          </div>
        </div>
      `;
    }
  }, []);
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Job Trend Analysis</h2>
        <div className="flex gap-2">
          <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
            1 Year
          </button>
          <button className="text-xs bg-brand-primary-100 text-brand-primary-800 px-3 py-1 rounded-full">
            3 Years
          </button>
          <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
            5 Years
          </button>
        </div>
      </div>
      
      <div ref={chartRef}></div>
      
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Key Insights</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <i className="fas fa-arrow-trend-up text-green-500 mt-1 mr-2"></i>
              <span>Data Science roles are projected to grow by 22% over the next 3 years.</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-arrow-trend-up text-green-500 mt-1 mr-2"></i>
              <span>Machine Learning Engineer demand has increased by 35% since last year.</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-lightbulb text-yellow-500 mt-1 mr-2"></i>
              <span>AI Specialist is emerging as the fastest-growing tech role.</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Predictions</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <i className="fas fa-chart-line text-brand-primary-500 mt-1 mr-2"></i>
              <span>Remote work opportunities in data roles will increase by 40% in the next 2 years.</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-chart-line text-brand-primary-500 mt-1 mr-2"></i>
              <span>Hybrid AI/ML and domain expertise roles will see significant growth.</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-chart-line text-brand-primary-500 mt-1 mr-2"></i>
              <span>Demand for data visualization specialists is expected to rise by 18%.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
