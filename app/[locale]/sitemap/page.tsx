import { SitemapPage } from '@/components/pages/SitemapPage';
import { localeFrom } from '@/lib/params';
import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return pageMetadata(await localeFrom(params), 'sitemap');
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <SitemapPage locale={await localeFrom(params)} />;
}
