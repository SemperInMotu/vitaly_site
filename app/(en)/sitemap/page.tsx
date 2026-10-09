import { SitemapPage } from '@/components/pages/SitemapPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('en', 'sitemap');

export default function Page() {
  return <SitemapPage locale="en" />;
}
