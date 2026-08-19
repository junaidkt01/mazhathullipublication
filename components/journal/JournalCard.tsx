import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { JournalArticle } from '@/types';
import { Clock } from 'lucide-react';

interface JournalCardProps {
  article: JournalArticle;
  className?: string;
}

export const JournalCard: React.FC<JournalCardProps> = ({ article, className = '' }) => {
  return (
    <article className={`group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#0098DA]/40 transition-all duration-300 ${className}`}>
      {/* Cover Image */}
      <Link href={`/journal/${article.slug}`} className="relative h-56 w-full overflow-hidden bg-gray-100 block">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#111111] text-white rounded-md shadow-sm">
            {article.category}
          </span>
        </div>
      </Link>

      {/* Article Content */}
      <div className="flex flex-col flex-grow p-6 justify-between space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs text-gray-500 font-sans">
            <span>{article.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#0098DA]" />
              {article.readTime}
            </span>
          </div>

          <Link href={`/journal/${article.slug}`}>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] group-hover:text-[#0098DA] transition-colors leading-snug line-clamp-2">
              {article.title}
            </h3>
          </Link>

          <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed font-sans">
            {article.excerpt}
          </p>
        </div>

        {/* Author Footer */}
        <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
          {article.author.avatar && (
            <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-gray-200">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <span className="text-xs font-semibold text-gray-800">{article.author.name}</span>
        </div>
      </div>
    </article>
  );
};

interface FeaturedStoryProps {
  article: JournalArticle;
  className?: string;
}

export const FeaturedStory: React.FC<FeaturedStoryProps> = ({ article, className = '' }) => {
  return (
    <article className={`group relative bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
        {/* Cover image left (7 cols) */}
        <Link href={`/journal/${article.slug}`} className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[420px] w-full overflow-hidden block">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#0098DA] text-white rounded-full shadow-md">
              Featured Essay
            </span>
          </div>
        </Link>

        {/* Right Content (5 cols) */}
        <div className="lg:col-span-5 p-8 sm:p-10 space-y-5">
          <div className="flex items-center gap-3 text-xs text-gray-500 font-sans">
            <span className="font-semibold text-[#00A859] uppercase tracking-wider">{article.category}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>

          <Link href={`/journal/${article.slug}`}>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] group-hover:text-[#0098DA] transition-colors leading-tight">
              {article.title}
            </h2>
          </Link>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans line-clamp-3">
            {article.excerpt}
          </p>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {article.author.avatar && (
                <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 border border-gray-200">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <span className="text-xs font-bold text-gray-900">{article.author.name}</span>
            </div>
            <Link
              href={`/journal/${article.slug}`}
              className="text-xs font-semibold text-[#0098DA] hover:underline"
            >
              Read Essay →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
