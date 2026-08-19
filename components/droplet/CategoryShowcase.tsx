import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const CategoryShowcase: React.FC = () => {
  const categories = [
    {
      title: 'CURATED BOOKS',
      subtitle: 'Handpicked titles from independent writers & presses.',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
      category: 'Books',
      href: '/droplet?category=Books',
      tag: '01',
    },
    {
      title: 'ARTISTIC FRAMES',
      subtitle: 'Archival typography & literary calligraphy artwork.',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
      category: 'Frames',
      href: '/droplet?category=Frames',
      tag: '02',
    },
    {
      title: 'THOUGHTFUL GIFTS',
      subtitle: 'Artisan teakwood book rests, bookmarks & leather journals.',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
      category: 'Gifts',
      href: '/droplet?category=Gifts',
      tag: '03',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((cat) => (
        <Link
          key={cat.title}
          href={cat.href}
          className="group relative h-80 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 block bg-gray-900"
        >
          <Image
            src={cat.image}
            alt={cat.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-90"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          {/* Category Tag */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-bold text-white bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              {cat.tag} • {cat.category}
            </span>
          </div>

          {/* Bottom Info */}
          <div className="absolute bottom-0 inset-x-0 p-6 text-white space-y-2">
            <h3 className="font-serif text-2xl font-bold tracking-wide group-hover:text-[#00A859] transition-colors">
              {cat.title}
            </h3>
            <p className="text-xs text-gray-300 font-sans leading-relaxed">
              {cat.subtitle}
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-[#00A859]">
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
