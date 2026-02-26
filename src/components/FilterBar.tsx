import { useFilters } from '@/providers/FilterProvider';
import SearchBar from './SearchBar';
import CategoryTabs from './CategoryTabs';
import GenderFilter from './GenderFilter';
import SortControl from './SortControl';
import { X } from 'lucide-react';

const FilterBar = () => {
  const { query, category, gender, sortBy, filtered, resetFilters } = useFilters();
  const hasActiveFilters = query || category !== 'all' || gender !== 'all' || sortBy !== 'default';

  return (
    <section className="px-4 md:px-8 py-6 space-y-4">
      {/* Top row: Search + Gender */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <SearchBar />
        <div className="flex-1" />
        <GenderFilter />
      </div>

      {/* Category tabs */}
      <CategoryTabs />

      {/* Bottom row: Sort + Result count */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 no-scrollbar">
        <SortControl />
        <div className="flex items-center gap-3">
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="glass-pill px-3 py-1.5 text-utility text-muted-foreground hover:text-foreground flex items-center gap-1.5"
            >
              <X className="w-3 h-3" /> Clear
            </button>
          )}
          <span className="text-utility text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? 'ITEM' : 'ITEMS'}
          </span>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
