import React from 'react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CourseGrid } from '@/components/courses/CourseGrid';
import { ArrowButton } from '@/components/common/ArrowButton';
import { COURSES_DATA } from '@/data/courses';

export const CoursesPreview: React.FC = () => {
  const featuredCourses = COURSES_DATA.slice(0, 2);

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <SectionHeading
            eyebrow="MAZHATHULLI ACADEMY"
            title="Learn. Write. Create."
            description="Master Malayalam creative writing, fiction craft, poetry, and content storytelling under published author mentorship."
            className="mb-0"
          />
          <div className="mt-4 md:mt-0">
            <ArrowButton href="/courses" variant="green">
              Explore All Courses →
            </ArrowButton>
          </div>
        </div>

        <CourseGrid courses={featuredCourses} />
      </Container>
    </section>
  );
};
