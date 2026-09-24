import { GenealogyPage } from '@/components/pages/GenealogyPage';
import { localeFrom } from '@/lib/params';
import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return pageMetadata(await localeFrom(params), 'genealogy');
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <GenealogyPage locale={await localeFrom(params)} />;
}
