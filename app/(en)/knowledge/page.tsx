import { IndexPage } from '@/components/pages/IndexPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('en', 'knowledge');

export default function Page() {
  return <IndexPage locale="en" page="knowledge" />;
}
