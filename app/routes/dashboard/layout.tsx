import { Outlet } from "react-router";
import { DashboardHeader } from "../../components/dashboard/DashboardHeader";
import { DashboardSidebar } from "../../components/dashboard/DashboardSidebar";
import { useState } from "react";

export function meta() {
  return [
    { title: "Dashboard - SkillSync" },
    { name: "description", content: "Your personalized SkillSync dashboard for career development and skill tracking." },
  ];
}

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      <DashboardSidebar 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      
      <main className="pt-16 md:pl-64">
        <div className="p-4 md:p-8">
          <Outlet />
        </div>
      </main>
      
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
