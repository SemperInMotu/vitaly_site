import { ContactPage } from '@/components/pages/ContactPage';
import { localeFrom } from '@/lib/params';
import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await localeFrom(params);
  return pageMetadata(locale, 'contact');
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFrom(params);
  return <ContactPage locale={locale} />;
}
