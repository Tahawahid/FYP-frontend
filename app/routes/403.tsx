import { Link } from "react-router";

export function meta() {
  return [
    { title: "Access Forbidden - SkillSync" },
    { name: "description", content: "You don't have permission to access this resource." },
  ];
}

export default function Forbidden() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Error illustration */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
            <i className="fas fa-lock text-6xl text-yellow-500"></i>
          </div>
        </div>
        
        {/* Error code */}
        <h1 className="text-8xl font-bold text-yellow-600 mb-4">403</h1>
        
        {/* Error message */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Access Forbidden</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          You don't have permission to access this resource. Please check your credentials or contact support if you believe this is an error.
        </p>
        
        {/* Action buttons */}
        <div className="space-y-4">
          <Link
            to="/login"
            className="block w-full py-3 px-6 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-lg transition-colors"
          >
            <i className="fas fa-sign-in-alt mr-2"></i>
            Sign In
          </Link>
          
          <Link
            to="/"
            className="block w-full py-3 px-6 bg-white hover:bg-gray-50 text-yellow-600 font-medium rounded-lg border border-yellow-200 transition-colors"
          >
            <i className="fas fa-home mr-2"></i>
            Go Home
          </Link>
        </div>
        
        {/* Help info */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Need access? Contact your administrator</p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="mailto:admin@skillsync.com" className="text-yellow-600 hover:text-yellow-700">
              <i className="fas fa-user-shield mr-1"></i>
              Contact Admin
            </a>
            <Link to="/help" className="text-yellow-600 hover:text-yellow-700">
              <i className="fas fa-question-circle mr-1"></i>
              Get Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
