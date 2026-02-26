import { useState, useEffect } from 'react';
import { useFilters } from '@/providers/FilterProvider';
import ProductCard from './ProductCard';
import ProductCardSkeleton from './ProductCardSkeleton';

const ProductGrid = () => {
  const { filtered } = useFilters();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading when filters change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [filtered.length]);

  if (isLoading) {
    return (
      <div className="px-1 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={i % 3 === 0 ? 'md:col-span-2' : ''}>
              <ProductCardSkeleton />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (filtered.length === 0) {
    return (
      <div className="px-4 md:px-8 py-20 text-center animate-in fade-in">
        <p className="font-editorial text-2xl text-foreground mb-2">No items found</p>
        <p className="text-utility text-muted-foreground">Try adjusting your filters or search query</p>
      </div>
    );
  }

  return (
    <div className="px-1 md:px-8 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {filtered.map((product, i) => {
          // Editorial logic: Mix wide billboards with vertical cards (Rule 21 & 29)
          const isBillboard = i % 5 === 0; // Every 5th item is a full billboard
          const isWide = i % 8 === 1; // Wide editorial spreads

          let colSpan = "";
          let variant: 'standard' | 'wide' | 'tall' = "standard";

          if (isBillboard) {
            colSpan = "md:col-span-3 lg:col-span-4";
            variant = "wide";
          } else if (isWide) {
            colSpan = "md:col-span-2";
            variant = "wide";
          } else if (i % 3 === 2) {
            variant = "tall";
          }

          return (
            <div
              key={product.id}
              className={`animate-slide-up ${colSpan}`}
              style={{
                animationDelay: `${i * 0.1}s`,
                animationFillMode: 'both',
              }}
            >
              <ProductCard
                product={product}
                variant={variant}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGrid;
