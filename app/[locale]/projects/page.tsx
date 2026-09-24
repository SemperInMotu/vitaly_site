import { RedirectTo } from '@/components/RedirectTo';
import { canonical } from '@/lib/i18n';
import { localeFrom } from '@/lib/params';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await localeFrom(params);
  return {
    title: 'Building — Vitaly Khoruzhko',
    robots: { index: false, follow: true },
    alternates: { canonical: canonical(locale, 'building') },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <RedirectTo locale={await localeFrom(params)} page="building" />;
}
