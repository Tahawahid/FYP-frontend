import { useState } from "react";
import { type FormData } from "../OnboardingForm";

interface EducationStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  currentStep: number;
  totalSteps: number;
}

export function EducationStep({ formData, updateFormData, nextStep, prevStep }: EducationStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [newCertification, setNewCertification] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    
    if (!formData.education.trim()) {
      newErrors.education = "Education level is required";
    }
    
    if (!formData.fieldOfStudy.trim()) {
      newErrors.fieldOfStudy = "Field of study is required";
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
  
  const addCertification = () => {
    if (newCertification.trim()) {
      updateFormData({
        certifications: [...formData.certifications, newCertification.trim()]
      });
      setNewCertification("");
    }
  };
  
  const removeCertification = (index: number) => {
    updateFormData({
      certifications: formData.certifications.filter((_, i) => i !== index)
    });
  };
  
  return (
    <div className="p-8 md:p-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-brand-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-graduation-cap text-brand-primary-600 text-2xl"></i>
          </div>
          <h2 className="text-3xl font-bold text-brand-primary-800 mb-2">
            Your Educational Background
          </h2>
          <p className="text-gray-600">
            Help us understand your educational foundation and qualifications.
          </p>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
              Highest Education Level *
            </label>
            <select
              id="education"
              value={formData.education}
              onChange={(e) => handleInputChange('education', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border text-gray-800 placeholder-gray-400 ${
                errors.education ? 'border-red-300' : 'border-gray-300'
              } focus:ring-2 focus:ring-brand-primary-100 focus:border-brand-primary-100 transition-colors`}
            >
              <option value="">Select your education level</option>
              <option value="high-school">High School</option>
              <option value="associate">Associate Degree</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
              <option value="phd">PhD/Doctorate</option>
              <option value="bootcamp">Coding Bootcamp</option>
              <option value="certification">Professional Certification</option>
              <option value="self-taught">Self-Taught</option>
              <option value="other">Other</option>
            </select>
            {errors.education && (
              <p className="mt-1 text-sm text-red-600">{errors.education}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="fieldOfStudy" className="block text-sm font-medium text-gray-700 mb-2">
              Field of Study *
            </label>
            <input
              id="fieldOfStudy"
              type="text"
              value={formData.fieldOfStudy}
              onChange={(e) => handleInputChange('fieldOfStudy', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border text-gray-800 placeholder-gray-400 ${
                errors.fieldOfStudy ? 'border-red-300' : 'border-gray-300'
              } focus:ring-2 focus:ring-brand-primary-100 focus:border-brand-primary-100 transition-colors`}
              placeholder="e.g., Computer Science, Business Administration, Marketing"
            />
            {errors.fieldOfStudy && (
              <p className="mt-1 text-sm text-red-600">{errors.fieldOfStudy}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700 mb-2">
              Graduation Year (Optional)
            </label>
            <select
              id="graduationYear"
              value={formData.graduationYear}
              onChange={(e) => handleInputChange('graduationYear', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border text-gray-800 placeholder-gray-400 border-gray-300 focus:ring-2 focus:ring-brand-primary-100 focus:border-brand-primary-100 transition-colors"
            >
              <option value="">Select graduation year</option>
              {Array.from({ length: 30 }, (_, i) => {
                const year = new Date().getFullYear() - i;
                return (
                  <option key={year} value={year.toString()}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>
          
          {/* Certifications */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Certifications (Optional)
            </label>
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newCertification}
                  onChange={(e) => setNewCertification(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-brand-primary-100 focus:border-brand-primary-100 transition-colors"
                  placeholder="e.g., AWS Certified Solutions Architect"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addCertification())}
                />
                <button
                  type="button"
                  onClick={addCertification}
                  className="px-4 py-3 bg-brand-primary-100 hover:bg-brand-primary-200 text-brand-primary-700 rounded-lg transition-colors"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              
              {formData.certifications.length > 0 && (
                <div className="space-y-2">
                  {formData.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center justify-between bg-brand-primary-50 px-4 py-2 rounded-lg">
                      <span className="text-brand-primary-800">{cert}</span>
                      <button
                        type="button"
                        onClick={() => removeCertification(index)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
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
              Continue
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
