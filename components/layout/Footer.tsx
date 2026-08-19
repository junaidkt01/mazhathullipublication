import React from 'react';
import Link from 'next/link';
import { MessageCircle, Instagram, Facebook, Youtube, ArrowUpRight } from 'lucide-react';
import { FOOTER_NAVIGATION } from '@/data/navigation';
import { MazhathulliLogo } from '@/components/common/MazhathulliLogo';
import { Container } from '@/components/common/Container';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-12 border-t border-white/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-6 pr-0 lg:pr-8">
            <MazhathulliLogo variant="light" size="lg" />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans max-w-md">
              A premier literary publishing house, creative writing academy, awards foundation, and curated art collective. Celebrating stories that stay long after the last page.
            </p>

            <div className="pt-2">
              <WhatsAppButton
                type="general"
                size="sm"
                variant="outline"
                label="Direct WhatsApp Contact"
              />
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide">Explore</h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_NAVIGATION.explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all ml-1 text-[#0098DA]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Droplet.co */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide">
              Droplet.co <span className="text-xs font-sans font-normal text-[#00A859]">(Curated)</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_NAVIGATION.droplet.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all ml-1 text-[#00A859]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide">Connect</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Kozhikode & Kochi, Kerala, India
              <br />
              Monsoon Enquiries: +91 98470 00000
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919961260138"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2.5 rounded-full bg-[#00A859]/20 text-[#00A859] hover:bg-[#00A859] hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Mazhathulli Publishing & Cultural Foundation. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
