import { JobMarketInsights } from "../../components/dashboard/JobMarketInsights";

export function meta() {
  return [
    { title: "Job Market Insights - SkillSync" },
    { name: "description", content: "Explore job market trends and opportunities aligned with your skills." },
  ];
}

export default function JobMarketPage() {
  return <JobMarketInsights />;
}
