import { BuildingPage } from '@/components/pages/BuildingPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('en', 'building');

export default function Page() {
  return <BuildingPage locale="en" />;
}
