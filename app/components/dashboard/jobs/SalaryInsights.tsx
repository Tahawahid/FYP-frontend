import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function SalaryInsights() {
  const salaryData = {
    labels: ['Entry Level', 'Mid Level', 'Senior Level', 'Lead/Principal'],
    datasets: [
      {
        label: 'Data Scientist',
        data: [75000, 105000, 140000, 180000],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: 'ML Engineer',
        data: [85000, 115000, 155000, 200000],
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: 'Data Analyst',
        data: [60000, 80000, 105000, 130000],
        backgroundColor: 'rgba(139, 92, 246, 0.8)',
        borderColor: 'rgba(139, 92, 246, 1)',
        borderWidth: 1,
        borderRadius: 4,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
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
            return `${context.dataset.label}: $${context.parsed.y.toLocaleString()}`;
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
            return '$' + (value / 1000) + 'K';
          },
        },
      },
    },
  };

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
      
      <div className="h-80 mb-6">
        <Bar data={salaryData} options={options} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-medium text-blue-900 mb-2">Data Scientist</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-blue-700">Average:</span>
              <span className="text-blue-900 font-medium">$125,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-700">Growth:</span>
              <span className="text-green-600 font-medium">+8% YoY</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-700">Remote Premium:</span>
              <span className="text-blue-900 font-medium">+12%</span>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium text-green-900 mb-2">ML Engineer</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-green-700">Average:</span>
              <span className="text-green-900 font-medium">$138,750</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-700">Growth:</span>
              <span className="text-green-600 font-medium">+15% YoY</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-700">Remote Premium:</span>
              <span className="text-green-900 font-medium">+18%</span>
            </div>
          </div>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-medium text-purple-900 mb-2">Data Analyst</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-purple-700">Average:</span>
              <span className="text-purple-900 font-medium">$93,750</span>
            </div>
            <div className="flex justify-between">
              <span className="text-purple-700">Growth:</span>
              <span className="text-green-600 font-medium">+5% YoY</span>
            </div>
            <div className="flex justify-between">
              <span className="text-purple-700">Remote Premium:</span>
              <span className="text-purple-900 font-medium">+8%</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-100">
        <h3 className="font-medium text-gray-900 mb-2 flex items-center">
          <i className="fas fa-chart-line text-amber-600 mr-2"></i>
          Salary Trend Insights
        </h3>
        <p className="text-sm text-gray-700">
          Salaries for data science and AI roles have increased by an average of 8-15% over the past year. 
          ML Engineers command the highest premiums, especially for remote positions. Companies are offering 
          competitive packages including equity, bonuses, and comprehensive benefits.
        </p>
      </div>
    </div>
  );
}
