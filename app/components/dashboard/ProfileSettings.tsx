import { PersonalInfo } from "./profile/PersonalInfo";
import { SkillsEditor } from "./profile/SkillsEditor";
import { ExperienceEditor } from "./profile/ExperienceEditor";
import { EducationEditor } from "./profile/EducationEditor";
import { AccountSettings } from "./profile/AccountSettings";

export function ProfileSettings() {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
        <p className="text-gray-600">Manage your profile information and account settings.</p>
      </div>
      
      {/* Profile Sections */}
      <div className="space-y-6">
        <PersonalInfo />
        <SkillsEditor />
        <ExperienceEditor />
        <EducationEditor />
        <AccountSettings />
      </div>
    </div>
  );
}
