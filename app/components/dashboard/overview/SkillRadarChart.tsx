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
  const radarData = {
    labels: [
      'Python Programming',
      'Machine Learning',
      'Data Analysis',
      'SQL & Databases',
      'Cloud Computing',
      'Statistics',
      'Data Visualization',
      'Communication'
    ],
    datasets: [
      {
        label: 'Current Skills',
        data: [85, 70, 75, 80, 45, 60, 65, 70],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(59, 130, 246, 1)',
        pointRadius: 6,
        pointHoverRadius: 8,
      },
      {
        label: 'Target Level',
        data: [90, 85, 80, 85, 75, 80, 75, 85],
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 2,
        borderDash: [5, 5],
        pointBackgroundColor: 'rgba(16, 185, 129, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(16, 185, 129, 1)',
        pointRadius: 4,
        pointHoverRadius: 6,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
            return `${context.dataset.label}: ${context.parsed.r}%`;
          }
        }
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        min: 0,
        ticks: {
          stepSize: 20,
          font: {
            size: 10,
          },
          callback: function(value: any) {
            return value + '%';
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        angleLines: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        pointLabels: {
          font: {
            size: 11,
            weight: 500,
          },
          color: '#374151',
        },
      },
    },
  };

  const skillBreakdown = [
    { name: 'Python', level: 85, color: 'blue' },
    { name: 'Machine Learning', level: 70, color: 'green' },
    { name: 'Data Analysis', level: 75, color: 'purple' },
    { name: 'SQL', level: 80, color: 'indigo' },
    { name: 'Cloud Computing', level: 45, color: 'amber' },
    { name: 'Statistics', level: 60, color: 'red' },
    { name: 'Data Viz', level: 65, color: 'pink' },
    { name: 'Communication', level: 70, color: 'emerald' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Skill Proficiency Radar</h2>
        <select className="text-sm border-gray-300 rounded-md focus:ring-brand-primary-500 focus:border-brand-primary-500">
          <option>All Skills</option>
          <option>Technical Skills</option>
          <option>Soft Skills</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Radar Chart */}
        <div className="lg:col-span-2">
          <div className="h-80">
            <Radar data={radarData} options={options} />
          </div>
        </div>

        {/* Skill Breakdown */}
        <div className="space-y-3">
          <h3 className="text-md font-medium text-gray-800 mb-4">Skill Breakdown</h3>
          {skillBreakdown.map((skill, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full bg-${skill.color}-500 mr-3`}></div>
                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
              </div>
              <div className="flex items-center">
                <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                  <div 
                    className={`bg-${skill.color}-500 h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-900 w-8">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insights */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Strongest Skills</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Python Programming (85%)</li>
            <li>• SQL & Databases (80%)</li>
            <li>• Data Analysis (75%)</li>
          </ul>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg">
          <h4 className="font-medium text-amber-900 mb-2">Growth Areas</h4>
          <ul className="text-sm text-amber          -800 space-y-1">
            <li>• Cloud Computing (45%)</li>
            <li>• Statistics (60%)</li>
            <li>• Data Visualization (65%)</li>
          </ul>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-medium text-green-900 mb-2">Recommendations</h4>
          <ul className="text-sm text-green-800 space-y-1">
            <li>• Focus on AWS/Azure training</li>
            <li>• Practice statistical modeling</li>
            <li>• Improve presentation skills</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

