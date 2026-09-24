import { CopyPage } from '@/components/pages/CopyPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('en', 'knowledge-research');

export default function Page() {
  return <CopyPage locale="en" page="knowledge-research" />;
}
