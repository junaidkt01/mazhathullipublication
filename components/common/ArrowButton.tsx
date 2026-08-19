import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ArrowButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'blue' | 'green' | 'dark' | 'light';
  className?: string;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  children,
  href,
  variant = 'blue',
  className = '',
}) => {
  const colorClasses =
    variant === 'green'
      ? 'text-[#00A859] hover:text-[#00924d]'
      : variant === 'dark'
      ? 'text-[#111111] hover:text-black'
      : variant === 'light'
      ? 'text-white hover:text-white/80'
      : 'text-[#0098DA] hover:text-[#108BB9]';

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 font-medium text-sm sm:text-base tracking-wide transition-colors ${colorClasses} ${className}`}
    >
      <span>{children}</span>
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
    </Link>
  );
};
