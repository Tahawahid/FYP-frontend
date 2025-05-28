import { useRef } from "react";
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

export function SkillGapChart() {
  const skillGapData = {
    labels: ['Python Programming', 'Machine Learning', 'SQL & Database', 'Data Visualization', 'Statistical Analysis', 'Cloud Computing'],
    datasets: [
      {
        label: 'Current Level',
        data: [75, 40, 60, 55, 30, 25],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: 'Required Level',
        data: [85, 80, 75, 70, 65, 60],
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: 'Gap',
        data: [10, 40, 15, 15, 35, 35],
        backgroundColor: 'rgba(239, 68, 68, 0.8)',
        borderColor: 'rgba(239, 68, 68, 1)',
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
            return `${context.dataset.label}: ${context.parsed.y}%`;
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
          maxRotation: 45,
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          font: {
            size: 11,
          },
          callback: function(value: any) {
            return value + '%';
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Skill Gap Analysis</h2>
        <select className="text-sm border-gray-300 rounded-md focus:ring-brand-primary-500 focus:border-brand-primary-500">
          <option>Data Science Track</option>
          <option>ML Engineering Track</option>
          <option>Data Analytics Track</option>
        </select>
      </div>
      
      <div className="h-80 mb-6">
        <Bar data={skillGapData} options={options} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-medium text-blue-900 mb-2">Strengths</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Python Programming (75%)</li>
            <li>• SQL & Database (60%)</li>
            <li>• Data Visualization (55%)</li>
          </ul>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-medium text-yellow-900 mb-2">Needs Improvement</h3>
          <ul className="text-sm text-yellow-800 space-y-1">
            <li>• Machine Learning (40% gap)</li>
            <li>• Statistical Analysis (35% gap)</li>
            <li>• Cloud Computing (35% gap)</li>
          </ul>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium text-green-900 mb-2">Recommendations</h3>
          <ul className="text-sm text-green-800 space-y-1">
            <li>• Focus on ML fundamentals</li>
            <li>• Take statistics course</li>
            <li>• Learn AWS/Azure basics</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
