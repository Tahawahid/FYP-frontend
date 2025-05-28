import { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Radar, Bar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

export function SkillRadarChart() {
  const chartRef = useRef<any>(null);
  const [activeTab, setActiveTab] = useState<'technical' | 'soft' | 'all'>('technical');

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

  // Skill comparison data for bar chart
  const getComparisonData = () => {
    const currentData = skillData[activeTab];
    return {
      labels: currentData.labels,
      datasets: [
        {
          label: 'Current Level',
          data: currentData.datasets[0].data,
          backgroundColor: 'rgba(59, 130, 246, 0.8)',
          borderColor: 'rgba(59, 130, 246, 1)',
          borderWidth: 1,
          borderRadius: 4,
        },
        ...(currentData.datasets[1] ? [{
          label: 'Target Level',
          data: currentData.datasets[1].data,
          backgroundColor: 'rgba(16, 185, 129, 0.8)',
          borderColor: 'rgba(16, 185, 129, 1)',
          borderWidth: 1,
          borderRadius: 4,
        }] : [])
      ]
    };
  };

  const barOptions = {
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
            size: 10,
          },
          callback: function(value: any) {
            return value + '%';
          },
        },
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

  // Calculate skill statistics
  const getSkillStats = () => {
    const currentData = skillData[activeTab].datasets[0].data;
    const targetData = skillData[activeTab].datasets[1]?.data || [];
    
    const average = Math.round(currentData.reduce((a, b) => a + b, 0) / currentData.length);
    const highest = Math.max(...currentData);
    const lowest = Math.min(...currentData);
    const gaps = targetData.length > 0 ? targetData.map((target, i) => target - currentData[i]) : [];
    const avgGap = gaps.length > 0 ? Math.round(gaps.reduce((a, b) => a + b, 0) / gaps.length) : 0;
    
    return { average, highest, lowest, avgGap };
  };

  const stats = getSkillStats();

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
      
      {/* Main Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Radar Chart */}
        <div>
          <h3 className="text-md font-medium text-gray-800 mb-4">Skill Proficiency Radar</h3>
          <div className="h-80">
            <Radar 
              ref={chartRef}
              data={skillData[activeTab]} 
              options={options} 
            />
          </div>
        </div>

        {/* Bar Chart Comparison */}
        <div>
          <h3 className="text-md font-medium text-gray-800 mb-4">Current vs Target Levels</h3>
          <div className="h-80">
            <Bar data={getComparisonData()} options={barOptions} />
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600">{stats.average}%</div>
          <div className="text-sm text-blue-800">Average Score</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600">{stats.highest}%</div>
          <div className="text-sm text-green-800">Highest Skill</div>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-amber-600">{stats.lowest}%</div>
          <div className="text-sm text-amber-800">Needs Focus</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-purple-600">{stats.avgGap}%</div>
          <div className="text-sm text-purple-800">Avg Gap</div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
        {getLegendItems().map((item, index) => (
          <div key={index} className="text-center">
            <div className={`            inline-block w-3 h-3 rounded-full ${item.color} mb-1`}></div>
            <p className="text-xs text-gray-700">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Detailed Analysis Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Skill Breakdown Table */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-4">Detailed Breakdown</h3>
          <div className="space-y-3">
            {skillData[activeTab].labels.map((skill, index) => {
              const current = skillData[activeTab].datasets[0].data[index];
              const target = skillData[activeTab].datasets[1]?.data[index] || current;
              const gap = target - current;
              
              return (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-800">{skill}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-blue-600 font-medium">{current}%</span>
                        {target !== current && (
                          <>
                            <span className="text-xs text-gray-400">→</span>
                            <span className="text-xs text-green-600 font-medium">{target}%</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full relative"
                        style={{ width: `${current}%` }}
                      >
                        {target > current && (
                          <div 
                            className="absolute top-0 right-0 h-2 bg-green-300 rounded-r-full"
                            style={{ width: `${(gap / current) * 100}%` }}
                          ></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-4">Improvement Recommendations</h3>
          <div className="space-y-3">
            {activeTab === 'technical' && (
              <>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Priority: Cloud Computing</p>
                    <p className="text-xs text-gray-600">Consider AWS/Azure certification courses</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Enhance: Machine Learning</p>
                    <p className="text-xs text-gray-600">Practice with real-world projects</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Maintain: Python & Data Analysis</p>
                    <p className="text-xs text-gray-600">Strong foundation, keep practicing</p>
                  </div>
                </div>
              </>
            )}
            {activeTab === 'soft' && (
              <>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Focus: Leadership Skills</p>
                    <p className="text-xs text-gray-600">Take on team lead responsibilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Develop: Creativity</p>
                    <p className="text-xs text-gray-600">Join innovation workshops</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Excellent: Problem Solving</p>
                    <p className="text-xs text-gray-600">Share knowledge with others</p>
                  </div>
                </div>
              </>
            )}
            {activeTab === 'all' && (
              <>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Develop: Leadership</p>
                    <p className="text-xs text-gray-600">Essential for career advancement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Enhance: Technical Skills</p>
                    <p className="text-xs text-gray-600">Stay current with technology trends</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Strength: Problem Solving</p>
                    <p className="text-xs text-gray-600">Leverage this in complex projects</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Progress Timeline */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg mb-6">
        <h3 className="font-medium text-gray-900 mb-4">Skill Development Timeline</h3>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold relative z-10">1</div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Short Term (1-3 months)</p>
                <p className="text-xs text-gray-600">Focus on Cloud Computing fundamentals and AWS basics</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold relative z-10">2</div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Medium Term (3-6 months)</p>
                <p className="text-xs text-gray-600">Advanced ML projects and leadership training</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold relative z-10">3</div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Long Term (6+ months)</p>
                <p className="text-xs text-gray-600">Achieve target proficiency levels across all skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
        <h3 className="font-medium text-gray-900 mb-2 flex items-center">
          <i className="fas fa-robot text-blue-600 mr-2"></i>
          AI Insights & Recommendations
        </h3>
        <div className="text-sm text-gray-700">
          {activeTab === 'technical' && (
            <div className="space-y-2">
              <p>
                Your technical skills show strong proficiency in Python and Data Analysis. 
                Focus on improving Cloud Computing skills to reach your target levels. 
                The dashed line shows your target proficiency for career advancement.
              </p>
              <p className="font-medium text-blue-800">
                💡 Recommendation: Start with AWS Cloud Practitioner certification to build cloud fundamentals.
              </p>
            </div>
          )}
          {activeTab === 'soft' && (
            <div className="space-y-2">
              <p>
                Your soft skills are well-balanced with excellent problem-solving abilities. 
                Consider developing leadership skills further to enhance your career prospects. 
                Strong teamwork and communication skills are valuable assets.
              </p>
              <p className="font-medium text-blue-800">
                💡 Recommendation: Volunteer to lead a small project to develop leadership experience.
              </p>
            </div>
          )}
          {activeTab === 'all' && (
            <div className="space-y-2">
              <p>
                Overall skill assessment shows strong problem-solving and communication abilities. 
                Technical skills and industry knowledge are solid foundations. 
                Leadership development could accelerate your career growth.
              </p>
              <p className="font-medium text-blue-800">
                💡 Recommendation: Consider a management or technical lead role to leverage your strengths.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex justify-between items-center">
        <div className="text-xs text-gray-500">
          Last updated: {new Date().toLocaleDateString()} • Next assessment: {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
        </div>
        <div className="flex gap-2">
          <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-lg transition-colors">
            <i className="fas fa-download mr-1"></i>
            Export Report
          </button>
          <button className="text-xs bg-brand-primary-600 hover:bg-brand-primary-700 text-white px-3 py-1 rounded-lg transition-colors">
            <i className="fas fa-sync-alt mr-1"></i>
            Retake Assessment
          </button>
          <button className="text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg transition-colors">
            <i className="fas fa-graduation-cap mr-1"></i>
            Create Learning Plan
          </button>
        </div>
      </div>
    </div>
  );
}

