'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`border rounded-xl transition-colors duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-[#0098DA]/40 shadow-sm'
                : 'bg-white/80 border-gray-200 hover:border-gray-300'
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full py-4 px-6 flex items-center justify-between text-left text-[#111111] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0098DA]"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg text-[#111111] pr-4">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-[#0098DA] shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-5 pt-1 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
