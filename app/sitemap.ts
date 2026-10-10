import { canonical, LOCALES, PAGES, SITE_LASTMOD, type Locale, type Page } from '@/lib/i18n';

import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

function languages(page: Page): Record<string, string> {
  return {
    en: canonical('en', page),
    ru: canonical('ru', page),
    'be-tarask': canonical('be', page),
    'x-default': canonical('en', page),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((locale) =>
    PAGES.map((page) => ({
      url: canonical(locale as Locale, page as Page),
      lastModified: SITE_LASTMOD,
      alternates: { languages: languages(page as Page) },
    })),
  );
}
