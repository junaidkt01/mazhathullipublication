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
  const isMalayalam = /[\u0D00-\u0D7F]/.test(article.title);

  return (
    <article className={`group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#0098DA]/40 transition-all duration-300 ${className}`}>
      {/* Cover Image */}
      <Link href={`/web-magazine/${article.slug}`} className="relative h-56 w-full overflow-hidden bg-gray-100 block">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md shadow-sm text-white ${
            isMalayalam ? 'bg-[#D92B27]' : 'bg-[#111111]'
          }`}>
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

          <Link href={`/web-magazine/${article.slug}`}>
            <h3 className={`text-xl sm:text-2xl font-bold leading-snug line-clamp-2 transition-colors ${
              isMalayalam
                ? 'font-malayalam text-[#D92B27] group-hover:text-[#b81d1a]'
                : 'font-serif text-[#111111] group-hover:text-[#0098DA]'
            }`}>
              {article.title}
            </h3>
          </Link>

          <p className={`text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed ${
            isMalayalam ? 'font-malayalam' : 'font-sans'
          }`}>
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
          <span className={`text-xs font-semibold text-gray-800 ${isMalayalam ? 'font-malayalam' : 'font-sans'}`}>
            {article.author.name}
          </span>
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
  const isMalayalam = /[\u0D00-\u0D7F]/.test(article.title);

  return (
    <article className="group relative bg-[#FAF5EF] rounded-3xl overflow-hidden border border-[#EBE3D5] shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
        {/* Cover image left (7 cols) */}
        <Link href={`/web-magazine/${article.slug}`} className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[420px] w-full overflow-hidden block">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          <div className="absolute top-4 left-4">
            <span className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white rounded-full shadow-md ${
              isMalayalam ? 'bg-[#D92B27]' : 'bg-[#0098DA]'
            }`}>
              {isMalayalam ? 'പ്രത്യേക കവിത (Featured Work)' : 'Featured Story'}
            </span>
          </div>
        </Link>

        {/* Right Content (5 cols) */}
        <div className="lg:col-span-5 p-8 sm:p-10 space-y-5">
          <div className="flex items-center gap-3 text-xs text-gray-500 font-sans">
            <span className="font-semibold text-[#D92B27] uppercase tracking-wider">{article.category}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>

          <Link href={`/web-magazine/${article.slug}`}>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight transition-colors ${
              isMalayalam
                ? 'font-malayalam text-[#D92B27] group-hover:text-[#b81d1a]'
                : 'font-serif text-[#111111] group-hover:text-[#0098DA]'
            }`}>
              {article.title}
            </h2>
          </Link>

          <p className={`text-sm sm:text-base text-gray-700 leading-relaxed line-clamp-3 ${
            isMalayalam ? 'font-malayalam' : 'font-sans'
          }`}>
            {article.excerpt}
          </p>

          <div className="pt-4 border-t border-amber-900/10 flex items-center justify-between">
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
              <span className={`text-xs font-bold text-gray-900 ${isMalayalam ? 'font-malayalam' : 'font-sans'}`}>
                {article.author.name}
              </span>
            </div>
            <Link
              href={`/web-magazine/${article.slug}`}
              className={`text-xs font-bold hover:underline ${
                isMalayalam ? 'text-[#D92B27]' : 'text-[#0098DA]'
              }`}
            >
              {isMalayalam ? 'കവിത വായിക്കുക →' : 'Read Work →'}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
