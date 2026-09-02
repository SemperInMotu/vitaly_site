import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { fraunces, sourceSans } from '@/lib/fonts';

export function RootHtml({
  lang,
  children,
}: {
  lang: string;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang}>
      <body className={`${fraunces.variable} ${sourceSans.variable}`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
