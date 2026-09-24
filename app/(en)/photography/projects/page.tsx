import { PhotographySectionPage } from '@/components/pages/PhotographyPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('en', 'photography-projects');

export default function Page() {
  return <PhotographySectionPage locale="en" page="photography-projects" />;
}
