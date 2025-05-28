import { useState } from "react";
import { Link } from "react-router";
import { type FormData } from "../OnboardingForm";

interface CompletionStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  prevStep: () => void;
  currentStep: number;
  totalSteps: number;
}

export function CompletionStep({ formData, prevStep }: CompletionStepProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call to save user data
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // TODO: Implement actual API call to save form data
      console.log("Submitting form data:", formData);
      
      setIsCompleted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (isCompleted) {
    return (
      <div className="p-8 md:p-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Animation */}
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-check text-green-600 text-3xl"></i>
          </div>
          
          <h2 className="text-3xl font-bold text-brand-primary-800 mb-4">
            Welcome to SkillSync! 🎉
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Your profile has been successfully created. Mr. James is now ready to provide you with personalized career guidance based on your background and goals.
          </p>
          
          <div className="bg-brand-primary-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-brand-primary-800 mb-3">
              What's Next?
            </h3>
            <ul className="text-left space-y-2 text-brand-primary-700">
              <li className="flex items-center">
                <i className="fas fa-check-circle text-brand-primary-600 mr-3"></i>
                Chat with Mr. James for personalized career advice
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-brand-primary-600 mr-3"></i>
                Explore skill development recommendations
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-brand-primary-600 mr-3"></i>
                Get insights on job market trends
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-brand-primary-600 mr-3"></i>
                Track your progress towards your goals
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/chat/career"
              className="px-8 py-3 bg-brand-primary-600 hover:bg-brand-primary-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <i className="fas fa-comments"></i>
              Start Chatting with Mr. James
            </Link>
            <Link
              to="/dashboard"
              className="px-8 py-3 bg-brand-secondary-600 hover:bg-brand-secondary-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <i className="fas fa-tachometer-alt"></i>
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="p-8 md:p-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-brand-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-rocket text-brand-primary-600 text-2xl"></i>
          </div>
          <h2 className="text-3xl font-bold text-brand-primary-800 mb-2">
            You're Almost Ready!
          </h2>
          <p className="text-gray-600">
            Review your information and complete your SkillSync profile setup.
          </p>
        </div>
        
        {/* Summary */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8 space-y-4">
          <h3 className="text-lg font-semibold text-brand-primary-800 mb-4">
            Profile Summary
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-gray-700">Name:</span>
              <span className="ml-2 text-gray-600">{formData.fullName}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Age:</span>
              <span className="ml-2 text-gray-600">{formData.age}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Location:</span>
              <span className="ml-2 text-gray-600">{formData.location}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Current Role:</span>
              <span className="ml-2 text-gray-600">{formData.currentRole}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Education:</span>
              <span className="ml-2 text-gray-600">{formData.education}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Field of Study:</span>
              <span className="ml-2 text-gray-600">{formData.fieldOfStudy}</span>
            </div>
          </div>
          
          {formData.technicalSkills.length > 0 && (
            <div>
              <span className="font-medium text-gray-700">Technical Skills:</span>
              <div className="mt-1 flex flex-wrap gap-1">
                {formData.technicalSkills.slice(0, 5).map((skill, index) => (
                  <span key={index} className="px-2 py-1 bg-brand-primary-100 text-brand-primary-700 rounded text-xs">
                    {skill}
                  </span>
                ))}
                {formData.technicalSkills.length > 5 && (
                  <span className="px-2 py-1 bg-gray-200 text-gray-600 rounded text-xs">
                    +{formData.technicalSkills.length - 5} more
                  </span>
                )}
              </div>
            </div>
          )}
          
          {formData.careerGoals.length > 0 && (
            <div>
              <span className="font-medium text-gray-700">Career Goals:</span>
              <div className="mt-1">
                <span className="text-gray-600 text-sm">
                  {formData.careerGoals.slice(0, 2).join(", ")}
                  {formData.careerGoals.length > 2 && ` and ${formData.careerGoals.length - 2} more`}
                </span>
              </div>
            </div>
          )}
        </div>
        
        {/* Actions */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            disabled={isSubmitting}
            className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-8 py-3 bg-brand-primary-600 hover:bg-brand-primary-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                Setting up your profile...
              </>
            ) : (
              <>
                <i className="fas fa-check"></i>
                Complete Setup
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
