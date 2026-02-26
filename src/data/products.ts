export type ProductStatus = 'new-drop' | 'high-demand' | 'style-match';

export interface Product {
  id: string;
  name: string;
  vendor: string;
  location: string;
  price: number;
  originalPrice?: number;
  image: string;
  status: ProductStatus;
  category: string;
  size?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Vintage Leather Bomber',
    vendor: 'Mama Nkechi Collections',
    location: 'Ogbete Main Market',
    price: 8500,
    originalPrice: 45000,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
    status: 'new-drop',
    category: 'Outerwear',
    size: 'L',
  },
  {
    id: '2',
    name: 'Distressed Denim Trucker',
    vendor: 'Chidi Vintage Hub',
    location: 'New Haven Market',
    price: 5500,
    originalPrice: 28000,
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&q=80',
    status: 'high-demand',
    category: 'Jackets',
    size: 'M',
  },
  {
    id: '3',
    name: 'Oversized Graphic Tee',
    vendor: 'Emeka Drip Store',
    location: 'Gariki Market',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
    status: 'style-match',
    category: 'Tops',
    size: 'XL',
  },
  {
    id: '4',
    name: 'Pleated Wide-Leg Trousers',
    vendor: 'Ada Bespoke Corner',
    location: 'Abakpa Market',
    price: 4200,
    originalPrice: 22000,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
    status: 'new-drop',
    category: 'Bottoms',
    size: 'M',
  },
  {
    id: '5',
    name: 'Retro Track Jacket',
    vendor: 'Obinna Sportswear',
    location: 'Ogbete Main Market',
    price: 6000,
    originalPrice: 35000,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    status: 'high-demand',
    category: 'Outerwear',
    size: 'L',
  },
  {
    id: '6',
    name: 'Corduroy Button-Down',
    vendor: 'Nneka Fashion Spot',
    location: 'New Haven Market',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
    status: 'style-match',
    category: 'Shirts',
    size: 'S',
  },
  {
    id: '7',
    name: 'Cargo Utility Pants',
    vendor: 'Mama Nkechi Collections',
    location: 'Ogbete Main Market',
    price: 4800,
    originalPrice: 18000,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
    status: 'new-drop',
    category: 'Bottoms',
    size: 'L',
  },
  {
    id: '8',
    name: 'Wool Blend Overcoat',
    vendor: 'Chidi Vintage Hub',
    location: 'New Haven Market',
    price: 12000,
    originalPrice: 65000,
    image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&q=80',
    status: 'high-demand',
    category: 'Outerwear',
    size: 'XL',
  },
];

export const statusConfig: Record<ProductStatus, { label: string; className: string }> = {
  'new-drop': { label: 'NEW DROP', className: 'bg-drip-acid text-primary-foreground' },
  'high-demand': { label: 'HIGH DEMAND', className: 'bg-drip-crimson text-destructive-foreground' },
  'style-match': { label: 'STYLE MATCH', className: 'bg-drip-blue text-accent-foreground' },
};
