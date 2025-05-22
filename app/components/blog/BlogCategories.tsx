import { Link } from "react-router";

interface Category {
  name: string;
  count: number;
}

interface BlogCategoriesProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function BlogCategories({ categories, selectedCategory, onSelectCategory }: BlogCategoriesProps) {
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-xl border border-gray-200 shadow-md p-6">
      <h3 className="text-lg font-bold text-brand-primary-800 mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.name}>
            <button
              onClick={() => onSelectCategory(category.name === selectedCategory ? null : category.name)}
              className={`flex items-center justify-between w-full px-3 py-2 rounded-lg transition-colors ${
                category.name === selectedCategory
                  ? "bg-brand-primary-100 text-brand-primary-800 font-medium"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <span>{category.name}</span>
              <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {category.count}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
