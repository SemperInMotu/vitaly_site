import { pages, personJsonLd, ui } from '@/lib/content';
import { href, type Locale, type Page } from '@/lib/i18n';
import Link from 'next/link';

function MapLink({
  locale,
  item,
}: {
  locale: Locale;
  item: { label: string; page?: Page; href?: string };
}) {
  if (item.page) {
    return <Link href={href(locale, item.page)}>{item.label}</Link>;
  }
  return <a href={item.href}>{item.label}</a>;
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = pages[locale].home;
  const labels = ui[locale];
  const own = t.ventures.filter((v) => v.kind === 'venture');
  const experience = t.ventures.filter((v) => v.kind === 'experience');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <section className="hero">
        <div className="wrap">
          <h1 className="brand-mark">{t.heading}</h1>
          <p className="hero-lead">{t.lead}</p>
          <p className="hero-roles">{t.evidence}</p>
          <p className="hero-support">{t.today}</p>
          <div className="cta-row">
            <Link className="btn btn-ink" href={href(locale, 'building')}>
              {t.ctaBuilding}
            </Link>
            <Link className="btn btn-line" href={href(locale, 'about')}>
              {t.ctaAbout}
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="os-map">
            {t.map.map((group) => (
              <div key={group.title} className="os-map__col">
                <h2>{group.title}</h2>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <MapLink locale={locale} item={item} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="section-heading">{t.buildingTitle}</h2>
          <div className="venture-grid">
            {own.map((v) => (
              <a key={v.title} className="project-card" href={v.href}>
                <div className="eyebrow">{v.kicker}</div>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
                <span className="more">{v.more}</span>
              </a>
            ))}
          </div>
          {experience.map((v) =>
            v.page ? (
              <Link key={v.title} className="experience-card" href={href(locale, v.page)}>
                <div className="eyebrow">{labels.experienceCol}</div>
                <h3>{v.title}</h3>
                <p className="experience-kicker">{v.kicker}</p>
                <p>{v.body}</p>
                <span className="more">{v.more}</span>
              </Link>
            ) : (
              <a key={v.title} className="experience-card" href={v.href}>
                <div className="eyebrow">{labels.experienceCol}</div>
                <h3>{v.title}</h3>
                <p className="experience-kicker">{v.kicker}</p>
                <p>{v.body}</p>
                <span className="more">{v.more}</span>
              </a>
            ),
          )}
        </div>
      </section>
    </>
  );
}
