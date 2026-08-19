import React from 'react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CategoryShowcase } from '@/components/droplet/CategoryShowcase';
import { ArrowButton } from '@/components/common/ArrowButton';

export const DropletPreview: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF9F6] border-b border-gray-200/80">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <SectionHeading
            eyebrow="DROPLET.CO CURATED STORE"
            title="More than books."
            description="Curated indie press books, archival typography art frames, and handcrafted gifts worth keeping."
            className="mb-0"
          />
          <div className="mt-4 md:mt-0">
            <ArrowButton href="/droplet" variant="green">
              Explore Droplet.co Store →
            </ArrowButton>
          </div>
        </div>

        <CategoryShowcase />
      </Container>
    </section>
  );
};
