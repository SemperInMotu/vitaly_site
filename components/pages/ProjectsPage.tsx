import { pages } from '@/lib/content';
import { projectLinks, type Locale } from '@/lib/i18n';

export function ProjectsPage({ locale }: { locale: Locale }) {
  const t = pages[locale].projects;
  const p = projectLinks(locale);
  const links = [p.alfakit, p.semper, p.heritage];

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
        <div className="wrap project-grid">
          {t.cards.map((card, i) => (
            <a key={card.title} className="project-card" href={links[i]}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <span className="more">{card.more}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
