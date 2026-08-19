import React from 'react';
import { Container } from '@/components/common/Container';
import { PrimaryButton } from '@/components/common/PrimaryButton';
import { SecondaryButton } from '@/components/common/SecondaryButton';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#111111] via-[#108BB9] to-[#00A859] text-white relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

      <Container size="narrow">
        <div className="text-center space-y-8 relative z-10">
          <span className="px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-white/10 backdrop-blur-md border border-white/20 inline-block text-white/90">
            JOIN MAZHATHULLI
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Every story begins somewhere.
          </h2>

          <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-sans max-w-xl mx-auto">
            Whether you are looking to publish your manuscript, hone your writing craft, explore curated books, or collaborate — we are here.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton href="/books" size="lg" variant="white">
              Explore Publications
            </PrimaryButton>
            <SecondaryButton href="/courses" size="lg" variant="white">
              Join a Course
            </SecondaryButton>
            <WhatsAppButton
              type="general"
              size="lg"
              variant="solid"
              label="Talk to Us on WhatsApp"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
