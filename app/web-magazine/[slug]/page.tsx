import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageContainer } from '@/components/layout/PageContainer';
import { Container } from '@/components/common/Container';
import { ArticleContent } from '@/components/journal/ArticleContent';
import { JournalGrid } from '@/components/journal/JournalGrid';
import { SectionHeading } from '@/components/common/SectionHeading';
import { JOURNAL_ARTICLES } from '@/data/journal';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return JOURNAL_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return { title: 'Piece Not Found' };
  }

  return {
    title: `${article.title} | Mazhathulli Web Magazine`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.coverImage }],
    },
  };
}

export default async function WebMagazineArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const related = JOURNAL_ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <PageContainer>
      <Container>
        <ArticleContent article={article} />

        {/* Related Works */}
        {related.length > 0 && (
          <div className="pt-16 mt-16 border-t border-gray-200">
            <SectionHeading
              eyebrow="MORE FROM WEB MAGAZINE"
              title="Related Stories & Poems"
            />
            <JournalGrid articles={related} />
          </div>
        )}
      </Container>
    </PageContainer>
  );
}
