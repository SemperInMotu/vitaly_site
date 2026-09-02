import { pages } from '@/lib/content';
import { href, type Locale } from '@/lib/i18n';
import Link from 'next/link';

export function AboutPage({ locale }: { locale: Locale }) {
  const t = pages[locale].about;

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">{t.eyebrow}</div>
          <h1>{t.heading}</h1>
          <p className="lead">{t.lead}</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap panel">
          <p className="muted">{t.products}</p>
          <p className="fine" style={{ marginTop: '1rem' }}>
            {t.principle}
          </p>
          <Link className="btn btn-ink" style={{ marginTop: '1.25rem' }} href={href(locale, 'contact')}>
            {t.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
