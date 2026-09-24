import { TracesPage } from '@/components/pages/PhotographyPage';
import { localeFrom } from '@/lib/params';
import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return pageMetadata(await localeFrom(params), 'photography-traces');
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <TracesPage locale={await localeFrom(params)} />;
}
