import { PhotoPlate } from '@/components/PhotoPlate';
import { SectionNav } from '@/components/SectionNav';
import { PHOTO_NAV, pages, ui } from '@/lib/content';
import type { Locale, Page } from '@/lib/i18n';

export function PhotographyPage({ locale }: { locale: Locale }) {
  const t = pages[locale].photography;

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">{t.eyebrow}</div>
          <h1>{t.heading}</h1>
          <p className="lead">{t.lead}</p>
          <SectionNav
            locale={locale}
            current="photography"
            items={PHOTO_NAV.map((item) => ({ page: item.page, label: item[locale] }))}
          />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="section-heading">{ui[locale].selected}</h2>
          <div className="photo-grid">
            {t.plates.map((plate) => (
              <PhotoPlate key={plate.title} locale={locale} {...plate} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const PHOTO_KEYS = [
  'photography-people',
  'photography-places',
  'photography-projects',
] as const;
type PhotoKey = (typeof PHOTO_KEYS)[number];

export function PhotographySectionPage({ locale, page }: { locale: Locale; page: PhotoKey }) {
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
            items={PHOTO_NAV.map((item) => ({ page: item.page, label: item[locale] }))}
          />
        </div>
      </section>
      <section className="section">
        <div className="wrap photo-grid">
          {t.plates.map((plate) => (
            <PhotoPlate key={`${plate.title}-${plate.year}`} locale={locale} {...plate} />
          ))}
        </div>
      </section>
    </>
  );
}

export function TracesPage({ locale }: { locale: Locale }) {
  const t = pages[locale]['photography-traces'];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">{t.eyebrow}</div>
          <h1>{t.heading}</h1>
          <p className="lead">{t.lead}</p>
          <SectionNav
            locale={locale}
            current="photography-traces"
            items={PHOTO_NAV.map((item) => ({ page: item.page, label: item[locale] }))}
          />
        </div>
      </section>
      <section className="section">
        <div className="wrap traces-stack">
          {t.traces.map((trace) => (
            <PhotoPlate key={trace.title} locale={locale} {...trace} />
          ))}
        </div>
      </section>
    </>
  );
}
