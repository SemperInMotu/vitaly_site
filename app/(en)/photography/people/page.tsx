import { PhotographySectionPage } from '@/components/pages/PhotographyPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('en', 'photography-people');

export default function Page() {
  return <PhotographySectionPage locale="en" page="photography-people" />;
}
