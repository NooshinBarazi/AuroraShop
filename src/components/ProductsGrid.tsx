import { Product } from '@/types/product';
import ProductCard from './ProductCard';

type Props = {
  products: Product[];
};

export default function ProductsGrid({ products }: Props) {
  return (
    <section aria-label="Products" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </section>
  );
}
