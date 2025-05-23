export function CourseRecommendations() {
  const courses = [
    {
      id: 1,
      title: "Machine Learning Fundamentals",
      provider: "Coursera",
      instructor: "Dr. Andrew Smith",
      duration: "8 weeks",
      level: "Intermediate",
      rating: 4.8,
      students: 12500,
      matchScore: 95,
      image: "/images/courses/machine-learning.jpg"
    },
    {
      id: 2,
      title: "Advanced SQL for Data Analysis",
      provider: "Udemy",
      instructor: "Jane Rodriguez",
      duration: "6 weeks",
      level: "Advanced",
      rating: 4.6,
      students: 8300,
      matchScore: 92,
      image: "/images/courses/sql.jpg"
    },
    {
      id: 3,
      title: "Data Visualization with Python",
      provider: "edX",
      instructor: "Michael Chen",
      duration: "5 weeks",
      level: "Intermediate",
      rating: 4.7,
      students: 9700,
      matchScore: 90,
      image: "/images/courses/data-viz.jpg"
    }
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recommended Courses</h2>
        <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800">
          View all courses
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map(course => (
          <div 
            key={course.id} 
            className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="h-40 bg-gray-200 relative">
              {/* In a real app, this would be the actual course image */}
              <div className="absolute inset-0 flex items-center justify-center bg-brand-primary-100">
                <i className="fas fa-graduation-cap text-4xl text-brand-primary-300"></i>
              </div>
              
              <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-medium text-brand-primary-700 shadow-sm">
                {course.matchScore}% Match
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-gray-900">{course.title}</h3>
              </div>
              
              <p className="text-sm text-gray-600 mt-1">{course.provider} • {course.instructor}</p>
              
              <div className="mt-2 flex items-center">
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
                <span className="text-xs text-gray-600 ml-1">{course.rating} ({course.students.toLocaleString()} students)</span>
              </div>
              
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">
                  {course.level}
                </span>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">
                  {course.duration}
                </span>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800 font-medium">
                  Details
                </button>
                <button className="text-sm bg-brand-primary-600 hover:bg-brand-primary-700 text-white px-3 py-1 rounded-lg">
                  Enroll
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-brand-primary-50 rounded-lg border border-brand-primary-100">
        <h3 className="font-medium text-gray-900 mb-2">Why These Recommendations?</h3>
        <p className="text-sm text-gray-700">
          These courses are recommended based on your skill gaps, career goals, and learning preferences. They're designed to help you develop the most in-demand skills for your target roles.
        </p>
      </div>
    </div>
  );
}
