import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ArrowButton } from '@/components/common/ArrowButton';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF9F6] border-y border-gray-200/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Asymmetric Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1000&q=80"
                alt="Reading & Publishing at Mazhathulli"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            {/* Overlay Quote Badge */}
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-[#111111] text-white p-6 rounded-2xl shadow-xl max-w-xs border border-white/10">
              <span className="font-serif italic text-lg leading-snug block text-white/90">
                "Literature is the quiet rain that refreshes human spirit."
              </span>
            </div>
          </div>

          {/* Right Copy */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="ABOUT MAZHATHULLI"
              title="A sanctuary for words, writers, and curious readers."
              description="Founded in Kerala, Mazhathulli operates at the intersection of independent book publishing, creative writing pedagogy, cultural honors, and artistic curation. We believe great stories require patience, respect, and meticulous craft."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm space-y-2">
                <span className="w-8 h-8 rounded-lg bg-[#0098DA]/10 text-[#0098DA] font-bold text-xs flex items-center justify-center">
                  01
                </span>
                <h4 className="font-serif text-lg font-bold text-[#111111]">Independent Publishing</h4>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  Crafting beautiful print books with elegant Malayalam typography and archival paper.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm space-y-2">
                <span className="w-8 h-8 rounded-lg bg-[#00A859]/10 text-[#00A859] font-bold text-xs flex items-center justify-center">
                  02
                </span>
                <h4 className="font-serif text-lg font-bold text-[#111111]">Writing Academy</h4>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  Nurturing emerging writers through structured workshops and mentor critiques.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <ArrowButton href="/about" variant="blue">
                Discover Our Full Story & Principles →
              </ArrowButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
