import { Link } from "react-router";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorImage: string;
  date: string;
  readTime?: string;
  image: string;
}

interface BlogRelatedPostsProps {
  posts: BlogPost[];
}

export function BlogRelatedPosts({ posts }: BlogRelatedPostsProps) {
  if (posts.length === 0) return null;
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-primary-800 mb-8">You might also like</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map(post => (
          <div 
            key={post.id}
            className="bg-white/80 backdrop-blur-lg rounded-xl border border-gray-200 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-brand-primary-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-brand-primary-800 mb-2 line-clamp-2">
                <Link to={`/blog/${post.id}`} className="hover:text-brand-primary-500 transition-colors">
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                {post.excerpt}
              </p>
              
              {/* Author and date */}
              <div className="mt-auto pt-4 flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <img 
                    src={post.authorImage} 
                    alt={post.author} 
                    className="w-6 h-6 rounded-full mr-2 object-cover"
                  />
                  <span className="text-gray-700">{post.author}</span>
                </div>
                
                <span className="text-gray-500">{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
