import React from 'react';
import Image from 'next/image';
import { AwardWinner } from '@/types';
import { Award, Quote } from 'lucide-react';

interface AwardWinnerProps {
  winner: AwardWinner;
  className?: string;
}

export const AwardWinnerCard: React.FC<AwardWinnerProps> = ({ winner, className = '' }) => {
  return (
    <div className={`group flex flex-col md:flex-row items-center bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 ${className}`}>
      {/* Winner Photo */}
      <div className="relative w-full md:w-5/12 h-72 md:h-80 bg-gray-100 shrink-0 overflow-hidden">
        <Image
          src={winner.photo}
          alt={winner.winnerName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[#111111] text-white rounded-full shadow-md">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            {winner.category}
          </span>
        </div>
      </div>

      {/* Winner Citation details */}
      <div className="flex flex-col flex-grow p-6 sm:p-8 space-y-4">
        <div>
          <span className="text-xs font-semibold text-[#0098DA] uppercase tracking-wider block mb-1">
            Mazhathulli Awardee — {winner.year}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
            {winner.winnerName}
          </h3>
          <p className="font-serif text-lg text-gray-700 italic mt-1 font-medium">
            "{winner.workTitle}"
          </p>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed font-sans">
          {winner.summary}
        </p>

        {/* Citation Box */}
        <div className="p-4 bg-gray-50 rounded-xl border border-gray-200/60 relative">
          <Quote className="w-5 h-5 text-[#00A859] absolute top-3 right-3 opacity-30" />
          <span className="text-[11px] font-bold uppercase text-[#00A859] block mb-1">Jury Citation</span>
          <p className="text-xs sm:text-sm text-gray-700 italic font-serif leading-relaxed">
            "{winner.citation}"
          </p>
        </div>
      </div>
    </div>
  );
};

interface AwardWinnersProps {
  winners: AwardWinner[];
  className?: string;
}

export const AwardWinners: React.FC<AwardWinnersProps> = ({ winners, className = '' }) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {winners.map((winner) => (
        <AwardWinnerCard key={winner.id} winner={winner} />
      ))}
    </div>
  );
};
