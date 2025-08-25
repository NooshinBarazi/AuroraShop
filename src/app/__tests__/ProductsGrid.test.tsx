import { render, screen } from '@testing-library/react';
import { Product } from '@/types/product';
import ProductsGrid from '@/components/ProductsGrid';

const mock: Product[] = Array.from({ length: 12 }).map((_, i) => ({
  id: String(i),
  name: `Item ${i}`,
  price: 1000,
  imageUrl: '/next.svg',
}));

it('renders a grid of products', () => {
  render(<ProductsGrid products={mock} />);
  expect(screen.getAllByRole('article').length).toBe(12);
});
