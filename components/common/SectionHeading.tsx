'use client';

import React from 'react';
import { SectionLabel } from './SectionLabel';
import { ScrollReveal } from './ScrollReveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  labelVariant?: 'blue' | 'green' | 'dark' | 'light';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  description,
  align = 'left',
  theme = 'light',
  labelVariant,
  className = '',
}) => {
  const isDarkTheme = theme === 'dark';
  const textAlign =
    align === 'center' ? 'text-center items-center' : align === 'right' ? 'text-right items-end' : 'text-left items-start';

  return (
    <ScrollReveal direction="up" distance={20} duration={0.5}>
      <div className={`flex flex-col mb-10 md:mb-14 ${textAlign} ${className}`}>
        {eyebrow && (
          <SectionLabel variant={labelVariant || (isDarkTheme ? 'light' : 'blue')} className="mb-4">
            {eyebrow}
          </SectionLabel>
        )}

        <h2
          className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight ${
            isDarkTheme ? 'text-white' : 'text-[#111111]'
          }`}
        >
          {title}
          {subtitle && (
            <span className="block text-xl sm:text-2xl font-normal font-sans text-gray-500 mt-2">
              {subtitle}
            </span>
          )}
        </h2>

        {description && (
          <p
            className={`mt-4 text-base sm:text-lg max-w-2xl font-sans leading-relaxed ${
              isDarkTheme ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
};
