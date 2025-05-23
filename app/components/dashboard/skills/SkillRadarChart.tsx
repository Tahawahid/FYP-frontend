import { useEffect, useRef } from "react";

export function SkillRadarChart() {
  const chartRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // In a real implementation, you would use a chart library like Chart.js or D3.js
    // For now, we'll just add a placeholder
    if (chartRef.current) {
      chartRef.current.innerHTML = `
        <div class="h-80 flex items-center justify-center">
          <div class="text-center">
            <p class="text-gray-500 mb-4">Radar chart showing skill proficiency across different categories</p>
            <img src="/images/placeholder-bar-chart.jpg" alt="Skill Radar Chart" class="mx-auto w-md h-auto" />
          </div>
        </div>
      `;
    }
  }, []);
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Skill Radar</h2>
        <div className="flex gap-2">
          <button className="text-xs bg-brand-primary-100 text-brand-primary-800 px-3 py-1 rounded-full">
            Technical Skills
          </button>
          <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
            Soft Skills
          </button>
          <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
            All Skills
          </button>
        </div>
      </div>
      
      <div ref={chartRef}></div>
      
      <div className="mt-6 grid grid-cols-2 md:grid-cols-6 gap-4">
        <div className="text-center">
          <div className="inline-block w-3 h-3 rounded-full bg-brand-primary-500 mb-1"></div>
          <p className="text-xs text-gray-700">Python</p>
        </div>
        <div className="text-center">
          <div className="inline-block w-3 h-3 rounded-full bg-brand-secondary-500 mb-1"></div>
          <p className="text-xs text-gray-700">Data Analysis</p>
        </div>
        <div className="text-center">
          <div className="inline-block w-3 h-3 rounded-full bg-green-500 mb-1"></div>
          <p className="text-xs text-gray-700">Machine Learning</p>
        </div>
        <div className="text-center">
          <div className="inline-block w-3 h-3 rounded-full bg-yellow-500 mb-1"></div>
          <p className="text-xs text-gray-700">Cloud Computing</p>
        </div>
        <div className="text-center">
          <div className="inline-block w-3 h-3 rounded-full bg-purple-500 mb-1"></div>
          <p className="text-xs text-gray-700">Database</p>
        </div>
        <div className="text-center">
          <div className="inline-block w-3 h-3 rounded-full bg-pink-500 mb-1"></div>
          <p className="text-xs text-gray-700">Web Development</p>
        </div>
      </div>
    </div>
  );
}
