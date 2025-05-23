import { useState } from "react";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardOverview } from "./DashboardOverview";
import { JobMarketInsights } from "./JobMarketInsights";
import { SkillAssessment } from "./SkillAssessment";
import { LearningPaths } from "./LearningPaths";
import { ProfileSettings } from "./ProfileSettings";

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "skills" | "jobs" | "learning" | "profile">("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      <DashboardSidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      
      <main className="pt-16 md:pl-64">
        <div className="p-4 md:p-8">
          {activeTab === "overview" && <DashboardOverview />}
          {activeTab === "skills" && <SkillAssessment />}
          {activeTab === "jobs" && <JobMarketInsights />}
          {activeTab === "learning" && <LearningPaths />}
          {activeTab === "profile" && <ProfileSettings />}
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
