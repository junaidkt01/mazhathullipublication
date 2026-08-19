import React from 'react';
import { Book } from '@/types';
import { BookCard } from './BookCard';
import { SectionHeading } from '@/components/common/SectionHeading';

interface RelatedBooksProps {
  currentBookId: string;
  category?: string;
  books: Book[];
  className?: string;
}

export const RelatedBooks: React.FC<RelatedBooksProps> = ({
  currentBookId,
  category,
  books,
  className = '',
}) => {
  const related = books
    .filter((b) => b.id !== currentBookId && (!category || b.category === category))
    .slice(0, 3);

  const fallback = books.filter((b) => b.id !== currentBookId).slice(0, 3);
  const displayBooks = related.length >= 2 ? related : fallback;

  if (displayBooks.length === 0) return null;

  return (
    <div className={`pt-12 border-t border-gray-200 ${className}`}>
      <SectionHeading
        eyebrow="More Publications"
        title="Related Books & Poetry"
        description="Explore other acclaimed titles from Mazhathulli publishing house."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {displayBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};
