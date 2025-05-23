import { useState } from "react";

interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export function EducationEditor() {
  const [isEditing, setIsEditing] = useState(false);
  const [educations, setEducations] = useState<Education[]>([
    {
      id: 1,
      institution: "Stanford University",
      degree: "Master of Science",
      field: "Computer Science, Artificial Intelligence",
      startDate: "2014-09",
      endDate: "2016-06",
      current: false,
      description: "Focused on machine learning and artificial intelligence. Completed thesis on deep learning applications for natural language processing."
    },
    {
      id: 2,
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: "2010-09",
      endDate: "2014-05",
      current: false,
      description: "Graduated with honors. Participated in research projects related to data mining and machine learning."
    }
  ]);
  const [newEducation, setNewEducation] = useState<Omit<Education, "id">>({
    institution: "",
    degree: "",
    field: "",
    startDate: "",
    endDate: "",
    current: false,
    description: ""
  });

  const handleEducationChange = (id: number, field: keyof Education, value: string | boolean) => {
    setEducations(educations.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  const handleAddEducation = () => {
    if (newEducation.institution.trim() && newEducation.degree.trim()) {
      setEducations([...educations, { id: Date.now(), ...newEducation }]);
      setNewEducation({
        institution: "",
        degree: "",
        field: "",
        startDate: "",
        endDate: "",
        current: false,
        description: ""
      });
    }
  };

  const handleRemoveEducation = (id: number) => {
    setEducations(educations.filter(edu => edu.id !== id));
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
        <h2 className="text-lg font-semibold text-gray-900">Education</h2>
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
            {educations.map(edu => (
              <div key={edu.id} className="p-4 border border-gray-200 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Institution
                    </label>
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) => handleEducationChange(edu.id, "institution", e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Degree
                    </label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(edu.id, "degree", e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Field of Study
                    </label>
                    <input
                      type="text"
                      value={edu.field}
                      onChange={(e) => handleEducationChange(edu.id, "field", e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Start Date
                      </label>
                      <input
                        type="month"
                        value={edu.startDate}
                        onChange={(e) => handleEducationChange(edu.id, "startDate", e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        End Date
                      </label>
                      <input
                        type="month"
                        value={edu.endDate}
                        onChange={(e) => handleEducationChange(edu.id, "endDate", e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                        disabled={edu.current}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id={`current-edu-${edu.id}`}
                      checked={edu.current}
                      onChange={(e) => handleEducationChange(edu.id, "current", e.target.checked)}
                      className="h-4 w-4 text-brand-primary-600 focus:ring-brand-primary-500 border-gray-300 rounded"
                    />
                    <label htmlFor={`current-edu-${edu.id}`} className="ml-2 block text-sm text-gray-700">
                      I am currently studying here
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={edu.description}
                    onChange={(e) => handleEducationChange(edu.id, "description", e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => handleRemoveEducation(edu.id)}
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
            <h3 className="text-md font-medium text-gray-900 mb-4">Add New Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Institution
                </label>
                <input
                  type="text"
                  value={newEducation.institution}
                  onChange={(e) => setNewEducation({ ...newEducation, institution: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                  placeholder="University or school name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Degree
                </label>
                <input
                  type="text"
                  value={newEducation.degree}
                  onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                  placeholder="e.g., Bachelor of Science"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Field of Study
                </label>
                <input
                  type="text"
                  value={newEducation.field}
                  onChange={(e) => setNewEducation({ ...newEducation, field: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                  placeholder="e.g., Computer Science"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                  </label>
                  <input
                    type="month"
                    value={newEducation.startDate}
                    onChange={(e) => setNewEducation({ ...newEducation, startDate: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <input
                    type="month"
                    value={newEducation.endDate}
                    onChange={(e) => setNewEducation({ ...newEducation, endDate: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                    disabled={newEducation.current}
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="current-edu-new"
                  checked={newEducation.current}
                  onChange={(e) => setNewEducation({ ...newEducation, current: e.target.checked })}
                  className="h-4 w-4 text-brand-primary-600 focus:ring-brand-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="current-edu-new" className="ml-2 block text-sm text-gray-700">
                  I am currently studying here
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={newEducation.description}
                onChange={(e) => setNewEducation({ ...newEducation, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                placeholder="Describe your studies, achievements, or activities"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleAddEducation}
                className="px-4 py-2 bg-brand-primary-50 text-brand-primary-700 hover:bg-brand-primary-100 rounded-lg transition-colors flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Education
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
          {educations.map(edu => (
            <div key={edu.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-sm text-gray-500">
                    {edu.field}
                  </p>
                  <p className="text-sm text-gray-500">
                    {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  {edu.current && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Current
                    </span>
                  )}
                </div>
              </div>
              <p className="mt-2 text-gray-600">{edu.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
