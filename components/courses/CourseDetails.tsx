import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Course } from '@/types';
import { CourseCurriculum } from './CourseCurriculum';
import { FAQAccordion } from '@/components/common/FAQAccordion';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { SectionLabel } from '@/components/common/SectionLabel';
import { ArrowLeft, Clock, Calendar, Video, Award, CheckCircle } from 'lucide-react';

interface CourseDetailsProps {
  course: Course;
  className?: string;
}

export const CourseDetails: React.FC<CourseDetailsProps> = ({ course, className = '' }) => {
  return (
    <div className={`space-y-12 ${className}`}>
      {/* Back button */}
      <div>
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#00A859] font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Writing Academy Courses</span>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="bg-gradient-to-br from-[#111111] via-[#108BB9] to-[#00A859] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl space-y-6 relative z-10">
          <SectionLabel variant="light">{course.category} Academy Program</SectionLabel>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {course.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-sans">
            {course.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-sans pt-2">
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
              <Clock className="w-4 h-4 text-[#00A859]" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
              <Video className="w-4 h-4 text-[#0098DA]" />
              <span>{course.mode}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>{course.schedule || 'Weekend Batches'}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <WhatsAppButton
              productName={course.title}
              type="course"
              size="lg"
              label="Enquire / Join Batch via WhatsApp"
            />
            <div className="text-xs text-gray-300 flex items-center justify-center sm:justify-start">
              <span>Program Fee: <strong className="text-white text-base font-serif ml-1">₹{course.price}</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Program Highlights */}
      {course.highlights && (
        <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
          <h3 className="font-serif text-2xl font-bold text-[#111111]">Program Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-gray-700 font-sans">
                <CheckCircle className="w-5 h-5 text-[#00A859] shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Curriculum */}
      <CourseCurriculum modules={course.curriculum} />

      {/* Instructor Bio */}
      <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-md border border-gray-200">
          <Image
            src={course.instructor.avatar}
            alt={course.instructor.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00A859]">
            Lead Course Instructor & Mentor
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#111111]">{course.instructor.name}</h3>
          <p className="text-sm font-semibold text-gray-600 font-sans">{course.instructor.role}</p>
          <p className="text-sm text-gray-600 leading-relaxed font-sans">
            {course.instructor.bio}
          </p>
        </div>
      </div>

      {/* Course FAQ */}
      {course.faqs && course.faqs.length > 0 && (
        <div className="space-y-6 pt-4">
          <h3 className="font-serif text-2xl font-bold text-[#111111]">Frequently Asked Questions</h3>
          <FAQAccordion items={course.faqs} />
        </div>
      )}
    </div>
  );
};
