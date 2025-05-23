import { Link, useLocation } from "react-router";

interface DashboardSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DashboardSidebar({ isOpen, onClose }: DashboardSidebarProps) {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const isActive = (path: string) => {
    if (path === "/dashboard" && currentPath === "/dashboard") {
      return true;
    }
    if (path !== "/dashboard" && currentPath.startsWith(path)) {
      return true;
    }
    return false;
  };
  
  const navItems = [
    { path: "/dashboard", label: "Overview", icon: "tachometer-alt" },
    { path: "/dashboard/skills", label: "Skill Assessment", icon: "chart-bar" },
    { path: "/dashboard/jobs", label: "Job Market", icon: "briefcase" },
    { path: "/dashboard/learning", label: "Learning Paths", icon: "graduation-cap" },
    { path: "/dashboard/profile", label: "Profile Settings", icon: "user-cog" }
  ];
  
  return (
    <aside className={`fixed inset-y-0 left-0 transform ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } md:translate-x-0 transition-transform duration-300 ease-in-out z-30 md:z-0 w-64 bg-white shadow-lg`}>
      <div className="h-full flex flex-col">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b">
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/logo02.png" alt="SkillSync" className="h-8 w-auto" />
            <span className="text-lg font-bold text-brand-primary-700">SkillSync</span>
          </Link>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {navItems.map(item => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-brand-primary-50 text-brand-primary-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      onClose();
                    }
                  }}
                >
                  <i className={`fas fa-${item.icon} w-5 h-5 mr-3`}></i>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Chat with Mr. James */}
        <div className="px-4 py-3 border-t">
          <div className="bg-brand-primary-50 rounded-lg p-4 border border-brand-primary-100">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-brand-primary-100 flex items-center justify-center mr-3">
                <i className="fas fa-robot text-brand-primary-600"></i>
              </div>
              <div>
                <div className="font-medium text-brand-primary-800">Mr. James</div>
                <div className="text-xs text-brand-primary-600">AI Career Assistant</div>
              </div>
            </div>
            
            <p className="text-sm text-brand-primary-700 mb-3">
              Need help with your career path or have questions about skills?
            </p>
            
            <Link
              to="/chat/career"
              className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-brand-primary-600 hover:bg-brand-primary-700 text-white rounded-lg transition-colors"
              onClick={() => {
                if (window.innerWidth < 768) {
                  onClose();
                }
              }}
            >
              <i className="fas fa-comment-dots"></i>
              <span className="text-xs">Chat with Mr. James</span>
            </Link>
          </div>
        </div>
        
        {/* User Profile */}
        <div className="p-4 border-t">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-brand-primary-100 flex items-center justify-center mr-3">
              <span className="text-brand-primary-700 font-medium">JS</span>
            </div>
            <div>
              <div className="font-medium text-gray-900">John Smith</div>
              <div className="text-sm text-gray-500">john@example.com</div>
            </div>
          </div>
          <button className="mt-4 w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors text-sm flex items-center justify-center">
            <i className="fas fa-sign-out-alt mr-2"></i>
            Sign Out
          </button>
        </div>
      </div>
    </aside>
  );
}
