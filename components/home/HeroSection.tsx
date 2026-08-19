'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { PrimaryButton } from '@/components/common/PrimaryButton';
import { SecondaryButton } from '@/components/common/SecondaryButton';
import { SectionLabel } from '@/components/common/SectionLabel';
import { AnimatedText } from '@/components/common/AnimatedText';
import { BOOKS_DATA } from '@/data/books';

export const HeroSection: React.FC = () => {
  const heroBooks = BOOKS_DATA.slice(0, 3);

  return (
    <section className="relative pt-8 pb-20 md:py-24 bg-gradient-to-b from-[#FAF9F6] via-white to-[#F4F5F2] overflow-hidden">
      {/* Subtle Background Radial Water Motif */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0098DA]/10 to-[#00A859]/10 rounded-full blur-3xl -z-10 pointer-events-none transform translate-x-1/3 -translate-y-1/4" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Editorial Copy (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <SectionLabel variant="blue">LITERARY HOUSE & COMMUNITY</SectionLabel>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-[#111111] leading-[1.08] tracking-tight">
              Stories that stay long after the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0098DA] to-[#00A859]">last page.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-sans max-w-2xl">
              Mazhathulli is a home for Malayalam literature, independent publishing, creative writing masterclasses, annual awards, and curated arts.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <PrimaryButton href="/books" size="lg" variant="blue">
                Explore Publications
              </PrimaryButton>
              <SecondaryButton href="/about" size="lg" variant="dark">
                Discover Our Story →
              </SecondaryButton>
            </div>

            {/* Quick Metrics */}
            <div className="pt-8 border-t border-gray-200/80 grid grid-cols-3 gap-6 text-left font-sans">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] block">40+</span>
                <span className="text-xs text-gray-500 font-medium">Published Titles</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#00A859] block">1,200+</span>
                <span className="text-xs text-gray-500 font-medium">Academy Writers</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#0098DA] block">4 Years</span>
                <span className="text-xs text-gray-500 font-medium">Literary Honors</span>
              </div>
            </div>
          </div>

          {/* Right Layered Book Composition (5 Cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
            <div className="relative w-full max-w-md aspect-[4/5] flex items-center justify-center">
              {/* Background Glow */}
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-[#0098DA]/20 to-[#00A859]/20 blur-xl transform rotate-3 scale-95" />

              {/* Book 1 (Back Left tilted) */}
              <motion.div
                initial={{ rotate: -12, x: -40, opacity: 0 }}
                animate={{ rotate: -8, x: -35, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute w-44 sm:w-52 h-64 sm:h-76 rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-[#FAF9F6] flex items-center justify-center"
              >
                <Image
                  src={heroBooks[0]?.cover || 'https://images.unsplash.com/photo-1544947950-fa07a98d237f'}
                  alt="Mazhathulli Publication"
                  fill
                  className="object-contain p-2 drop-shadow-md"
                />
              </motion.div>

              {/* Book 2 (Back Right tilted) */}
              <motion.div
                initial={{ rotate: 12, x: 40, opacity: 0 }}
                animate={{ rotate: 8, x: 35, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute w-44 sm:w-52 h-64 sm:h-76 rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-[#FAF9F6] flex items-center justify-center"
              >
                <Image
                  src={heroBooks[1]?.cover || 'https://images.unsplash.com/photo-1512820790803-83ca734da794'}
                  alt="Mazhathulli Publication"
                  fill
                  className="object-contain p-2 drop-shadow-md"
                />
              </motion.div>

              {/* Book 3 (Center Front Elevated) */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative z-10 w-48 sm:w-56 h-72 sm:h-84 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/90 bg-[#FAF9F6] flex items-center justify-center transform hover:scale-105 transition-transform duration-500"
              >
                <Image
                  src={heroBooks[2]?.cover || 'https://images.unsplash.com/photo-1532012197267-da84d127e765'}
                  alt="Featured Mazhathulli Novel"
                  fill
                  className="object-contain p-3 drop-shadow-lg"
                  priority
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md p-2.5 rounded-lg text-center shadow-md">
                  <span className="text-[10px] uppercase font-bold text-[#0098DA] block">Featured Release</span>
                  <span className="text-xs font-serif font-bold text-[#111111] truncate block">
                    {heroBooks[2]?.title || 'Mazhavillinte Niram'}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
