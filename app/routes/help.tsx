import { useState } from "react";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "Help Center - SkillSync" },
    { name: "description", content: "Get help and support for using SkillSync's career development platform." },
  ];
}

export default function Help() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Topics", icon: "fas fa-th-large" },
    { id: "getting-started", name: "Getting Started", icon: "fas fa-play-circle" },
    { id: "chat", name: "AI Chat", icon: "fas fa-comments" },
    { id: "dashboard", name: "Dashboard", icon: "fas fa-tachometer-alt" },
    { id: "account", name: "Account", icon: "fas fa-user-cog" },
    { id: "troubleshooting", name: "Troubleshooting", icon: "fas fa-tools" }
  ];

  const faqs = [
    {
      id: 1,
      category: "getting-started",
      question: "How do I get started with SkillSync?",
      answer: "Welcome to SkillSync! Start by completing your profile in the onboarding process, then explore our AI chat assistants for personalized career guidance. Visit your dashboard to track your progress and discover learning opportunities."
    },
    {
      id: 2,
      category: "chat",
      question: "What types of AI assistants are available?",
      answer: "We offer three specialized AI assistants: General AI Assistant for career questions, Career Guidance Chat for personalized advice, and Skill Assessment Chat to evaluate and improve your skills."
    },
    {
      id: 3,
      category: "dashboard",
      question: "How do I track my skill development?",
      answer: "Your dashboard provides a comprehensive view of your skill progress. Visit the Skills section to see your current levels, take assessments, and get recommendations for improvement."
    },
    {
      id: 4,
      category: "account",
      question: "How do I update my profile information?",
      answer: "Go to Dashboard > Profile to update your personal information, skills, experience, and career preferences. Keep your profile updated for better AI recommendations."
    },
    {
      id: 5,
      category: "chat",
      question: "Can I save my chat conversations?",
      answer: "Yes! All your chat conversations are automatically saved in the chat sidebar. You can search through your chat history and continue previous conversations anytime."
    },
    {
      id: 6,
      category: "troubleshooting",
      question: "What should I do if the AI chat isn't responding?",
      answer: "If the AI chat isn't responding, try refreshing the page or starting a new chat. Check your internet connection and ensure you're logged in. If issues persist, contact our support team."
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="SkillSync Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold text-brand-primary-700">SkillSync</span>
            </Link>
            <Link to="/contact" className="text-brand-primary-600 hover:text-brand-primary-700">
              Contact Support
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">How can we help you?</h1>
          <p className="text-xl text-gray-600 mb-8">Find answers to common questions and get support</p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-4 pl-12 pr-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 text-lg"
            />
            <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors flex items-center gap-3 ${
                      selectedCategory === category.id
                        ? 'bg-brand-primary-50 text-brand-primary-700'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <i className={`${category.icon} text-sm`}></i>
                    <span className="text-sm">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
              <h3 className="font-bold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/chat"
                  className="block p-3 bg-brand-primary-50 text-brand-primary-700 rounded-lg hover:bg-brand-primary-100 transition-colors"
                >
                  <i className="fas fa-comments mr-2"></i>
                  Start AI Chat
                </Link>
                <Link
                  to="/contact"
                  className="block p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  Contact Support
                </Link>
                <Link
                  to="/status"
                  className="block p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <i className="fas fa-chart-line mr-2"></i>
                  System Status
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600 mt-2">
                  {filteredFaqs.length} {filteredFaqs.length === 1 ? 'result' : 'results'} found
                </p>
              </div>

              <div className="p-6">
                {filteredFaqs.length > 0 ? (
                  <div className="space-y-6">
                    {filteredFaqs.map(faq => (
                      <div key={faq.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">No results found</h3>
                    <p className="text-gray-600">Try adjusting your search or browse different categories</p>
                  </div>
                )}
              </div>
            </div>

            {/* Still need help? */}
            <div className="bg-brand-primary-50 rounded-xl p-6 mt-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-brand-primary-800 mb-2">
                  Still need help?
                </h3>
                <p className="text-brand-primary-600 mb-6">
                  Our support team is here to help you succeed
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-brand-primary-600 hover:bg-brand-primary-700 text-white rounded-lg transition-colors"
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    Contact Support
                  </Link>
                  <Link
                    to="/chat"
                    className="px-6 py-3 bg-white hover:bg-gray-50 text-brand-primary-600 border border-brand-primary-200 rounded-lg transition-colors"
                  >
                    <i className="fas fa-comments mr-2"></i>
                    Try AI Assistant
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
