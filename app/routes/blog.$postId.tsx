import { useParams, Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/footer";
import { FloatingShapes } from "../components/contact/FloatingShapes";
import { BlogRelatedPosts } from "../components/blog/BlogRelatedPosts";

// Sample blog post data - this will be our default post template
const samplePost = {
  id: 1,
  title: "How AI is Transforming Career Development",
  excerpt: "Discover how artificial intelligence is revolutionizing the way we approach career planning and skill development.",
  content: `
    <p class="lead">Artificial intelligence is no longer just a buzzword—it's actively reshaping how we approach career development and skill acquisition.</p>
    
    <p>In today's rapidly evolving job market, staying ahead means not only keeping up with industry trends but also leveraging cutting-edge tools to guide your career path. Artificial Intelligence (AI) has emerged as a powerful ally in this journey, offering personalized insights and recommendations that were previously unimaginable.</p>
    
    <h2>Personalized Career Guidance</h2>
    
    <p>One of the most significant impacts of AI on career development is the ability to provide truly personalized guidance. Unlike traditional career counseling, which often relies on generalized advice, AI-powered platforms can analyze vast amounts of data—including your skills, experience, interests, and market trends—to offer tailored recommendations.</p>
    
    <p>These systems can identify skill gaps, suggest relevant learning opportunities, and even predict which career paths might be most fulfilling based on your unique profile. The result is a roadmap that's specifically designed for your professional journey, not a one-size-fits-all solution.</p>
    
    <blockquote>
      "AI doesn't replace human judgment in career decisions—it enhances it by providing data-driven insights that would be impossible to gather manually."
    </blockquote>
    
    <h2>Real-time Market Intelligence</h2>
    
    <p>The job market is constantly changing, with new roles emerging and others becoming obsolete. AI systems excel at monitoring these shifts in real-time, analyzing job postings, industry reports, and economic indicators to identify trends before they become mainstream.</p>
    
    <p>This capability allows professionals to make proactive career moves rather than reactive ones. By understanding which skills are gaining value and which industries are growing, you can position yourself advantageously for future opportunities.</p>
    
    <h2>Skill Development Optimization</h2>
    
    <p>Perhaps the most practical application of AI in career development is in optimizing skill acquisition. Modern AI platforms can:</p>
    
    <ul>
      <li>Analyze your current skill set against desired roles to identify gaps</li>
      <li>Recommend specific courses, certifications, or learning experiences to address those gaps</li>
      <li>Track your progress and adjust recommendations based on your learning pace and style</li>
      <li>Predict which skills will provide the highest return on investment for your specific career goals</li>
    </ul>
    
    <p>This targeted approach to skill development ensures that your learning efforts are aligned with your career objectives, maximizing the impact of your time and resources.</p>
    
    <h2>The Future of AI in Career Development</h2>
    
    <p>As AI technology continues to advance, we can expect even more sophisticated applications in career development. Emerging trends include:</p>
    
    <p><strong>Predictive Career Pathing:</strong> AI systems that can model potential career trajectories based on different choices, helping professionals visualize the long-term impact of their decisions.</p>
    
    <p><strong>Automated Networking:</strong> Intelligent systems that can identify valuable professional connections and facilitate meaningful introductions based on mutual interests and potential synergies.</p>
    
    <p><strong>Continuous Skill Forecasting:</strong> AI that constantly monitors industry changes to predict which skills will be in demand 3-5 years in the future, allowing professionals to prepare well in advance.</p>
    
    <h2>Embracing AI as a Career Development Partner</h2>
    
    <p>While some may worry about AI replacing human elements in career development, the reality is that these technologies work best as partners to human judgment. AI can process and analyze information at scales impossible for humans, but the final decisions about your career path should always incorporate your personal values, preferences, and intuition.</p>
    
    <p>By embracing AI as a tool that enhances rather than replaces human decision-making, professionals can navigate their careers with unprecedented clarity and confidence in an increasingly complex job market.</p>
  `,
  category: "Career Development",
  author: "Sarah Johnson",
  authorImage: "/images/authors/avatar-1.jpg",
  authorBio: "Sarah Johnson is a career development specialist with over 10 years of experience in talent management and workforce analytics. She specializes in the intersection of technology and career advancement.",
  date: "June 15, 2023",
  readTime: "5 min read",
  image: "/images/blog/ai-career.jpg",
  tags: ["Artificial Intelligence", "Career Planning", "Skill Development", "Future of Work"]
};

// Sample related posts for demonstration
const relatedPosts = [
  {
    id: 2,
    title: "Top 10 Skills Employers Will Look for in 2024",
    excerpt: "Stay ahead of the curve by developing these in-demand skills that employers are actively seeking in candidates.",
    category: "Skills",
    author: "Michael Chen",
    authorImage: "/images/authors/avatar-2.jpg",
    date: "May 28, 2023",
    readTime: "8 min read",
    image: "/images/blog/skills-2024.jpg"
  },
  {
    id: 3,
    title: "Navigating Career Transitions: A Comprehensive Guide",
    excerpt: "Whether you're changing roles or industries, this guide provides actionable steps for a successful career transition.",
    category: "Career Development",
    author: "Lisa Thompson",
    authorImage: "/images/authors/avatar-3.jpg",
    date: "February 20, 2023",
    readTime: "10 min read",
    image: "/images/blog/career-transition.jpg"
  },
  {
    id: 4,
    title: "The Future of Remote Work: Trends and Predictions",
    excerpt: "Explore how remote work continues to evolve and what skills you need to thrive in a distributed workforce.",
    category: "Workplace",
    author: "Emily Rodriguez",
    authorImage: "/images/authors/avatar-4.jpg",
    date: "April 12, 2023",
    readTime: "6 min read",
    image: "/images/blog/remote-work.jpg"
  }
];

export function meta() {
  return [
    { title: `${samplePost.title} - SkillSync Blog` },
    { name: "description", content: samplePost.excerpt },
  ];
}

export default function BlogPost() {
  // We'll use the sample post for all blog post pages in this demo
  const post = samplePost;
  
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
      
      {/* Floating decoration */}
      <FloatingShapes />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-24 relative z-10">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-brand-primary-600">
                  <i className="fas fa-home mr-2"></i>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <i className="fas fa-chevron-right text-gray-400 mx-2 text-sm"></i>
                  <Link to="/blog" className="text-sm font-medium text-gray-700 hover:text-brand-primary-600">
                    Blog
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <i className="fas fa-chevron-right text-gray-400 mx-2 text-sm"></i>
                  <span className="text-sm font-medium text-gray-500 truncate max-w-xs">
                    {post.title}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        {/* Article container */}
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-lg rounded-xl border border-gray-200 shadow-xl overflow-hidden">
          {/* Featured image */}
          <div className="h-80 overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Article content */}
          <article className="text-gray-800 p-8 md:p-12">
            {/* Category and date */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-brand-primary-100 text-brand-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <i className="far fa-calendar-alt mr-2"></i>
                <span>{post.date}</span>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <i className="far fa-clock mr-2"></i>
                <span>{post.readTime}</span>
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-brand-primary-800 mb-6">
              {post.title}
            </h1>
            
            {/* Author */}
            <div className="flex items-center mb-8 pb-8 border-b border-gray-200">
              <img 
                src={post.authorImage} 
                alt={post.author} 
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <div className="font-medium text-brand-primary-700">{post.author}</div>
                <div className="text-sm text-gray-500">Author</div>
              </div>
            </div>
            
            {/* Article body */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-brand-primary-800 prose-a:text-brand-primary-600 prose-a:no-underline hover:prose-a:text-brand-primary-500 prose-blockquote:border-brand-primary-500 prose-blockquote:bg-brand-primary-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-medium text-brand-primary-800 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Link 
                    key={index}
                    to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Author bio */}
            <div className="mt-12 bg-brand-primary-50 rounded-xl p-6">
              <h3 className="text-lg font-medium text-brand-primary-800 mb-4">About the Author</h3>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <img 
                  src={post.authorImage} 
                  alt={post.author} 
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xl font-medium text-brand-primary-700 mb-2">{post.author}</h4>
                  <p className="text-gray-700">{post.authorBio}</p>
                  <div className="mt-4 flex gap-3">
                    <a href="#" className="text-brand-primary-600 hover:text-brand-primary-500">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-brand-primary-600 hover:text-brand-primary-500">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="text-brand-primary-600 hover:text-brand-primary-500">
                      <i className="fas fa-globe"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Share buttons */}
            <div className="mt-12 flex flex-wrap items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-brand-primary-800 mb-3">Share this article</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:bg-opacity-90 transition-opacity">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:bg-opacity-90 transition-opacity">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:bg-opacity-90 transition-opacity">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-opacity-90 transition-opacity">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0">
                <Link 
                  to="/blog" 
                  className="inline-flex items-center text-brand-primary-600 hover:text-brand-primary-500 font-medium"
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  Back to all articles
                </Link>
              </div>
            </div>
          </article>
        </div>
        
        {/* Related posts section */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-brand-primary-800 mb-8">You might also like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map(relatedPost => (
              <div 
                key={relatedPost.id}
                className="bg-white/80 backdrop-blur-lg rounded-xl border border-gray-200 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={relatedPost.image} 
                    alt={relatedPost.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-primary-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                      {relatedPost.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-brand-primary-800 mb-2 line-clamp-2">
                    <Link to={`/blog/${relatedPost.id}`} className="hover:text-brand-primary-500 transition-colors">
                      {relatedPost.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  
                  {/* Author and date */}
                  <div className="mt-auto pt-4 flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <img 
                        src={relatedPost.authorImage} 
                        alt={relatedPost.author} 
                        className="w-6 h-6 rounded-full mr-2 object-cover"
                      />
                      <span className="text-gray-700">{relatedPost.author}</span>
                    </div>
                    
                    <span className="text-gray-500">{relatedPost.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Newsletter section */}
        <div className="max-w-4xl mx-auto mt-16 bg-brand-primary-600 text-white rounded-xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
              <p className="text-brand-primary-100 mb-0">
                Get the latest articles, resources, and insights on career development delivered directly to your inbox.
              </p>
            </div>
            
            <div className="md:w-1/3 w-full">
              <form className="flex flex-col sm:flex-row md:flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-lg border-2 border-brand-primary-400 bg-brand-primary-200 text-white placeholder-brand-primary-800 focus:outline-none focus:ring-2 focus:ring-white w-full"
                />
                <button 
                  type="submit" 
                  className="px-4 py-3 bg-white text-brand-primary-600 rounded-lg font-medium hover:bg-brand-primary-50 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
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
