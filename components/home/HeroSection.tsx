'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause, Film } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { PrimaryButton } from '@/components/common/PrimaryButton';
import { SecondaryButton } from '@/components/common/SecondaryButton';
import { SectionLabel } from '@/components/common/SectionLabel';
import { BOOKS_DATA } from '@/data/books';

export const HeroSection: React.FC = () => {
  const heroBooks = BOOKS_DATA.slice(0, 2);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative pt-6 pb-16 md:py-20 bg-gradient-to-b from-[#FAF9F6] via-white to-[#F4F5F2] overflow-hidden">
      {/* Background Soft Radial Water Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0098DA]/10 to-[#00A859]/10 rounded-full blur-3xl -z-10 pointer-events-none transform translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#0098DA]/08 to-transparent rounded-full blur-3xl -z-10 pointer-events-none transform -translate-x-1/3 translate-y-1/4" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Editorial Copy (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <SectionLabel variant="blue">LITERARY HOUSE & COMMUNITY</SectionLabel>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-[#111111] leading-[1.08] tracking-tight">
              Stories that stay long after the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0098DA] to-[#00A859]">
                last page.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-sans max-w-2xl">
              Mazhathulli is a home for Malayalam literature, independent publishing, creative writing masterclasses, annual awards, and curated arts.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <PrimaryButton href="/books" size="lg" variant="blue">
                Explore Publications
              </PrimaryButton>
              <SecondaryButton href="/about" size="lg" variant="dark">
                Discover Our Story →
              </SecondaryButton>
            </div>

            {/* Quick Metrics */}
            <div className="pt-8 border-t border-gray-200/80 grid grid-cols-3 gap-6 text-left font-sans">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] block">40+</span>
                <span className="text-xs text-gray-500 font-medium">Published Titles</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#00A859] block">1,200+</span>
                <span className="text-xs text-gray-500 font-medium">Academy Writers</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#0098DA] block">4 Years</span>
                <span className="text-xs text-gray-500 font-medium">Literary Honors</span>
              </div>
            </div>
          </div>

          {/* Right Cinematic Video Player & Book Showcase (5 Cols) */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center">
            
            {/* Main Crisp Video Player Showcase Frame */}
            <div className="relative w-full max-w-lg p-[2px] rounded-[28px] bg-gradient-to-br from-[#0098DA] via-[#00A859] to-[#0098DA]/50 shadow-2xl">
              <div className="relative w-full aspect-[4/3] rounded-[26px] overflow-hidden bg-black group">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover rounded-[26px] transform transition-transform duration-700 group-hover:scale-105"
                >
                  <source src="/mazhathulli_video.mp4" type="video/mp4" />
                </video>

                {/* Subtle Vignette Overlay for Badge Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A859] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00A859]"></span>
                    </span>
                    {/* <Film className="w-3.5 h-3.5 text-[#0098DA]" /> */}
                    <span>Mazhathulli Publication</span>
                  </div>

                  {/* Mute/Unmute Button */}
                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    className="p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white transition-all hover:scale-105"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-gray-300" /> : <Volume2 className="w-4 h-4 text-[#00A859]" />}
                  </button>
                </div>

                {/* Bottom Video Controls & Info */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
                  <div className="text-left text-white">
                    <p className="text-xs font-semibold tracking-wide uppercase text-white/80">Publication Reel</p>
                    <p className="text-sm font-serif font-bold text-white drop-shadow">Celebrating Malayalam Arts</p>
                  </div>

                  <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    className="p-2.5 rounded-full bg-white/90 hover:bg-white text-[#111111] shadow-lg transition-all hover:scale-105"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Overlapping Publication Cover (Bottom Left Accent) */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-6 -left-2 sm:-left-6 z-20 hidden sm:flex items-center gap-3 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200/90 shadow-xl max-w-xs transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-12 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-200">
                <Image
                  src={heroBooks[0]?.cover || 'https://images.unsplash.com/photo-1544947950-fa07a98d237f'}
                  alt="Featured Book"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left min-w-0 pr-2">
                <span className="text-[10px] uppercase font-bold text-[#0098DA] block tracking-wider">New Release</span>
                <h4 className="text-xs font-serif font-bold text-[#111111] truncate">{heroBooks[0]?.title || 'Featured Novel'}</h4>
                <p className="text-[11px] text-gray-500 truncate">{heroBooks[0]?.author || 'Mazhathulli Press'}</p>
              </div>
            </motion.div>

          </div>

        </div>
      </Container>
    </section>
  );
};

