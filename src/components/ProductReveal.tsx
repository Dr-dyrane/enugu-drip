import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, ArrowRight, Share2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ProductReveal: React.FC = () => {
    const { selectedProduct, setSelectedProduct, addToCart } = useApp();

    useEffect(() => {
        if (selectedProduct) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProduct]);

    if (!selectedProduct) return null;

    return (
        <AnimatePresence>
            {selectedProduct && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProduct(null)}
                        className="absolute inset-0 bg-background/80 backdrop-blur-2xl"
                    />

                    {/* Content Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="relative w-full max-w-6xl h-full max-h-[90vh] bg-background/50 border border-foreground/10 overflow-hidden flex flex-col md:flex-row shadow-2xl shadow-foreground/5"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center bg-background/50 backdrop-blur-md border border-foreground/10 hover:bg-foreground hover:text-background transition-all duration-300 rounded-full"
                        >
                            <X size={24} />
                        </button>

                        {/* Image Section */}
                        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group">
                            <motion.img
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                src={selectedProduct.image}
                                alt={selectedProduct.name}
                                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />

                            {/* Floating Metadata */}
                            <div className="absolute bottom-8 left-8 flex flex-col gap-1">
                                <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/50 font-medium">Origin</span>
                                <span className="text-xl font-light italic tracking-tight text-foreground">{selectedProduct.location}</span>
                            </div>
                        </div>

                        {/* Details Section */}
                        <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 md:p-16 flex flex-col justify-center gap-8 bg-background">
                            <div className="flex flex-col gap-2">
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-[12px] uppercase tracking-[0.4em] text-muted-foreground font-bold"
                                >
                                    {selectedProduct.vendor}
                                </motion.span>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-5xl md:text-7xl font-serif tracking-tighter leading-[0.9] -ml-1 text-foreground"
                                >
                                    {selectedProduct.name}
                                </motion.h1>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="flex items-center gap-6"
                            >
                                <span className="text-4xl font-light tracking-tight text-foreground">₦{selectedProduct.price.toLocaleString()}</span>
                                {selectedProduct.originalPrice && (
                                    <span className="text-xl text-muted-foreground line-through font-light decoration-muted/50">
                                        ₦{selectedProduct.originalPrice.toLocaleString()}
                                    </span>
                                )}
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-muted-foreground text-lg leading-relaxed font-light max-w-md"
                            >
                                This exquisite {selectedProduct.name} from {selectedProduct.vendor} represents the pinnacle of curated style.
                                Hand-picked for the modern editorial wardrobe, it embodies the DRIP philosophy of premium thrift.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-col gap-4 mt-8"
                            >
                                <button
                                    onClick={() => addToCart(selectedProduct)}
                                    className="w-full h-16 bg-foreground text-background text-sm uppercase font-bold tracking-[0.2em] flex items-center justify-center gap-3 hover:opacity-90 transition-all duration-300"
                                >
                                    <ShoppingBag size={18} />
                                    Acquire Now
                                </button>

                                <div className="flex gap-4">
                                    <button className="flex-1 h-14 border border-foreground/10 hover:border-foreground/30 text-foreground text-[10px] uppercase tracking-[0.3em] font-bold flex items-center justify-center gap-2 transition-all duration-300">
                                        <Share2 size={14} />
                                        Spread the Word
                                    </button>
                                    <button
                                        onClick={() => setSelectedProduct(null)}
                                        className="h-14 aspect-square border border-foreground/10 hover:border-foreground/30 text-foreground flex items-center justify-center transition-all duration-300"
                                    >
                                        <ArrowRight size={18} />
                                    </button>
                                </div>
                            </motion.div>

                            {/* Tags Section */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="flex flex-wrap gap-2 mt-8"
                            >
                                {selectedProduct.tags?.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-foreground/5 border border-foreground/5 text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
                                        #{tag}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
