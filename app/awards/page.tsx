'use client';

import React, { useState } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { AwardYearSelector } from '@/components/awards/AwardYearSelector';
import { AwardWinners } from '@/components/awards/AwardWinner';
import { AwardGallery } from '@/components/awards/AwardGallery';
import { AWARD_YEARS, AWARD_WINNERS, AWARD_GALLERY } from '@/data/awards';
import { Award, Calendar, MapPin } from 'lucide-react';

export default function AwardsPage() {
  const [selectedYear, setSelectedYear] = useState<string>('2026');

  const yearInfo = AWARD_YEARS.find((y) => y.year === selectedYear) || AWARD_YEARS[0];
  const yearWinners = AWARD_WINNERS.filter((w) => w.year === selectedYear);
  const yearGallery = AWARD_GALLERY.filter((g) => g.year === selectedYear || g.year === '2026');

  return (
    <PageContainer>
      {/* Awards Hero */}
      <section className="pb-8 bg-gradient-to-b from-[#FAF9F6] to-white">
        <Container>
          <SectionHeading
            eyebrow="MAZHATHULLI LITERARY FOUNDATION"
            title="Mazhathulli Awards"
            description="Celebrating creativity, literature, and the authors, poets, and scholars who illuminate our vernacular culture."
            align="center"
          />

          {/* Year Selector */}
          <AwardYearSelector
            years={['2026', '2025', '2024', '2023']}
            selectedYear={selectedYear}
            onSelectYear={setSelectedYear}
            className="mt-6"
          />
        </Container>
      </section>

      {/* Selected Year Spotlight */}
      <section className="py-12 bg-white border-y border-gray-200/80">
        <Container>
          {yearInfo && (
            <div className="bg-[#111111] text-white p-8 sm:p-12 rounded-3xl space-y-6 shadow-xl relative overflow-hidden mb-16">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 text-xs font-bold uppercase tracking-wider bg-[#00A859] text-white rounded-full">
                  {yearInfo.year} Edition
                </span>
                <span className="flex items-center gap-1.5 text-xs text-gray-300 font-sans">
                  <Calendar className="w-3.5 h-3.5 text-[#0098DA]" />
                  {yearInfo.ceremonyDate}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-gray-300 font-sans">
                  <MapPin className="w-3.5 h-3.5 text-[#00A859]" />
                  {yearInfo.venue}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                {yearInfo.theme}
              </h2>

              <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed max-w-3xl">
                {yearInfo.description}
              </p>
            </div>
          )}

          {/* Winners Section */}
          <div className="space-y-8 mb-16">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] flex items-center gap-3">
              <Award className="w-6 h-6 text-[#00A859]" />
              {selectedYear} Honor Recipients
            </h3>
            {/* <AwardWinners winners={yearWinners} /> */}
          </div>

          {/* Gallery Section */}
          <div className="space-y-8 pt-8 border-t border-gray-200">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
                Ceremony & Photo Gallery
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-sans mt-1">
                Click any image to open full-screen lightbox viewing.
              </p>
            </div>

            <AwardGallery items={yearGallery} />
          </div>
        </Container>
      </section>
    </PageContainer>
  );
}
