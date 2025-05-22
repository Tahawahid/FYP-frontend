import { Outlet } from "react-router";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "AI Assistant - SkillSync" },
    { name: "description", content: "Chat with SkillSync's AI assistants for career guidance, resume reviews, and skill assessments." },
  ];
}

export default function Chat() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Custom minimal header for chat interface */}
      <header className="bg-white shadow-sm z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo and App Name */}
            <div className="flex items-center gap-2">
              <img 
                src="/images/logo.png" 
                alt="SkillSync Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-brand-primary-700">SkillSync</span>
            </div>
            
            {/* Exit button */}
            <Link 
              to="/" 
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors flex items-center gap-2"
            >
              <i className="fas fa-times"></i>
              <span>Exit Chat</span>
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="h-[calc(100vh-120px)] bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
