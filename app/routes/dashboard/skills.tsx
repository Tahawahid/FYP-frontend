import { SkillAssessment } from "../../components/dashboard/SkillAssessment";

export function meta() {
  return [
    { title: "Skill Assessment - SkillSync" },
    { name: "description", content: "Assess and track your professional skills with SkillSync." },
  ];
}

export default function SkillAssessmentPage() {
  return <SkillAssessment />;
}
