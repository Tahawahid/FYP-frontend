import { useEffect, useRef } from "react";

export function SkillGapChart() {
  const chartRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // In a real implementation, you would use a chart library
    // For now, we'll just add a placeholder
    if (chartRef.current) {
      chartRef.current.innerHTML = `
        <div class="h-64 flex items-center justify-center">
          <div class="w-full max-w-md">
            <div class="mb-4">
              <div class="flex justify-between items-center text-sm text-gray-600 mb-1">
                <span>Python Programming</span>
                <span>75%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3">
                <div class="h-3 rounded-full bg-brand-primary-500" style="width: 75%"></div>
              </div>
            </div>
            
            <div class="mb-4">
              <div class="flex justify-between items-center text-sm text-gray-600 mb-1">
                <span>Machine Learning</span>
                <span>40%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3">
                <div class="h-3 rounded-full bg-brand-primary-500" style="width: 40%"></div>
              </div>
            </div>
            
            <div class="mb-4">
              <div class="flex justify-between items-center text-sm text-gray-600 mb-1">
                <span>SQL & Database</span>
                <span>60%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3">
                <div class="h-3 rounded-full bg-brand-primary-500" style="width: 60%"></div>
              </div>
            </div>
            
            <div class="mb-4">
              <div class="flex justify-between items-center text-sm text-gray-600 mb-1">
                <span>Data Visualization</span>
                <span>55%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3">
                <div class="h-3 rounded-full bg-brand-primary-500" style="width: 55%"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between items-center text-sm text-gray-600 mb-1">
                <span>Statistical Analysis</span>
                <span>30%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3">
                <div class="h-3 rounded-full bg-brand-primary-500" style="width: 30%"></div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }, []);
  
  return (
    <div ref={chartRef}></div>
  );
}
