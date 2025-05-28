import { useState } from "react";
import { type FormData } from "../OnboardingForm";

interface PersonalInfoStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  nextStep: () => void;
  currentStep: number;
  totalSteps: number;
}

export function PersonalInfoStep({ formData, updateFormData, nextStep }: PersonalInfoStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    
    if (!formData.age.trim()) {
      newErrors.age = "Age is required";
    }
    
    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }
    
    if (!formData.currentRole.trim()) {
      newErrors.currentRole = "Current role is required";
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      nextStep();
    }
  };
  
  const handleInputChange = (field: keyof FormData, value: string) => {
    updateFormData({ [field]: value });
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };
  
  return (
    <div className="p-8 md:p-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-brand-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-user text-brand-primary-600 text-2xl"></i>
          </div>
          <h2 className="text-3xl font-bold text-brand-primary-800 mb-2">
            Let's get to know you!
          </h2>
          <p className="text-gray-600">
            Tell us about yourself so Mr. James can provide personalized career guidance.
          </p>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg text-gray-800 placeholder-gray-400 border ${
                  errors.fullName ? 'border-red-300' : 'border-gray-300'
                } focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 transition-colors`}
                placeholder="John Doe"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                Age *
              </label>
              <select
                id="age"
                value={formData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border text-gray-800 placeholder-gray-400 ${
                  errors.age ? 'border-red-300' : 'border-gray-300'
                } focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 transition-colors`}
              >
                <option value="">Select your age range</option>
                <option value="18-22">18-22</option>
                <option value="23-27">23-27</option>
                <option value="28-32">28-32</option>
                <option value="33-37">33-37</option>
                <option value="38-42">38-42</option>
                <option value="43-47">43-47</option>
                <option value="48-52">48-52</option>
                <option value="53+">53+</option>
              </select>
              {errors.age && (
                <p className="mt-1 text-sm text-red-600">{errors.age}</p>
              )}
            </div>
          </div>
          
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Location *
            </label>
            <input
              id="location"
              type="text"
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border text-gray-800 placeholder-gray-400 ${
                errors.location ? 'border-red-300' : 'border-gray-300'
              } focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 transition-colors`}
              placeholder="City, Country"
            />
            {errors.location && (
              <p className="mt-1 text-sm text-red-600">{errors.location}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="currentRole" className="block text-sm font-medium text-gray-700 mb-2">
              Current Role/Status *
            </label>
            <select
              id="currentRole"
              value={formData.currentRole}
              onChange={(e) => handleInputChange('currentRole', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border text-gray-800 placeholder-gray-400 ${
                errors.currentRole ? 'border-red-300' : 'border-gray-300'
              } focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 transition-colors`}
            >
              <option value="">Select your current status</option>
              <option value="student">Student</option>
              <option value="recent-graduate">Recent Graduate</option>
              <option value="entry-level">Entry Level Professional</option>
              <option value="mid-level">Mid-Level Professional</option>
              <option value="senior-level">Senior Level Professional</option>
              <option value="manager">Manager</option>
              <option value="director">Director</option>
              <option value="executive">Executive</option>
              <option value="freelancer">Freelancer</option>
              <option value="entrepreneur">Entrepreneur</option>
              <option value="unemployed">Currently Unemployed</option>
              <option value="career-change">Looking for Career Change</option>
            </select>
            {errors.currentRole && (
              <p className="mt-1 text-sm text-red-600">{errors.currentRole}</p>
            )}
          </div>
          
          {/* Navigation */}
          <div className="flex justify-end pt-6">
            <button
              type="submit"
              className="px-8 py-3 bg-brand-primary-600 hover:bg-brand-primary-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
            >
              Continue
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
