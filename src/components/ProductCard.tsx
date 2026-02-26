import { Product, statusConfig } from '@/data/products';

interface ProductCardProps {
  product: Product;
  variant?: 'standard' | 'wide' | 'tall';
}

const ProductCard = ({ product, variant = 'standard' }: ProductCardProps) => {
  const status = statusConfig[product.status];

  const heightClass = variant === 'tall' ? 'h-[520px]' : variant === 'wide' ? 'h-[380px]' : 'h-[440px]';

  return (
    <div className={`group relative overflow-hidden ${heightClass} cursor-pointer`}>
      {/* Product Image - Edge to edge, no border radius */}
      <img
        src={product.image}
        alt={product.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

      {/* Status Badge */}
      <div className="absolute top-4 left-4">
        <span className={`text-utility px-3 py-1.5 ${status.className} inline-block`}>
          {status.label}
        </span>
      </div>

      {/* Price - Top Right */}
      <div className="absolute top-4 right-4 text-right">
        <span className="font-editorial text-2xl font-bold text-foreground">
          ₦{product.price.toLocaleString()}
        </span>
        {product.originalPrice && (
          <span className="block text-utility text-muted-foreground line-through mt-1">
            ₦{product.originalPrice.toLocaleString()}
          </span>
        )}
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-editorial text-xl md:text-2xl font-bold text-foreground leading-tight mb-1">
          {product.name}
        </h3>
        <p className="text-utility text-muted-foreground mb-2">
          {product.vendor}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-utility text-muted-foreground">
            📍 {product.location}
          </span>
          {product.size && (
            <span className="text-utility text-foreground/70 glass-pill px-3 py-1">
              {product.size}
            </span>
          )}
        </div>
      </div>

      {/* Hover action bar */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <div className="glass-pane-sm p-4 flex gap-3">
          <button className="flex-1 py-2.5 text-utility text-center bg-foreground text-background transition-colors hover:bg-primary hover:text-primary-foreground">
            VIEW DRIP
          </button>
          <button className="py-2.5 px-4 text-utility glass-pill text-foreground hover:text-primary">
            TRY ON
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
