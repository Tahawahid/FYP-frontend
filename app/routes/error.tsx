import { Link, useRouteError, isRouteErrorResponse } from "react-router";

export function meta() {
  return [
    { title: "Something went wrong - SkillSync" },
    { name: "description", content: "An unexpected error occurred." },
  ];
}

export default function ErrorBoundary() {
  const error = useRouteError();
  
  let errorMessage = "An unexpected error occurred";
  let errorCode = "ERROR";
  let errorDetails = "";
  
  if (isRouteErrorResponse(error)) {
    errorCode = error.status.toString();
    errorMessage = error.statusText || error.data?.message || "Something went wrong";
    errorDetails = error.data?.details || "";
  } else if (error instanceof Error) {
    errorMessage = error.message;
    errorDetails = error.stack || "";
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Error illustration */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
            <i className="fas fa-bug text-6xl text-red-400"></i>
          </div>
        </div>
        
        {/* Error code */}
        <h1 className="text-6xl font-bold text-red-600 mb-4">{errorCode}</h1>
        
        {/* Error message */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops! Something went wrong</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          {errorMessage}
        </p>
        
        {/* Error details (only in development) */}
        {process.env.NODE_ENV === 'development' && errorDetails && (
          <div className="mb-8 p-4 bg-gray-100 rounded-lg text-left">
            <h3 className="font-medium text-gray-800 mb-2">Error Details:</h3>
            <pre className="text-xs text-gray-600 overflow-auto max-h-32">
              {errorDetails}
            </pre>
          </div>
        )}
        
        {/* Action buttons */}
        <div className="space-y-4">
          <button
            onClick={() => window.location.reload()}
            className="block w-full py-3 px-6 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
          >
            <i className="fas fa-redo mr-2"></i>
            Reload Page
          </button>
          
          <Link
            to="/"
            className="block w-full py-3 px-6 bg-white hover:bg-gray-50 text-red-600 font-medium rounded-lg border border-red-200 transition-colors"
          >
            <i className="fas fa-home mr-2"></i>
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="block w-full py-3 px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Go Back
          </button>
        </div>
        
        {/* Report error */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">This error has been automatically reported</p>
          <div className="flex justify-center space-x-6 text-sm">
            <a 
              href={`mailto:support@skillsync.com?subject=Error Report&body=Error: ${errorMessage}%0A%0ADetails: ${encodeURIComponent(errorDetails)}`}
              className="text-red-600 hover:text-red-700"
            >
              <i className="fas fa-envelope mr-1"></i>
              Report Issue
            </a>
            <Link to="/help" className="text-red-600 hover:text-red-700">
              <i className="fas fa-question-circle mr-1"></i>
              Get Help
            </Link>
            <Link to="/contact" className="text-red-600 hover:text-red-700">
              <i className="fas fa-phone mr-1"></i>
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
