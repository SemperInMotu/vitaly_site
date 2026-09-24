import { GenealogySectionPage } from '@/components/pages/GenealogySectionPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('en', 'genealogy-dna');

export default function Page() {
  return <GenealogySectionPage locale="en" page="genealogy-dna" />;
}
