import { LangHint } from '@/components/LangHint';
import { RootHtml } from '@/components/RootHtml';
import { SiteChrome } from '@/components/SiteChrome';
import { rootMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = rootMetadata;

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang="en">
      <LangHint />
      <SiteChrome locale="en">{children}</SiteChrome>
    </RootHtml>
  );
}
