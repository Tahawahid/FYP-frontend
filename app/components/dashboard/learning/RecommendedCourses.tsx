export function RecommendedCourses() {
  const recommendedCourses = [
    {
      id: 1,
      title: "Deep Learning Specialization",
      provider: "Coursera",
      instructor: "Dr. Andrew Ng",
      duration: "3 months",
      level: "Advanced",
      rating: 4.9,
      thumbnail: "/images/courses/ai-career.jpg",
      relevance: 95
    },
    {
      id: 2,
      title: "AWS for Machine Learning",
      provider: "Amazon",
      instructor: "AWS Team",
      duration: "6 weeks",
      level: "Intermediate",
      rating: 4.7,
      thumbnail: "/images/courses/ai-jobs.jpg",
      relevance: 90
    },
    {
      id: 3,
      title: "Natural Language Processing",
      provider: "Stanford Online",
      instructor: "Prof. Christopher Manning",
      duration: "8 weeks",
      level: "Advanced",
      rating: 4.8,
      thumbnail: "/images/courses/personal-brand.jpg",
      relevance: 85
    }
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recommended Courses</h2>
        <button className="text-sm text-brand-primary-600 hover:text-brand-primary-800">
          View all recommendations
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendedCourses.map(course => (
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
              <div className="absolute top-3 right-3">
                <span className="text-xs font-bold bg-white text-brand-primary-800 px-2 py-1 rounded-full">
                  {course.relevance}% Match
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-xs text-white bg-brand-primary-600 px-2 py-1 rounded-full">
                  {course.provider}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-medium text-gray-900 line-clamp-2 h-12">{course.title}</h3>
              <p className="text-xs text-gray-600 mt-1">Instructor: {course.instructor}</p>
              
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-gray-500">Duration:</span>
                  <span className="ml-1 text-gray-900">{course.duration}</span>
                </div>
                <div>
                  <span className="text-gray-500">Level:</span>
                  <span className="ml-1 text-gray-900">{course.level}</span>
                </div>
                <div className="col-span-2 flex items-center">
                  <span className="text-gray-500 mr-1">Rating:</span>
                  <span className="text-gray-900">{course.rating}/5</span>
                  <div className="flex ml-1">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-3 h-3 ${i < Math.floor(course.rating) ? 'text-yellow-500' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-3">
                <button className="w-full text-sm bg-brand-primary-600 hover:bg-brand-primary-700 text-white py-2 rounded-lg">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
