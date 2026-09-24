import { NotesPage } from '@/components/pages/NotesPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('en', 'notes');

export default function Page() {
  return <NotesPage locale="en" />;
}
