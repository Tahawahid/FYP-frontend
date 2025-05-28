import { Component, type ReactNode } from "react";
import { Link } from "react-router";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Report error to monitoring service
    if (typeof window !== 'undefined') {
      // You can integrate with error reporting services like Sentry here
      console.error('Error reported:', {
        error: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack
      });
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            {/* Error illustration */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                <i className="fas fa-exclamation-triangle text-6xl text-red-400"></i>
              </div>
            </div>
            
            {/* Error message */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We're sorry, but something unexpected happened. Please try refreshing the page or go back to the homepage.
            </p>
            
            {/* Error details in development */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-8 p-4 bg-gray-100 rounded-lg text-left">
                <h3 className="font-medium text-gray-800 mb-2">Error Details:</h3>
                <pre className="text-xs text-gray-600 overflow-auto max-h-32">
                  {this.state.error.message}
                  {this.state.error.stack}
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
            </div>
            
            {/* Support info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Need help?</p>
              <div className="flex justify-center space-x-6 text-sm">
                <a href="mailto:support@skillsync.com" className="text-red-600 hover:text-red-700">
                  <i className="fas fa-envelope mr-1"></i>
                  Contact Support
                </a>
                <Link to="/help" className="text-red-600 hover:text-red-700">
                  <i className="fas fa-question-circle mr-1"></i>
                  Help Center
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
