'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ShoppingCart, ChevronDown, BookOpen, PenTool, Feather, HeartHandshake, Mic, Film } from 'lucide-react';
import { MAIN_NAVIGATION } from '@/data/navigation';
import { MazhathulliLogo } from '@/components/common/MazhathulliLogo';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { MobileMenu } from './MobileMenu';
import { useCart } from '@/context/CartContext';

const SUBLINK_ICONS: Record<string, React.ReactNode> = {
  'Book review': <BookOpen className="w-4 h-4 text-[#0098DA]" />,
  'Stories': <PenTool className="w-4 h-4 text-[#00A859]" />,
  'Poem': <Feather className="w-4 h-4 text-purple-600" />,
  'Memoir': <HeartHandshake className="w-4 h-4 text-amber-600" />,
  'Interviews': <Mic className="w-4 h-4 text-rose-600" />,
  'Cinema': <Film className="w-4 h-4 text-sky-600" />,
};

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { totalCount, openCart } = useCart();
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F6]/90 backdrop-blur-md shadow-sm border-b border-gray-200/80 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <MazhathulliLogo variant={isScrolled ? 'dark' : 'dark'} size={isScrolled ? 'sm' : 'md'} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {MAIN_NAVIGATION.map((item) => {
              const isActive = pathname === item.href || (item.sublinks && pathname.startsWith(item.href));
              const hasSublinks = Boolean(item.sublinks && item.sublinks.length > 0);
              const isOpen = openDropdown === item.label;

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => hasSublinks && handleMouseEnter(item.label)}
                  onMouseLeave={() => hasSublinks && handleMouseLeave()}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpenDropdown(null)}
                    className={`relative px-3.5 py-2 text-sm font-medium transition-colors group flex items-center gap-1.5 ${
                      isActive ? 'text-[#0098DA]' : 'text-gray-800 hover:text-[#0098DA]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-[#00A859]/10 text-[#00A859] border border-[#00A859]/30">
                        {item.badge}
                      </span>
                    )}
                    {hasSublinks && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#0098DA]' : 'text-gray-400 group-hover:text-[#0098DA]'
                        }`}
                      />
                    )}
                    {/* Underline motif */}
                    <span
                      className={`absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-gradient-to-r from-[#0098DA] to-[#00A859] transition-transform duration-300 transform origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>

                  {/* Dropdown Menu */}
                  {hasSublinks && isOpen && (
                    <div
                      className="absolute top-full left-0 mt-1 w-60 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200/80 p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="px-3 py-1.5 mb-1 border-b border-gray-100 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                        Magazine Categories
                      </div>
                      <div className="grid grid-cols-1 gap-0.5">
                        {item.sublinks!.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setOpenDropdown(null)}
                            className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-gray-700 hover:text-[#0098DA] hover:bg-sky-50/80 transition-all group"
                          >
                            <span className="p-1.5 rounded-lg bg-gray-100 group-hover:bg-white shadow-xs transition-colors">
                              {SUBLINK_ICONS[sub.label] || <PenTool className="w-3.5 h-3.5 text-[#0098DA]" />}
                            </span>
                            <span>{sub.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action — Cart & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <button
              onClick={openCart}
              className="relative p-2.5 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-[#0098DA] hover:text-[#0098DA] text-gray-800 transition-all active:scale-95 flex items-center gap-2"
              aria-label="Open Shopping Cart"
              title="View Cart"
            >
              <ShoppingCart className="w-5 h-5 text-[#0098DA]" />
              <span className="hidden sm:inline text-xs font-semibold">Cart</span>
              {totalCount > 0 && (
                <span className="flex items-center justify-center min-w-[20px] h-5 px-1 text-[11px] font-bold text-white bg-[#00A859] rounded-full shadow-sm">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
