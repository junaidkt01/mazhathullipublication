'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, ShoppingCart, Check } from 'lucide-react';
import { Book } from '@/types';
import { useOrderModal } from '@/context/OrderContext';
import { useCart } from '@/context/CartContext';

interface BookCardProps {
  book: Book;
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
}

export const BookCard: React.FC<BookCardProps> = ({
  book,
  variant = 'default',
  className = '',
}) => {
  const { openOrderModal } = useOrderModal();
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const isCompact = variant === 'compact';
  const isFeatured = variant === 'featured';

  const handleAddToCart = () => {
    addToCart({
      id: book.id || book.slug,
      title: book.title,
      author: book.author,
      cover: book.cover,
      price: book.price,
      category: book.category,
      type: 'book',
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <div
      className={`group relative flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#0098DA]/40 transition-all duration-300 ${
        isFeatured ? 'md:flex-row md:items-center' : ''
      } ${className}`}
    >
      {/* Cover Image Container */}
      <Link
        href={`/books/${book.slug}`}
        className={`relative overflow-hidden bg-[#FAF9F6] border-b border-gray-100 block shrink-0 ${
          isCompact
            ? 'h-52 w-full'
            : isFeatured
            ? 'h-72 w-full md:w-1/2 md:h-80'
            : 'h-72 sm:h-80 w-full'
        }`}
      >
        <Image
          src={book.cover}
          alt={book.title}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_8px_16px_rgba(0,0,0,0.14)]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {book.isBestseller && (
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#111111] text-white rounded-md shadow-sm">
              Popular
            </span>
          )}
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#0098DA] rounded-md shadow-sm border border-gray-200">
            {book.category}
          </span>
        </div>
      </Link>

      {/* Book Content */}
      <div className="flex flex-col flex-grow p-5 sm:p-6 justify-between">
        <div>
          <span className="text-xs text-gray-500 font-sans uppercase tracking-wider block mb-1">
            {book.author}
          </span>

          <Link href={`/books/${book.slug}`}>
            <h3 className="font-serif text-lg sm:text-lg font-bold text-[#111111] leading-snug group-hover:text-[#0098DA] transition-colors line-clamp-2">
              {book.title}
            </h3>
          </Link>

          {book.summary && !isCompact && (
            <p className="mt-2 text-xs sm:text-sm text-[#555555] line-clamp-2 leading-relaxed font-sans">
              {book.summary}
            </p>
          )}
        </div>

        {/* Pricing & Order Actions */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
          <div className="flex flex-col shrink-0">
            {book.price ? (
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-lg sm:text-xl font-bold text-[#111111]">
                  ₹{book.price}
                </span>
              </div>
            ) : (
              <span className="text-xs font-semibold text-[#0098DA]">Catalogue Title</span>
            )}
            <span className="text-[10px] text-gray-400 font-sans">{book.language || 'Malayalam'}</span>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap sm:flex-nowrap justify-end">
            <button
              onClick={handleAddToCart}
              className={`inline-flex items-center justify-center gap-1 px-2.5 py-2 text-xs font-semibold rounded-lg border transition-all active:scale-[0.98] ${
                isAdded
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-[#0098DA] hover:text-[#0098DA]'
              }`}
              title="Add to Cart to order multiple books"
            >
              {isAdded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="hidden xs:inline">Added</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">Add Cart</span>
                </>
              )}
            </button>

            <button
              onClick={() => openOrderModal({ ...book, type: 'book' })}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#00A859] hover:bg-[#00924d] rounded-lg shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
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
