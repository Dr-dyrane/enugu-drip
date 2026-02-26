import { products } from '@/data/products';
import ProductCard from './ProductCard';

const FeaturedDrops = () => {
  const featured = products.filter((p) => p.status === 'new-drop').slice(0, 4);

  return (
    <section className="px-4 md:px-8 py-8">
      <div className="flex items-end justify-between mb-6">
        <div>
          <span className="text-utility text-drip-acid block mb-2">JUST LANDED</span>
          <h2 className="font-editorial text-3xl md:text-5xl font-bold text-foreground">
            New Drops
          </h2>
        </div>
        <button className="glass-pill px-5 py-2.5 text-utility text-muted-foreground hover:text-foreground transition-colors">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {featured.map((product, i) => (
          <div
            key={product.id}
            className="animate-slide-up"
            style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
          >
            <ProductCard product={product} variant="standard" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDrops;
