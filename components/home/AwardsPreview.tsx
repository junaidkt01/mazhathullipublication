import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { PrimaryButton } from '@/components/common/PrimaryButton';
import { Award, Calendar, MapPin } from 'lucide-react';
import { AWARD_YEARS, AWARD_WINNERS } from '@/data/awards';

export const AwardsPreview: React.FC = () => {
  const currentYear = AWARD_YEARS[0];
  const topWinner = AWARD_WINNERS[0];

  return (
    <section className="py-24 bg-[#111111] text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0098DA]/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              eyebrow="MAZHATHULLI LITERARY AWARDS"
              title="Celebrating Words. Celebrating Writers."
              description="An annual independent honor dedicated to recognizing groundbreaking Malayalam novels, poetry collections, debut authors, and lifetime contributions."
              theme="dark"
              labelVariant="light"
            />

            {currentYear && (
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 backdrop-blur-md">
                <span className="text-xs font-bold text-[#00A859] uppercase tracking-wider block">
                  Current Edition — {currentYear.year}
                </span>
                <h4 className="font-serif text-xl font-bold text-white">{currentYear.theme}</h4>

                <div className="flex flex-wrap gap-4 text-xs text-gray-300 font-sans pt-2">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#0098DA]" />
                    {currentYear.ceremonyDate}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#00A859]" />
                    {currentYear.venue}
                  </span>
                </div>
              </div>
            )}

            <div className="pt-2">
              <PrimaryButton href="/awards" size="lg" variant="green">
                Explore Awards Archive & Gallery →
              </PrimaryButton>
            </div>
          </div>

          {/* Right Spotlight Image (6 Cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={currentYear?.coverImage || 'https://images.unsplash.com/photo-1511578314322-379afb476865'}
                alt="Mazhathulli Awards Ceremony"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {topWinner && (
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center gap-4">
                  <div className="p-2.5 rounded-full bg-[#00A859] text-white shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-300 block">
                      {topWinner.category} Winner
                    </span>
                    <span className="font-serif text-lg font-bold block">{topWinner.winnerName}</span>
                    <span className="text-xs text-gray-300 font-serif italic">"{topWinner.workTitle}"</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
