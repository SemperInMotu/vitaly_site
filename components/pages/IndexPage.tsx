import { EXPERTISE_NAV, KNOWLEDGE_NAV, pages } from '@/lib/content';
import { href, type Locale, type Page } from '@/lib/i18n';
import { SectionNav } from '@/components/SectionNav';
import Link from 'next/link';

const KEYS = ['expertise', 'knowledge', 'knowledge-cases'] as const;
type IndexKey = (typeof KEYS)[number];

const NAV: Record<IndexKey, typeof EXPERTISE_NAV | typeof KNOWLEDGE_NAV> = {
  expertise: EXPERTISE_NAV,
  knowledge: KNOWLEDGE_NAV,
  'knowledge-cases': KNOWLEDGE_NAV,
};

export function IndexPage({ locale, page }: { locale: Locale; page: IndexKey }) {
  const t = pages[locale][page];
  const nav = NAV[page];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">{t.eyebrow}</div>
          <h1>{t.heading}</h1>
          <p className="lead">{t.lead}</p>
          <SectionNav
            locale={locale}
            current={page}
            items={nav.map((item) => ({ page: item.page, label: item[locale] }))}
          />
        </div>
      </section>
      <section className="section">
        <div className="wrap project-grid project-grid--2">
          {t.items.map((item) =>
            item.page ? (
              <Link key={item.title} className="project-card" href={href(locale, item.page as Page)}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <span className="more">{item.more}</span>
              </Link>
            ) : (
              <a key={item.title} className="project-card" href={item.href}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <span className="more">{item.more}</span>
              </a>
            ),
          )}
        </div>
      </section>
    </>
  );
}
