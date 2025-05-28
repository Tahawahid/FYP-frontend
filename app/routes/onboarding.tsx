import { OnboardingForm } from "../components/onboarding/OnboardingForm";

export function meta() {
  return [
    { title: "Complete Your Profile - SkillSync" },
    { name: "description", content: "Help us understand your background so Mr. James can provide personalized career guidance." },
  ];
}

export default function Onboarding() {
  return <OnboardingForm />;
}
