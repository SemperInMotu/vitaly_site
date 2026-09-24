import { CopyPage } from '@/components/pages/CopyPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('en', 'expertise-ai');

export default function Page() {
  return <CopyPage locale="en" page="expertise-ai" />;
}
