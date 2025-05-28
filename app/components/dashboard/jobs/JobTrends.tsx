import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export function JobTrends() {
  const trendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Data Science Jobs',
        data: [120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285],
        borderColor: 'rgba(59, 130, 246, 1)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: 'ML Engineer Jobs',
        data: [80, 90, 105, 125, 145, 170, 195, 220, 250, 280, 315, 350],
        borderColor: 'rgba(16, 185, 129, 1)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgba(16, 185, 129, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: 'Data Analyst Jobs',
        data: [200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 255],
        borderColor: 'rgba(139, 92, 246, 1)',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgba(139, 92, 246, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
            weight: 500,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: ${context.parsed.y} jobs`;
          }
        }
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          font: {
            size: 11,
          },
          callback: function(value: any) {
            return value + ' jobs';
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Job Market Trends</h2>
        <select className="text-sm border-gray-300 rounded-md focus:ring-brand-primary-500 focus:border-brand-primary-500">
          <option>Last 12 Months</option>
          <option>Last 6 Months</option>
          <option>Last 2 Years</option>
        </select>
      </div>
      
      <div className="h-80 mb-6">
        <Line data={trendData} options={options} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="flex items-center justify-center mb-2">
            <i className="fas fa-chart-line text-blue-600 mr-2"></i>
            <span className="text-sm font-medium text-blue-900">Data Science</span>
          </div>
          <div className="text-2xl font-bold text-blue-600 mb-1">+35%</div>
          <div className="text-xs text-blue-700">Year-over-year growth</div>
          <div className="text-xs text-gray-600 mt-1">285 new jobs this month</div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="flex items-center justify-center mb-2">
            <i className="fas fa-rocket text-green-600 mr-2"></i>
            <span className="text-sm font-medium text-green-900">ML Engineer</span>
          </div>
          <div className="text-2xl font-bold text-green-600 mb-1">+42%</div>
          <div className="text-xs text-green-700">Fastest growing role</div>
          <div className="text-xs text-gray-600 mt-1">350 new jobs this month</div>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <div className="flex items-center justify-center mb-2">
            <i className="fas fa-chart-bar text-purple-600 mr-2"></i>
            <span className="text-sm font-medium text-purple-900">Data Analyst</span>
          </div>
          <div className="text-2xl font-bold text-purple-600 mb-1">+15%</div>
          <div className="text-xs text-purple-700">Steady growth</div>
          <div className="text-xs text-gray-600 mt-1">255 new jobs this month</div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-medium text-gray-900 mb-2 flex items-center">
          <i className="fas fa-lightbulb text-amber-500 mr-2"></i>
          Market Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <h4 className="font-medium text-gray-900 mb-1">Key Trends:</h4>
            <ul className="space-y-1">
              <li>• Remote opportunities increased by 60%</li>
              <li>• AI/ML roles show strongest demand</li>
              <li>• Healthcare & finance sectors leading hiring</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-1">Predictions:</h4>
            <ul className="space-y-1">
              <li>• Continued growth through 2024</li>
              <li>• Hybrid roles becoming more common</li>
              <li>• Cloud skills increasingly important</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
