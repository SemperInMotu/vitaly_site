import { GenealogySectionPage } from '@/components/pages/GenealogySectionPage';
import { localeFrom } from '@/lib/params';
import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return pageMetadata(await localeFrom(params), 'genealogy-research');
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <GenealogySectionPage locale={await localeFrom(params)} page="genealogy-research" />;
}
