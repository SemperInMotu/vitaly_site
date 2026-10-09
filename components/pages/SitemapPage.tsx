import { pages, ui } from '@/lib/content';
import { href, projectLinks, type Locale, type Page } from '@/lib/i18n';
import Link from 'next/link';

const SITE_PAGES: Page[] = ['home', 'projects', 'about', 'contact', 'sitemap'];

export function SitemapPage({ locale, missing = false }: { locale: Locale; missing?: boolean }) {
  const t = pages[locale].sitemap;
  const labels = ui[locale];
  const projects = projectLinks(locale);
  const pageLabels: Record<Page, string> = {
    home: 'Vitaly Khoruzhko',
    projects: labels.projects,
    about: labels.about,
    contact: labels.contact,
    sitemap: labels.sitemap,
  };

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          {missing ? (
            <>
              <div className="eyebrow">404</div>
              <h1>{t.missingTitle}</h1>
              <p className="lead">{t.missingLead}</p>
            </>
          ) : (
            <>
              <div className="eyebrow">{t.eyebrow}</div>
              <h1>{t.heading}</h1>
              <p className="lead">{t.lead}</p>
            </>
          )}
        </div>
      </section>
      <section className="section">
        <div className="wrap sitemap-grid">
          <div>
            <h2>{t.pagesTitle}</h2>
            <ul className="sitemap-list">
              {SITE_PAGES.map((page) => (
                <li key={page}>
                  <Link href={href(locale, page)}>{pageLabels[page]}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>{t.projectsTitle}</h2>
            <ul className="sitemap-list">
              <li>
                <a href={projects.alfakit}>ALFAKIT</a>
              </li>
              <li>
                <a href={projects.semper}>Semper In Motu</a>
              </li>
              <li>
                <a href={projects.heritage}>Heritavia</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
