import { TracesPage } from '@/components/pages/PhotographyPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('en', 'photography-traces');

export default function Page() {
  return <TracesPage locale="en" />;
}
