export function SavedResources() {
  const resources = [
    {
      id: 1,
      title: "Introduction to Neural Networks",
      type: "Article",
      source: "Towards Data Science",
      dateAdded: "2023-07-15",
      tags: ["Machine Learning", "Neural Networks", "AI"]
    },
    {
      id: 2,
      title: "Python for Data Science Cheat Sheet",
      type: "PDF",
      source: "DataCamp",
      dateAdded: "2023-07-10",
      tags: ["Python", "Data Science", "Cheat Sheet"]
    },
    {
      id: 3,
      title: "SQL Performance Tuning Best Practices",
      type: "Video",
      source: "YouTube",
      dateAdded: "2023-07-05",
      tags: ["SQL", "Database", "Performance"]
    },
    {
      id: 4,
      title: "Data Visualization Techniques",
      type: "Tutorial",
      source: "Kaggle",
      dateAdded: "2023-06-28",
      tags: ["Data Visualization", "Matplotlib", "Seaborn"]
    }
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Saved Resources</h2>
        <div className="flex gap-2">
          <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800">
            Add new
          </button>
          <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800">
            View all
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Source
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date Added
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tags
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {resources.map(resource => (
              <tr key={resource.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{resource.title}</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    resource.type === 'Article' ? 'bg-blue-100 text-blue-800' :
                    resource.type === 'PDF' ? 'bg-red-100 text-red-800' :
                    resource.type === 'Video' ? 'bg-purple-100 text-purple-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {resource.type}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {resource.source}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {resource.dateAdded}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex flex-wrap gap-1">
                    {resource.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-2 py-0.5 bg-gray-100 text-gray-800 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-brand-primary-600 hover:text-brand-primary-900 mr-3">
                    <i className="fas fa-external-link-alt"></i>
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
