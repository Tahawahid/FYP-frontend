import { SkillRadarChart } from "./skills/SkillRadarChart";
import { SkillGapAnalysis } from "./skills/SkillGapAnalysis";
import { SkillRecommendations } from "./skillgap/SkillRecommendations";
import { SkillProgressTracker } from "./skills/SkillProgressTracker";

export function SkillAssessment() {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Skill Assessment</h1>
        <p className="text-gray-600">Analyze your skills and identify areas for improvement.</p>
      </div>
      
      {/* Top Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SkillRadarChart />
        <SkillGapAnalysis />
      </div>
      
      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SkillRecommendations />
        <SkillProgressTracker />
      </div>
    </div>
  );
}
