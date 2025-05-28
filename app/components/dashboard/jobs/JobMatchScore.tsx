import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function JobMatchScore() {
  const matchScore = 78;
  
  const doughnutData = {
    datasets: [
      {
        data: [matchScore, 100 - matchScore],
        backgroundColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(229, 231, 235, 1)',
        ],
        borderWidth: 0,
        cutout: '75%',
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  const skillBreakdown = {
    labels: ['Technical Skills', 'Experience', 'Education', 'Soft Skills'],
    datasets: [
      {
        data: [85, 70, 90, 65],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(245, 158, 11, 0.8)',
        ],
        borderWidth: 0,
      },
    ],
  };

  const skillOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          usePointStyle: true,
          padding: 15,
          font: {
            size: 11,
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
            return `${context.label}: ${context.parsed}%`;
          }
        }
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Your Job Match Score</h2>
        <select className="text-sm border-gray-300 rounded-md focus:ring-brand-primary-500 focus:border-brand-primary-500">
          <option>Data Scientist</option>
          <option>Machine Learning Engineer</option>
          <option>Data Analyst</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Overall Score */}
        <div className="text-center">
          <div className="relative w-48 h-48 mx-auto mb-4">
            <Doughnut data={doughnutData} options={doughnutOptions} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-gray-900">{matchScore}%</span>
              <span className="text-sm text-gray-600">Match Score</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Match Quality:</span>
              <span className="font-medium text-green-600">Excellent</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Confidence:</span>
              <span className="font-medium text-blue-600">High</span>
            </div>
          </div>
        </div>

        {/* Skill Breakdown */}
        <div>
          <h3 className="text-md font-medium text-gray-800 mb-4 text-center">Skill Breakdown</h3>
          <div className="h-48">
            <Doughnut data={skillBreakdown} options={skillOptions} />
          </div>
        </div>
      </div>
      
      {/* Detailed Breakdown */}
      <div className="mt-6 space-y-4">
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">Technical Skills</span>
            <span className="text-sm text-gray-600">85%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="h-2 rounded-full bg-blue-500" style={{ width: "85%" }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">Experience</span>
            <span className="text-sm text-gray-600">70%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="h-2 rounded-full bg-green-500" style={{ width: "70%" }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">Education</span>
            <span className="text-sm text-gray-600">90%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="h-2 rounded-full bg-purple-500" style={{ width: "90%" }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">Soft Skills</span>
            <span className="text-sm text-gray-600">65%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="h-2 rounded-full bg-amber-500" style={{ width: "65%" }}></div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-medium text-gray-900 mb-2 flex items-center">
          <i className="fas fa-lightbulb text-blue-600 mr-2"></i>
          How to Improve Your Score
        </h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Develop your skills in Deep Learning and Neural Networks</li>
          <li>Gain experience with cloud deployment (AWS/Azure)</li>
          <li>Add more data science projects to your portfolio</li>
          <li>Improve presentation and communication skills</li>
        </ul>
      </div>
    </div>
  );
}