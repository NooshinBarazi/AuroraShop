import ProductsGrid from '@/components/ProductsGrid';
import { products } from '@/lib/data/products';

export const revalidate = 60;

export default async function ProductsPage() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="mb-4 text-2xl font-bold">Products</h1>
      <ProductsGrid products={products} />
    </main>
  );
}
