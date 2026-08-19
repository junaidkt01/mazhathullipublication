// import React from 'react';
// import Link from 'next/link';

// interface LogoProps {
//   variant?: 'light' | 'dark' | 'brand';
//   size?: 'sm' | 'md' | 'lg';
//   showSubtitle?: boolean;
//   className?: string;
//   onClick?: () => void;
// }

// export const MazhathulliLogo: React.FC<LogoProps> = ({
//   variant = 'dark',
//   size = 'md',
//   showSubtitle = true,
//   className = '',
//   onClick,
// }) => {
//   const isLight = variant === 'light';

//   // Size mappings
//   const iconSize = size === 'sm' ? 28 : size === 'lg' ? 44 : 36;
//   const titleClass = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';
//   const subtitleClass = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-[11px]' : 'text-[10px]';

//   return (
//     <Link
//       href="/"
//       onClick={onClick}
//       className={`inline-flex items-center gap-3 group transition-opacity hover:opacity-95 ${className}`}
//       aria-label="Mazhathulli Home Page"
//     >
//       <div className='bg-[#000000] g-2' >

//      <img src="/mazhathulli_full_logo.png" width={200} height={100} alt="" />
//       </div>
//     </Link>
//   );
// };

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
        className={`relative flex items-center justify-center rounded-xl p-2 transition-transform duration-300 group-hover:scale-105 ${variant === 'brand'
            ? 'bg-gradient-to-br from-[#0098DA] to-[#00A859] text-white shadow-md'
            : isLight
              ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white'
              : 'bg-[#111111] text-white shadow-sm'
          }`}
        style={{ width: iconSize + 12, height: iconSize + 12 }}
      >
        <img width={20} height={20} src="/mazhathulli_icon.png" alt="logo" />
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <span
          className={`font-serif font-bold tracking-tight leading-none ${titleClass} ${isLight ? 'text-white' : 'text-[#111111]'
            }`}
        >
          മഴത്തുള്ളി
        </span>
        <span
          className={`font-sans tracking-[0.2em] font-semibold uppercase mt-0.5 ${subtitleClass} ${isLight ? 'text-white/80' : 'text-[#0098DA]'
            }`}
        >
          MAZHATHULLI
        </span>
        {showSubtitle && (
          <span
            className={`text-[9px] tracking-wide font-normal ${isLight ? 'text-white/60' : 'text-gray-500'
              }`}
          >
            Publishing • Academy • Droplet
          </span>
        )}
      </div>
    </Link>
  );
};
