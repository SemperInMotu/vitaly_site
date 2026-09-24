import { href, type Locale, type Page } from '@/lib/i18n';

export function RedirectTo({ locale, page }: { locale: Locale; page: Page }) {
  const to = href(locale, page);
  return (
    <section className="page-hero">
      <div className="wrap">
        <meta httpEquiv="refresh" content={`0;url=${to}`} />
        <script dangerouslySetInnerHTML={{ __html: `location.replace(${JSON.stringify(to)})` }} />
        <p className="lead">
          <a href={to}>{to} →</a>
        </p>
      </div>
    </section>
  );
}
