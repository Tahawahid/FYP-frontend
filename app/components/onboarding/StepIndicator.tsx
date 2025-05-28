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
    <div className="flex items-center justify-between max-w-3xl mx-auto">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          {/* Step Circle */}
          <div className="flex flex-col items-center">
            <div 
              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                step.id < currentStep 
                  ? 'bg-brand-primary-600 text-white' 
                  : step.id === currentStep
                  ? 'bg-brand-primary-600 text-white ring-4 ring-brand-primary-200'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {step.id < currentStep ? (
                <i className="fas fa-check"></i>
              ) : (
                step.id
              )}
            </div>
            
            {/* Step Info */}
            <div className="mt-2 text-center">
              <div className={`text-sm font-medium ${
                step.id <= currentStep ? 'text-brand-primary-700' : 'text-gray-500'
              }`}>
                {step.title}
              </div>
              <div className="text-xs text-gray-500 hidden sm:block">
                {step.description}
              </div>
            </div>
          </div>
          
          {/* Connector Line */}
          {index < steps.length - 1 && (
            <div 
              className={`flex-1 h-1 mx-4 rounded transition-all duration-300 ${
                step.id < currentStep ? 'bg-brand-primary-600' : 'bg-gray-200'
              }`}
              style={{ minWidth: '40px' }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
