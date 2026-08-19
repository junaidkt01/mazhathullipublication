'use client';

import React, { useState, useMemo } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CategoryShowcase } from '@/components/droplet/CategoryShowcase';
import { ProductGrid } from '@/components/droplet/ProductCard';
import { DROPLET_PRODUCTS } from '@/data/products';

const CATEGORIES = ['All', 'Books', 'Frames', 'Gifts'];

export default function DropletPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return DROPLET_PRODUCTS;
    return DROPLET_PRODUCTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <PageContainer>
      {/* Hero Header */}
      <section className="pb-12 bg-gradient-to-b from-[#FAF9F6] to-white">
        <Container>
          <SectionHeading
            eyebrow="DROPLET.CO CURATED STORE"
            title="Books, art, and little things worth keeping."
            description="A dedicated collection showcasing indie titles from guest publishers, hand-lettered calligraphy frames, and artisan woodwork designed for book lovers."
          />

          {/* Category Showcase Visual Cards */}
          <CategoryShowcase />
        </Container>
      </section>

      {/* Main Products Catalogue */}
      <section className="py-16 bg-white border-t border-gray-200/80">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
                Curated Collection
              </h2>
              <p className="text-xs text-gray-500 font-sans mt-0.5">
                Every item is enquired and ordered directly through WhatsApp.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? 'bg-[#00A859] text-white shadow-sm'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <ProductGrid products={filteredProducts} />
        </Container>
      </section>
    </PageContainer>
  );
}
