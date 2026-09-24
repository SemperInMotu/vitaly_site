import { NotesPage } from '@/components/pages/NotesPage';
import { localeFrom } from '@/lib/params';
import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return pageMetadata(await localeFrom(params), 'notes');
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <NotesPage locale={await localeFrom(params)} />;
}
