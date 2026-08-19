import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';

export default function TermsPage() {
  return (
    <PageContainer>
      <Container size="narrow">
        <SectionHeading
          eyebrow="LEGAL"
          title="Terms & Conditions"
          description="Last updated: January 2026"
        />

        <div className="prose prose-lg text-gray-700 font-sans space-y-6">
          <p>
            Welcome to <strong>Mazhathulli</strong>. By accessing or using our website, book catalogue, writing academy courses, awards archive, or Droplet.co store, you agree to comply with the following terms.
          </p>

          <h3 className="font-serif text-xl font-bold text-[#111111] pt-4">1. Copyright & Intellectual Property</h3>
          <p>
            All published Malayalam and English literary excerpts, book covers, artwork, calligraphy frames, typography, and original articles on Mazhathulli remain the exclusive intellectual property of Mazhathulli Publishing House and respective authors.
          </p>

          <h3 className="font-serif text-xl font-bold text-[#111111] pt-4">2. Enquiry & Order Process</h3>
          <p>
            All book and product orders are initiated via WhatsApp enquiry. Prices listed on the website are in Indian Rupees (₹) and subject to courier delivery options confirmed during WhatsApp consultation.
          </p>

          <h3 className="font-serif text-xl font-bold text-[#111111] pt-4">3. Academy & Workshops</h3>
          <p>
            Enrolment in Mazhathulli Creative Writing Academy courses grants the participant access to live sessions and study portal materials. Re-distribution or commercial re-sale of academy curriculum materials without prior written consent is strictly prohibited.
          </p>
        </div>
      </Container>
    </PageContainer>
  );
}
