import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark' | 'brand';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
}

export const MazhathulliLogo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = '',
  onClick,
}) => {
  const isLight = variant === 'light';

  // Size mappings
  const iconSize = size === 'sm' ? 28 : size === 'lg' ? 44 : 36;
  const titleClass = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';
  const subtitleClass = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-[11px]' : 'text-[10px]';

  return (
    <Link
      href="/"
      onClick={onClick}
      className={`inline-flex items-center gap-3 group transition-opacity hover:opacity-95 ${className}`}
      aria-label="Mazhathulli Home Page"
    >
      {/* Raindrop & Open Book Emblem */}
      <div
        className={`relative flex items-center justify-center rounded-xl p-2 transition-transform duration-300 group-hover:scale-105 ${
          variant === 'brand'
            ? 'bg-gradient-to-br from-[#0098DA] to-[#00A859] text-white shadow-md'
            : isLight
            ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white'
            : 'bg-[#111111] text-white shadow-sm'
        }`}
        style={{ width: iconSize + 12, height: iconSize + 12 }}
      >
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Raindrop Outline */}
          <path
            d="M32 6C32 6 12 30 12 42C12 53.0457 20.9543 62 32 62C43.0457 62 52 53.0457 52 42C52 30 32 6 32 6Z"
            fill="url(#raindropGrad)"
            opacity="0.9"
          />
          {/* Open Book Pages inside raindrop */}
          <path
            d="M20 46C24 43.5 28 44 32 46.5C36 44 40 43.5 44 46V32C40 30 36 30.5 32 32.5C28 30.5 24 30 20 32V46Z"
            fill="#FFFFFF"
          />
          <path
            d="M32 32.5V46.5"
            stroke="#00A859"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Subtle Ripple/Quill Arc */}
          <path
            d="M24 24C27 21 37 21 40 24"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.8"
          />
          <defs>
            <linearGradient id="raindropGrad" x1="12" y1="6" x2="52" y2="62" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0098DA" />
              <stop offset="1" stopColor="#00A859" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <span
          className={`font-serif font-bold tracking-tight leading-none ${titleClass} ${
            isLight ? 'text-white' : 'text-[#111111]'
          }`}
        >
          മഴത്തുള്ളി
        </span>
        <span
          className={`font-sans tracking-[0.2em] font-semibold uppercase mt-0.5 ${subtitleClass} ${
            isLight ? 'text-white/80' : 'text-[#0098DA]'
          }`}
        >
          MAZHATHULLI
        </span>
        {showSubtitle && (
          <span
            className={`text-[9px] tracking-wide font-normal ${
              isLight ? 'text-white/60' : 'text-gray-500'
            }`}
          >
            Publishing • Academy • Droplet
          </span>
        )}
      </div>
    </Link>
  );
};
