import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutPreview } from '@/components/home/AboutPreview';
import { FeaturedBooks } from '@/components/home/FeaturedBooks';
import { ReadersFavourites } from '@/components/home/ReadersFavourites';
import { CoursesPreview } from '@/components/home/CoursesPreview';
import { AwardsPreview } from '@/components/home/AwardsPreview';
import { DropletPreview } from '@/components/home/DropletPreview';
import { JournalPreview } from '@/components/home/JournalPreview';
import { Testimonials } from '@/components/home/Testimonials';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <PageContainer className="pt-20 sm:pt-24 pb-0">
      <HeroSection />
      <AboutPreview />
      <FeaturedBooks />
      <ReadersFavourites />
      <CoursesPreview />
      <AwardsPreview />
      <DropletPreview />
      <JournalPreview />
      <Testimonials />
      <FinalCTA />
    </PageContainer>
  );
}
