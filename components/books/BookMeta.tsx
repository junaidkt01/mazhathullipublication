import React from 'react';
import { Book } from '@/types';
import { BookOpen, Globe, Calendar, Hash } from 'lucide-react';

interface BookMetaProps {
  book: Book;
  className?: string;
}

export const BookMeta: React.FC<BookMetaProps> = ({ book, className = '' }) => {
  const specs = [
    { label: 'Language', value: book.language || 'Malayalam', icon: Globe },
    { label: 'Pages', value: book.pages ? `${book.pages} pages` : 'N/A', icon: BookOpen },
    { label: 'Published', value: book.publishedDate || 'Mazhathulli Edition', icon: Calendar },
    { label: 'ISBN', value: book.isbn || '978-93-87201-XX', icon: Hash },
  ];

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-6 bg-white rounded-xl border border-gray-200/80 shadow-sm ${className}`}>
      {specs.map((spec, idx) => {
        const Icon = spec.icon;
        return (
          <div key={idx} className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#0098DA]/10 text-[#0098DA] shrink-0">
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] text-gray-400 font-sans uppercase tracking-wider block">
                {spec.label}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#111111]">
                {spec.value}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
