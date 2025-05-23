import { RecommendedCourses } from "./RecommendedCourses";
import { CurrentCourses } from "./CurrentCourses";
import { LearningPathMap } from "./LearningPathMap";
import { Certifications } from "./Certifications";

export function LearningPaths() {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Learning Paths</h1>
        <p className="text-gray-600">Personalized learning recommendations to help you achieve your career goals.</p>
      </div>
      
      {/* Learning Path Map */}
      <LearningPathMap />
      
      {/* Current Courses */}
      <CurrentCourses />
      
      {/* Recommended Courses */}
      <RecommendedCourses />
      
      {/* Certifications */}
      <Certifications />
    </div>
  );
}
