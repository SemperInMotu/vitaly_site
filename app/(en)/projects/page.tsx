import { RedirectTo } from '@/components/RedirectTo';
import { canonical } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Building — Vitaly Khoruzhko',
  robots: { index: false, follow: true },
  alternates: { canonical: canonical('en', 'building') },
};

export default function Page() {
  return <RedirectTo locale="en" page="building" />;
}
