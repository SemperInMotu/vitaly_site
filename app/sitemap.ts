import { canonical, LOCALES, PAGES, type Locale, type Page } from '@/lib/i18n';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((locale) =>
    PAGES.map((page) => ({
      url: canonical(locale as Locale, page as Page),
      changeFrequency: 'monthly' as const,
      priority: page === 'home' ? 1 : 0.7,
      alternates: {
        languages: {
          en: canonical('en', page),
          ru: canonical('ru', page),
          be: canonical('be', page),
          'x-default': canonical('en', page),
        },
      },
    })),
  );
}
