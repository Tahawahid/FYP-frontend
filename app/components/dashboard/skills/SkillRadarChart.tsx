import { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export function SkillRadarChart() {
  const chartRef = useRef<any>(null);

  // Sample skill data - in a real app, this would come from props or API
  const skillData = {
    technical: {
      labels: ['Python', 'Data Analysis', 'Machine Learning', 'Cloud Computing', 'Database', 'Web Development'],
      datasets: [
        {
          label: 'Current Level',
          data: [90, 85, 70, 45, 80, 75],
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          borderColor: 'rgba(59, 130, 246, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(59, 130, 246, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(59, 130, 246, 1)',
        },
        {
          label: 'Target Level',
          data: [95, 90, 85, 80, 85, 80],
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          borderColor: 'rgba(16, 185, 129, 1)',
          borderWidth: 2,
          borderDash: [5, 5],
          pointBackgroundColor: 'rgba(16, 185, 129, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(16, 185, 129, 1)',
        }
      ]
    },
    soft: {
      labels: ['Communication', 'Leadership', 'Problem Solving', 'Teamwork', 'Creativity', 'Time Management'],
      datasets: [
        {
          label: 'Current Level',
          data: [85, 70, 90, 88, 75, 80],
          backgroundColor: 'rgba(139, 92, 246, 0.2)',
          borderColor: 'rgba(139, 92, 246, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(139, 92, 246, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(139, 92, 246, 1)',
        },
        {
          label: 'Target Level',
          data: [90, 85, 95, 90, 85, 85],
          backgroundColor: 'rgba(236, 72, 153, 0.1)',
          borderColor: 'rgba(236, 72, 153, 1)',
          borderWidth: 2,
          borderDash: [5, 5],
          pointBackgroundColor: 'rgba(236, 72, 153, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(236, 72, 153, 1)',
        }
      ]
    },
    all: {
      labels: ['Technical Skills', 'Communication', 'Problem Solving', 'Leadership', 'Creativity', 'Industry Knowledge'],
      datasets: [
        {
          label: 'Overall Proficiency',
          data: [78, 85, 90, 70, 75, 82],
          backgroundColor: 'rgba(245, 158, 11, 0.2)',
          borderColor: 'rgba(245, 158, 11, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(245, 158, 11, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(245, 158, 11, 1)',
        }
      ]
    }
  };

  const [activeTab, setActiveTab] = useState<'technical' | 'soft' | 'all'>('technical');

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        pointLabels: {
          font: {
            size: 12,
            weight: 500,
          },
          color: '#374151',
        },
        ticks: {
          beginAtZero: true,
          max: 100,
          stepSize: 20,
          showLabelBackdrop: false,
          color: '#9CA3AF',
          font: {
            size: 10,
          },
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          usePointStyle: true,
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
        displayColors: true,
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: ${context.parsed.r}%`;
          }
        }
      },
    },
    elements: {
      point: {
        radius: 4,
        hoverRadius: 6,
      },
    },
  };

  const getLegendItems = () => {
    switch (activeTab) {
      case 'technical':
        return [
          { color: 'bg-brand-primary-500', label: 'Python' },
          { color: 'bg-brand-secondary-500', label: 'Data Analysis' },
          { color: 'bg-green-500', label: 'Machine Learning' },
          { color: 'bg-yellow-500', label: 'Cloud Computing' },
          { color: 'bg-purple-500', label: 'Database' },
          { color: 'bg-pink-500', label: 'Web Development' },
        ];
      case 'soft':
        return [
          { color: 'bg-purple-500', label: 'Communication' },
          { color: 'bg-indigo-500', label: 'Leadership' },
          { color: 'bg-blue-500', label: 'Problem Solving' },
          { color: 'bg-green-500', label: 'Teamwork' },
          { color: 'bg-yellow-500', label: 'Creativity' },
          { color: 'bg-red-500', label: 'Time Management' },
        ];
      case 'all':
        return [
          { color: 'bg-amber-500', label: 'Technical Skills' },
          { color: 'bg-blue-500', label: 'Communication' },
          { color: 'bg-green-500', label: 'Problem Solving' },
          { color: 'bg-purple-500', label: 'Leadership' },
          { color: 'bg-pink-500', label: 'Creativity' },
          { color: 'bg-indigo-500', label: 'Industry Knowledge' },
        ];
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Skill Radar</h2>
        <div className="flex gap-2">
          <button 
            onClick={() => setActiveTab('technical')}
            className={`text-xs px-3 py-1 rounded-full transition-colors ${
              activeTab === 'technical' 
                ? 'bg-brand-primary-100 text-brand-primary-800' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            Technical Skills
          </button>
          <button 
            onClick={() => setActiveTab('soft')}
            className={`text-xs px-3 py-1 rounded-full transition-colors ${
              activeTab === 'soft' 
                ? 'bg-brand-primary-100 text-brand-primary-800' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            Soft Skills
          </button>
          <button 
            onClick={() => setActiveTab('all')}
            className={`text-xs px-3 py-1 rounded-full transition-colors ${
              activeTab === 'all' 
                ? 'bg-brand-primary-100 text-brand-primary-800' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            All Skills
          </button>
        </div>
      </div>
      
      {/* Chart Container */}
      <div className="h-80 mb-6">
        <Radar 
          ref={chartRef}
          data={skillData[activeTab]} 
          options={options} 
        />
      </div>
      
      {/* Legend */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {getLegendItems().map((item, index) => (
          <div key={index} className="text-center">
            <div className={`inline-block w-3 h-3 rounded-full ${item.color} mb-1`}></div>
            <p className="text-xs text-gray-700">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Chart Insights */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h3 className="font-medium text-gray-900 mb-2 flex items-center">
          <i className="fas fa-robot text-blue-600 mr-2"></i>
          Mr. James Insights
        </h3>
        <div className="text-sm text-gray-700">
          {activeTab === 'technical' && (
            <p>
              Your technical skills show strong proficiency in Python and Data Analysis. 
              Focus on improving Cloud Computing skills to reach your target levels. 
              The dashed line shows your target proficiency for career advancement.
            </p>
          )}
          {activeTab === 'soft' && (
            <p>
              Your soft skills are well-balanced with excellent problem-solving abilities. 
              Consider developing leadership skills further to enhance your career prospects. 
              Strong teamwork and communication skills are valuable assets.
            </p>
          )}
          {activeTab === 'all' && (
            <p>
              Overall skill assessment shows strong problem-solving and communication abilities. 
              Technical skills and industry knowledge are solid foundations. 
              Leadership development could accelerate your career growth.
            </p>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex justify-between items-center">
        <div className="text-xs text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
        <div className="flex gap-2">
          <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-lg transition-colors">
            <i className="fas fa-download mr-1"></i>
            Export Chart
          </button>
          <button className="text-xs bg-brand-primary-600 hover:bg-brand-primary-700 text-white px-3 py-1 rounded-lg transition-colors">
            <i className="fas fa-sync-alt mr-1"></i>
            Retake Assessment
          </button>
        </div>
      </div>
    </div>
  );
}
