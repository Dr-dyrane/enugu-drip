import { useFilters } from '@/providers/FilterProvider';
import type { Gender } from '@/data/products';

const genders: { id: Gender | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'women', label: 'Women' },
  { id: 'men', label: 'Men' },
  { id: 'unisex', label: 'Unisex' },
];

const GenderFilter = () => {
  const { gender, setGender } = useFilters();

  return (
    <div className="flex items-center gap-1">
      {genders.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => setGender(id)}
          className={`px-4 py-2 text-utility transition-all duration-300 ${
            gender === id
              ? 'text-primary'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default GenderFilter;
