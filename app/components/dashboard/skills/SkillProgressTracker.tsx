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

export function SkillProgressTracker() {
  const progressData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Python Programming',
        data: [75, 78, 82, 85, 87, 89, 90],
        borderColor: 'rgba(59, 130, 246, 1)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
      },
      {
        label: 'Machine Learning',
        data: [50, 55, 60, 65, 68, 70, 70],
        borderColor: 'rgba(16, 185, 129, 1)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgba(16, 185, 129, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
      },
      {
        label: 'SQL',
        data: [60, 62, 65, 70, 75, 78, 80],
        borderColor: 'rgba(139, 92, 246, 1)',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgba(139, 92, 246, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
      },
      {
        label: 'Cloud Computing',
        data: [30, 32, 35, 38, 42, 44, 45],
        borderColor: 'rgba(245, 158, 11, 1)',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgba(245, 158, 11, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
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
            size: 11,
            weight: '500' as const,
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

  const skillProgress = [
    {
      id: 1,
      skill: "Python Programming",
      category: "Programming",
      initialLevel: 75,
      currentLevel: 90,
      growth: 15,
      lastAssessed: "2023-07-15",
      trend: "up"
    },
    {
      id: 2,
      skill: "SQL",
      category: "Database",
      initialLevel: 60,
      currentLevel: 80,
      growth: 20,
      lastAssessed: "2023-07-15",
      trend: "up"
    },
    {
      id: 3,
      skill: "Machine Learning",
      category: "AI",
      initialLevel: 50,
      currentLevel: 70,
      growth: 20,
      lastAssessed: "2023-07-15",
      trend: "up"
    },
    {
      id: 4,
      skill: "Cloud Computing (AWS)",
      category: "Cloud",
      initialLevel: 30,
      currentLevel: 45,
      growth: 15,
      lastAssessed: "2023-07-15",
      trend: "up"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Skill Progress Tracker</h2>
        <div className="flex gap-2">
          <button className="text-xs bg-brand-primary-100 text-brand-primary-800 px-3 py-1 rounded-full">
            Last 6 Months
          </button>
          <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
            Last Year
          </button>
        </div>
      </div>
      
      {/* Progress Chart */}
      <div className="h-64 mb-6">
        <Line data={progressData} options={options} />
      </div>

      {/* Progress Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Skill
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Progress
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Growth
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Trend
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {skillProgress.map(skill => (
              <tr key={skill.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{skill.skill}</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {skill.category}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${skill.currentLevel}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{skill.currentLevel}%</span>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-sm text-green-600 font-medium">+{skill.growth}%</span>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <i className="fas fa-arrow-trend-up text-green-500"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
        <h3 className="font-medium text-gray-900 mb-2 flex items-center">
          <i className="fas fa-chart-line text-green-600 mr-2"></i>
          Progress Summary
        </h3>
        <p className="text-sm text-gray-700">
          Excellent progress across all tracked skills! Your Python and SQL skills show the strongest improvement. 
          Continue focusing on Machine Learning and Cloud Computing to accelerate your career growth.
        </p>
      </div>
    </div>
  );
}
