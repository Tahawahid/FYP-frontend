import { DashboardOverview } from "../../components/dashboard/DashboardOverview";

export function meta() {
  return [
    { title: "Dashboard Overview - SkillSync" },
    { name: "description", content: "Overview of your SkillSync dashboard with key metrics and insights." },
  ];
}

export default function DashboardOverviewPage() {
  return <DashboardOverview />;
}
