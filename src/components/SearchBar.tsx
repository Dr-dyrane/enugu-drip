import { Search, X } from 'lucide-react';
import { useFilters } from '@/providers/FilterProvider';

const SearchBar = () => {
  const { query, setQuery } = useFilters();

  return (
    <div className="relative w-full max-w-md">
      <div className="glass-pane-sm flex items-center gap-3 px-4 py-3">
        <Search className="w-4 h-4 text-muted-foreground shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search items, vendors, styles..."
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        {query && (
          <button onClick={() => setQuery('')} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
