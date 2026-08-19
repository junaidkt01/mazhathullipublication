'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { BOOKS_DATA } from '@/data/books';
import { useOrderModal } from '@/context/OrderContext';

export const ReadersFavourites: React.FC = () => {
  const { openOrderModal } = useOrderModal();
  const spotlightBook = BOOKS_DATA[0];
  const secondaryBooks = BOOKS_DATA.slice(1, 4);

  return (
    <section className="py-20 bg-[#F4F5F2] border-y border-gray-200/80">
      <Container>
        <SectionHeading
          eyebrow="CURATED SPOTLIGHT"
          title="Readers' Favourites"
          description="Hand-picked works that have deeply touched our community of literature enthusiasts."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Large Editorial Card (7 Cols) */}
          {spotlightBook && (
            <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-lg flex flex-col md:flex-row">
              <Link href={`/books/${spotlightBook.slug}`} className="relative w-full md:w-1/2 h-72 md:h-auto bg-[#FAF9F6] border-r border-gray-100 flex items-center justify-center shrink-0">
                <Image
                  src={spotlightBook.cover}
                  alt={spotlightBook.title}
                  fill
                  className="object-contain p-4 drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold bg-[#111111] text-white rounded-full">
                  #1 Readers Choice
                </span>
              </Link>

              <div className="p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="text-xs font-semibold text-[#0098DA] uppercase tracking-wider">
                    {spotlightBook.category} • {spotlightBook.language}
                  </span>
                  <Link href={`/books/${spotlightBook.slug}`}>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] hover:text-[#0098DA] transition-colors leading-tight">
                      {spotlightBook.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-gray-500 font-sans">By {spotlightBook.author}</p>
                  <p className="text-sm text-gray-600 font-sans leading-relaxed line-clamp-3">
                    {spotlightBook.description || spotlightBook.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="font-serif text-2xl font-bold text-[#111111]">₹{spotlightBook.price}</span>
                  <button
                    onClick={() => openOrderModal({ ...spotlightBook, type: 'book' })}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#00A859] hover:bg-[#00924d] rounded-xl shadow-md transition-all active:scale-[0.98]"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Order Book</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 2-3 Smaller Books (5 Cols Stack) */}
          <div className="lg:col-span-5 flex flex-col space-y-4 justify-between">
            {secondaryBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-sm flex items-center gap-4 hover:border-[#0098DA]/40 transition-all group"
              >
                <Link href={`/books/${book.slug}`} className="relative w-20 h-28 rounded-lg overflow-hidden shrink-0 bg-[#FAF9F6] border border-gray-200/80 flex items-center justify-center">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    className="object-contain p-1 drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <div className="flex-grow space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#0098DA]">
                    {book.category}
                  </span>
                  <Link href={`/books/${book.slug}`}>
                    <h4 className="font-serif text-lg font-bold text-[#111111] group-hover:text-[#0098DA] transition-colors leading-snug line-clamp-1">
                      {book.title}
                    </h4>
                  </Link>
                  <span className="text-xs text-gray-500 block font-sans">By {book.author}</span>
                  <div className="pt-2 flex items-center justify-between">
                    <span className="font-serif font-bold text-sm text-[#111111]">₹{book.price}</span>
                    <button
                      onClick={() => openOrderModal({ ...book, type: 'book' })}
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#00A859] hover:bg-[#00A859]/10 rounded-lg transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
