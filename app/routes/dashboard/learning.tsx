import { LearningPaths } from "../../components/dashboard/LearningPaths";

export function meta() {
  return [
    { title: "Learning Paths - SkillSync" },
    { name: "description", content: "Personalized learning paths to help you achieve your career goals." },
  ];
}

export default function LearningPathsPage() {
  return <LearningPaths />;
}
