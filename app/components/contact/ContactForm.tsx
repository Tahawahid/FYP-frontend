import { useState } from "react";
import { Button } from "../common/Button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // TODO: Implement actual form submission logic
      console.log("Form submitted with:", formData);
      
      // Show success message
      setSuccess(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-primary-800 mb-6">Send Us a Message</h2>
      
      {success && (
        <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6 flex items-start">
          <div className="mr-3 flex-shrink-0">
            <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium">Message sent successfully!</h3>
            <p className="text-sm">Thank you for reaching out. We'll get back to you as soon as possible.</p>
          </div>
        </div>
      )}
      
      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 flex items-start">
          <div className="mr-3 flex-shrink-0">
            <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium">Error</h3>
            <p className="text-sm">{error}</p>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brand-primary-700 mb-1">
              Your Name
            </label>
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white/80 text-gray-800 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-primary-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white/80 text-gray-800 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-brand-primary-700 mb-1">
            Subject
          </label>
          <div className="relative">
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white/80 text-gray-800 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 transition-colors appearance-none"
            >
              <option value="" disabled>Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="feedback">Feedback</option>
              <option value="partnership">Partnership</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-brand-primary-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-brand-primary-700 mb-1">
            Message
          </label>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white/80 text-gray-800 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 transition-colors"
              placeholder="How can we help you?"
            />
          </div>
        </div>
        
        <div>
          <Button 
            variant="primary" 
            className="w-full py-3"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  );
}
