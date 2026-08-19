'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { JournalArticle } from '@/types';
import { SectionLabel } from '@/components/common/SectionLabel';
import { ArrowLeft, Clock, Share2, Check, MessageCircle } from 'lucide-react';

interface ArticleContentProps {
  article: JournalArticle;
  className?: string;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ article, className = '' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareWhatsApp = () => {
    if (typeof window !== 'undefined') {
      const url = `https://wa.me/?text=${encodeURIComponent(
        `Read "${article.title}" on Mazhathulli Journal: ${window.location.href}`
      )}`;
      window.open(url, '_blank');
    }
  };

  return (
    <article className={`max-w-4xl mx-auto space-y-10 ${className}`}>
      {/* Top back navigation */}
      <div>
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#0098DA] font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Journal</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-6 text-center md:text-left">
        <SectionLabel variant="blue">{article.category}</SectionLabel>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] leading-tight">
          {article.title}
        </h1>

        {/* Author & Reading Meta */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 border-y border-gray-200 py-4 text-sm font-sans text-gray-600">
          <div className="flex items-center gap-3">
            {article.author.avatar && (
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-gray-200">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <span className="font-bold text-gray-900 block">{article.author.name}</span>
              <span className="text-xs text-gray-500">{article.author.bio}</span>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-4 text-xs">
            <span>{article.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1 font-medium text-[#0098DA]">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative w-full h-[360px] sm:h-[480px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 900px"
        />
      </div>

      {/* Article Body */}
      <div className="prose prose-lg max-w-none text-gray-800 font-sans space-y-6 text-base sm:text-lg leading-relaxed">
        {article.content.map((paragraph, index) => {
          if (index === 1) {
            return (
              <blockquote
                key={index}
                className="my-8 p-6 sm:p-8 bg-[#0098DA]/5 border-l-4 border-[#0098DA] rounded-r-2xl font-serif italic text-xl sm:text-2xl text-[#111111] leading-relaxed"
              >
                "{paragraph}"
              </blockquote>
            );
          }
          return (
            <p key={index} className="text-gray-800 leading-loose">
              {paragraph}
            </p>
          );
        })}
      </div>

      {/* Article Footer & Share */}
      <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Share this article
        </span>
        <div className="flex items-center gap-3">
          <button
            onClick={shareWhatsApp}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-[#00A859] hover:bg-[#00924d] rounded-lg transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </button>
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-[#00A859]" /> : <Share2 className="w-4 h-4" />}
            <span>{copied ? 'Link Copied' : 'Copy Link'}</span>
          </button>
        </div>
      </div>
    </article>
  );
};
