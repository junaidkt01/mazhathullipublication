'use client';

import React from 'react';

interface AwardYearSelectorProps {
  years: string[];
  selectedYear: string;
  onSelectYear: (year: string) => void;
  className?: string;
}

export const AwardYearSelector: React.FC<AwardYearSelectorProps> = ({
  years,
  selectedYear,
  onSelectYear,
  className = '',
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 overflow-x-auto py-4 ${className}`}>
      {years.map((year) => {
        const isActive = selectedYear === year;
        return (
          <button
            key={year}
            onClick={() => onSelectYear(year)}
            className={`px-6 py-2.5 rounded-full font-serif text-lg font-bold tracking-wider transition-all duration-300 ${
              isActive
                ? 'bg-gradient-to-r from-[#0098DA] to-[#00A859] text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {year} Honors
          </button>
        );
      })}
    </div>
  );
};
