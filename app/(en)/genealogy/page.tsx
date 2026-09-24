import { GenealogyPage } from '@/components/pages/GenealogyPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('en', 'genealogy');

export default function Page() {
  return <GenealogyPage locale="en" />;
}
