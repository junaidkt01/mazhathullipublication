import type { Metadata } from 'next';
import { DM_Sans, Manrope, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/common/SmoothScroll';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Mazhathulli — Independent Publishing, Academy & Literary Culture',
    template: '%s | Mazhathulli',
  },
  description:
    'Mazhathulli is an independent publishing house, creative writing academy, awards foundation, and Droplet.co curated collective celebrating stories that stay long after the last page.',
  keywords: [
    'Mazhathulli',
    'Malayalam Publishing House',
    'Independent Literature',
    'Creative Writing Academy Kerala',
    'Mazhathulli Awards',
    'Malayalam Books',
    'Droplet.co',
    'Literary Journal',
  ],
  authors: [{ name: 'Mazhathulli' }],
  creator: 'Mazhathulli Press',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://mazhathulli.com',
    title: 'Mazhathulli — Stories that stay long after the last page',
    description:
      'Independent publishing house, creative writing courses, awards, and curated literary collective.',
    siteName: 'Mazhathulli',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mazhathulli — Literary & Publishing House',
    description: 'Independent publishing, courses, awards, and Droplet.co',
  },
};

import { CartProvider } from '@/components/providers/CartProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${manrope.variable} ${inter.variable}`}
    >
      <body className="font-sans bg-[#FAF9F6] text-[#1A1A1A] antialiased selection:bg-[#0098DA] selection:text-white flex flex-col min-h-screen">
        <CartProvider>
          <SmoothScroll>
            <Header />
            <div className="flex-grow">{children}</div>
            <Footer />
          </SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}
