import { useState } from "react";
import { type FormData } from "../OnboardingForm";

interface SkillsStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  currentStep: number;
  totalSteps: number;
}

const popularTechnicalSkills = [
  "JavaScript", "Python", "Java", "React", "Node.js", "SQL", "HTML/CSS", "Git",
  "AWS", "Docker", "TypeScript", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL",
  "Machine Learning", "Data Analysis", "Excel", "Tableau", "Power BI", "Photoshop",
  "Figma", "Adobe Creative Suite", "WordPress", "Salesforce"
];

const popularSoftSkills = [
  "Communication", "Leadership", "Problem Solving", "Teamwork", "Time Management",
  "Critical Thinking", "Adaptability", "Creativity", "Project Management", "Public Speaking",
  "Negotiation", "Customer Service", "Analytical Thinking", "Attention to Detail",
  "Conflict Resolution", "Emotional Intelligence", "Decision Making", "Mentoring"
];

export function SkillsStep({ formData, updateFormData, nextStep, prevStep }: SkillsStepProps) {
  const [newTechnicalSkill, setNewTechnicalSkill] = useState("");
  const [newSoftSkill, setNewSoftSkill] = useState("");
  const [newSkillToImprove, setNewSkillToImprove] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };
  
  const addSkill = (type: 'technical' | 'soft' | 'improve', skill: string) => {
    if (!skill.trim()) return;
    
    const skillToAdd = skill.trim();
    
    switch (type) {
      case 'technical':
        if (!formData.technicalSkills.includes(skillToAdd)) {
          updateFormData({
            technicalSkills: [...formData.technicalSkills, skillToAdd]
          });
        }
        setNewTechnicalSkill("");
        break;
      case 'soft':
        if (!formData.softSkills.includes(skillToAdd)) {
          updateFormData({
            softSkills: [...formData.softSkills, skillToAdd]
          });
        }
        setNewSoftSkill("");
        break;
      case 'improve':
        if (!formData.skillsToImprove.includes(skillToAdd)) {
          updateFormData({
            skillsToImprove: [...formData.skillsToImprove, skillToAdd]
          });
        }
        setNewSkillToImprove("");
        break;
    }
  };
  
  const removeSkill = (type: 'technical' | 'soft' | 'improve', index: number) => {
    switch (type) {
      case 'technical':
        updateFormData({
          technicalSkills: formData.technicalSkills.filter((_, i) => i !== index)
        });
        break;
      case 'soft':
        updateFormData({
          softSkills: formData.softSkills.filter((_, i) => i !== index)
        });
        break;
      case 'improve':
        updateFormData({
          skillsToImprove: formData.skillsToImprove.filter((_, i) => i !== index)
        });
        break;
    }
  };
  
  const addPopularSkill = (type: 'technical' | 'soft', skill: string) => {
    addSkill(type, skill);
  };
  
  return (
    <div className="p-8 md:p-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-brand-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-cogs text-brand-primary-600 text-2xl"></i>
          </div>
          <h2 className="text-3xl font-bold text-brand-primary-800 mb-2">
            Your Skills & Expertise
          </h2>
          <p className="text-gray-600">
            Help us understand your current skills and areas you'd like to develop.
          </p>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Technical Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Technical Skills
            </label>
            
            {/* Add custom skill */}
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newTechnicalSkill}
                onChange={(e) => setNewTechnicalSkill(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 transition-colors"
                placeholder="Add a technical skill"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill('technical', newTechnicalSkill))}
              />
              <button
                type="button"
                onClick={() => addSkill('technical', newTechnicalSkill)}
                className="px-4 py-2 bg-brand-primary-100 hover:bg-brand-primary-200 text-brand-primary-700 rounded-lg transition-colors"
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
            
            {/* Popular skills */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Popular technical skills:</p>
              <div className="flex flex-wrap gap-2">
                {popularTechnicalSkills.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => addPopularSkill('technical', skill)}
                    disabled={formData.technicalSkills.includes(skill)}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      formData.technicalSkills.includes(skill)
                        ? 'bg-brand-primary-100 text-brand-primary-700 cursor-not-allowed'
                        : 'bg-gray-100 hover:bg-brand-primary-100 text-gray-700 hover:text-brand-primary-700'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Selected skills */}
            {formData.technicalSkills.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700">Your technical skills:</p>
                <div className="flex flex-wrap gap-2">
                  {formData.technicalSkills.map((skill, index) => (
                    <div key={index} className="flex items-center bg-brand-primary-600 text-white px-3 py-1 rounded-full text-sm">
                      <span>{skill}</span>
                      <button
                        type="button"
                        onClick={() => removeSkill('technical', index)}
                        className="ml-2 text-white hover:text-red-200 transition-colors"
                      >
                        <i className="fas fa-times text-xs"></i>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Soft Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Soft Skills
            </label>
            
            {/* Add custom skill */}
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newSoftSkill}
                onChange={(e) => setNewSoftSkill(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg border text-gray-800 placeholder-gray-400 border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 transition-colors"
                placeholder="Add a soft skill"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill('soft', newSoftSkill))}
              />
              <button
                type="button"
                onClick={() => addSkill('soft', newSoftSkill)}
                className="px-4 py-2 bg-brand-secondary-100 hover:bg-brand-secondary-200 text-brand-secondary-700 rounded-lg transition-colors"
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
            
            {/* Popular skills */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Popular soft skills:</p>
              <div className="flex flex-wrap gap-2">
                {popularSoftSkills.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => addPopularSkill('soft', skill)}
                    disabled={formData.softSkills.includes(skill)}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      formData.softSkills.includes(skill)
                        ? 'bg-brand-secondary-100 text-brand-secondary-700 cursor-not-allowed'
                        : 'bg-gray-100 hover:bg-brand-secondary-100 text-gray-700 hover:text-brand-secondary-700'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Selected skills */}
            {formData.softSkills.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700">Your soft skills:</p>
                <div className="flex flex-wrap gap-2">
                  {formData.softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center bg-brand-secondary-600 text-white px-3 py-1 rounded-full text-sm">
                      <span>{skill}</span>
                      <button
                        type="button"
                        onClick={() => removeSkill('soft', index)}
                        className="ml-2 text-white hover:text-red-200 transition-colors"
                      >
                        <i className="fas fa-times text-xs"></i>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Skills to Improve */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Skills You'd Like to Improve or Learn
            </label>
            
            {/* Add custom skill */}
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newSkillToImprove}
                onChange={(e) => setNewSkillToImprove(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 transition-colors"
                placeholder="Add a skill you want to develop"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill('improve', newSkillToImprove))}
              />
              <button
                type="button"
                onClick={() => addSkill('improve', newSkillToImprove)}
                className="px-4 py-2 bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-lg transition-colors"
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
            
            {/* Selected skills to improve */}
            {formData.skillsToImprove.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700">Skills to develop:</p>
                <div className="flex flex-wrap gap-2">
                  {formData.skillsToImprove.map((skill, index) => (
                    <div key={index} className="flex items-center bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                      <span>{skill}</span>
                      <button
                        type="button"
                        onClick={() => removeSkill('improve', index)}
                        className="ml-2 text-white hover:text-red-200 transition-colors"
                      >
                        <i className="fas fa-times text-xs"></i>
                      </button>
                    </div>
                  ))}
                </div>
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
