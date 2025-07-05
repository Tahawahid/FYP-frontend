import { useState } from "react";
import { type FormData } from "../OnboardingForm";

interface ExperienceStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  currentStep: number;
  totalSteps: number;
}

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 50 }, (_, i) => (currentYear - i).toString());

export function ExperienceStep({ formData, updateFormData, nextStep, prevStep }: ExperienceStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showAddRole, setShowAddRole] = useState(false);
  const [newRole, setNewRole] = useState({
    title: "",
    company: "",
    duration: "",
    description: ""
  });
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");
  const [isPresent, setIsPresent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    
    if (!formData.experienceLevel.trim()) {
      newErrors.experienceLevel = "Experience level is required";
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
  
  const addRole = () => {
    if (newRole.title.trim() && newRole.company.trim()) {
      // Always generate duration from current date state
      let duration = "";
      if (startMonth && startYear) {
        duration = `${startMonth} ${startYear} - `;
        if (isPresent) {
          duration += "Present";
        } else if (endMonth && endYear) {
          duration += `${endMonth} ${endYear}`;
        }
      }
      updateFormData({
        previousRoles: [
          ...formData.previousRoles,
          { ...newRole, duration }
        ]
      });
      setNewRole({ title: "", company: "", duration: "", description: "" });
      setStartMonth(""); setStartYear(""); setEndMonth(""); setEndYear(""); setIsPresent(false);
      setShowAddRole(false);
    }
  };
  
  const removeRole = (index: number) => {
    updateFormData({
      previousRoles: formData.previousRoles.filter((_, i) => i !== index)
    });
  };

  // Update duration string whenever date fields change
  const updateDuration = (sm: string, sy: string, em: string, ey: string, present: boolean) => {
    let duration = "";
    if (sm && sy) {
      duration = `${sm} ${sy} - `;
      if (present) {
        duration += "Present";
      } else if (em && ey) {
        duration += `${em} ${ey}`;
      }
    }
    setNewRole(prev => ({ ...prev, duration }));
  };

  // Handlers for date changes
  const handleStartMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStartMonth(e.target.value);
    updateDuration(e.target.value, startYear, endMonth, endYear, isPresent);
  };
  const handleStartYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStartYear(e.target.value);
    updateDuration(startMonth, e.target.value, endMonth, endYear, isPresent);
  };
  const handleEndMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEndMonth(e.target.value);
    updateDuration(startMonth, startYear, e.target.value, endYear, isPresent);
  };
  const handleEndYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEndYear(e.target.value);
    updateDuration(startMonth, startYear, endMonth, e.target.value, isPresent);
  };
  const handlePresent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPresent(e.target.checked);
    updateDuration(startMonth, startYear, endMonth, endYear, e.target.checked);
  };

  // Reset date fields when closing add role
  const handleCloseAddRole = () => {
    setShowAddRole(false);
    setStartMonth(""); setStartYear(""); setEndMonth(""); setEndYear(""); setIsPresent(false);
    setNewRole({ title: "", company: "", duration: "", description: "" });
  };

  return (
    <div className="p-8 md:p-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-brand-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-briefcase text-brand-primary-600 text-2xl"></i>
          </div>
          <h2 className="text-3xl font-bold text-brand-primary-800 mb-2">
            Your Work Experience
          </h2>
          <p className="text-gray-600">
            Tell us about your professional journey and work history.
          </p>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700 mb-2">
              Experience Level *
            </label>
            <select
              id="experienceLevel"
              value={formData.experienceLevel}
              onChange={(e) => handleInputChange('experienceLevel', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border text-gray-800 placeholder-gray-400 ${
                errors.experienceLevel ? 'border-red-300' : 'border-gray-300'
              } focus:ring-2 focus:ring-brand-primary-100 focus:border-brand-primary-100 transition-colors`}
            >
              <option value="">Select your experience level</option>
              <option value="no-experience">No Professional Experience</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5-8">5-8 years</option>
              <option value="8-12">8-12 years</option>
              <option value="12+">12+ years</option>
            </select>
            {errors.experienceLevel && (
              <p className="mt-1 text-sm text-red-600">{errors.experienceLevel}</p>
            )}
          </div>
          
          {/* Previous Roles */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Previous Roles (Optional)
              </label>
              <button
                type="button"
                onClick={() => setShowAddRole(true)}
                className="text-brand-primary-600 hover:text-brand-primary-500 text-sm font-medium flex items-center gap-1"
              >
                <i className="fas fa-plus"></i>
                Add Role
              </button>
            </div>
            
            {/* Add Role Form */}
            {showAddRole && (
              <div className="bg-gray-50 p-4 rounded-lg mb-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Job Title"
                    value={newRole.title}
                    onChange={(e) => setNewRole(prev => ({ ...prev, title: e.target.value }))}
                    className="px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-brand-primary-100 focus:border-brand-primary-100 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    value={newRole.company}
                    onChange={(e) => setNewRole(prev => ({ ...prev, company: e.target.value }))}
                    className="px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                  <div className="flex gap-2">
                    <select value={startMonth} onChange={handleStartMonth} className="px-2 py-2 rounded-lg border border-gray-300">
                      <option value="">Month</option>
                      {months.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                    <select value={startYear} onChange={handleStartYear} className="px-2 py-2 rounded-lg border border-gray-300">
                      <option value="">Year</option>
                      {years.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                  <div className="flex gap-2 items-center">
                    <select value={endMonth} onChange={handleEndMonth} className="px-2 py-2 rounded-lg border border-gray-300" disabled={isPresent}>
                      <option value="">Month</option>
                      {months.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                    <select value={endYear} onChange={handleEndYear} className="px-2 py-2 rounded-lg border border-gray-300" disabled={isPresent}>
                      <option value="">Year</option>
                      {years.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                    <label className="ml-2 flex items-center gap-1">
                      <input
                        type="checkbox"
                        checked={isPresent}
                        onChange={handlePresent}
                        className="h-4 w-4"
                      />
                      Present
                    </label>
                  </div>
                </div>
                <textarea
                  placeholder="Brief description of your role and achievements"
                  value={newRole.description}
                  onChange={(e) => setNewRole(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 transition-colors"
                />
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={addRole}
                    className="px-4 py-2 bg-brand-primary-600 hover:bg-brand-primary-700 text-white rounded-lg transition-colors"
                  >
                    Add Role
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseAddRole}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
            
            {/* Display Added Roles */}
            {formData.previousRoles.length > 0 && (
              <div className="space-y-3">
                {formData.previousRoles.map((role, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium text-brand-primary-800">{role.title}</h4>
                        <p className="text-sm text-gray-600">{role.company}</p>
                        {role.duration && (
                          <p className="text-sm text-gray-500">{role.duration}</p>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => removeRole(index)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                    {role.description && (
                      <p className="text-sm text-gray-700">{role.description}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
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
