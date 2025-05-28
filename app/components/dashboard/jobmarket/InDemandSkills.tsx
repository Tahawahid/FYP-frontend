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

export function InDemandSkills() {
  const skillsData = {
    labels: ['Python', 'Machine Learning', 'SQL', 'AWS/Cloud', 'Data Viz', 'Deep Learning', 'Statistics', 'Docker'],
    datasets: [
      {
        label: 'Demand Score',
        data: [95, 90, 85, 78, 75, 82, 70, 65],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(236, 72, 153, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(168, 85, 247, 0.8)',
          'rgba(251, 113, 133, 0.8)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(236, 72, 153, 1)',
          'rgba(34, 197, 94, 1)',
          'rgba(168, 85, 247, 1)',
          'rgba(251, 113, 133, 1)',
        ],
        borderWidth: 1,
        borderRadius: 4,
      }
    ]
  };

  const growthData = {
    labels: ['Python', 'Machine Learning', 'SQL', 'AWS/Cloud', 'Data Viz', 'Deep Learning', 'Statistics', 'Docker'],
    datasets: [
      {
        label: 'Growth Rate (%)',
        data: [12, 18, 5, 25, 8, 22, 6, 15],
        backgroundColor: 'rgba(34, 197, 94, 0.8)',
        borderColor: 'rgba(34, 197, 94, 1)',
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
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        cornerRadius: 8,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 10,
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
        },
      },
    },
  };

  const growthOptions = {
    ...options,
    scales: {
      ...options.scales,
      y: {
        ...options.scales.y,
        max: 30,
        ticks: {
          ...options.scales.y.ticks,
          callback: function(value: any) {
            return value + '%';
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">In-Demand Skills</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Demand Score Chart */}
        <div>
          <h3 className="text-md font-medium text-gray-800 mb-4">Current Demand Score</h3>
          <div className="h-64">
            <Bar data={skillsData} options={options} />
          </div>
        </div>

        {/* Growth Rate Chart */}
        <div>
          <h3 className="text-md font-medium text-gray-800 mb-4">Year-over-Year Growth</h3>
          <div className="h-64">
            <Bar data={growthData} options={growthOptions} />
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { name: 'Python', demand: 95, growth: '+12%', color: 'blue' },
          { name: 'Machine Learning', demand: 90, growth: '+18%', color: 'green' },
          { name: 'AWS/Cloud', demand: 78, growth: '+25%', color: 'amber' },
          { name: 'Deep Learning', demand: 82, growth: '+22%', color: 'emerald' },
        ].map((skill, index) => (
          <div key={index} className={`bg-${skill.color}-50 p-4 rounded-lg border border-${skill.color}-100`}>
            <h4 className={`font-medium text-${skill.color}-900 mb-2`}>{skill.name}</h4>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className={`text-${skill.color}-700`}>Demand:</span>
                <span className={`text-${skill.color}-900 font-medium`}>{skill.demand}/100</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className={`text-${skill.color}-700`}>Growth:</span>
                <span className="text-green-600 font-medium">{skill.growth}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h3 className="font-medium text-gray-900 mb-2 flex items-center">
          <i className="fas fa-trending-up text-blue-600 mr-2"></i>
          Market Insights
        </h3>
        <p className="text-sm text-gray-700">
          Cloud computing and AI/ML skills show the strongest growth trends. Python remains the most in-demand 
          programming language. Companies are increasingly seeking professionals with hybrid skill sets combining 
          technical expertise with domain knowledge.
        </p>
      </div>
    </div>
  );
}
