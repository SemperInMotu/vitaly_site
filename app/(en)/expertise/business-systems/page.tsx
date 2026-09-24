import { CopyPage } from '@/components/pages/CopyPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('en', 'expertise-systems');

export default function Page() {
  return <CopyPage locale="en" page="expertise-systems" />;
}
