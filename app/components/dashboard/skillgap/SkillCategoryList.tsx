export function SkillCategoryList() {
  const skillCategories = [
    {
      id: 1,
      name: "Technical Skills",
      skills: [
        { name: "Python Programming", level: "Intermediate", gap: "Low" },
        { name: "Machine Learning", level: "Beginner", gap: "High" },
        { name: "SQL & Database", level: "Intermediate", gap: "Medium" },
        { name: "Data Visualization", level: "Intermediate", gap: "Medium" },
        { name: "Statistical Analysis", level: "Beginner", gap: "High" }
      ]
    },
    {
      id: 2,
      name: "Soft Skills",
      skills: [
        { name: "Communication", level: "Advanced", gap: "None" },
        { name: "Problem Solving", level: "Intermediate", gap: "Low" },
        { name: "Teamwork", level: "Advanced", gap: "None" },
        { name: "Time Management", level: "Intermediate", gap: "Low" }
      ]
    },
    {
      id: 3,
      name: "Domain Knowledge",
      skills: [
        { name: "Business Analytics", level: "Beginner", gap: "Medium" },
        { name: "Financial Analysis", level: "Beginner", gap: "Medium" }
      ]
    }
  ];
  
  return (
    <div className="space-y-4">
      {skillCategories.map(category => (
        <div key={category.id}>
          <h3 className="font-medium text-gray-900 mb-2">{category.name}</h3>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skill</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Level</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {category.skills.map((skill, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 text-sm text-gray-900">{skill.name}</td>
                    <td className="px-4 py-2 text-sm text-gray-600">{skill.level}</td>
                    <td className="px-4 py-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        skill.gap === 'High' ? 'bg-red-100 text-red-800' :
                        skill.gap === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        skill.gap === 'Low' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {skill.gap}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
