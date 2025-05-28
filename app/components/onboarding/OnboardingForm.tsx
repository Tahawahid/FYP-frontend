import { useState } from "react";
import { Link } from "react-router";
import { OnboardingStep } from "./OnboardingStep";
import { StepIndicator } from "./StepIndicator";
import { PersonalInfoStep } from "./steps/PersonalInfoStep";
import { EducationStep } from "./steps/EducationStep";
import { ExperienceStep } from "./steps/ExperienceStep";
import { SkillsStep } from "./steps/SkillsStep";
import { GoalsStep } from "./steps/GoalsStep";
import { CompletionStep } from "./steps/CompletionStep";

export interface FormData {
  // Personal Info
  fullName: string;
  age: string;
  location: string;
  currentRole: string;
  
  // Education
  education: string;
  fieldOfStudy: string;
  graduationYear: string;
  certifications: string[];
  
  // Experience
  experienceLevel: string;
  previousRoles: Array<{
    title: string;
    company: string;
    duration: string;
    description: string;
  }>;
  
  // Skills
  technicalSkills: string[];
  softSkills: string[];
  skillsToImprove: string[];
  
  // Goals
  careerGoals: string[];
  timeframe: string;
  preferredIndustries: string[];
  workPreference: string;
}

const initialFormData: FormData = {
  fullName: "",
  age: "",
  location: "",
  currentRole: "",
  education: "",
  fieldOfStudy: "",
  graduationYear: "",
  certifications: [],
  experienceLevel: "",
  previousRoles: [],
  technicalSkills: [],
  softSkills: [],
  skillsToImprove: [],
  careerGoals: [],
  timeframe: "",
  preferredIndustries: [],
  workPreference: ""
};

export function OnboardingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const totalSteps = 6;
  
  const steps = [
    { id: 1, title: "Personal Info", description: "Tell us about yourself" },
    { id: 2, title: "Education", description: "Your educational background" },
    { id: 3, title: "Experience", description: "Your work experience" },
    { id: 4, title: "Skills", description: "Your current skills" },
    { id: 5, title: "Goals", description: "Your career aspirations" },
    { id: 6, title: "Complete", description: "All set!" }
  ];
  
  const updateFormData = (stepData: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...stepData }));
  };
  
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setIsAnimating(false);
      }, 300);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(prev => prev - 1);
        setIsAnimating(false);
      }, 300);
    }
  };
  
  const renderStep = () => {
    const stepProps = {
      formData,
      updateFormData,
      nextStep,
      prevStep,
      currentStep,
      totalSteps
    };
    
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep {...stepProps} />;
      case 2:
        return <EducationStep {...stepProps} />;
      case 3:
        return <ExperienceStep {...stepProps} />;
      case 4:
        return <SkillsStep {...stepProps} />;
      case 5:
        return <GoalsStep {...stepProps} />;
      case 6:
        return <CompletionStep {...stepProps} />;
      default:
        return <PersonalInfoStep {...stepProps} />;
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-primary-50 via-white to-brand-secondary-50 flex flex-col">
      {/* Header */}
      <header className="py-6 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="SkillSync" className="h-10 w-auto" />
            <span className="text-xl font-bold text-brand-primary-700">SkillSync</span>
          </Link>
          
          <div className="text-sm text-gray-600">
            Step {currentStep} of {totalSteps}
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-8 px-4">
        <div className="w-full max-w-4xl">
          {/* Step Indicator */}
          <div className="mb-8">
            <StepIndicator 
              steps={steps} 
              currentStep={currentStep} 
            />
          </div>
          
          {/* Form Container */}
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 overflow-hidden">
            <OnboardingStep isAnimating={isAnimating}>
              {renderStep()}
            </OnboardingStep>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-6 px-4 text-center text-gray-500 text-sm">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} SkillSync. Your data is secure and will only be used to personalize your experience.</p>
        </div>
      </footer>
    </div>
  );
}
