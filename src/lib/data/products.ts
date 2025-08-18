import { Product } from '@/types/product';

export const products: Product[] = Array.from({ length: 12 }).map((_, i) => ({
  id: String(i + 1),
  name: `product ${i + 1}`,
  imageUrl: '/',
  price: 1999 + i * 100,
  rating: 4,
}));
