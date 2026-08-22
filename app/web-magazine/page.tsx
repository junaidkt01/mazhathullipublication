'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { PageContainer } from '@/components/layout/PageContainer';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { FeaturedStory } from '@/components/journal/JournalCard';
import { JournalGrid, JournalCategories } from '@/components/journal/JournalGrid';
import { JOURNAL_ARTICLES } from '@/data/journal';

const CATEGORIES = ['All', 'Book review', 'Stories', 'Poem', 'Memoir', 'Interviews', 'Cinema'];

function WebMagazineContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState<string>(() => {
    if (categoryParam && CATEGORIES.includes(categoryParam)) {
      return categoryParam;
    }
    return 'All';
  });

  // Sync category if searchParams change
  React.useEffect(() => {
    if (categoryParam && CATEGORIES.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const featured = JOURNAL_ARTICLES.find((a) => a.isFeatured) || JOURNAL_ARTICLES[0];

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'All') {
      return JOURNAL_ARTICLES.filter((a) => a.id !== featured.id);
    }
    return JOURNAL_ARTICLES.filter(
      (a) => a.category === selectedCategory && a.id !== featured.id
    );
  }, [selectedCategory, featured.id]);

  return (
    <PageContainer>
      {/* Magazine Hero */}
      <section className="pb-8 bg-gradient-to-b from-[#FAF9F6] to-white">
        <Container>
          <SectionHeading
            eyebrow="MAZHATHULLI CULTURAL PUBLICATIONS"
            title="Web Magazine"
            description="A curated digital sanctuary for Malayalam literature, original poetry, short fiction, book reviews, personal memoirs, author interviews, and cinema retrospectives."
          />

          {/* Featured Poem / Story */}
          {featured && <FeaturedStory article={featured} />}
        </Container>
      </section>

      {/* Catalogue Grid */}
      <section className="py-16 bg-white border-t border-gray-200/80">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
              {selectedCategory === 'All' ? 'All Magazine Features' : `${selectedCategory} Catalogue`}
            </h2>
            <JournalCategories
              categories={CATEGORIES}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>

          <JournalGrid articles={filteredArticles} />
        </Container>
      </section>
    </PageContainer>
  );
}

export default function WebMagazinePage() {
  return (
    <Suspense fallback={
      <PageContainer>
        <Container className="py-20 text-center">
          <div className="animate-pulse text-[#0098DA] font-medium">Loading Web Magazine...</div>
        </Container>
      </PageContainer>
    }>
      <WebMagazineContent />
    </Suspense>
  );
}
