import { Link } from "react-router";
import { SectionTitle } from "./common/SectionTitle";
import { Button } from "./common/Button";

// Sample blog posts for the home page
const featuredPosts = [
  {
    id: 1,
    title: "How AI is Transforming Career Development",
    excerpt: "Discover how artificial intelligence is revolutionizing the way we approach career planning and skill development.",
    category: "Career Development",
    author: "Sarah Johnson",
    authorImage: "/images/authors/avatar-1.jpg",
    date: "June 15, 2023",
    image: "/images/blog/ai-career.jpg"
  },
  {
    id: 2,
    title: "Top 10 Skills Employers Will Look for in 2024",
    excerpt: "Stay ahead of the curve by developing these in-demand skills that employers are actively seeking in candidates.",
    category: "Skills",
    author: "Michael Chen",
    authorImage: "/images/authors/avatar-2.jpg",
    date: "May 28, 2023",
    image: "/images/blog/skills-2024.jpg"
  },
  {
    id: 3,
    title: "The Future of Remote Work: Trends and Predictions",
    excerpt: "Explore how remote work continues to evolve and what skills you need to thrive in a distributed workforce.",
    category: "Workplace",
    author: "Emily Rodriguez",
    authorImage: "/images/authors/avatar-3.jpg",
    date: "April 12, 2023",
    image: "/images/blog/remote-work.jpg"
  }
];

export function BlogSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-brand-primary-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Latest from Our Blog" 
          subtitle="Insights and resources to help you grow professionally"
          align="center"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map(post => (
            <div 
              key={post.id}
              className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
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
                <h3 className="text-xl font-bold text-brand-primary-800 mb-2 line-clamp-2">
                  <Link to={`/blog/${post.id}`} className="hover:text-brand-primary-500 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
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
                  
                  <div className="text-sm text-gray-500">
                    <i className="far fa-calendar-alt mr-1"></i>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline"
            onClick={() => window.location.href = '/blog'}
            className="px-8"
          >
            View All Articles <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        </div>
      </div>
    </section>
  );
}
