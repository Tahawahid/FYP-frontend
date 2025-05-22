import { useState } from "react";

interface BlogSearchProps {
  onSearch: (query: string) => void;
}

export function BlogSearch({ onSearch }: BlogSearchProps) {
  const [query, setQuery] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };
  
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-xl border border-gray-200 shadow-md p-6">
      <h3 className="text-lg font-bold text-brand-primary-800 mb-4">Search Articles</h3>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 placeholder-gray-400 text-gray-700 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 transition-colors"
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-brand-primary-600"
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
