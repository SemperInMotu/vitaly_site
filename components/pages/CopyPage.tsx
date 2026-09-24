import { EXPERTISE_NAV, KNOWLEDGE_NAV, pages } from '@/lib/content';
import { href, type Locale, type Page } from '@/lib/i18n';
import { SectionNav } from '@/components/SectionNav';
import Link from 'next/link';

const KEYS = [
  'expertise-ai',
  'expertise-systems',
  'expertise-logistics',
  'knowledge-articles',
  'knowledge-research',
] as const;
type CopyKey = (typeof KEYS)[number];

const NAV: Record<CopyKey, typeof EXPERTISE_NAV | typeof KNOWLEDGE_NAV> = {
  'expertise-ai': EXPERTISE_NAV,
  'expertise-systems': EXPERTISE_NAV,
  'expertise-logistics': EXPERTISE_NAV,
  'knowledge-articles': KNOWLEDGE_NAV,
  'knowledge-research': KNOWLEDGE_NAV,
};

export function CopyPage({ locale, page }: { locale: Locale; page: CopyKey }) {
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
            current={page as Page}
            items={nav.map((item) => ({ page: item.page, label: item[locale] }))}
          />
        </div>
      </section>
      <section className="section">
        <div className="wrap about-story">
          {t.body.split('\n\n').map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
          {t.ctaHref ? (
            <p>
              <a className="btn btn-ink" href={t.ctaHref}>
                {t.cta}
              </a>
            </p>
          ) : t.ctaPage ? (
            <p>
              <Link className="btn btn-ink" href={href(locale, t.ctaPage)}>
                {t.cta}
              </Link>
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}
