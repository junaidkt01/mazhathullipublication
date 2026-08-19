'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Book } from '@/types';
import { BookMeta } from './BookMeta';
import { SectionLabel } from '@/components/common/SectionLabel';
import { ArrowLeft, ShieldCheck, Truck, BookCheck, ShoppingBag } from 'lucide-react';
import { useOrderModal } from '@/context/OrderContext';

interface BookDetailsProps {
  book: Book;
  className?: string;
}

export const BookDetails: React.FC<BookDetailsProps> = ({ book, className = '' }) => {
  const { openOrderModal } = useOrderModal();

  return (
    <div className={`space-y-12 ${className}`}>
      {/* Back button */}
      <div>
        <Link
          href="/books"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#0098DA] font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Publications Catalogue</span>
        </Link>
      </div>

      {/* Main Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Cover Art (Left 5 Cols) */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-gray-200/80 bg-[#FAF9F6] p-4 flex items-center justify-center group">
            <Image
              src={book.cover}
              alt={book.title}
              fill
              className="object-contain p-2 drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)] transition-transform duration-700 group-hover:scale-105"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            {book.isBestseller && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[#111111] text-white rounded-full shadow-md">
                  Mazhathulli Spotlight
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Content & Actions (Right 7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <SectionLabel variant="blue">{book.category}</SectionLabel>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-tight">
              {book.title}
            </h1>
            <p className="text-base sm:text-lg text-[#0098DA] font-semibold font-sans">
              By {book.author}
            </p>
          </div>

          {/* Pricing */}
          <div className="flex items-baseline gap-3 p-4 bg-white rounded-xl border border-gray-200/80 w-fit">
            {book.price && (
              <span className="font-serif text-3xl font-bold text-[#111111]">₹{book.price}</span>
            )}
            {book.originalPrice && (
              <span className="text-base text-gray-400 line-through">₹{book.originalPrice}</span>
            )}
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00A859] bg-[#00A859]/10 px-2.5 py-1 rounded-full">
              Direct Publishing Price
            </span>
          </div>

          {/* Primary Action (Order Modal Trigger) */}
          <div className="space-y-3 pt-2">
            <button
              onClick={() => openOrderModal({ ...book, type: 'book' })}
              className="w-full bg-[#00A859] hover:bg-[#00924d] text-white font-semibold py-4 px-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 text-base sm:text-lg active:scale-[0.98]"
            >
              <ShoppingBag className="w-5 h-5 shrink-0" />
              <span>Order Book</span>
            </button>
            <p className="text-xs text-gray-500 text-center font-sans">
              Orders are fulfilled directly by Mazhathulli Publishing House with pan-India delivery.
            </p>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <ShieldCheck className="w-4 h-4 text-[#00A859] shrink-0" />
              <span>Authentic Original Edition</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <Truck className="w-4 h-4 text-[#0098DA] shrink-0" />
              <span>Pan-India Courier Shipping</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <BookCheck className="w-4 h-4 text-[#108BB9] shrink-0" />
              <span>Author Signed Copies Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications Table */}
      <BookMeta book={book} />

      {/* Detailed Description & About Author */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-6">
        <div className="lg:col-span-8 space-y-6">
          <h2 className="font-serif text-2xl font-bold text-[#111111]">About the Book</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-line font-sans">
            {book.description || book.summary}
          </p>
        </div>

        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
          <h3 className="font-serif text-xl font-bold text-[#111111]">About the Author</h3>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0098DA] to-[#00A859] text-white flex items-center justify-center font-serif text-xl font-bold">
              {book.author.charAt(0)}
            </div>
            <div>
              <span className="font-bold text-gray-900 block">{book.author}</span>
              <span className="text-xs text-[#0098DA]">Mazhathulli Author</span>
            </div>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed font-sans">
            {book.author} is a distinguished voice in contemporary Malayalam literature, published exclusively through Mazhathulli Press.
          </p>
        </div>
      </div>
    </div>
  );
};
