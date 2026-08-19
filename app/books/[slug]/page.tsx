import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageContainer } from '@/components/layout/PageContainer';
import { Container } from '@/components/common/Container';
import { BookDetails } from '@/components/books/BookDetails';
import { RelatedBooks } from '@/components/books/RelatedBooks';
import { BOOKS_DATA } from '@/data/books';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BOOKS_DATA.map((book) => ({
    slug: book.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = BOOKS_DATA.find((b) => b.slug === slug);

  if (!book) {
    return {
      title: 'Book Not Found',
    };
  }

  return {
    title: `${book.title} by ${book.author}`,
    description: book.summary || book.description?.slice(0, 160),
    openGraph: {
      title: book.title,
      description: book.summary,
      images: [{ url: book.cover }],
    },
  };
}

export default async function BookDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const book = BOOKS_DATA.find((b) => b.slug === slug);

  if (!book) {
    notFound();
  }

  return (
    <PageContainer>
      <Container>
        <BookDetails book={book} />
        <RelatedBooks currentBookId={book.id} category={book.category} books={BOOKS_DATA} className="mt-16" />
      </Container>
    </PageContainer>
  );
}
