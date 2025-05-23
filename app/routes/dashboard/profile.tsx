import { ProfileSettings } from "../../components/dashboard/ProfileSettings";

export function meta() {
  return [
    { title: "Profile Settings - SkillSync" },
    { name: "description", content: "Manage your SkillSync profile and account settings." },
  ];
}

export default function ProfileSettingsPage() {
  return <ProfileSettings />;
}
