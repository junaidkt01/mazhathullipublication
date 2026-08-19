'use client';

import React from 'react';
import { JournalArticle } from '@/types';
import { JournalCard } from './JournalCard';
import { EmptyState } from '@/components/common/EmptyState';
import { ScrollReveal } from '@/components/common/ScrollReveal';

interface JournalGridProps {
  articles: JournalArticle[];
  className?: string;
}

export const JournalGrid: React.FC<JournalGridProps> = ({ articles, className = '' }) => {
  if (!articles || articles.length === 0) {
    return (
      <EmptyState
        title="No journal articles found"
        description="Try selecting a different literary category."
        icon="inbox"
      />
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
      {articles.map((article, idx) => (
        <ScrollReveal key={article.id} delay={Math.min(idx * 0.08, 0.4)} direction="up" distance={30}>
          <JournalCard article={article} />
        </ScrollReveal>
      ))}
    </div>
  );
};

interface JournalCategoriesProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  className?: string;
}

export const JournalCategories: React.FC<JournalCategoriesProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none ${className}`}>
      {categories.map((cat) => {
        const isActive = selectedCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
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
  );
};
