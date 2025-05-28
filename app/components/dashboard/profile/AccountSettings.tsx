import { useState } from "react";

export function AccountSettings() {
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [notificationSettings, setNotificationSettings] = useState({
    email: {
      jobAlerts: true,
      courseRecommendations: true,
      skillUpdates: false,
      marketTrends: true,
      newsletters: false
    },
    app: {
      jobAlerts: true,
      courseRecommendations: true,
      skillUpdates: true,
      marketTrends: false,
      newsletters: false
    }
  });
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: "public",
    showEmail: false,
    showPhone: false,
    allowDataAnalysis: true
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordForm(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate passwords
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert("New passwords don't match");
      return;
    }
    
    // In a real app, you would send this to the server
    console.log("Password change submitted:", passwordForm);
    
    // Reset form and close
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
    setIsChangingPassword(false);
  };

  const handleNotificationChange = (
    channel: "email" | "app", 
    setting: keyof typeof notificationSettings.email, 
    value: boolean
  ) => {
    setNotificationSettings(prev => ({
      ...prev,
      [channel]: {
        ...prev[channel],
        [setting]: value
      }
    }));
  };

  const handlePrivacyChange = (setting: keyof typeof privacySettings, value: any) => {
    setPrivacySettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Account Settings</h2>
      
      {/* Password Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-md font-medium text-gray-800">Password</h3>
          <button 
            onClick={() => setIsChangingPassword(!isChangingPassword)}
            className="text-sm text-brand-primary-600 hover:text-brand-primary-800"
          >
            {isChangingPassword ? "Cancel" : "Change Password"}
          </button>
        </div>
        
        {isChangingPassword ? (
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={passwordForm.currentPassword}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                required
              />
            </div>
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={passwordForm.newPassword}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={passwordForm.confirmPassword}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-brand-primary-600 hover:bg-brand-primary-700 text-white rounded-lg transition-colors"
              >
                Update Password
              </button>
            </div>
          </form>
        ) : (
          <p className="text-gray-600">
            Your password was last changed 30 days ago. We recommend updating your password regularly for security.
          </p>
        )}
      </div>
      
      {/* Notification Preferences */}
      <div className="mb-8">
        <h3 className="text-md font-medium text-gray-800 mb-4">Notification Preferences</h3>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1"></div>
          <div className="text-center text-sm font-medium text-gray-700">Email</div>
          <div className="text-center text-sm font-medium text-gray-700">App</div>
        </div>
        
        {(Object.keys(notificationSettings.email) as Array<keyof typeof notificationSettings.email>).map(setting => (
          <div key={setting} className="grid grid-cols-3 gap-4 py-3 border-b border-gray-100 last:border-b-0">
            <div className="col-span-1 text-gray-700 capitalize">
              {setting.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </div>
            <div className="text-center">
              <input
                type="checkbox" 
                checked={notificationSettings.email[setting]}
                onChange={(e) => handleNotificationChange("email", setting, e.target.checked)}
                className="h-4 w-4 text-brand-primary-600 focus:ring-brand-primary-500 border-gray-300 rounded"
              />
            </div>
            <div className="text-center">
              <input
                type="checkbox"
                checked={notificationSettings.app[setting]}
                onChange={(e) => handleNotificationChange("app", setting, e.target.checked)}
                className="h-4 w-4 text-brand-primary-600 focus:ring-brand-primary-500 border-gray-300 rounded"
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Privacy Settings */}
      <div>
        <h3 className="text-md font-medium text-gray-800 mb-4">Privacy Settings</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile Visibility
            </label>
            <select
              value={privacySettings.profileVisibility}
              onChange={(e) => handlePrivacyChange("profileVisibility", e.target.value)}
              className="w-full px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
            >
              <option value="public">Public - Anyone can view your profile</option>
              <option value="connections">Connections Only - Only your connections can view your profile</option>
              <option value="private">Private - Only you can view your profile</option>
            </select>
          </div>
          
          <div className="flex items-center justify-between py-2">
            <div className="text-gray-700">Show email address on profile</div>
            <div>
              <input
                type="checkbox"
                checked={privacySettings.showEmail}
                onChange={(e) => handlePrivacyChange("showEmail", e.target.checked)}
                className="h-4 w-4 text-brand-primary-600 focus:ring-brand-primary-500 border-gray-300 rounded"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between py-2">
            <div className="text-gray-700">Show phone number on profile</div>
            <div>
              <input
                type="checkbox"
                checked={privacySettings.showPhone}
                onChange={(e) => handlePrivacyChange("showPhone", e.target.checked)}
                className="h-4 w-4 text-brand-primary-600 focus:ring-brand-primary-500 border-gray-300 rounded"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between py-2">
            <div className="text-gray-700">Allow data analysis to improve recommendations</div>
            <div>
              <input
                type="checkbox"
                checked={privacySettings.allowDataAnalysis}
                onChange={(e) => handlePrivacyChange("allowDataAnalysis", e.target.checked)}
                className="h-4 w-4 text-brand-primary-600 focus:ring-brand-primary-500 border-gray-300 rounded"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Account Actions */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-md font-medium text-gray-800 mb-4">Account Actions</h3>
        
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
            Download My Data
          </button>
          <button className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
