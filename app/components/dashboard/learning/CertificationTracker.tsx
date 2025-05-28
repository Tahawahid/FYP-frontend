import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

interface Certification {
  id: number;
  name: string;
  provider: string;
  status: "completed" | "in-progress" | "planned";
  completionDate?: string;
  expirationDate?: string;
  progress?: number;
  category?: string;
  difficulty?: string;
  value?: number;
}

export function CertificationTracker() {
  const [certifications, setCertifications] = useState<Certification[]>([
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      provider: "Amazon Web Services",
      status: "completed",
      completionDate: "2022-06-15",
      expirationDate: "2025-06-15",
      category: "Cloud Computing",
      difficulty: "Advanced",
      value: 95
    },
    {
      id: 2,
      name: "TensorFlow Developer Certificate",
      provider: "Google",
      status: "in-progress",
      progress: 75,
      category: "Machine Learning",
      difficulty: "Intermediate",
      value: 85
    },
    {
      id: 3,
      name: "Microsoft Azure Data Scientist Associate",
      provider: "Microsoft",
      status: "planned",
      category: "Data Science",
      difficulty: "Advanced",
      value: 90
    },
    {
      id: 4,
      name: "Google Cloud Professional Data Engineer",
      provider: "Google Cloud",
      status: "completed",
      completionDate: "2023-03-20",
      expirationDate: "2025-03-20",
      category: "Data Engineering",
      difficulty: "Advanced",
      value: 92
    },
    {
      id: 5,
      name: "Certified Kubernetes Administrator",
      provider: "CNCF",
      status: "in-progress",
      progress: 40,
      category: "DevOps",
      difficulty: "Advanced",
      value: 88
    }
  ]);

  const [activeTab, setActiveTab] = useState<'overview' | 'progress' | 'timeline'>('overview');

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const getStatusBadge = (status: Certification["status"]) => {
    switch (status) {
      case "completed":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Completed
          </span>
        );
      case "in-progress":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            In Progress
          </span>
        );
      case "planned":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            Planned
          </span>
        );
    }
  };

  // Chart data preparation
  const getStatusDistribution = () => {
    const completed = certifications.filter(cert => cert.status === 'completed').length;
    const inProgress = certifications.filter(cert => cert.status === 'in-progress').length;
    const planned = certifications.filter(cert => cert.status === 'planned').length;

    return {
      labels: ['Completed', 'In Progress', 'Planned'],
      datasets: [
        {
          data: [completed, inProgress, planned],
          backgroundColor: [
            'rgba(34, 197, 94, 0.8)',
            'rgba(59, 130, 246, 0.8)',
            'rgba(156, 163, 175, 0.8)',
          ],
          borderColor: [
            'rgba(34, 197, 94, 1)',
            'rgba(59, 130, 246, 1)',
            'rgba(156, 163, 175, 1)',
          ],
          borderWidth: 2,
        },
      ],
    };
  };

  const getCategoryDistribution = () => {
    const categories = certifications.reduce((acc, cert) => {
      const category = cert.category || 'Other';
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      labels: Object.keys(categories),
      datasets: [
        {
          label: 'Certifications by Category',
          data: Object.values(categories),
          backgroundColor: [
            'rgba(59, 130, 246, 0.8)',
            'rgba(16, 185, 129, 0.8)',
            'rgba(245, 158, 11, 0.8)',
            'rgba(139, 92, 246, 0.8)',
            'rgba(236, 72, 153, 0.8)',
          ],
          borderColor: [
            'rgba(59, 130, 246, 1)',
            'rgba(16, 185, 129, 1)',
            'rgba(245, 158, 11, 1)',
            'rgba(139, 92, 246, 1)',
            'rgba(236, 72, 153, 1)',
          ],
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    };
  };

  const getProgressTimeline = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const completedByMonth = new Array(12).fill(0);
    
    certifications.forEach(cert => {
      if (cert.completionDate) {
        const month = new Date(cert.completionDate).getMonth();
        completedByMonth[month]++;
      }
    });

    return {
      labels: months,
      datasets: [
        {
          label: 'Certifications Completed',
          data: completedByMonth,
          borderColor: 'rgba(59, 130, 246, 1)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: 'rgba(59, 130, 246, 1)',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 5,
        },
      ],
    };
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          font: {
            size: 12,
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
      },
    },
    cutout: '60%',
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
          stepSize: 1,
        },
      },
    },
  };

  const lineOptions = {
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
          stepSize: 1,
        },
      },
    },
  };

  // Calculate statistics
  const getStats = () => {
    const completed = certifications.filter(cert => cert.status === 'completed').length;
    const inProgress = certifications.filter(cert => cert.status === 'in-progress').length;
    const planned = certifications.filter(cert => cert.status === 'planned').length;
    const totalValue = certifications.reduce((sum, cert) => sum + (cert.value || 0), 0);
    const avgValue = Math.round(totalValue / certifications.length);
    
    // Calculate expiring soon (within 6 months)
    const expiringSoon = certifications.filter(cert => {
      if (!cert.expirationDate) return false;
      const expirationDate = new Date(cert.expirationDate);
      const sixMonthsFromNow = new Date();
      sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);
      return expirationDate <= sixMonthsFromNow && expirationDate > new Date();
    }).length;

    return { completed, inProgress, planned, avgValue, expiringSoon };
  };

  const stats = getStats();

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Certification Tracker</h2>
        <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800">
          Add Certification
        </button>
      </div>
      
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Certification
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Provider
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Dates
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {certifications.map(cert => (
              <tr key={cert.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{cert.name}</div>
                  {cert.category && (
                    <div className="text-xs text-gray-500">{cert.category} • {cert.difficulty}</div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{cert.provider}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(cert.status)}
                  {cert.status === "in-progress" && cert.progress && (
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="h-1.5 rounded-full bg-brand-primary-500"
                        style={{ width: `${cert.progress}%` }}
                      ></div>
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {cert.status === "completed" ? (
                    <div className="text-sm text-gray-500">
                      <div>Completed: {formatDate(cert.completionDate)}</div>
                      <div>Expires: {formatDate(cert.expirationDate)}</div>
                    </div>
                  ) : cert.status === "in-progress" ? (
                    <div className="text-sm text-gray-500">
                      Target completion: In 2 months
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500">
                      Not started
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  {cert.status === "completed" ? (
                    <button className="text-brand-primary-600 hover:text-brand-primary-900">
                      View Certificate
                    </button>
                  ) : cert.status === "in-progress" ? (
                    <button className="text-brand-primary-600 hover:text-brand-primary-900">
                      Continue
                    </button>
                  ) : (
                    <button className="text-brand-primary-600 hover:text-                      brand-primary-900">
                      Start
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Analytics Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-brand-primary-500 text-brand-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('progress')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'progress'
                  ? 'border-brand-primary-500 text-brand-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Progress Analytics
            </button>
            <button
              onClick={() => setActiveTab('timeline')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'timeline'
                  ? 'border-brand-primary-500 text-brand-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Timeline
            </button>
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Statistics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
              <div className="text-sm text-green-800">Completed</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.inProgress}</div>
              <div className="text-sm text-blue-800">In Progress</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-gray-600">{stats.planned}</div>
              <div className="text-sm text-gray-800">Planned</div>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-amber-600">{stats.avgValue}</div>
              <div className="text-sm text-amber-800">Avg Value</div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-red-600">{stats.expiringSoon}</div>
              <div className="text-sm text-red-800">Expiring Soon</div>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Status Distribution */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-md font-medium text-gray-800 mb-4">Certification Status</h3>
              <div className="h-64">
                <Doughnut data={getStatusDistribution()} options={doughnutOptions} />
              </div>
            </div>

            {/* Category Distribution */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-md font-medium text-gray-800 mb-4">By Category</h3>
              <div className="h-64">
                <Bar data={getCategoryDistribution()} options={barOptions} />
              </div>
            </div>
          </div>

          {/* Certification Value Analysis */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
            <h3 className="text-md font-medium text-gray-800 mb-4">Certification Value Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {certifications.filter(cert => cert.status === 'completed').map(cert => (
                <div key={cert.id} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-medium text-gray-800 truncate">{cert.name}</h4>
                    <div className="text-lg font-bold text-brand-primary-600">{cert.value}</div>
                  </div>
                  <div className="text-xs text-gray-600 mb-2">{cert.provider}</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-brand-primary-500 h-2 rounded-full"
                      style={{ width: `${cert.value}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Market Value Score</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'progress' && (
        <div className="space-y-6">
          {/* Progress Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-md font-medium text-gray-800 mb-4">Current Progress</h3>
              <div className="space-y-4">
                {certifications.filter(cert => cert.status === 'in-progress').map(cert => (
                  <div key={cert.id} className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-sm font-medium text-gray-800">{cert.name}</h4>
                      <span className="text-sm font-bold text-brand-primary-600">{cert.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-brand-primary-500 to-brand-secondary-500 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${cert.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>{cert.provider}</span>
                      <span>Est. completion: {Math.ceil((100 - (cert.progress || 0)) / 25)} weeks</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-md font-medium text-gray-800 mb-4">Study Time Analytics</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">This Week</span>
                    <span className="text-lg font-bold text-green-600">12.5 hrs</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '83%' }}></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Goal: 15 hrs/week</div>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">This Month</span>
                    <span className="text-lg font-bold text-blue-600">48 hrs</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Goal: 60 hrs/month</div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-2">Study Streak</div>
                  <div className="text-2xl font-bold text-purple-600 mb-1">7 days</div>
                  <div className="text-xs text-gray-500">Keep it up! 🔥</div>
                </div>
              </div>
            </div>
          </div>

          {/* Difficulty vs Progress Chart */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-md font-medium text-gray-800 mb-4">Difficulty vs Progress Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-sm text-gray-600 mb-2">Beginner Level</div>
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-xs text-gray-500">Avg completion rate</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-sm text-gray-600 mb-2">Intermediate Level</div>
                <div className="text-2xl font-bold text-blue-600">75%</div>
                <div className="text-xs text-gray-500">Avg completion rate</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-sm text-gray-600 mb-2">Advanced Level</div>
                <div className="text-2xl font-bold text-amber-600">58%</div>
                <div className="text-xs text-gray-500">Avg completion rate</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'timeline' && (
        <div className="space-y-6">
          {/* Completion Timeline Chart */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-md font-medium text-gray-800 mb-4">Certification Completion Timeline</h3>
            <div className="h-64">
              <Line data={getProgressTimeline()} options={lineOptions} />
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-md font-medium text-gray-800 mb-4">Upcoming Deadlines</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border-l-4 border-blue-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-medium text-gray-800">TensorFlow Developer</h4>
                      <p className="text-xs text-gray-600">Target completion</p>
                    </div>
                    <span className="text-xs text-blue-600 font-medium">2 weeks</span>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg border-l-4 border-amber-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-medium text-gray-800">Kubernetes Administrator</h4>
                      <p className="text-xs text-gray-600">Target completion</p>
                    </div>
                    <span className="text-xs text-amber-600 font-medium">6 weeks</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-md font-medium text-gray-800 mb-4">Renewal Reminders</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border-l-4 border-red-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-medium text-gray-800">AWS Solutions Architect</h4>
                      <p className="text-xs text-gray-600">Expires June 15, 2025</p>
                    </div>
                    <span className="text-xs text-red-600 font-medium">18 months</span>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg border-l-4 border-orange-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-medium text-gray-800">Google Cloud Data Engineer</h4>
                      <p className="text-xs text-gray-600">Expires March 20, 2025</p>
                    </div>
                    <span className="text-xs text-orange-600 font-medium">15 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Path Roadmap */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
            <h3 className="text-md font-medium text-gray-800 mb-4">Recommended Learning Path</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold relative z-10">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-sm font-medium text-gray-800">Foundation Level</h4>
                    <p className="text-xs text-gray-600 mt-1">AWS Solutions Architect, Google Cloud Data Engineer</p>
                    <div className="text-xs text-green-600 mt-2">✓ Completed</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold relative z-10">
                    2
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                    <h4 className="text-sm font-medium text-gray-800">Specialization Level</h4>
                    <p className="text-xs text-gray-600 mt-1">TensorFlow Developer, Kubernetes Administrator</p>
                    <div className="text-xs text-blue-600 mt-2">🔄 In Progress (2-6 weeks)</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs font-bold relative z-10">
                    3
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-sm font-medium text-gray-800">Advanced Level</h4>
                    <p className="text-xs text-gray-600 mt-1">Azure Data Scientist Associate</p>
                    <div className="text-xs text-gray-500 mt-2">📅 Planned (Q3 2024)</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center text-white text-xs font-bold relative z-10">
                    4
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-sm font-medium text-gray-800">Expert Level</h4>
                    <p className="text-xs text-gray-600 mt-1">AWS Machine Learning Specialty, Google Cloud Professional ML Engineer</p>
                    <div className="text-xs text-purple-600 mt-2">🎯 Future Goals (2025)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AI Insights Section */}
      <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-100">
        <h3 className="font-medium text-gray-900 mb-4 flex items-center">
          <i className="fas fa-robot text-blue-600 mr-2"></i>
          AI-Powered Certification Insights
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium text-gray-800 mb-3">Personalized Recommendations</h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">High Priority: Complete TensorFlow Developer</p>
                    <p className="text-xs text-gray-600">75% complete - finish in next 2 weeks for optimal career impact</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-3 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Next Best: Azure Data Scientist Associate</p>
                    <p className="text-xs text-gray-600">Complements your cloud and ML skills perfectly</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Consider: Docker Certified Associate</p>
                    <p className="text-xs text-gray-600">Growing demand in your target job market</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-800 mb-3">Market Intelligence</h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-700">Cloud Certifications</span>
                  <span className="text-sm font-bold text-green-600">+23% demand</span>
                </div>
                <div className="text-xs text-gray-600">Highest salary impact in your field</div>
              </div>

              <div className="bg-white p-3 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-700">ML/AI Certifications</span>
                  <span className="text-sm font-bold text-blue-600">+31% demand</span>
                </div>
                <div className="text-xs text-gray-600">Fastest growing certification category</div>
              </div>

              <div className="bg-white p-3 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-700">DevOps Certifications</span>
                  <span className="text-sm font-bold text-purple-600">+18% demand</span>
                </div>
                <div className="text-xs text-gray-600">Essential for senior roles</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
          <h4 className="text-sm font-medium text-gray-800 mb-2">💡 Smart Study Plan</h4>
          <p className="text-sm text-gray-700">
            Based on your current progress and market trends, focus 70% of your study time on completing TensorFlow Developer certification, 
            20% on Kubernetes fundamentals, and 10% on exploring Azure ML services. This approach maximizes your ROI and career advancement potential.
          </p>
        </div>
      </div>

      {/* Action Center */}
      <div className="mt-6 bg-gray-50 rounded-lg p-4">
        <h3 className="font-medium text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button className="flex items-center justify-center px-3 py-2 bg-brand-primary-600 text-white rounded-lg hover:bg-brand-primary-700 transition-colors text-sm">
            <i className="fas fa-plus mr-2"></i>
            Add Certification
          </button>
          <button className="flex items-center justify-center px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
            <i className="fas fa-calendar-plus mr-2"></i>
            Schedule Study
          </button>
          <button className="flex items-center justify-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
            <i className="fas fa-download mr-2"></i>
            Export Report
          </button>
          <button className="flex items-center justify-center px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
            <i className="fas fa-share mr-2"></i>
            Share Progress
          </button>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
        <div>
          Last updated: {new Date().toLocaleDateString()} • Next review: {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
        </div>
        <div className="flex items-center space-x-4">
          <span>Total study hours: 156</span>
          <span>•</span>
          <span>Completion rate: 78%</span>
          <span>•</span>
          <span>Next milestone: 2 weeks</span>
        </div>
      </div>
    </div>
  );
}

