import { useState } from "react";
import { Icon } from "../common/Icon";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe email:", email);
    // Reset form
    setEmail("");
  };
  
  return (
    <div className="mt-6">
      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
        Subscribe to our newsletter
      </h4>
      <form onSubmit={handleSubmit} className="flex">
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email" 
          required
          className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary-500"
        />
        <button 
          type="submit"
          className="px-4 py-2 bg-brand-primary-600 hover:bg-brand-primary-700 text-white rounded-r-lg transition-colors"
        >
          <Icon name="paper-plane" />
        </button>
      </form>
    </div>
  );
}
