import { useFilters } from '@/providers/FilterProvider';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const { filtered } = useFilters();

  if (filtered.length === 0) {
    return (
      <div className="px-4 md:px-8 py-20 text-center">
        <p className="font-editorial text-2xl text-foreground mb-2">No items found</p>
        <p className="text-utility text-muted-foreground">Try adjusting your filters or search query</p>
      </div>
    );
  }

  return (
    <div className="px-2 md:px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {filtered.map((product, i) => (
          <div
            key={product.id}
            className={`animate-slide-up ${i < 2 ? 'md:col-span-1 lg:col-span-2' : ''}`}
            style={{ animationDelay: `${i * 0.05}s`, animationFillMode: 'both' }}
          >
            <ProductCard
              product={product}
              variant={i < 2 ? 'wide' : 'standard'}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
