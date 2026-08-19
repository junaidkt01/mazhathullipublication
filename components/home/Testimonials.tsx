import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { TESTIMONIALS_DATA } from '@/data/testimonials';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#F4F5F2] border-y border-gray-200/80">
      <Container>
        <SectionHeading
          eyebrow="COMMUNITY VOICES"
          title="Reflections from our community."
          description="What authors, writing academy students, and readers say about Mazhathulli."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm flex flex-col justify-between space-y-6 relative hover:shadow-lg transition-shadow"
            >
              <Quote className="w-10 h-10 text-[#0098DA]/20 absolute top-6 right-6" />

              <p className="font-serif text-lg sm:text-xl text-[#111111] leading-relaxed italic relative z-10">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                {t.avatar && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gray-200">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-gray-900 text-base">{t.name}</h4>
                  <p className="text-xs text-gray-500 font-sans">{t.role}</p>
                </div>
                <span className="ml-auto px-2.5 py-1 text-[10px] uppercase font-bold text-[#00A859] bg-[#00A859]/10 rounded-full">
                  {t.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
