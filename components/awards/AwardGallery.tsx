'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AwardGalleryItem } from '@/types';
import { Lightbox, LightboxImage } from '@/components/common/Lightbox';
import { Maximize2 } from 'lucide-react';

interface AwardGalleryProps {
  items: AwardGalleryItem[];
  className?: string;
}

const GALLERY_CATEGORIES = ['All', 'Winners', 'Ceremony', 'Guests', 'Stage', 'Behind the Scenes'];

export const AwardGallery: React.FC<AwardGalleryProps> = ({ items, className = '' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems =
    selectedCategory === 'All'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const lightboxImages: LightboxImage[] = filteredItems.map((item) => ({
    src: item.imageUrl,
    caption: item.caption,
    title: `${item.year} Mazhathulli Awards — ${item.category}`,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Category Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {GALLERY_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? 'bg-[#111111] text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Masonry-Style Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => openLightbox(idx)}
            className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-900"
          >
            <Image
              src={item.imageUrl}
              alt={item.caption}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Hover Expand Icon */}
            <div className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 className="w-4 h-4" />
            </div>

            {/* Caption Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-5 text-white space-y-1">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-[#00A859] block">
                {item.category} • {item.year}
              </span>
              <p className="font-serif text-base font-bold line-clamp-2 leading-snug">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
};
