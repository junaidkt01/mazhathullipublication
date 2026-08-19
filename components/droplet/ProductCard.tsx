'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { DropletProduct } from '@/types';
import { useOrderModal } from '@/context/OrderContext';

interface ProductCardProps {
  product: DropletProduct;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const { openOrderModal } = useOrderModal();

  return (
    <div className={`group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#00A859]/40 transition-all duration-300 ${className}`}>
      {/* Image Container */}
      <Link href={`/droplet/${product.slug}`} className="relative h-64 w-full overflow-hidden bg-gray-50 block">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#00A859] text-white rounded-md shadow-sm">
            {product.category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 justify-between space-y-4">
        <div className="space-y-2">
          <Link href={`/droplet/${product.slug}`}>
            <h3 className="font-serif text-xl font-bold text-[#111111] group-hover:text-[#00A859] transition-colors leading-snug line-clamp-2">
              {product.title}
            </h3>
          </Link>
          <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed font-sans">
            {product.shortInfo}
          </p>
        </div>

        {/* Price & Order Action */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
          {product.price ? (
            <span className="font-serif text-xl font-bold text-[#111111]">₹{product.price}</span>
          ) : (
            <span className="text-xs font-semibold text-[#00A859]">Custom Pricing</span>
          )}

          <div className="flex items-center gap-2">
            <Link
              href={`/droplet/${product.slug}`}
              className="text-xs font-medium text-gray-700 hover:text-[#00A859] px-2.5 py-1.5 rounded hover:bg-gray-50 transition-colors"
            >
              Details
            </Link>
            <button
              onClick={() =>
                openOrderModal({
                  title: product.title,
                  price: product.price,
                  cover: product.image,
                  category: product.category,
                  type: 'droplet',
                })
              }
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#00A859] hover:bg-[#00924d] rounded-lg shadow-sm transition-all active:scale-[0.98]"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Order</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProductGridProps {
  products: DropletProduct[];
  className?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
