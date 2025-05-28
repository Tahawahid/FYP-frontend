import { useState, useEffect } from "react";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "System Status - SkillSync" },
    { name: "description", content: "Check the current status of SkillSync services and any ongoing incidents." },
  ];
}

interface ServiceStatus {
  name: string;
  status: "operational" | "degraded" | "outage" | "maintenance";
  description: string;
  lastChecked: string;
}

interface Incident {
  id: string;
  title: string;
  status: "investigating" | "identified" | "monitoring" | "resolved";
  severity: "minor" | "major" | "critical";
  description: string;
  createdAt: string;
  updatedAt: string;
  updates: {
    timestamp: string;
    message: string;
    status: string;
  }[];
}

export default function Status() {
  const [services, setServices] = useState<ServiceStatus[]>([
    {
      name: "AI Chat Service",
      status: "operational",
      description: "All AI assistants are responding normally",
      lastChecked: new Date().toISOString()
    },
    {
      name: "Dashboard & Analytics",
      status: "operational", 
      description: "User dashboards and skill tracking are working properly",
      lastChecked: new Date().toISOString()
    },
    {
      name: "User Authentication",
      status: "operational",
      description: "Login and registration services are functioning normally",
      lastChecked: new Date().toISOString()
    },
    {
      name: "API Services",
      status: "operational",
      description: "All API endpoints are responding within normal parameters",
      lastChecked: new Date().toISOString()
    },
    {
      name: "Database",
      status: "operational",
      description: "Database queries and data storage are performing optimally",
      lastChecked: new Date().toISOString()
    }
  ]);

  const [incidents, setIncidents] = useState<Incident[]>([
    {
      id: "1",
      title: "Scheduled Maintenance - Database Optimization",
      status: "resolved",
      severity: "minor",
      description: "Routine database maintenance to improve performance",
      createdAt: "2024-01-15T02:00:00Z",
      updatedAt: "2024-01-15T04:00:00Z",
      updates: [
        {
          timestamp: "2024-01-15T04:00:00Z",
          message: "Maintenance completed successfully. All services are now operational.",
          status: "resolved"
        },
        {
          timestamp: "2024-01-15T02:00:00Z",
          message: "Scheduled maintenance has begun. Some users may experience brief delays.",
          status: "monitoring"
        }
      ]
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "text-green-600 bg-green-100";
      case "degraded":
        return "text-yellow-600 bg-yellow-100";
      case "outage":
        return "text-red-600 bg-red-100";
      case "maintenance":
        return "text-blue-600 bg-blue-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "minor":
        return "text-yellow-600 bg-yellow-100";
      case "major":
        return "text-orange-600 bg-orange-100";
      case "critical":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getOverallStatus = () => {
    const hasOutage = services.some(s => s.status === "outage");
    const hasDegraded = services.some(s => s.status === "degraded");
    const hasMaintenance = services.some(s => s.status === "maintenance");

    if (hasOutage) return { status: "outage", message: "Some services are experiencing issues" };
    if (hasDegraded) return { status: "degraded", message: "Some services are experiencing degraded performance" };
    if (hasMaintenance) return { status: "maintenance", message: "Scheduled maintenance in progress" };
    return { status: "operational", message: "All systems operational" };
  };

  const overallStatus = getOverallStatus();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="SkillSync Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold text-brand-primary-700">SkillSync</span>
            </Link>
            <Link to="/help" className="text-brand-primary-600 hover:text-brand-primary-700">
              Help Center
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Overall Status */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">System Status</h1>
          <div className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-medium ${getStatusColor(overallStatus.status)}`}>
            <div className={`w-3 h-3 rounded-full mr-3 ${
              overallStatus.status === 'operational' ? 'bg-green-500' :
              overallStatus.status === 'degraded' ? 'bg-yellow-500' :
              overallStatus.status === 'maintenance' ? 'bg-blue-500' : 'bg-red-500'
            }`}></div>
            {overallStatus.message}
          </div>
          <p className="text-gray-600 mt-4">
            Last updated: {new Date().toLocaleString()}
          </p>
        </div>

        {/* Current Incidents */}
        {incidents.filter(i => i.status !== 'resolved').length > 0 && (
          <div className="bg-white rounded-xl shadow-sm mb-8">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <i className="fas fa-exclamation-triangle text-yellow-500 mr-3"></i>
                Current Incidents
              </h2>
            </div>
            <div className="p-6">
              {incidents.filter(i => i.status !== 'resolved').map(incident => (
                <div key={incident.id} className="border border-gray-200 rounded-lg p-4 mb-4 last:mb-0">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">{incident.title}</h3>
                    <div className="flex gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                        {incident.severity.toUpperCase()}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(incident.status)}`}>
                        {incident.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{incident.description}</p>
                  <div className="space-y-2">
                    {incident.updates.slice(0, 2).map((update, index) => (
                      <div key={index} className="text-sm">
                        <span className="text-gray-500">{new Date(update.timestamp).toLocaleString()}</span>
                        <span className="mx-2">•</span>
                        <span className="text-gray-700">{update.message}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Services Status */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">Service Status</h2>
            <p className="text-gray-600 mt-2">Current status of all SkillSync services</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{service.name}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                      <div className={`w-2 h-2 rounded-full mr-2 ${
                        service.status === 'operational' ? 'bg-green-500' :
                        service.status === 'degraded' ? 'bg-yellow-500' :
                        service.status === 'maintenance' ? 'bg-blue-500' : 'bg-red-500'
                      }`}></div>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                    </span>
                    <div className="text-xs text-gray-500 mt-1">
                      Last checked: {new Date(service.lastChecked).toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Incidents */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">Incident History</h2>
            <p className="text-gray-600 mt-2">Recent incidents and maintenance activities</p>
          </div>
          <div className="p-6">
            {incidents.length > 0 ? (
              <div className="space-y-4">
                {incidents.map(incident => (
                  <div key={incident.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-800">{incident.title}</h3>
                      <div className="flex gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                          {incident.severity.toUpperCase()}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(incident.status)}`}>
                          {incident.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{incident.description}</p>
                    <div className="text-sm text-gray-500">
                      <span>Created: {new Date(incident.createdAt).toLocaleString()}</span>
                      <span className="mx-2">•</span>
                      <span>Updated: {new Date(incident.updatedAt).toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <i className="fas fa-check-circle text-4xl text-green-400 mb-4"></i>
                <h3 className="text-lg font-medium text-gray-800 mb-2">No recent incidents</h3>
                <p className="text-gray-600">All systems have been running smoothly</p>
              </div>
            )}
          </div>
        </div>

        {/* Subscribe to Updates */}
        <div className="bg-brand-primary-50 rounded-xl p-6 mt-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-brand-primary-800 mb-2">
              Stay Updated
            </h3>
            <p className="text-brand-primary-600 mb-6">
              Get notified about service updates and maintenance schedules
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:status-subscribe@skillsync.com"
                className="px-6 py-3 bg-brand-primary-600 hover:bg-brand-primary-700 text-white rounded-lg transition-colors"
              >
                <i className="fas fa-envelope mr-2"></i>
                Subscribe to Email Updates
              </a>
              <a
                href="https://twitter.com/skillsync"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white hover:bg-gray-50 text-brand-primary-600 border border-brand-primary-200 rounded-lg transition-colors"
              >
                <i className="fab fa-twitter mr-2"></i>
                Follow on Twitter
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
