import { Link } from "react-router";

export function meta() {
  return [
    { title: "You're Offline - SkillSync" },
    { name: "description", content: "Check your internet connection." },
  ];
}

export default function Offline() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Error illustration */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
            <i className="fas fa-wifi text-6xl text-gray-400"></i>
          </div>
        </div>
        
        {/* Error message */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">You're Offline</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          It looks like you've lost your internet connection. Please check your network settings and try again.
        </p>
        
        {/* Connection status */}
        <div className="mb-8 p-4 bg-gray-100 rounded-lg">
          <div className="flex items-center justify-center text-gray-600">
            <div className="w-3 h-3 bg-red-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm">No internet connection</span>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="space-y-4">
          <button
            onClick={() => window.location.reload()}
            className="block w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <i className="fas fa-redo mr-2"></i>
            Try Again
          </button>
          
          <button
            onClick={() => window.history.back()}
            className="block w-full py-3 px-6 bg-white hover:bg-gray-50 text-blue-600 font-medium rounded-lg border border-blue-200 transition-colors"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Go Back
          </button>
        </div>
        
        {/* Troubleshooting tips */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Troubleshooting tips:</p>
          <div className="text-xs text-gray-500 space-y-2">
            <div className="flex items-center">
              <i className="fas fa-check-circle mr-2 text-green-500"></i>
              Check your WiFi connection
            </div>
            <div className="flex items-center">
              <i className="fas fa-check-circle mr-2 text-green-500"></i>
              Try switching to mobile data
            </div>
            <div className="flex items-center">
              <i className="fas fa-check-circle mr-2 text-green-500"></i>
              Restart your router
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
