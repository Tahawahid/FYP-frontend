import { RecommendedCourses } from "./learning/RecommendedCourses";
import { CurrentCourses } from "./learning/CurrentCourses";
import { LearningPathProgress } from "./learning/LearningPathProgress";
import { CertificationTracker } from "./learning/CertificationTracker";

export function LearningPaths() {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Learning Paths</h1>
        <p className="text-gray-600">Track your learning progress and discover new courses.</p>
      </div>
      
      {/* Top Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LearningPathProgress />
        <CertificationTracker />
      </div>
      
      {/* Bottom Row */}
      <div className="grid grid-cols-1 gap-6">
        <CurrentCourses />
        <RecommendedCourses />
      </div>
    </div>
  );
}
