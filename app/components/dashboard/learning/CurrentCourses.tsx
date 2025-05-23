export function CurrentCourses() {
  const currentCourses = [
    {
      id: 1,
      title: "Machine Learning Fundamentals",
      provider: "Coursera",
      instructor: "Dr. Andrew Smith",
      progress: 75,
      dueDate: "Aug 15, 2023",
      thumbnail: "/images/courses/remote-work.jpg"
    },
    {
      id: 2,
      title: "Data Visualization with Python",
      provider: "Udemy",
      instructor: "Sarah Johnson",
      progress: 45,
      dueDate: "Aug 30, 2023",
      thumbnail: "/images/courses/skills-2024.jpg"
    },
    {
      id: 3,
      title: "Statistical Methods for Data Science",
      provider: "edX",
      instructor: "Prof. Michael Chen",
      progress: 20,
      dueDate: "Sep 10, 2023",
      thumbnail: "/images/courses/career-transition.jpg"
    }
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Current Courses</h2>
        <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800">
          View all courses
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentCourses.map(course => (
          <div 
            key={course.id} 
            className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="h-40 bg-gray-200 relative">
              <img 
                src={course.thumbnail} 
                alt={course.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/placeholder-course.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-xs text-white bg-brand-primary-600 px-2 py-1 rounded-full">
                  {course.provider}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-medium text-gray-900 line-clamp-2 h-12">{course.title}</h3>
              <p className="text-xs text-gray-600 mt-1">Instructor: {course.instructor}</p>
              
              <div className="mt-3">
                <div className="flex justify-between items-center text-xs text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-brand-primary-500"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="mt-3 flex justify-between items-center">
                <span className="text-xs text-gray-500">Due: {course.dueDate}</span>
                <button className="text-xs bg-brand-primary-600 hover:bg-brand-primary-700 text-white px-3 py-1 rounded-lg">
                  Continue
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
