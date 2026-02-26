import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../data/products';

interface AppContextType {
    selectedProduct: Product | null;
    setSelectedProduct: (product: Product | null) => void;
    isCartOpen: boolean;
    setIsCartOpen: (isOpen: boolean) => void;
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart((prev) => [...prev, product]);
    };

    const removeFromCart = (productId: string) => {
        setCart((prev) => prev.filter((p) => p.id !== productId));
    };

    return (
        <AppContext.Provider
            value={{
                selectedProduct,
                setSelectedProduct,
                isCartOpen,
                setIsCartOpen,
                cart,
                addToCart,
                removeFromCart,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
};
