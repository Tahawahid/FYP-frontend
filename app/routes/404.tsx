import { Link } from "react-router";

export function meta() {
  return [
    { title: "Page Not Found - SkillSync" },
    { name: "description", content: "The page you're looking for doesn't exist." },
  ];
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-primary-50 to-brand-secondary-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Error illustration */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
            <i className="fas fa-search text-6xl text-brand-primary-400"></i>
          </div>
        </div>
        
        {/* Error code */}
        <h1 className="text-8xl font-bold text-brand-primary-600 mb-4">404</h1>
        
        {/* Error message */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        
        {/* Action buttons */}
        <div className="space-y-4">
          <Link
            to="/"
            className="block w-full py-3 px-6 bg-brand-primary-600 hover:bg-brand-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            <i className="fas fa-home mr-2"></i>
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="block w-full py-3 px-6 bg-white hover:bg-gray-50 text-brand-primary-600 font-medium rounded-lg border border-brand-primary-200 transition-colors"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Go Back
          </button>
        </div>
        
        {/* Help links */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Need help? Try these:</p>
          <div className="flex justify-center space-x-6 text-sm">
            <Link to="/chat" className="text-brand-primary-600 hover:text-brand-primary-700">
              <i className="fas fa-comments mr-1"></i>
              AI Chat
            </Link>
            <Link to="/contact" className="text-brand-primary-600 hover:text-brand-primary-700">
              <i className="fas fa-envelope mr-1"></i>
              Contact
            </Link>
            <Link to="/help" className="text-brand-primary-600 hover:text-brand-primary-700">
              <i className="fas fa-question-circle mr-1"></i>
              Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
