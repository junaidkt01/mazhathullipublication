'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { Book } from '@/types';
import { useOrderModal } from '@/context/OrderContext';

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
  const isCompact = variant === 'compact';
  const isFeatured = variant === 'featured';

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
          // className="object-contain p-3 sm:p-4 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_8px_16px_rgba(0,0,0,0.14)]"
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

        {/* Pricing & Order Action */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
          <div className="flex flex-col">
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

          <div className="flex items-center gap-2">
            <button
              onClick={() => openOrderModal({ ...book, type: 'book' })}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#00A859] hover:bg-[#00924d] rounded-lg shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
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
