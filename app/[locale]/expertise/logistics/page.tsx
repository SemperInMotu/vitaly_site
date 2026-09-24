import { CopyPage } from '@/components/pages/CopyPage';
import { localeFrom } from '@/lib/params';
import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return pageMetadata(await localeFrom(params), 'expertise-logistics');
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <CopyPage locale={await localeFrom(params)} page="expertise-logistics" />;
}
