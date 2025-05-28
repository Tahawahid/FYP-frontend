import { useState } from "react";

interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export function ExperienceEditor() {
  const [isEditing, setIsEditing] = useState(false);
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: 1,
      company: "TechCorp",
      position: "Senior Data Scientist",
      location: "San Francisco, CA",
      startDate: "2020-03",
      endDate: "",
      current: true,
      description: "Leading a team of data scientists to develop machine learning models for predictive analytics. Implemented deep learning solutions that increased customer retention by 25%."
    },
    {
      id: 2,
      company: "DataSphere",
      position: "Data Scientist",
      location: "New York, NY",
      startDate: "2018-06",
      endDate: "2020-02",
      current: false,
      description: "Developed and deployed machine learning models for customer segmentation and recommendation systems. Collaborated with cross-functional teams to integrate data-driven solutions."
    },
    {
      id: 3,
      company: "AI Innovations",
      position: "Machine Learning Engineer",
      location: "Remote",
      startDate: "2016-09",
      endDate: "2018-05",
      current: false,
      description: "Built and optimized machine learning pipelines for natural language processing applications. Improved model accuracy by 30% through feature engineering and hyperparameter tuning."
    }
  ]);
  const [newExperience, setNewExperience] = useState<Omit<Experience, "id">>({
    company: "",
    position: "",
    location: "",
    startDate: "",
    endDate: "",
    current: false,
    description: ""
  });

  const handleExperienceChange = (id: number, field: keyof Experience, value: string | boolean) => {
    setExperiences(experiences.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const handleAddExperience = () => {
    if (newExperience.company.trim() && newExperience.position.trim()) {
      setExperiences([...experiences, { id: Date.now(), ...newExperience }]);
      setNewExperience({
        company: "",
        position: "",
        location: "",
        startDate: "",
        endDate: "",
        current: false,
        description: ""
      });
    }
  };

  const handleRemoveExperience = (id: number) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would save the data to the server here
    setIsEditing(false);
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Work Experience</h2>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="text-sm text-brand-primary-600 hover:text-brand-primary-800"
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="space-y-8 mb-8">
            {experiences.map(exp => (
              <div key={exp.id} className="p-4 border border-gray-200 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) => handleExperienceChange(exp.id, "company", e.target.value)}
                      className="w-full px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Position
                    </label>
                    <input
                      type="text"
                      value={exp.position}
                      onChange={(e) => handleExperienceChange(exp.id, "position", e.target.value)}
                      className="w-full px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      value={exp.location}
                      onChange={(e) => handleExperienceChange(exp.id, "location", e.target.value)}
                      className="w-full px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Start Date
                      </label>
                      <input
                        type="month"
                        value={exp.startDate}
                        onChange={(e) => handleExperienceChange(exp.id, "startDate", e.target.value)}
                        className="w-full px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        End Date
                      </label>
                      <div className="flex items-center">
                        <input
                          type="month"
                          value={exp.endDate}
                          onChange={(e) => handleExperienceChange(exp.id, "endDate", e.target.value)}
                          className="w-full px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                          disabled={exp.current}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id={`current-${exp.id}`}
                      checked={exp.current}
                      onChange={(e) => handleExperienceChange(exp.id, "current", e.target.checked)}
                      className="h-4 w-4 text-brand-primary-600 focus:ring-brand-primary-500 border-gray-300 rounded"
                    />
                    <label htmlFor={`current-${exp.id}`} className="ml-2 block text-sm text-gray-700">
                      I currently work here
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={exp.description}
                    onChange={(e) => handleExperienceChange(exp.id, "description", e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => handleRemoveExperience(exp.id)}
                    className="text-red-500 hover:text-red-700 flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border border-dashed border-gray-300 rounded-lg mb-6">
            <h3 className="text-md font-medium text-gray-900 mb-4">Add New Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  value={newExperience.company}
                  onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Position
                </label>
                <input
                  type="text"
                  value={newExperience.position}
                  onChange={(e) => setNewExperience({ ...newExperience, position: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                  placeholder="Job title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={newExperience.location}
                  onChange={(e) => setNewExperience({ ...newExperience, location: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                  placeholder="City, State"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                  </label>
                  <input
                    type="month"
                    value={newExperience.startDate}
                    onChange={(e) => setNewExperience({ ...newExperience, startDate: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <input
                    type="month"
                    value={newExperience.endDate}
                    onChange={(e) => setNewExperience({ ...newExperience, endDate: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                    disabled={newExperience.current}
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="current-new"
                  checked={newExperience.current}
                  onChange={(e) => setNewExperience({ ...newExperience, current: e.target.checked })}
                  className="h-4 w-4 text-brand-primary-600 focus:ring-brand-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="current-new" className="ml-2 block text-sm text-gray-700">
                  I currently work here
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={newExperience.description}
                onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                placeholder="Describe your responsibilities and achievements"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleAddExperience}
                className="px-4 py-2 bg-brand-primary-50 text-brand-primary-700 hover:bg-brand-primary-100 rounded-lg transition-colors flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Experience
              </button>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-brand-primary-600 hover:bg-brand-primary-700 text-white rounded-lg transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-8">
          {experiences.map(exp => (
            <div key={exp.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{exp.position}</h3>
                  <p className="text-gray-600">{exp.company} • {exp.location}</p>
                  <p className="text-sm text-gray-500">
                    {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  {exp.current && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Current
                    </span>
                  )}
                </div>
              </div>
              <p className="mt-2 text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
