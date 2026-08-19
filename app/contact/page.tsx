import React from 'react';
import { Metadata } from 'next';
import { PageContainer } from '@/components/layout/PageContainer';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ContactOptions, ContactForm } from '@/components/contact/ContactOptions';

export const metadata: Metadata = {
  title: 'Contact Us & WhatsApp Enquiry',
  description:
    'Get in touch with Mazhathulli for book orders, creative writing academy admissions, publishing submissions, and Droplet.co curations.',
};

export default function ContactPage() {
  return (
    <PageContainer>
      {/* Contact Hero */}
      <section className="pb-12 bg-gradient-to-b from-[#FAF9F6] to-white">
        <Container>
          <SectionHeading
            eyebrow="REACH OUT TO US"
            title="Let's Talk"
            description="Have a question about a book order, writing course, manuscript submission, or Droplet gift curation? WhatsApp is our fastest channel, or send us a message below."
          />

          <ContactOptions />
        </Container>
      </section>

      {/* Main Contact Form */}
      <section className="py-16 bg-white border-t border-gray-200/80">
        <Container size="narrow">
          <ContactForm />
        </Container>
      </section>
    </PageContainer>
  );
}
