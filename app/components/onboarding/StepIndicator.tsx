interface Step {
  id: number;
  title: string;
  description: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="relative flex items-start justify-between">
        {/* Connecting line background */}
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200" style={{ zIndex: 1 }}></div>
        
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center flex-1 relative" style={{ zIndex: 2 }}>
            {/* Step Circle */}
            <div className="flex flex-col items-center mb-4">
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 bg-white border-2 ${
                  step.id < currentStep 
                    ? 'border-brand-primary-600 bg-brand-primary-600 text-brand-primary-600' 
                    : step.id === currentStep
                    ? 'border-brand-primary-600 bg-brand-primary-600 text-brand-primary-600 ring-4 ring-brand-primary-200'
                    : 'border-gray-300 bg-white text-gray-500'
                }`}
              >
                {step.id < currentStep ? (
                  <i className="fas fa-check"></i>
                ) : (
                  step.id
                )}
              </div>
            </div>
            
            {/* Step Info - Fixed height container for alignment */}
            <div className="text-center w-full px-2">
              <div className={`text-sm font-medium mb-1 ${
                step.id <= currentStep ? 'text-brand-primary-700' : 'text-gray-500'
              }`}>
                {step.title}
              </div>
              {/* Fixed height container for description to prevent misalignment */}
              <div className="h-10 flex items-center justify-center">
                <div className="text-xs text-gray-500 hidden sm:block leading-tight text-center">
                  {step.description}
                </div>
              </div>
            </div>
            
            {/* Progress line for completed steps */}
            {index < steps.length - 1 && (
              <div 
                className="absolute top-6 left-1/2 h-0.5 bg-brand-primary-600 transition-all duration-500"
                style={{ 
                  width: step.id < currentStep ? `calc(100% / ${steps.length - 1} * 100%)` : '0%',
                  zIndex: 1
                }}
              />
            )}
          </div>
        ))}
        
        {/* Animated progress line */}
        <div 
          className="absolute top-6 left-0 h-0.5 bg-brand-primary-600 transition-all duration-500"
          style={{ 
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            zIndex: 1
          }}
        />
      </div>
    </div>
  );
}
