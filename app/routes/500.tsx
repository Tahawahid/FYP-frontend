import { Link } from "react-router";

export function meta() {
  return [
    { title: "Server Error - SkillSync" },
    { name: "description", content: "Something went wrong on our end." },
  ];
}

export default function ServerError() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Error illustration */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
            <i className="fas fa-exclamation-triangle text-6xl text-red-400"></i>
          </div>
        </div>
        
        {/* Error code */}
        <h1 className="text-8xl font-bold text-red-600 mb-4">500</h1>
        
        {/* Error message */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Server Error</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Something went wrong on our end. We're working to fix this issue. Please try again in a few moments.
        </p>
        
        {/* Action buttons */}
        <div className="space-y-4">
          <button
            onClick={() => window.location.reload()}
            className="block w-full py-3 px-6 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
          >
            <i className="fas fa-redo mr-2"></i>
            Try Again
          </button>
          
          <Link
            to="/"
            className="block w-full py-3 px-6 bg-white hover:bg-gray-50 text-red-600 font-medium rounded-lg border border-red-200 transition-colors"
          >
            <i className="fas fa-home mr-2"></i>
            Go Home
          </Link>
        </div>
        
        {/* Status info */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Error Code: 500 - Internal Server Error</p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="mailto:support@skillsync.com" className="text-red-600 hover:text-red-700">
              <i className="fas fa-envelope mr-1"></i>
              Report Issue
            </a>
            <Link to="/status" className="text-red-600 hover:text-red-700">
              <i className="fas fa-chart-line mr-1"></i>
              Status Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
