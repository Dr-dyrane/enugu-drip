import { createContext, useContext, useState, useMemo, type ReactNode } from 'react';
import { products, type Product, type Category, type Gender } from '@/data/products';

interface FilterState {
  query: string;
  category: Category;
  gender: Gender | 'all';
  sortBy: 'default' | 'price-asc' | 'price-desc' | 'newest';
}

interface FilterContextType extends FilterState {
  setQuery: (q: string) => void;
  setCategory: (c: Category) => void;
  setGender: (g: Gender | 'all') => void;
  setSortBy: (s: FilterState['sortBy']) => void;
  filtered: Product[];
  resetFilters: () => void;
}

const FilterContext = createContext<FilterContextType | null>(null);

const initialState: FilterState = {
  query: '',
  category: 'all',
  gender: 'all',
  sortBy: 'default',
};

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<FilterState>(initialState);

  const setQuery = (query: string) => setState((s) => ({ ...s, query }));
  const setCategory = (category: Category) => setState((s) => ({ ...s, category }));
  const setGender = (gender: Gender | 'all') => setState((s) => ({ ...s, gender }));
  const setSortBy = (sortBy: FilterState['sortBy']) => setState((s) => ({ ...s, sortBy }));
  const resetFilters = () => setState(initialState);

  const filtered = useMemo(() => {
    let result = [...products];

    if (state.query) {
      const q = state.query.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.vendor.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.includes(q))
      );
    }

    if (state.category !== 'all') {
      result = result.filter((p) => p.category === state.category);
    }

    if (state.gender !== 'all') {
      result = result.filter((p) => p.gender === state.gender || p.gender === 'unisex');
    }

    switch (state.sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (a.status === 'new-drop' ? -1 : 1));
        break;
    }

    return result;
  }, [state]);

  return (
    <FilterContext.Provider
      value={{ ...state, setQuery, setCategory, setGender, setSortBy, filtered, resetFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error('useFilters must be used within FilterProvider');
  return ctx;
};
