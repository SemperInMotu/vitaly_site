import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { fraunces, plexMono, sourceSans } from '@/lib/fonts';

export function RootHtml({
  lang,
  children,
}: {
  lang: string;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang}>
      <body className={`${fraunces.variable} ${sourceSans.variable} ${plexMono.variable}`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
