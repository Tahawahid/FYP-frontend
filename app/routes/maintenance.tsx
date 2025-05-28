import { Link } from "react-router";

export function meta() {
  return [
    { title: "Under Maintenance - SkillSync" },
    { name: "description", content: "We're currently performing scheduled maintenance." },
  ];
}

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-primary-50 to-brand-accent-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Maintenance illustration */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
            <i className="fas fa-tools text-6xl text-brand-primary-500"></i>
          </div>
        </div>
        
        {/* Maintenance message */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Under Maintenance</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          We're currently performing scheduled maintenance to improve your experience. We'll be back shortly!
        </p>
        
        {/* Estimated time */}
        <div className="mb-8 p-4 bg-white rounded-lg shadow-sm border border-brand-primary-100">
          <div className="flex items-center justify-center text-brand-primary-600">
            <i className="fas fa-clock mr-3"></i>
            <div>
              <div className="font-medium">Estimated completion</div>
              <div className="text-sm text-gray-600">2:00 AM UTC</div>
            </div>
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Progress</span>
            <span>75%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-brand-primary-600 h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
        
        {/* Status updates */}
        <div className="space-y-4">
          <a
            href="https://status.skillsync.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 px-6 bg-brand-primary-600 hover:bg-brand-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            <i className="fas fa-chart-line mr-2"></i>
            Check Status Page
          </a>
          
          <button
            onClick={() => window.location.reload()}
            className="block w-full py-3 px-6 bg-white hover:bg-gray-50 text-brand-primary-600 font-medium rounded-lg border border-brand-primary-200 transition-colors"
          >
            <i className="fas fa-redo mr-2"></i>
            Refresh Page
          </button>
        </div>
        
        {/* Contact info */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Stay updated:</p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="https://twitter.com/skillsync" className="text-brand-primary-600 hover:text-brand-primary-700">
              <i className="fab fa-twitter mr-1"></i>
              Twitter
            </a>
            <a href="mailto:support@skillsync.com" className="text-brand-primary-600 hover:text-brand-primary-700">
              <i className="fas fa-envelope mr-1"></i>
              Email
            </a>
            <Link to="/status" className="text-brand-primary-600 hover:text-brand-primary-700">
              <i className="fas fa-bell mr-1"></i>
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
