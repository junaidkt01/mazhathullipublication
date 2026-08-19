import React from 'react';
import { Metadata } from 'next';
import { PageContainer } from '@/components/layout/PageContainer';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CourseGrid } from '@/components/courses/CourseGrid';
import { COURSES_DATA } from '@/data/courses';
import { GraduationCap, Users, Video, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Creative Writing Academy & Courses',
  description:
    'Join Mazhathulli Creative Writing Academy. Master Malayalam fiction, poetry, content copywriting, and story structure under acclaimed mentors.',
};

export default function CoursesPage() {
  const benefits = [
    {
      title: 'Practical Writing Workshops',
      description: 'Weekly hands-on exercises and story drafting rather than passive lectures.',
      icon: GraduationCap,
    },
    {
      title: 'Experienced Mentors',
      description: 'Learn directly from award-winning Malayalam authors and senior editors.',
      icon: Users,
    },
    {
      title: 'Flexible Hybrid Learning',
      description: 'Live interactive weekend sessions with recorded portal access.',
      icon: Video,
    },
    {
      title: 'Publishing Pathway',
      description: 'Opportunity to get published in Mazhathulli Journal and annual anthologies.',
      icon: Award,
    },
  ];

  return (
    <PageContainer>
      {/* Hero */}
      <section className="pb-12 bg-gradient-to-b from-[#FAF9F6] to-white">
        <Container>
          <SectionHeading
            eyebrow="MAZHATHULLI WRITING ACADEMY"
            title="Turn your thoughts into words."
            description="Whether you are drafting your first short story, refining a novel manuscript, or mastering editorial copywriting — our courses provide structural feedback and creative community."
          />

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00A859]/10 text-[#00A859] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#111111]">{b.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">{b.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Course Listing */}
      <section className="py-16 bg-white border-t border-gray-200/80">
        <Container>
          <div className="mb-8">
            <h2 className="font-serif text-3xl font-bold text-[#111111]">Upcoming Writing Programs</h2>
            <p className="text-sm text-gray-600 font-sans mt-1">Enrollment for upcoming 2026 batches is now open via WhatsApp enquiry.</p>
          </div>

          <CourseGrid courses={COURSES_DATA} />
        </Container>
      </section>
    </PageContainer>
  );
}
