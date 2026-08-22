'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { JournalArticle } from '@/types';
import { SectionLabel } from '@/components/common/SectionLabel';
import { ArrowLeft, Clock, Share2, Check, MessageCircle, Feather, UserCheck } from 'lucide-react';

interface ArticleContentProps {
  article: JournalArticle;
  className?: string;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ article, className = '' }) => {
  const [copied, setCopied] = useState(false);

  // Check if content or title contains Malayalam script
  const isMalayalam =
    /[\u0D00-\u0D7F]/.test(article.title) ||
    article.content.some((text) => /[\u0D00-\u0D7F]/.test(text));

  const isPoem = article.category === 'Poem';

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
        `Read "${article.title}" on Mazhathulli Web Magazine: ${window.location.href}`
      )}`;
      window.open(url, '_blank');
    }
  };

  if (isMalayalam) {
    /* Special Malayalam Text Layout (Matching Reference Design) */
    return (
      <article className={`max-w-4xl mx-auto space-y-8 ${className}`}>
        {/* Top back navigation */}
        <div>
          <Link
            href="/web-magazine"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#D92B27] font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ബാക്ക് ടു വെബ് മാഗസിൻ (Web Magazine)</span>
          </Link>
        </div>

        {/* Paper Container matching screenshot styling */}
        <div className="bg-[#FAF5EF] border border-[#EBE3D5] rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm space-y-8">
          {/* Top Hero Cover Image Container */}
          <div className="relative w-full h-[320px] sm:h-[450px] rounded-2xl overflow-hidden shadow-sm border border-amber-950/10 bg-[#F5EFE6]">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>

          {/* Meta Info Row: Pill Badge on Left, Date & Read time on Right */}
          <div className="flex items-center justify-between pt-2 border-b border-[#E5DAC8] pb-4">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#D92B27] bg-white border border-[#D92B27]/30 rounded-md shadow-2xs font-malayalam">
              {article.category}
            </span>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#665E55] font-sans tracking-wide">
              <span>{article.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#D92B27]" />
                {article.readTime}
              </span>
            </div>
          </div>

          {/* Headline / Title in Bold Crimson Red */}
          <h1 className="font-malayalam font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-[#D92B27] leading-[1.35] sm:leading-[1.3] tracking-tight">
            {article.title}
          </h1>

          {/* Highlight Lead Box / First Excerpt Block (Matching Screenshot) */}
          {article.excerpt && (
            <div className="bg-[#FDF2F0] border-l-4 border-[#D92B27] p-5 sm:p-7 rounded-r-2xl text-base sm:text-lg text-[#2B2623] font-malayalam leading-[1.95] shadow-2xs">
              {article.excerpt}
            </div>
          )}

          {/* Main Malayalam Article Body */}
          <div className="space-y-6 sm:space-y-8 font-malayalam text-[#1F1C19] text-base sm:text-lg md:text-[19px] leading-[1.95] tracking-normal whitespace-pre-line">
            {article.content.map((paragraph, index) => {
              if (index === 0 && !article.excerpt) {
                return (
                  <div
                    key={index}
                    className="bg-[#FDF2F0] border-l-4 border-[#D92B27] p-5 sm:p-7 rounded-r-2xl text-base sm:text-lg text-[#2B2623] font-malayalam leading-[1.95] shadow-2xs"
                  >
                    {paragraph}
                  </div>
                );
              }
              return (
                <p key={index} className="text-[#1F1C19] leading-[1.95] font-normal">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Author Brief Box at Bottom */}
          {article.author && (
            <div className="mt-10 pt-8 border-t border-[#E5DAC8] flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-amber-900/10 shadow-2xs">
              {article.author.avatar && (
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-[#D92B27]/30 shadow-xs">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="space-y-1.5 flex-grow font-malayalam">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D92B27]">
                  <UserCheck className="w-4 h-4" />
                  <span>കവി / ലേഖക വിവരണം (Author Brief)</span>
                </div>
                <h4 className="font-bold text-xl text-[#111111]">
                  {article.author.name}
                </h4>
                {article.author.bio && (
                  <p className="text-sm text-[#443E38] leading-relaxed">
                    {article.author.bio}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Share Actions */}
          <div className="pt-6 border-t border-[#E5DAC8] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider font-sans">
              Share this Malayalam piece
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={shareWhatsApp}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#00A859] hover:bg-[#00924d] rounded-xl transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-gray-800 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl transition-all shadow-xs"
              >
                {copied ? <Check className="w-4 h-4 text-[#00A859]" /> : <Share2 className="w-4 h-4" />}
                <span>{copied ? 'Link Copied' : 'Copy Link'}</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }

  /* Standard English Article Layout */
  return (
    <article className={`max-w-4xl mx-auto space-y-10 ${className}`}>
      {/* Top back navigation */}
      <div>
        <Link
          href="/web-magazine"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#0098DA] font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Web Magazine</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-6 text-center md:text-left">
        <SectionLabel variant={isPoem ? 'green' : 'blue'}>{article.category}</SectionLabel>

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
              {article.author.bio && (
                <span className="text-xs text-gray-500 line-clamp-1">{article.author.bio}</span>
              )}
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

      {/* Hero Cover Image */}
      <div className="relative w-full h-[360px] sm:h-[480px] rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 900px"
        />
      </div>

      {/* Body Content */}
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

      {/* Author Brief Box */}
      {article.author.bio && (
        <div className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-5">
          {article.author.avatar && (
            <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-[#0098DA]/30 shadow-md">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="space-y-1.5 flex-grow">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0098DA]">
              <UserCheck className="w-4 h-4" />
              <span>About the Author</span>
            </div>
            <h4 className="font-serif text-xl font-bold text-[#111111]">
              {article.author.name}
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed font-sans">
              {article.author.bio}
            </p>
          </div>
        </div>
      )}

      {/* Article Footer & Share */}
      <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Share this piece
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
