export function SkillRecommendations() {
  const recommendations = [
    {
      id: 1,
      skill: "Machine Learning",
      description: "Develop foundational knowledge in machine learning algorithms and applications.",
      courses: [
        { id: 101, title: "Machine Learning Fundamentals", provider: "Coursera", duration: "8 weeks", rating: 4.8 },
        { id: 102, title: "Practical Machine Learning", provider: "edX", duration: "6 weeks", rating: 4.6 }
      ]
    },
    {
      id: 2,
      skill: "Statistical Analysis",
      description: "Strengthen your understanding of statistical methods for data analysis.",
      courses: [
        { id: 201, title: "Statistics for Data Science", provider: "Udemy", duration: "4 weeks", rating: 4.5 },
        { id: 202, title: "Applied Statistical Methods", provider: "DataCamp", duration: "3 weeks", rating: 4.7 }
      ]
    },
    {
      id: 3,
      skill: "Data Visualization",
      description: "Improve your ability to create effective visual representations of data.",
      courses: [
        { id: 301, title: "Data Visualization with Python", provider: "Coursera", duration: "5 weeks", rating: 4.9 },
        { id: 302, title: "Tableau for Data Visualization", provider: "Udacity", duration: "4 weeks", rating: 4.4 }
      ]
    }
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Recommended Skills to Develop</h2>
      
      <div className="space-y-8">
        {recommendations.map(rec => (
          <div key={rec.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
            <h3 className="text-xl font-medium text-brand-primary-700 mb-2">{rec.skill}</h3>
            <p className="text-gray-700 mb-4">{rec.description}</p>
            
            <h4 className="text-sm font-medium text-gray-900 mb-3">Recommended Courses:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rec.courses.map(course => (
                <div key={course.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h5 className="font-medium text-gray-900">{course.title}</h5>
                  <div className="mt-2 space-y-1 text-sm">
                    <p className="text-gray-600">Provider: {course.provider}</p>
                    <p className="text-gray-600">Duration: {course.duration}</p>
                    <div className="flex items-center">
                      <span className="text-gray-600 mr-1">Rating:</span>
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">{course.rating}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <i 
                              key={i}
                              className={`fas fa-star text-xs ${
                                i < Math.floor(course.rating) ? 'text-yellow-500' : 
                                i === Math.floor(course.rating) && course.rating % 1 > 0 ? 'text-yellow-500' : 
                                'text-gray-300'
                              }`}
                            ></i>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="mt-3 w-full bg-brand-primary-600 hover:bg-brand-primary-700 text-white text-sm py-2 rounded-lg">
                    View Course
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
