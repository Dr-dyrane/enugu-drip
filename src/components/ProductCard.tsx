import { Product, statusConfig } from '@/data/products';

interface ProductCardProps {
  product: Product;
  variant?: 'standard' | 'wide' | 'tall';
}

const ProductCard = ({ product, variant = 'standard' }: ProductCardProps) => {
  const status = statusConfig[product.status];

  const heightClass = variant === 'tall' ? 'h-[520px]' : variant === 'wide' ? 'h-[380px]' : 'h-[440px]';

  return (
    <div className={`group relative overflow-hidden ${heightClass} cursor-pointer bg-card`}>
      {/* Masked Product Image - diagonal cut reveals info panel */}
      <div className="absolute inset-0" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 65%, 0 80%)' }}>
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle overlay on image for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40 transition-opacity duration-500" />
      </div>

      {/* Status Badge - sits on image */}
      <div className="absolute top-4 left-4 z-10">
        <span className={`text-utility px-3 py-1.5 ${status.className} inline-block`}>
          {status.label}
        </span>
      </div>

      {/* Info Panel - rendered on the exposed mask area */}
      <div className="absolute bottom-0 left-0 right-0 p-5 pt-0" style={{ minHeight: '35%' }}>
        {/* Diagonal separator line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent" 
             style={{ transform: 'rotate(-3deg)', transformOrigin: 'left center' }} />
        
        <div className="flex flex-col justify-end h-full pt-6">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1 min-w-0 mr-3">
              <h3 className="font-editorial text-xl md:text-2xl font-bold text-card-foreground leading-tight">
                {product.name}
              </h3>
              <p className="text-utility text-muted-foreground mt-1">
                {product.vendor}
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="font-editorial text-2xl font-bold text-card-foreground">
                ₦{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="block text-utility text-muted-foreground line-through mt-0.5">
                  ₦{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-utility text-muted-foreground">
              📍 {product.location}
            </span>
            {product.size && (
              <span className="text-utility text-card-foreground/70 glass-pill px-3 py-1">
                {product.size}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Hover action bar */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
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
