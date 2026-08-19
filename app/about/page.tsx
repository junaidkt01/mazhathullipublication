import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { PageContainer } from '@/components/layout/PageContainer';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { SectionLabel } from '@/components/common/SectionLabel';
import { PrimaryButton } from '@/components/common/PrimaryButton';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { TEAM_MEMBERS } from '@/data/team';
import { BookOpen, GraduationCap, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Our Story & Principles',
  description:
    'Learn about Mazhathulli — an independent publishing house, creative writing academy, and cultural institution founded in Kerala.',
};

export default function AboutPage() {
  const principles = [
    {
      title: 'PUBLISH',
      tagline: 'Preserving Vernacular Quality',
      description: 'Crafting print and digital publications with meticulous Malayalam typography, tactile paper choices, and uncompromised editing standards.',
      icon: BookOpen,
      color: 'text-[#0098DA] bg-[#0098DA]/10',
    },
    {
      title: 'EDUCATE',
      tagline: 'Nurturing Creative Minds',
      description: 'Conducting structured writing workshops and mentorship labs where aspiring authors master story architecture and prose rhythm.',
      icon: GraduationCap,
      color: 'text-[#00A859] bg-[#00A859]/10',
    },
    {
      title: 'CELEBRATE',
      tagline: 'Honoring Literary Excellence',
      description: 'Hosting the annual Mazhathulli Awards to Spotlight outstanding Malayalam novels, poetry, debut writers, and lifetime achievements.',
      icon: Award,
      color: 'text-amber-600 bg-amber-50',
    },
    {
      title: 'CONNECT',
      tagline: 'Building Creative Community',
      description: 'Fostering a living ecosystem connecting readers, authors, artists, and independent press lovers across South India.',
      icon: Sparkles,
      color: 'text-[#108BB9] bg-[#108BB9]/10',
    },
  ];

  const milestones = [
    { year: '2022', title: 'Foundation & Vision', description: 'Established as an independent publishing press in Kozhikode.' },
    { year: '2023', title: 'Inaugural Awards & Academy', description: 'Hosted the 1st Mazhathulli Awards & launched Rachana writing program.' },
    { year: '2024', title: 'Droplet.co Launch', description: 'Expanded into curated indie books, calligraphy frames, and artisan gifts.' },
    { year: '2025', title: '40+ Publications', description: 'Crossed milestone of 40 published titles & 1,200 academy graduates.' },
    { year: '2026', title: 'Today & Horizons', description: 'Continuing to expand regional literature across print and digital media.' },
  ];

  return (
    <PageContainer>
      {/* About Hero */}
      <section className="pb-16 bg-gradient-to-b from-[#FAF9F6] to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <SectionLabel variant="blue">OUR PHILOSOPHY</SectionLabel>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111] leading-tight">
              Stories, writers, and ideas deserve a place to grow.
            </h1>
            <p className="text-base sm:text-lg text-gray-600 font-sans leading-relaxed">
              Mazhathulli was born out of a deep reverence for Kerala’s literary heritage and a conviction that independent publishing must nurture fresh, fearless voices.
            </p>
          </div>
        </Container>
      </section>

      {/* Our Story Asymmetric Layout */}
      <section className="py-16 bg-white border-y border-gray-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1000&q=80"
                  alt="Mazhathulli Printing & Editorial"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="OUR ORIGIN"
                title="Rooted in monsoon rains and quiet reading rooms."
                description="The word 'Mazhathulli' means raindrop in Malayalam. Just as a single raindrop carries the potential of a nourishing monsoon, we believe a single story can transform how a reader sees the world."
              />
              <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                From our editorial offices in Kozhikode and Kochi, we work closely with authors at every stage — from manuscript development and translation to publication layout and reader engagement.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Four Core Principles */}
      <section className="py-20 bg-[#F4F5F2]">
        <Container>
          <SectionHeading
            eyebrow="FOUR GUIDING PILLARS"
            title="What defines our work."
            description="Our foundation rests upon four interconnected principles that guide every book we publish and every workshop we lead."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm space-y-4 hover:shadow-lg transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-2xl ${p.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-gray-400 font-sans block uppercase">
                    {p.title}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#111111]">{p.tagline}</h3>
                  <p className="text-xs text-gray-600 font-sans leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white border-b border-gray-200/80">
        <Container>
          <SectionHeading
            eyebrow="THE MILESTONES"
            title="Our Journey So Far"
            align="center"
          />

          <div className="max-w-4xl mx-auto space-y-6 relative before:absolute before:left-4 sm:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-200">
            {milestones.map((m, idx) => (
              <div
                key={m.year}
                className={`relative flex flex-col sm:flex-row items-start ${
                  idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0098DA] border-4 border-white shadow" />

                <div className="ml-10 sm:ml-0 sm:w-1/2 p-4 sm:px-8">
                  <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
                    <span className="text-xs font-bold text-[#00A859] uppercase tracking-wider block">
                      {m.year}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#111111]">{m.title}</h4>
                    <p className="text-xs text-gray-600 font-sans leading-relaxed">{m.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#FAF9F6]">
        <Container>
          <SectionHeading
            eyebrow="OUR PEOPLE"
            title="The Editorial Board & Team"
            description="Meet the authors, editors, and curators driving Mazhathulli."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative h-64 w-full bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="font-serif text-xl font-bold text-[#111111]">{member.name}</h4>
                  <span className="text-xs font-semibold text-[#0098DA] block">{member.role}</span>
                  <p className="text-xs text-gray-600 font-sans leading-relaxed pt-1">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#111111] text-white">
        <Container size="narrow">
          <div className="text-center space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">Have a manuscript or question?</h2>
            <p className="text-gray-300 text-sm sm:text-base font-sans">
              Connect with our editorial team for book submissions, writing academy queries, or partnerships.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <PrimaryButton href="/books" variant="blue">
                Browse Books
              </PrimaryButton>
              <WhatsAppButton
                type="publishing"
                size="md"
                label="Submit Manuscript via WhatsApp"
              />
            </div>
          </div>
        </Container>
      </section>
    </PageContainer>
  );
}
