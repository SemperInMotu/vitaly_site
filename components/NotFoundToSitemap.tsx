'use client';

import { SitemapPage } from '@/components/pages/SitemapPage';
import { href, isLocale, type Locale } from '@/lib/i18n';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

function localeFromPath(pathname: string): Locale {
  const match = pathname.match(/^\/(ru|be)(?=\/|$)/);
  const code = match?.[1];
  return code && isLocale(code) ? code : 'en';
}

export function NotFoundToSitemap() {
  const pathname = usePathname() || '/';
  const locale = localeFromPath(pathname);
  const to = href(locale, 'sitemap');

  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${to}`} />
      <SitemapPage locale={locale} missing />
    </>
  );
}
