'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MAIN_NAVIGATION } from '@/data/navigation';
import { MazhathulliLogo } from '@/components/common/MazhathulliLogo';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { useCart } from '@/context/CartContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const { totalCount, openCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col bg-[#111111] text-white px-6 py-6 overflow-y-auto"
        >
          {/* Mobile Header Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <MazhathulliLogo variant="light" size="sm" onClick={onClose} />
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col py-8 space-y-6">
            {MAIN_NAVIGATION.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`group flex items-center justify-between text-2xl font-serif font-bold tracking-wide transition-colors ${
                    isActive ? 'text-[#0098DA]' : 'text-white/90 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-xs font-sans uppercase font-semibold px-2.5 py-0.5 rounded-full bg-[#00A859]/20 text-[#00A859] border border-[#00A859]/40">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Bottom Actions */}
          <div className="mt-auto pt-6 border-t border-white/10 flex flex-col space-y-4">
            <button
              onClick={() => {
                onClose();
                openCart();
              }}
              className="w-full py-3.5 px-6 rounded-xl bg-[#0098DA] hover:bg-[#0082bd] text-white font-semibold flex items-center justify-between transition-colors shadow-lg"
            >
              <span className="flex items-center gap-2.5">
                <ShoppingCart className="w-5 h-5" />
                <span>View Shopping Cart</span>
              </span>
              <span className="bg-white text-[#0098DA] text-xs font-bold px-2.5 py-1 rounded-full">
                {totalCount} {totalCount === 1 ? 'item' : 'items'}
              </span>
            </button>

            <p className="text-xs text-center text-gray-400 font-sans mt-2">
              © {new Date().getFullYear()} Mazhathulli Publishing & Cultural Foundation
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
