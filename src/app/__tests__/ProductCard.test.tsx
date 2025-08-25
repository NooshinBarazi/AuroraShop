import { render, screen, fireEvent } from '@testing-library/react';
import { Product } from '@/types/product';
import ProductCard from '@/components/ProductCard';

const p: Product = { id: '1', name: 'Aurora Tee', price: 2499, imageUrl: '/next.svg', rating: 4 };

it('renders name and price', () => {
  render(<ProductCard product={p} />);
  expect(screen.getByText(/Aurora Tee/i)).toBeInTheDocument();
});

it('calls onAddToCart when clicked', () => {
  const onAdd = vi.fn();
  render(<ProductCard product={p} onAddToCart={onAdd} />);
  fireEvent.click(screen.getByRole('button', { name: /add aurora tee to cart/i }));
  expect(onAdd).toHaveBeenCalledWith(p);
});
