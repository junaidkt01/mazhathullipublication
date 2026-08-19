'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DropletProduct } from '@/types';
import { SectionLabel } from '@/components/common/SectionLabel';
import { ArrowLeft, Sparkles, ShoppingBag } from 'lucide-react';
import { useOrderModal } from '@/context/OrderContext';

interface ProductDetailsProps {
  product: DropletProduct;
  className?: string;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product, className = '' }) => {
  const { openOrderModal } = useOrderModal();

  return (
    <div className={`space-y-12 ${className}`}>
      {/* Back link */}
      <div>
        <Link
          href="/droplet"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#00A859] font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Droplet.co Store</span>
        </Link>
      </div>

      {/* Main product showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Gallery Image (Left 6 Cols) */}
        <div className="lg:col-span-6 relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-50">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Info Right (6 Cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <SectionLabel variant="green">Droplet.co {product.category}</SectionLabel>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111] leading-tight">
              {product.title}
            </h1>
            <p className="text-base text-gray-600 font-sans leading-relaxed">
              {product.shortInfo}
            </p>
          </div>

          {/* Pricing */}
          <div className="flex items-baseline gap-3 p-4 bg-white rounded-2xl border border-gray-200/80 w-fit">
            {product.price && (
              <span className="font-serif text-3xl font-bold text-[#111111]">₹{product.price}</span>
            )}
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00A859] bg-[#00A859]/10 px-2.5 py-1 rounded-full">
              Handcrafted Limited Edition
            </span>
          </div>

          {/* Order Action (Modal Trigger) */}
          <div className="space-y-3 pt-2">
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
              className="w-full bg-[#00A859] hover:bg-[#00924d] text-white font-semibold py-4 px-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 text-base sm:text-lg active:scale-[0.98]"
            >
              <ShoppingBag className="w-5 h-5 shrink-0" />
              <span>Order Now</span>
            </button>
            <p className="text-xs text-gray-500 text-center font-sans">
              Direct shipping and fulfillment via Mazhathulli & Droplet.co.
            </p>
          </div>

          {/* Product Specs */}
          {product.specs && product.specs.length > 0 && (
            <div className="p-6 bg-white rounded-2xl border border-gray-200/80 space-y-3">
              <h3 className="font-serif text-lg font-bold text-[#111111] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00A859]" />
                Product Specifications
              </h3>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="border-b border-gray-100 pb-2">
                    <dt className="text-gray-400 font-sans uppercase tracking-wider text-[10px]">
                      {spec.label}
                    </dt>
                    <dd className="font-semibold text-gray-800 font-sans">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {/* Description */}
          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-[#111111]">Craft & Details</h3>
            <p className="text-sm text-gray-700 font-sans leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
