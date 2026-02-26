import { ArrowDownAZ, ArrowUpAZ, Sparkles, LayoutGrid } from 'lucide-react';
import { useFilters } from '@/providers/FilterProvider';

const sortOptions = [
  { id: 'default' as const, label: 'Featured', icon: Sparkles },
  { id: 'price-asc' as const, label: 'Price ↑', icon: ArrowUpAZ },
  { id: 'price-desc' as const, label: 'Price ↓', icon: ArrowDownAZ },
  { id: 'newest' as const, label: 'New Drops', icon: LayoutGrid },
];

const SortControl = () => {
  const { sortBy, setSortBy } = useFilters();

  return (
    <div className="flex items-center gap-1">
      {sortOptions.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => setSortBy(id)}
          className={`glass-pill px-3 py-1.5 text-utility whitespace-nowrap transition-all duration-300 ${
            sortBy === id
              ? 'bg-foreground text-background'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default SortControl;
