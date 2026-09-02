import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import type { Locale } from '@/lib/i18n';

export function SiteChrome({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  );
}
