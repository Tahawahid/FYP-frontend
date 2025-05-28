import { useState } from "react";

export function SkillsEditor() {
  const [isEditing, setIsEditing] = useState(false);
  const [skills, setSkills] = useState([
    { id: 1, name: "Python", level: 90 },
    { id: 2, name: "Machine Learning", level: 85 },
    { id: 3, name: "Data Analysis", level: 80 },
    { id: 4, name: "SQL", level: 75 },
    { id: 5, name: "TensorFlow", level: 70 },
    { id: 6, name: "Deep Learning", level: 65 },
    { id: 7, name: "Data Visualization", level: 80 },
    { id: 8, name: "Cloud Computing", level: 60 }
  ]);
  const [newSkill, setNewSkill] = useState({ name: "", level: 50 });

  const handleSkillChange = (id: number, field: "name" | "level", value: string | number) => {
    setSkills(skills.map(skill => 
      skill.id === id ? { ...skill, [field]: value } : skill
    ));
  };

  const handleAddSkill = () => {
    if (newSkill.name.trim()) {
      setSkills([...skills, { id: Date.now(), ...newSkill }]);
      setNewSkill({ name: "", level: 50 });
    }
  };

  const handleRemoveSkill = (id: number) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would save the data to the server here
    setIsEditing(false);
  };

  const getLevelLabel = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 70) return "Advanced";
    if (level >= 40) return "Intermediate";
    return "Beginner";
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Skills</h2>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="text-sm text-brand-primary-600 hover:text-brand-primary-800"
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mb-6">
            {skills.map(skill => (
              <div key={skill.id} className="flex items-center space-x-4">
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) => handleSkillChange(skill.id, "name", e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                  placeholder="Skill name"
                  required
                />
                <div className="flex-1 flex items-center space-x-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={skill.level}
                    onChange={(e) => handleSkillChange(skill.id, "level", parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-sm text-gray-600 w-20">{skill.level}% ({getLevelLabel(skill.level)})</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(skill.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          
          <div className="flex items-center space-x-4 mb-6">
            <input
              type="text"
              value={newSkill.name}
              onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
              className="flex-1 px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
              placeholder="Add a new skill"
            />
            <div className="flex-1 flex items-center space-x-2">
              <input
                type="range"
                min="0"
                max="100"
                value={newSkill.level}
                onChange={(e) => setNewSkill({ ...newSkill, level: parseInt(e.target.value) })}
                className="flex-1"
              />
              <span className="text-sm text-gray-600 w-20">{newSkill.level}% ({getLevelLabel(newSkill.level)})</span>
            </div>
            <button
              type="button"
              onClick={handleAddSkill}
              className="text-brand-primary-600 hover:text-brand-primary-800"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map(skill => (
            <div key={skill.id}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                <span className="text-xs text-gray-600">{getLevelLabel(skill.level)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="h-2 rounded-full bg-brand-primary-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
