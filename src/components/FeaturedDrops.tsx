import { products } from '@/data/products';
import ProductCard from './ProductCard';

const FeaturedDrops = () => {
  const featured = products.filter((p) => p.status === 'new-drop').slice(0, 4);

  return (
    <section className="px-1 md:px-8 py-12">
      <div className="flex items-baseline gap-6 mb-8 px-4 md:px-0">
        <h2 className="font-editorial text-5xl md:text-7xl font-bold text-foreground tracking-tighter">
          The New <span className="italic font-medium">Drops</span>
        </h2>
        <div className="h-px flex-1 bg-foreground/10 hidden md:block" />
        <button className="text-utility text-primary font-bold tracking-[0.2em] hover:text-foreground transition-colors uppercase">
          [ ARCHIVE ]
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {featured.map((product, i) => (
          <div
            key={product.id}
            className={`animate-slide-up ${i === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            style={{ animationDelay: `${i * 0.15}s`, animationFillMode: 'both' }}
          >
            <ProductCard
              product={product}
              variant={i === 0 ? 'wide' : 'standard'}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDrops;
