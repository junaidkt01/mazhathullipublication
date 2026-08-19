import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  variant?: 'blue' | 'green' | 'dark' | 'light';
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  children,
  variant = 'blue',
  className = '',
}) => {
  const colorStyles =
    variant === 'green'
      ? 'text-[#00A859] border-[#00A859]/30 bg-[#00A859]/10'
      : variant === 'dark'
      ? 'text-gray-900 border-gray-300 bg-gray-100'
      : variant === 'light'
      ? 'text-white/90 border-white/30 bg-white/10'
      : 'text-[#0098DA] border-[#0098DA]/30 bg-[#0098DA]/10';

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-label font-semibold tracking-widest uppercase rounded-full border ${colorStyles} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {children}
    </span>
  );
};
