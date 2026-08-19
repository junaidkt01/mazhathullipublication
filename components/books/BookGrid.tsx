'use client';

import React from 'react';
import { Book } from '@/types';
import { BookCard } from './BookCard';
import { EmptyState } from '@/components/common/EmptyState';
import { ScrollReveal } from '@/components/common/ScrollReveal';

interface BookGridProps {
  books: Book[];
  variant?: 'default' | 'compact';
  className?: string;
  emptyTitle?: string;
  emptyDescription?: string;
}

export const BookGrid: React.FC<BookGridProps> = ({
  books,
  variant = 'default',
  className = '',
  emptyTitle,
  emptyDescription,
}) => {
  if (!books || books.length === 0) {
    return (
      <EmptyState
        title={emptyTitle || 'No books matched your criteria'}
        description={emptyDescription || 'Try searching for a different title or author, or clear selected category filters.'}
        icon="books"
      />
    );
  }

  const gridCols =
    variant === 'compact'
      ? 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      : 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={`grid gap-2 sm:gap-8 ${gridCols} ${className}`}>
      {books.map((book, idx) => (
        <ScrollReveal key={book.id} delay={Math.min(idx * 0.08, 0.4)} direction="up" distance={30}>
          <BookCard book={book} variant={variant} />
        </ScrollReveal>
      ))}
    </div>
  );
};
