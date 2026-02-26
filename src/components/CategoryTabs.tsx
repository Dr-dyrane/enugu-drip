import { categories } from '@/data/products';
import { useFilters } from '@/providers/FilterProvider';

const CategoryTabs = () => {
  const { category, setCategory } = useFilters();

  return (
    <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-1">
      {categories.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => setCategory(id)}
          className={`glass-pill px-4 py-2 text-utility whitespace-nowrap transition-all duration-300 ${
            category === id
              ? 'bg-foreground text-background shadow-lg'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
