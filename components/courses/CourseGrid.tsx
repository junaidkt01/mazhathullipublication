'use client';

import React from 'react';
import { Course } from '@/types';
import { CourseCard } from './CourseCard';
import { ScrollReveal } from '@/components/common/ScrollReveal';

interface CourseGridProps {
  courses: Course[];
  className?: string;
}

export const CourseGrid: React.FC<CourseGridProps> = ({ courses, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ${className}`}>
      {courses.map((course, idx) => (
        <ScrollReveal key={course.id} delay={idx * 0.1} direction="up" distance={30}>
          <CourseCard course={course} />
        </ScrollReveal>
      ))}
    </div>
  );
};
