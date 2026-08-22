import { redirect } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function JournalSlugRedirect({ params }: PageProps) {
  const { slug } = await params;
  redirect(`/web-magazine/${slug}`);
}
