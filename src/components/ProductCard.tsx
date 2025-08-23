'use client';

import { Product } from '@/types/product';
import Image from 'next/image';

type Props = {
  product: Product;
  onAddToCart?: (p: Product) => void;
};
export default function ProductCard({ product, onAddToCart }: Props) {
  return (
    <article className="group rounded-xl border p-4 grid gap-3">
      <div className="relative h-32">
        <Image
          src={product.imageUrl}
          alt={`${product.name} image`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-300">{product.price}</p>
      <button
        className="mt-1 rounded-lg border px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
        onClick={() => onAddToCart?.(product)}
        aria-label={`Add ${product.name} to cart`}
      >
        Add to cart
      </button>
    </article>
  );
}
