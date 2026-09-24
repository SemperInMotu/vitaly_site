import { GENEALOGY_NAV, pages } from '@/lib/content';
import type { Locale, Page } from '@/lib/i18n';
import { SectionNav } from '@/components/SectionNav';

const KEYS = ['genealogy-research', 'genealogy-family-history', 'genealogy-dna'] as const;
type GeneKey = (typeof KEYS)[number];

export function GenealogySectionPage({ locale, page }: { locale: Locale; page: GeneKey }) {
  const t = pages[locale][page];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">{t.eyebrow}</div>
          <h1>{t.heading}</h1>
          <p className="lead">{t.lead}</p>
          <SectionNav
            locale={locale}
            current={page as Page}
            items={GENEALOGY_NAV.map((item) => ({ page: item.page, label: item[locale] }))}
          />
        </div>
      </section>
      <section className="section">
        <div className="wrap about-story">
          {t.body.split('\n\n').map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </section>
    </>
  );
}
