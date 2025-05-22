import { Link } from "react-router";

interface Tag {
  name: string;
  count: number;
}

interface BlogTagsProps {
  tags: Tag[];
}

export function BlogTags({ tags }: BlogTagsProps) {
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-xl border border-gray-200 shadow-md p-6">
      <h3 className="text-lg font-bold text-brand-primary-800 mb-4">Popular Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag.name}
            to={`/blog/tag/${tag.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm transition-colors"
          >
            {tag.name}
            <span className="ml-1 text-xs text-gray-500">({tag.count})</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
