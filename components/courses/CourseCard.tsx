import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Course } from '@/types';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { Clock, GraduationCap, Video } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  className?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, className = '' }) => {
  return (
    <div className={`group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#00A859]/40 transition-all duration-300 ${className}`}>
      {/* Header Badge */}
      <div className="bg-gradient-to-r from-[#111111] to-[#108BB9] p-5 text-white flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#00A859] bg-[#00A859]/20 px-3 py-1 rounded-full border border-[#00A859]/40">
          {course.category}
        </span>
        <span className="text-xs text-white/80 font-medium">{course.level}</span>
      </div>

      {/* Course Body */}
      <div className="flex flex-col flex-grow p-6 justify-between space-y-6">
        <div className="space-y-3">
          <Link href={`/courses/${course.slug}`}>
            <h3 className="font-serif text-2xl font-bold text-[#111111] group-hover:text-[#00A859] transition-colors leading-snug">
              {course.title}
            </h3>
          </Link>
          <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed font-sans">
            {course.description}
          </p>
        </div>

        {/* Specs Pill Bar */}
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 pt-2 border-t border-gray-100">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#0098DA]" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Video className="w-4 h-4 text-[#00A859]" />
            <span>{course.mode}</span>
          </div>
        </div>

        {/* Instructor */}
        <div className="flex items-center gap-3 pt-2">
          <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-gray-200">
            <Image
              src={course.instructor.avatar}
              alt={course.instructor.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-bold text-gray-900 block">{course.instructor.name}</span>
            <span className="text-[11px] text-gray-500">{course.instructor.role}</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold text-[#111111]">
              ₹{course.price}
            </span>
            <span className="text-[10px] text-gray-400">Total Program Fee</span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/courses/${course.slug}`}
              className="text-xs font-medium text-gray-700 hover:text-[#00A859] px-2.5 py-1.5 rounded hover:bg-gray-50 transition-colors"
            >
              Curriculum
            </Link>
            <WhatsAppButton
              productName={course.title}
              type="course"
              size="sm"
              label="Join Course"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
