import type { Metadata } from 'next';
import { pages } from './content';
import { SITE, canonical, type Locale, type Page } from './i18n';

const OG_IMAGE = `${SITE}/assets/og-default.jpg`;

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE),
  icons: { icon: [{ url: '/assets/favicon.svg', type: 'image/svg+xml' }] },
  robots: { index: true, follow: true },
};

export function pageMetadata(locale: Locale, page: Page): Metadata {
  const t = pages[locale][page];
  const url = canonical(locale, page);
  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: url,
      languages: {
        en: canonical('en', page),
        ru: canonical('ru', page),
        be: canonical('be', page),
        'x-default': canonical('en', page),
      },
    },
    openGraph: {
      type: 'website',
      title: t.title,
      description: t.description,
      url,
      images: [{ url: OG_IMAGE }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: [OG_IMAGE],
    },
  };
}
