import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageContainer } from '@/components/layout/PageContainer';
import { Container } from '@/components/common/Container';
import { ProductDetails } from '@/components/droplet/ProductDetails';
import { ProductGrid } from '@/components/droplet/ProductCard';
import { SectionHeading } from '@/components/common/SectionHeading';
import { DROPLET_PRODUCTS } from '@/data/products';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DROPLET_PRODUCTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = DROPLET_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: `${product.title} — Droplet.co`,
    description: product.shortInfo || product.description,
    openGraph: {
      title: product.title,
      description: product.shortInfo,
      images: [{ url: product.image }],
    },
  };
}

export default async function DropletProductDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const product = DROPLET_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const related = DROPLET_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <PageContainer>
      <Container>
        <ProductDetails product={product} />

        {/* Related Products */}
        {related.length > 0 && (
          <div className="pt-16 mt-16 border-t border-gray-200">
            <SectionHeading
              eyebrow="MORE FROM DROPLET.CO"
              title="Related Curations"
            />
            <ProductGrid products={related} />
          </div>
        )}
      </Container>
    </PageContainer>
  );
}
