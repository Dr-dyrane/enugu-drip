import { products } from '@/data/products';
import ProductCard from './ProductCard';

const ZigZagFeed = () => {
  return (
    <div className="px-2 md:px-0">
      {/* Mobile: Zig-zag single column with alternating offsets */}
      <div className="md:hidden space-y-2">
        {products.map((product, i) => (
          <div
            key={product.id}
            className={`animate-slide-up ${i % 2 === 0 ? 'mr-8' : 'ml-8'}`}
            style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
          >
            <ProductCard
              product={product}
              variant={i % 3 === 0 ? 'tall' : 'standard'}
            />
          </div>
        ))}
      </div>

      {/* Desktop: Billboard editorial spread */}
      <div className="hidden md:block">
        {/* Hero row - full bleed */}
        <div className="grid grid-cols-3 gap-2 mb-2">
          <div className="col-span-2">
            <ProductCard product={products[0]} variant="wide" />
          </div>
          <div>
            <ProductCard product={products[1]} variant="standard" />
          </div>
        </div>

        {/* Asymmetric row */}
        <div className="grid grid-cols-4 gap-2 mb-2">
          <div>
            <ProductCard product={products[2]} variant="tall" />
          </div>
          <div className="col-span-2">
            <ProductCard product={products[3]} variant="wide" />
          </div>
          <div>
            <ProductCard product={products[4]} variant="tall" />
          </div>
        </div>

        {/* Reversed weight */}
        <div className="grid grid-cols-3 gap-2 mb-2">
          <div>
            <ProductCard product={products[5]} variant="standard" />
          </div>
          <div className="col-span-2">
            <ProductCard product={products[6]} variant="wide" />
          </div>
        </div>

        {/* Full billboard */}
        <div className="grid grid-cols-1 gap-2">
          <ProductCard product={products[7]} variant="wide" />
        </div>
      </div>
    </div>
  );
};

export default ZigZagFeed;
