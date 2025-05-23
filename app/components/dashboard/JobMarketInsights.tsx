import { JobTrends } from "./jobs/JobTrends";
import { JobMatchScore } from "./jobs/JobMatchScore";
import { TopEmployers } from "./jobmarket/TopEmployers";
import { InDemandSkills } from "./jobs/InDemandSkills";
import { SalaryInsights } from "./jobs/SalaryInsights";
import { JobRecommendations } from "./jobmarket/JobRecommendations";

export function JobMarketInsights() {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Job Market Insights</h1>
        <p className="text-gray-600">Explore current job market trends and opportunities aligned with your skills.</p>
      </div>
      
      {/* Top Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <JobMatchScore />
        <JobTrends />
      </div>
      
      {/* Middle Row - TopEmployers takes full width */}
      <div className="grid grid-cols-1 gap-6">
        <TopEmployers />
      </div>
      
      {/* Next Row - InDemandSkills and SalaryInsights side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InDemandSkills />
        <SalaryInsights />
      </div>
      
      {/* Bottom Row */}
      <JobRecommendations />
    </div>
  );
}
