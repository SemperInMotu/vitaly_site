import { IndexPage } from '@/components/pages/IndexPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('en', 'knowledge-cases');

export default function Page() {
  return <IndexPage locale="en" page="knowledge-cases" />;
}
