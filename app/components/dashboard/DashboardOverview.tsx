import { JobTrendChart } from "./overview/JobTrendChart";
import { SkillGapSummary } from "./overview/SkillGapSummary";
import { RecentActivities } from "./overview/RecentActivities";
import { UpcomingMilestones } from "./overview/UpcomingMilestones";

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back, John! Here's a summary of your career progress.</p>
      </div>
      
      {/* Top Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <JobTrendChart />
        <SkillGapSummary />
      </div>
      
      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivities />
        <UpcomingMilestones />
      </div>
    </div>
  );
}
