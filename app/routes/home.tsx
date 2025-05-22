import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { useEffect } from "react";
import { useLocation } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Skill Sync" },
    { name: "description", content: "Welcome to SkillSync! Where skills are synced." },
  ];
}

export default function Home() {
  const location = useLocation();
  
  // Handle hash links for smooth scrolling to sections
  useEffect(() => {
    if (location.hash) {
      // Remove the # from the hash
      const id = location.hash.substring(1);
      
      // Find the element with the id
      const element = document.getElementById(id);
      
      // If the element exists, scroll to it
      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);
  
  return <Welcome />;
}
