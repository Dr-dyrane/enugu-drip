import { Product, statusConfig } from '@/data/products';
import { useApp } from '@/context/AppContext';

interface ProductCardProps {
  product: Product;
  variant?: 'standard' | 'wide' | 'tall';
}

const ProductCard = ({ product, variant = 'standard' }: ProductCardProps) => {
  const { setSelectedProduct } = useApp();
  const status = statusConfig[product.status];

  // Billboard variants get massive heights on mobile for impact
  const heightClass = variant === 'tall'
    ? 'h-[600px] md:h-[520px]'
    : variant === 'wide'
      ? 'h-[400px] md:h-[380px]'
      : 'h-[500px] md:h-[440px]';

  return (
    <div
      className={`group relative overflow-hidden ${heightClass} cursor-pointer bg-background border-none`}
      onClick={() => setSelectedProduct(product)}
    >
      {/* Editorial Image Layer */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-1000 ease-out group-hover:scale-105"
        style={{
          clipPath: variant === 'wide' ? 'none' : 'polygon(0 0, 100% 0, 100% 75%, 0 90%)'
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Billboard Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Floating Status Accent - Rule 7: Color has meaning */}
      <div className="absolute top-6 left-6 z-20">
        <span className={`text-[10px] tracking-[0.3em] font-bold uppercase px-4 py-2 ${status.className} glass-pane`}>
          {status.label}
        </span>
      </div>

      {/* Magazine Typography Panel */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 z-10 pointer-events-none">
        <div className="relative">
          {variant === 'wide' && (
            <div className="absolute -top-24 left-0 opacity-10 select-none">
              <span className="font-editorial text-[120px] md:text-[200px] font-black leading-none uppercase tracking-tighter">
                DRIP
              </span>
            </div>
          )}

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-[10px] tracking-[0.4em] text-primary font-bold uppercase mb-2">
                {product.vendor}
              </p>
              <h3 className={`font-editorial font-bold text-foreground leading-[0.9] tracking-tighter transition-transform duration-500 group-hover:-translate-y-1 ${variant === 'wide' ? 'text-5xl md:text-8xl' : 'text-4xl md:text-5xl'
                }`}>
                {product.name}
              </h3>
            </div>

            <div className="flex flex-row md:flex-col items-center md:items-end gap-3 md:gap-1">
              <span className="font-editorial text-3xl md:text-4xl font-bold text-foreground">
                ₦{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-utility text-muted-foreground line-through opacity-50">
                  ₦{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-foreground/10 pt-4">
            <span className="text-[11px] tracking-widest text-muted-foreground uppercase">
              // 📍 {product.location}
            </span>
            <div className="flex gap-4">
              {product.size && (
                <span className="text-[11px] tracking-widest text-foreground font-bold">
                  SIZE: {product.size}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Depth Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(hsla(var(--foreground),0.1)_1px,transparent_1px)] bg-[length:100%_4px] opacity-20" />

      {/* Interaction Trigger Overlay */}
      <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-background/10 backdrop-blur-[2px]">
        <div className="glass-pill px-8 py-4 glow-acid">
          <span className="text-utility text-drip-acid font-bold tracking-widest">OPEN BILBOARD</span>
        </div>
      </div>

      {/* Edge shadow for depth - Rule 21 */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-5" />
    </div>
  );
};

export default ProductCard;
