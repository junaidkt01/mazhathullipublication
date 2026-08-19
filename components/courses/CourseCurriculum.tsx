import React from 'react';
import { CourseModule } from '@/types';
import { CheckCircle2 } from 'lucide-react';

interface CourseCurriculumProps {
  modules: CourseModule[];
  className?: string;
}

export const CourseCurriculum: React.FC<CourseCurriculumProps> = ({ modules, className = '' }) => {
  return (
    <div className={`space-y-6 ${className}`}>
      <h3 className="font-serif text-2xl font-bold text-[#111111]">Course Curriculum & Modules</h3>
      <div className="space-y-4">
        {modules.map((mod, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-3">
            <h4 className="font-serif text-xl font-bold text-[#00A859] flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#00A859]/10 text-[#00A859] text-xs font-sans font-bold flex items-center justify-center">
                0{idx + 1}
              </span>
              {mod.title}
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {mod.topics.map((topic, tIdx) => (
                <li key={tIdx} className="flex items-start gap-2 text-sm text-gray-700 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#00A859] shrink-0 mt-0.5" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
