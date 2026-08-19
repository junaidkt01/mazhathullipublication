import React from 'react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { JournalGrid } from '@/components/journal/JournalGrid';
import { ArrowButton } from '@/components/common/ArrowButton';
import { JOURNAL_ARTICLES } from '@/data/journal';

export const JournalPreview: React.FC = () => {
  const latestArticles = JOURNAL_ARTICLES.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <SectionHeading
            eyebrow="MAZHATHULLI JOURNAL"
            title="From the Journal"
            description="Essays on writing craft, literary culture, author conversations, and regional heritage."
            className="mb-0"
          />
          <div className="mt-4 md:mt-0">
            <ArrowButton href="/journal" variant="blue">
              Read Literary Journal →
            </ArrowButton>
          </div>
        </div>

        <JournalGrid articles={latestArticles} />
      </Container>
    </section>
  );
};
