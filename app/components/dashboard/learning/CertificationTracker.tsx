import { useState } from "react";

interface Certification {
  id: number;
  name: string;
  provider: string;
  status: "completed" | "in-progress" | "planned";
  completionDate?: string;
  expirationDate?: string;
  progress?: number;
}

export function CertificationTracker() {
  const [certifications, setCertifications] = useState<Certification[]>([
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      provider: "Amazon Web Services",
      status: "completed",
      completionDate: "2022-06-15",
      expirationDate: "2025-06-15"
    },
    {
      id: 2,
      name: "TensorFlow Developer Certificate",
      provider: "Google",
      status: "in-progress",
      progress: 75
    },
    {
      id: 3,
      name: "Microsoft Azure Data Scientist Associate",
      provider: "Microsoft",
      status: "planned"
    }
  ]);

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

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Certification Tracker</h2>
        <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800">
          Add Certification
        </button>
      </div>
      
      <div className="overflow-x-auto">
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
                    <button className="text-brand-primary-600 hover:text-brand-primary-900">
                      Start
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-md font-medium text-gray-800">Recommended Certifications</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h4 className="text-md font-medium text-gray-800 mb-1">Google Professional Data Engineer</h4>
            <p className="text-sm text-gray-500 mb-2">Google Cloud</p>
            <p className="text-sm text-gray-600 mb-3">Based on your skills in data science and machine learning</p>
            <div className="flex justify-end">
              <button className="px-3 py-1 bg-brand-primary-600 text-white hover:bg-brand-primary-700 rounded-lg transition-colors text-sm">
                Add to Tracker
              </button>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h4 className="text-md font-medium text-gray-800 mb-1">Certified Kubernetes Administrator</h4>
            <p className="text-sm text-gray-500 mb-2">Cloud Native Computing Foundation</p>
            <p className="text-sm text-gray-600 mb-3">Recommended for your career path in cloud computing</p>
            <div className="flex justify-end">
              <button className="px-3 py-1 bg-brand-primary-600 text-white hover:bg-brand-primary-700 rounded-lg transition-colors text-sm">
                Add to Tracker
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
