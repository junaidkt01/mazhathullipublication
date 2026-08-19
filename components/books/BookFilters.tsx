'use client';

import React from 'react';

export type BookCategoryFilter = 'All' | 'Fiction' | 'Poetry' | 'Novel' | 'Children\'s' | 'Essays' | 'Others';
export type BookSortOption = 'newest' | 'popular' | 'price-asc' | 'price-desc';

interface BookFiltersProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  selectedSort: BookSortOption;
  onSelectSort: (sort: BookSortOption) => void;
  categories?: string[];
  className?: string;
}

const DEFAULT_CATEGORIES = ['All', 'Fiction', 'Poetry', 'Novel', 'Children\'s', 'Essays', 'Others'];

export const BookFilters: React.FC<BookFiltersProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedSort,
  onSelectSort,
  categories = DEFAULT_CATEGORIES,
  className = '',
}) => {
  return (
    <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 border-b border-gray-200/80 ${className}`}>
      {/* Category Chips */}
      <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? 'bg-[#111111] text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Sorting Select */}
      <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
        <label htmlFor="book-sort" className="text-xs text-gray-500 font-medium">
          Sort by:
        </label>
        <select
          id="book-sort"
          value={selectedSort}
          onChange={(e) => onSelectSort(e.target.value as BookSortOption)}
          className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0098DA]/50 focus:border-[#0098DA]"
        >
          <option value="newest">Newest First</option>
          <option value="popular">Popular & Bestsellers</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};
