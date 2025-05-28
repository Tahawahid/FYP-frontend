import { useState } from "react";
import { type FormData } from "../OnboardingForm";

interface GoalsStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  currentStep: number;
  totalSteps: number;
}

const careerGoalOptions = [
  "Get promoted in current role",
  "Switch to a new career field",
  "Start my own business",
  "Become a team leader/manager",
  "Increase my salary",
  "Work remotely",
  "Learn new technologies",
  "Get certified in my field",
  "Find a better work-life balance",
  "Move to a bigger company",
  "Work for a startup",
  "Become a consultant/freelancer"
];

const industryOptions = [
  "Technology", "Healthcare", "Finance", "Education", "Marketing",
  "Sales", "Human Resources", "Manufacturing", "Retail", "Consulting",
  "Non-profit", "Government", "Media", "Real Estate", "Transportation",
  "Energy", "Agriculture", "Entertainment", "Legal", "Other"
];

export function GoalsStep({ formData, updateFormData, nextStep, prevStep }: GoalsStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    
    if (formData.careerGoals.length === 0) {
      newErrors.careerGoals = "Please select at least one career goal";
    }
    
    if (!formData.timeframe.trim()) {
      newErrors.timeframe = "Please select a timeframe";
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      nextStep();
    }
  };
  
  const toggleCareerGoal = (goal: string) => {
    const currentGoals = formData.careerGoals;
    if (currentGoals.includes(goal)) {
      updateFormData({
        careerGoals: currentGoals.filter(g => g !== goal)
      });
    } else {
      updateFormData({
        careerGoals: [...currentGoals, goal]
      });
    }
    
    if (errors.careerGoals) {
      setErrors(prev => ({ ...prev, careerGoals: "" }));
    }
  };
  
  const toggleIndustry = (industry: string) => {
    const currentIndustries = formData.preferredIndustries;
    if (currentIndustries.includes(industry)) {
      updateFormData({
        preferredIndustries: currentIndustries.filter(i => i !== industry)
      });
    } else {
      updateFormData({
        preferredIndustries: [...currentIndustries, industry]
      });
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
            <i className="fas fa-bullseye text-brand-primary-600 text-2xl"></i>
          </div>
          <h2 className="text-3xl font-bold text-brand-primary-800 mb-2">
            Your Career Goals
          </h2>
          <p className="text-gray-600">
            Help us understand your aspirations so we can provide personalized guidance.
          </p>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Career Goals */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              What are your career goals? (Select all that apply) *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {careerGoalOptions.map((goal) => (
                <button
                  key={goal}
                  type="button"
                  onClick={() => toggleCareerGoal(goal)}
                  className={`p-3 text-left rounded-lg border-2  transition-all ${
                    formData.careerGoals.includes(goal)
                      ? 'border-brand-primary-500 bg-brand-primary-50 text-brand-primary-700'
                      : 'border-gray-200 hover:border-brand-primary-300 text-gray-700'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded border-2 mr-3 flex items-center justify-center ${
                      formData.careerGoals.includes(goal)
                        ? 'border-brand-primary-500 bg-brand-primary-500'
                        : 'border-gray-300'
                    }`}>
                      {formData.careerGoals.includes(goal) && (
                        <i className="fas fa-check text-white text-xs"></i>
                      )}
                    </div>
                    <span className="text-sm">{goal}</span>
                  </div>
                </button>
              ))}
            </div>
            {errors.careerGoals && (
              <p className="mt-2 text-sm text-red-600">{errors.careerGoals}</p>
            )}
          </div>
          
          {/* Timeframe */}
          <div>
            <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-2">
              What's your timeframe for achieving these goals? *
            </label>
            <select
              id="timeframe"
              value={formData.timeframe}
              onChange={(e) => handleInputChange('timeframe', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg text-gray-800 placeholder-gray-400 border ${
                errors.timeframe ? 'border-red-300' : 'border-gray-300'
              } focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 transition-colors`}
            >
              <option value="">Select timeframe</option>
              <option value="3-months">Within 3 months</option>
              <option value="6-months">Within 6 months</option>
              <option value="1-year">Within 1 year</option>
              <option value="2-years">Within 2 years</option>
              <option value="3-5-years">3-5 years</option>
              <option value="5+-years">5+ years</option>
            </select>
            {errors.timeframe && (
              <p className="mt-1 text-sm text-red-600">{errors.timeframe}</p>
            )}
          </div>
          
          {/* Preferred Industries */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Preferred Industries (Optional)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {industryOptions.map((industry) => (
                <button
                  key={industry}
                  type="button"
                  onClick={() => toggleIndustry(industry)}
                  className={`p-2 text-sm rounded-lg border transition-all ${
                    formData.preferredIndustries.includes(industry)
                      ? 'border-brand-secondary-500 bg-brand-secondary-50 text-brand-secondary-700'
                      : 'border-gray-200 hover:border-brand-secondary-300 text-gray-700'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
          
          {/* Work Preference */}
          <div>
            <label htmlFor="workPreference" className="block text-sm font-medium text-gray-700 mb-2">
              Work Preference (Optional)
            </label>
            <select
              id="workPreference"
              value={formData.workPreference}
              onChange={(e) => handleInputChange('workPreference', e.target.value)}
              className="w-full px-4 py-3 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 transition-colors"
            >
              <option value="">Select work preference</option>
              <option value="remote">Remote work</option>
              <option value="hybrid">Hybrid (remote + office)</option>
              <option value="office">Office-based</option>
              <option value="flexible">Flexible arrangement</option>
              <option value="no-preference">No preference</option>
            </select>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between pt-6">
            <button
              type="button"
              onClick={prevStep}
              className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition-colors flex items-center gap-2"
            >
              <i className="fas fa-arrow-left"></i>
              Back
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-brand-primary-600 hover:bg-brand-primary-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
            >
              Complete Setup
              <i className="fas fa-check"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
