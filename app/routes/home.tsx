import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Skill Sync" },
    { name: "description", content: "Welcome to SkillSync! Where skills are synced." },
  ];
}

export default function Home() {
  return <Welcome />;
}
