import { RootHtml } from '@/components/RootHtml';
import { SiteChrome } from '@/components/SiteChrome';
import { htmlLang } from '@/lib/i18n';
import { generateLocaleParams, localeFrom } from '@/lib/params';
import { rootMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = rootMetadata;
export const generateStaticParams = generateLocaleParams;
export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = await localeFrom(params);
  return (
    <RootHtml lang={htmlLang(locale)}>
      <SiteChrome locale={locale}>{children}</SiteChrome>
    </RootHtml>
  );
}
