import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';

export default function PrivacyPage() {
  return (
    <PageContainer>
      <Container size="narrow">
        <SectionHeading
          eyebrow="LEGAL"
          title="Privacy Policy"
          description="Last updated: January 2026"
        />

        <div className="prose prose-lg text-gray-700 font-sans space-y-6">
          <p>
            At <strong>Mazhathulli</strong>, we respect your privacy and are committed to protecting the personal information you share with us when exploring our website, placing book orders, enrolling in writing academy programs, or reaching out via WhatsApp.
          </p>

          <h3 className="font-serif text-xl font-bold text-[#111111] pt-4">1. Information We Collect</h3>
          <p>
            We collect personal details such as your name, phone number, email address, and shipping address strictly when you voluntarily submit enquiries through our contact form or WhatsApp actions.
          </p>

          <h3 className="font-serif text-xl font-bold text-[#111111] pt-4">2. WhatsApp Enquiry Model</h3>
          <p>
            Mazhathulli does not store financial credit card data on this website. Purchases and enquiries are directed through official WhatsApp links. Communication exchanged on WhatsApp is governed by WhatsApp\'s standard security terms.
          </p>

          <h3 className="font-serif text-xl font-bold text-[#111111] pt-4">3. Data Usage & Protection</h3>
          <p>
            Your contact details are used exclusively to process your book shipments, course admissions, and editorial updates. We never sell, trade, or transfer your personal information to third-party advertisers.
          </p>
        </div>
      </Container>
    </PageContainer>
  );
}
