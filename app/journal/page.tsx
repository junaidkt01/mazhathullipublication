'use client';

import React, { useState, useMemo } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { FeaturedStory } from '@/components/journal/JournalCard';
import { JournalGrid, JournalCategories } from '@/components/journal/JournalGrid';
import { JOURNAL_ARTICLES } from '@/data/journal';

const CATEGORIES = ['All', 'Writing', 'Books', 'Authors', 'Courses', 'News'];

export default function JournalPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

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
      {/* Journal Hero */}
      <section className="pb-8 bg-gradient-to-b from-[#FAF9F6] to-white">
        <Container>
          <SectionHeading
            eyebrow="MAZHATHULLI LITERARY MAGAZINE"
            title="Journal"
            description="Reflections on storytelling craft, deep reading, Malayalam literature, author interviews, and publishing insights."
          />

          {/* Featured Essay */}
          {featured && <FeaturedStory article={featured} />}
        </Container>
      </section>

      {/* Main Articles Catalogue */}
      <section className="py-16 bg-white border-t border-gray-200/80">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
              Recent Articles & Essays
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
