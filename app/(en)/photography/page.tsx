import { PhotographyPage } from '@/components/pages/PhotographyPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('en', 'photography');

export default function Page() {
  return <PhotographyPage locale="en" />;
}
