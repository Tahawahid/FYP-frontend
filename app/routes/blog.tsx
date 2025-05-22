import { useState } from "react";
import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/footer";
import { PageHeader } from "../components/common/PageHeader";
import { BlogSearch } from "../components/blog/BlogSearch";
import { BlogCategories } from "../components/blog/BlogCategories";
import { BlogTags } from "../components/blog/BlogTags";

// Sample blog posts for demonstration
const blogPosts = [
  {
    id: 1,
    title: "How AI is Transforming Career Development",
    excerpt: "Discover how artificial intelligence is revolutionizing the way we approach career planning and skill development.",
    category: "Career Development",
    author: "Sarah Johnson",
    authorImage: "/images/authors/avatar-1.jpg",
    date: "June 15, 2023",
    readTime: "5 min read",
    image: "/images/blog/ai-career.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Top 10 Skills Employers Will Look for in 2024",
    excerpt: "Stay ahead of the curve by developing these in-demand skills that employers are actively seeking in candidates.",
    category: "Skills",
    author: "Michael Chen",
    authorImage: "/images/authors/avatar-2.jpg",
    date: "May 28, 2023",
    readTime: "8 min read",
    image: "/images/blog/skills-2024.jpg",
    featured: true
  },
  {
    id: 3,
    title: "The Future of Remote Work: Trends and Predictions",
    excerpt: "Explore how remote work continues to evolve and what skills you need to thrive in a distributed workforce.",
    category: "Workplace",
    author: "Emily Rodriguez",
    authorImage: "/images/authors/avatar-3.jpg",
    date: "April 12, 2023",
    readTime: "6 min read",
    image: "/images/blog/remote-work.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Building a Personal Brand in the Digital Age",
    excerpt: "Learn how to establish a strong personal brand that sets you apart in today's competitive job market.",
    category: "Personal Development",
    author: "David Wilson",
    authorImage: "/images/authors/avatar-4.jpg",
    date: "March 5, 2023",
    readTime: "7 min read",
    image: "/images/blog/personal-brand.jpg",
    featured: false
  },
  {
    id: 5,
    title: "Navigating Career Transitions: A Comprehensive Guide",
    excerpt: "Whether you're changing roles or industries, this guide provides actionable steps for a successful career transition.",
    category: "Career Development",
    author: "Lisa Thompson",
    authorImage: "/images/authors/avatar-5.jpg",
    date: "February 20, 2023",
    readTime: "10 min read",
    image: "/images/blog/career-transition.jpg",
    featured: false
  },
  {
    id: 6,
    title: "The Impact of AI on Job Markets: What You Need to Know",
    excerpt: "Understand how artificial intelligence is reshaping job markets and what it means for your career.",
    category: "Industry Trends",
    author: "James Roberts",
    authorImage: "/images/authors/avatar-6.jpg",
    date: "January 15, 2023",
    readTime: "9 min read",
    image: "/images/blog/ai-jobs.jpg",
    featured: false
  }
];

// Categories for the sidebar
const categories = [
  { name: "Career Development", count: 12 },
  { name: "Skills", count: 8 },
  { name: "Workplace", count: 6 },
  { name: "Personal Development", count: 5 },
  { name: "Industry Trends", count: 7 }
];

// Tags for the sidebar
const tags = [
  { name: "Artificial Intelligence", count: 15 },
  { name: "Career Planning", count: 22 },
  { name: "Skill Development", count: 18 },
  { name: "Remote Work", count: 10 },
  { name: "Leadership", count: 8 },
  { name: "Networking", count: 6 },
  { name: "Job Search", count: 12 },
  { name: "Interview Tips", count: 9 },
  { name: "Resume Building", count: 7 },
  { name: "Work-Life Balance", count: 5 }
];

export function meta() {
  return [
    { title: "Blog - SkillSync" },
    { name: "description", content: "Read the latest articles and insights from SkillSync on career development, skills, and professional growth." },
  ];
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    const matchesSearch = searchQuery 
      ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    
    return matchesCategory && matchesSearch;
  });
  
  // Featured posts (for the top section)
  const featuredPosts = blogPosts.filter(post => post.featured);
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Background with gradient */}
      <div 
        className="fixed inset-0 z-0 bg-gradient-to-br from-brand-primary-50 via-white to-brand-secondary-50"
        style={{
          backgroundSize: "200% 200%",
          animation: "gradientAnimation 15s ease infinite"
        }}
      />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-24 relative z-10">
        <PageHeader
          title="SkillSync Blog"
          subtitle="Insights, tips, and news about career development and skill enhancement"
        />
        
        {/* Featured posts section */}
        {featuredPosts.length > 0 && (
          <div className="mt-12 mb-16">
            <h2 className="text-2xl font-bold text-brand-primary-800 mb-8">Featured Articles</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map(post => (
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
                          className="w-8 h-8 rounded-full mr-2 object-cover"
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
        )}
        
        {/* Main blog content with sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="space-y-8 sticky top-24">
              {/* Search */}
              <BlogSearch onSearch={setSearchQuery} />
              
              {/* Categories */}
              <BlogCategories 
                categories={categories} 
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
              
              {/* Tags */}
              <BlogTags tags={tags} />
              
              {/* Newsletter signup */}
              <div className="bg-brand-primary-600 text-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Subscribe to our newsletter</h3>
                <p className="text-brand-primary-100 mb-4">
                  Get the latest articles and insights delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-brand-primary-400 bg-brand-primary-200 text-white placeholder-brand-primary-800 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button 
                    type="submit" 
                    className="w-full px-4 py-3 bg-white text-brand-primary-600 rounded-lg font-medium hover:bg-brand-primary-50 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          {/* Blog posts grid */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="mb-8 flex flex-wrap items-center justify-between">
              <h2 className="text-2xl font-bold text-brand-primary-800">
                {selectedCategory ? `${selectedCategory} Articles` : "All Articles"}
              </h2>
              
              {selectedCategory && (
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="text-brand-primary-600 hover:text-brand-primary-500 font-medium flex items-center"
                >
                  <i className="fas fa-times mr-2"></i>
                  Clear filter
                </button>
              )}
            </div>
            
            {filteredPosts.length === 0 ? (
              <div className="bg-white/80 backdrop-blur-lg rounded-xl border border-gray-200 shadow-md p-8 text-center">
                <h3 className="text-xl font-medium text-brand-primary-800 mb-2">No articles found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter criteria to find what you're looking for.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map(post => (
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
                            className="w-8 h-8 rounded-full mr-2 object-cover"
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
            )}
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  <i className="fas fa-chevron-left text-xs"></i>
                </a>
                <a
                  href="#"
                  aria-current="page"
                  className="relative inline-flex items-center px-4 py-2 border border-brand-primary-500 bg-brand-primary-50 text-sm font-medium text-brand-primary-600"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                  ...
                </span>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  8
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  <i className="fas fa-chevron-right text-xs"></i>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* CSS for gradient animation */}
      <style>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}</style>
    </div>
  );
}
