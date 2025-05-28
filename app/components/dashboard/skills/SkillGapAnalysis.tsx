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

export function SkillGapAnalysis() {
  const targetRole = "Senior Data Scientist";
  
  const gapData = {
    labels: ['Cloud Computing', 'Deep Learning', 'Big Data', 'Data Engineering', 'Communication'],
    datasets: [
      {
        label: 'Current Level',
        data: [45, 60, 55, 65, 70],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: 'Required Level',
        data: [80, 85, 75, 80, 80],
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
        borderColor: 'rgba(185, 129, 1)',
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: 'Gap',
        data: [35, 25, 20, 15, 10],
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

  const skillGaps = [
    {
      id: 1,
      skill: "Cloud Computing (AWS)",
      currentLevel: 45,
      requiredLevel: 80,
      gap: 35,
      priority: "High"
    },
    {
      id: 2,
      skill: "Deep Learning",
      currentLevel: 60,
      requiredLevel: 85,
      gap: 25,
      priority: "High"
    },
    {
      id: 3,
      skill: "Big Data Technologies",
      currentLevel: 55,
      requiredLevel: 75,
      gap: 20,
      priority: "Medium"
    },
    {
      id: 4,
      skill: "Data Engineering",
      currentLevel: 65,
      requiredLevel: 80,
      gap: 15,
      priority: "Medium"
    },
    {
      id: 5,
      skill: "Business Communication",
      currentLevel: 70,
      requiredLevel: 80,
      gap: 10,
      priority: "Low"
    }
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Skill Gap Analysis</h2>
        <div className="flex items-center">
          <span className="text-sm text-gray-600 mr-2">Target Role:</span>
          <select className="text-sm border-gray-300 rounded-md focus:ring-brand-primary-500 focus:border-brand-primary-500">
            <option>{targetRole}</option>
            <option>Machine Learning Engineer</option>
            <option>Data Engineer</option>
            <option>AI Research Scientist</option>
          </select>
        </div>
      </div>
      
      {/* Gap Chart */}
      <div className="h-80 mb-6">
        <Bar data={gapData} options={options} />
      </div>

      {/* Detailed Gap Analysis */}
      <div className="space-y-4">
        {skillGaps.map(gap => (
          <div key={gap.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium text-gray-900">{gap.skill}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${
                gap.priority === 'High' ? 'bg-red-100 text-red-800' :
                gap.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {gap.priority} Priority
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-3">
              <div className="text-center">
                <p className="text-xs text-gray-500">Current</p>
                <p className="text-lg font-bold text-blue-600">{gap.currentLevel}%</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">Required</p>
                <p className="text-lg font-bold text-green-600">{gap.requiredLevel}%</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">Gap</p>
                <p className="text-lg font-bold text-red-600">{gap.gap}%</p>
              </div>
            </div>
            
            <div className="relative pt-1">
              <div className="overflow-hidden h-3 text-xs flex rounded bg-gray-200">
                <div 
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  style={{ width: `${gap.currentLevel}%` }}
                ></div>
                <div 
                  className="shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-red-300"
                  style={{ width: `${gap.gap}%` }}
                ></div>
              </div>
              
              {/* Required level marker */}
              <div 
                className="absolute top-0 w-0.5 h-6 bg-green-600" 
                style={{ left: `${gap.requiredLevel}%` }}
              ></div>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <div className="text-xs text-gray-500">
                Estimated time to close: <span className="font-medium text-gray-700">
                  {gap.gap > 30 ? '6-8 months' : gap.gap > 20 ? '3-4 months' : '1-2 months'}
                </span>
              </div>
              <button className="text-xs bg-brand-primary-600 hover:bg-brand-primary-700 text-white px-3 py-1 rounded-lg transition-colors">
                Create Learning Plan
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-100">
        <h3 className="font-medium text-gray-900 mb-2 flex items-center">
          <i className="fas fa-lightbulb text-amber-600 mr-2"></i>
          Strategic Recommendations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <h4 className="font-medium text-gray-900 mb-1">Priority Focus Areas:</h4>
            <ul className="space-y-1">
              <li>• Cloud Computing (AWS) - Highest impact</li>
              <li>• Deep Learning - Core requirement</li>
              <li>• Big Data Technologies - Growing demand</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-1">Learning Strategy:</h4>
            <ul className="space-y-1">
              <li>• Start with AWS fundamentals course</li>
              <li>• Practice with hands-on projects</li>
              <li>• Join study groups or bootcamps</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
