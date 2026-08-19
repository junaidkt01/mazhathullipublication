import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageContainer } from '@/components/layout/PageContainer';
import { Container } from '@/components/common/Container';
import { CourseDetails } from '@/components/courses/CourseDetails';
import { COURSES_DATA } from '@/data/courses';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COURSES_DATA.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES_DATA.find((c) => c.slug === slug);

  if (!course) {
    return { title: 'Course Not Found' };
  }

  return {
    title: course.title,
    description: course.description,
  };
}

export default async function CourseDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const course = COURSES_DATA.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <PageContainer>
      <Container>
        <CourseDetails course={course} />
      </Container>
    </PageContainer>
  );
}
