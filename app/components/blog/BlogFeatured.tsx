import { Link } from "react-router";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
}

interface BlogFeaturedProps {
  posts: BlogPost[];
}

export function BlogFeatured({ posts }: BlogFeaturedProps) {
  if (posts.length === 0) return null;
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-primary-800 mb-6">Featured Articles</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {posts.map(post => (
          <div 
            key={post.id}
            className="bg-white/80 backdrop-blur-lg rounded-xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row h-full"
          >
            {/* Image */}
            <div className="md:w-2/5 relative">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-brand-primary-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="md:w-3/5 p-6 flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold text-brand-primary-800 mb-2">
                <Link to={`/blog/${post.id}`} className="hover:text-brand-primary-500 transition-colors">
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-gray-600 mb-4 flex-grow">
                {post.excerpt}
              </p>
              
              {/* Author and date */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <div className="flex items-center">
                  <img 
                    src={post.authorImage} 
                    alt={post.author} 
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-sm text-gray-700">{post.author}</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-500">
                  <i className="far fa-calendar-alt mr-1"></i>
                  <span className="mr-3">{post.date}</span>
                  <i className="far fa-clock mr-1"></i>
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <Link 
                to={`/blog/${post.id}`}
                className="mt-4 inline-flex items-center text-brand-primary-600 hover:text-brand-primary-500 font-medium"
              >
                Read More
                <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
