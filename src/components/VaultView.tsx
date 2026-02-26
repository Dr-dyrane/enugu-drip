import { Lock } from 'lucide-react';
import ProductCard from './ProductCard';
import { products } from '@/data/products';

const VaultView = () => {
    // Use a subset of products for the vault
    const vaultedItems = products.slice(0, 4);

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 px-4 md:px-8 pt-6 pb-20">
            <div className="flex flex-col md:flex-row items-baseline justify-between mb-8 gap-4">
                <div>
                    <h2 className="font-editorial text-4xl md:text-6xl font-bold text-foreground">The Vault</h2>
                    <p className="text-utility text-muted-foreground mt-2 tracking-[0.2em]">CURATED EXCLUSIVES • LIMITED ACCESS</p>
                </div>
                <div className="glass-pill px-6 py-3 flex items-center gap-3">
                    <Lock className="w-4 h-4 text-primary" />
                    <span className="text-utility text-foreground">STALKER STATUS REQUIRED</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {vaultedItems.map((product, i) => (
                    <div
                        key={product.id}
                        className="relative transform transition-transform duration-700 hover:-translate-y-2"
                        style={{ animationDelay: `${i * 0.1}s` }}
                    >
                        {/* Scarcity Indicator */}
                        <div className="absolute -top-2 -right-2 z-30">
                            <div className="bg-drip-crimson text-white text-[10px] px-2 py-1 rotate-12 glow-crimson font-bold">
                                ONLY 1
                            </div>
                        </div>

                        <ProductCard product={product} variant="tall" />

                        {/* Vault Overlay */}
                        <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] pointer-events-none z-10 opacity-0 transition-opacity duration-500 hover:opacity-100" />
                    </div>
                ))}
            </div>

            {/* Aesthetic Callout */}
            <div className="mt-16 glass-pane p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
                <h3 className="font-editorial text-3xl md:text-5xl mb-6">Archive Access</h3>
                <p className="max-w-xl mx-auto text-muted-foreground mb-8 text-lg">
                    The Vault contains items sourced from private collections across West Africa. Access is granted through engagement and verified styling history.
                </p>
                <button className="glass-pill px-10 py-4 text-utility text-foreground hover:bg-foreground hover:text-background border border-foreground/10">
                    REQUEST CLEARANCE
                </button>
            </div>
        </div>
    );
};

export default VaultView;
