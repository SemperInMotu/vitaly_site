import { pages, personJsonLd } from '@/lib/content';
import { href, projectLinks, type Locale } from '@/lib/i18n';
import Link from 'next/link';

export function HomePage({ locale }: { locale: Locale }) {
  const t = pages[locale].home;
  const p = projectLinks(locale);
  const links = [p.alfakit, p.semper, p.heritage];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <section className="hero">
        <div className="wrap">
          <h1 className="brand-mark">{t.brand}</h1>
          <p className="hero-lead">{t.lead}</p>
          <p className="hero-support">{t.support}</p>
          <div className="cta-row">
            <Link className="btn btn-ink" href={href(locale, 'projects')}>
              {t.ctaProjects}
            </Link>
            <Link className="btn btn-line" href={href(locale, 'contact')}>
              {t.ctaContact}
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap project-grid">
          {t.cards.map((card, i) => (
            <a key={card.title} className="project-card" href={links[i]}>
              <h2>{card.title}</h2>
              <p>{card.body}</p>
              <span className="more">{card.more}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
