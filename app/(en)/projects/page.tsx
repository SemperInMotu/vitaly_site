import { ProjectsPage } from '@/components/pages/ProjectsPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('en', 'projects');

export default function Page() {
  return <ProjectsPage locale="en" />;
}
