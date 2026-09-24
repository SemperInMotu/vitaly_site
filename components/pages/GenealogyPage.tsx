import { GENEALOGY_NAV, pages } from '@/lib/content';
import { projectLinks, type Locale } from '@/lib/i18n';
import { SectionNav } from '@/components/SectionNav';

export function GenealogyPage({ locale }: { locale: Locale }) {
  const t = pages[locale].genealogy;
  const heritage = projectLinks(locale).heritage;

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">{t.eyebrow}</div>
          <h1>{t.heading}</h1>
          <p className="lead">{t.lead}</p>
          <SectionNav
            locale={locale}
            current="genealogy"
            items={GENEALOGY_NAV.map((item) => ({ page: item.page, label: item[locale] }))}
          />
        </div>
      </section>
      <section className="section">
        <div className="wrap about-story">
          <h2>{t.researchTitle}</h2>
          <ul className="line-list">
            {t.lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <article className="panel heritavia-panel">
            <h2>{t.heritaviaTitle}</h2>
            <p>{t.heritaviaBody}</p>
            <a className="more" href={heritage}>
              {t.heritaviaMore}
            </a>
          </article>
        </div>
      </section>
    </>
  );
}
