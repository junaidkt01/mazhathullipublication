'use client';

import React, { useState, useMemo } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { BookSearch } from '@/components/books/BookSearch';
import { BookFilters, BookSortOption } from '@/components/books/BookFilters';
import { BookGrid } from '@/components/books/BookGrid';
import { BOOKS_DATA } from '@/data/books';

export default function BooksPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState<BookSortOption>('newest');

  const filteredBooks = useMemo(() => {
    let result = [...BOOKS_DATA];

    // Filter by Category
    if (selectedCategory !== 'All') {
      result = result.filter((b) => b.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q) ||
          (b.summary && b.summary.toLowerCase().includes(q))
      );
    }

    // Sort
    switch (selectedSort) {
      case 'popular':
        result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
        break;
      case 'price-asc':
        result.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case 'price-desc':
        result.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case 'newest':
      default:
        // Keep order or sort by published date
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, selectedSort]);

  return (
    <PageContainer>
      {/* Books Hero Header */}
      <section className="pb-8 bg-gradient-to-b from-[#FAF9F6] to-white">
        <Container>
          <SectionHeading
            eyebrow="PUBLICATIONS CATALOGUE"
            title="Our Books"
            description="Explore Mazhathulli's collection of contemporary Malayalam fiction, poetry anthologies, children's literature, and critical essays."
          />

          <div className="max-w-xl">
            <BookSearch value={searchQuery} onChange={setSearchQuery} />
          </div>

          <BookFilters
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            selectedSort={selectedSort}
            onSelectSort={setSelectedSort}
            className="mt-6"
          />
        </Container>
      </section>

      {/* Main Books Grid */}
      <section className="py-12 bg-white min-h-[500px]">
        <Container>
          <div className="flex items-center justify-between pb-6 text-xs text-gray-500 font-medium">
            <span>Showing {filteredBooks.length} of {BOOKS_DATA.length} publications</span>
            {selectedCategory !== 'All' && <span>Category: {selectedCategory}</span>}
          </div>

          <BookGrid books={filteredBooks} />
        </Container>
      </section>
    </PageContainer>
  );
}
