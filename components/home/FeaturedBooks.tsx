import React from 'react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { BookGrid } from '@/components/books/BookGrid';
import { ArrowButton } from '@/components/common/ArrowButton';
import { BOOKS_DATA } from '@/data/books';

export const FeaturedBooks: React.FC = () => {
  const featuredBooks = BOOKS_DATA.filter((b) => b.isFeatured).slice(0, 6);

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <SectionHeading
            eyebrow="PUBLISHING CATALOGUE"
            title="Featured Publications"
            description="Explore acclaimed Malayalam novels, poetry collections, essays, and children's titles."
            className="mb-0"
          />
          <div className="mt-4 md:mt-0">
            <ArrowButton href="/books" variant="blue">
              View All Books ({BOOKS_DATA.length})
            </ArrowButton>
          </div>
        </div>

        <BookGrid books={featuredBooks} />
      </Container>
    </section>
  );
};
