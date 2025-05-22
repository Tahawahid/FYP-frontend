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

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-xl border border-gray-200 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
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
        <h3 className="text-xl font-bold text-brand-primary-800 mb-2 line-clamp-2">
          <Link to={`/blog/${post.id}`} className="hover:text-brand-primary-500 transition-colors">
            {post.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
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
      </div>
    </div>
  );
}
