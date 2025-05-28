import { useState } from "react";
import { Link } from "react-router";
import { OnboardingForm } from "./OnboardingForm";
import { StepIndicator } from "./StepIndicator";

const steps = [
  { id: 1, title: "Personal Info", description: "Basic information about you" },
  { id: 2, title: "Education", description: "Your educational background" },
  { id: 3, title: "Experience", description: "Work and project experience" },
  { id: 4, title: "Skills", description: "Your technical and soft skills" },
  { id: 5, title: "Goals", description: "Career aspirations and timeline" },
  { id: 6, title: "Complete", description: "Review and finish setup" }
];

export function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-primary-50 to-white flex flex-col">
      {/* Header with centered logo */}
      <header className="py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/logo02.png" alt="SkillSync" className="h-10 w-auto" />
              <span className="text-xl font-bold text-brand-primary-700">SkillSync</span>
            </Link>
            
            <Link 
              to="/" 
              className="text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-2"
            >
              <i className="fas fa-times"></i>
              <span className="hidden sm:inline">Exit Setup</span>
            </Link>
          </div>
        </div>
      </header>
      
      {/* Step Indicator - Centered */}
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <StepIndicator steps={steps} currentStep={currentStep} />
        </div>
      </div>
      
      {/* Main content */}
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <OnboardingForm 
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              totalSteps={steps.length}
            />
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} SkillSync. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
