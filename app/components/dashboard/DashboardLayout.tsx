import { type ReactNode } from "react";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardSidebar } from "./DashboardSidebar";
import { useState } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
  activeTab: "overview" | "skills" | "jobs" | "learning" | "profile";
  onTabChange: (tab: "overview" | "skills" | "jobs" | "learning" | "profile") => void;
}

export function DashboardLayout({ children, activeTab, onTabChange }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <DashboardHeader 
        onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      
      {/* Dashboard Content */}
      <div className="flex">
        {/* Sidebar */}
        <DashboardSidebar 
          activeTab={activeTab}
          setActiveTab={onTabChange}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 pt-20 md:ml-64">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
      
      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
