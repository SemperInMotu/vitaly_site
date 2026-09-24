import { KNOWLEDGE_NAV, pages } from '@/lib/content';
import type { Locale } from '@/lib/i18n';
import { SectionNav } from '@/components/SectionNav';

export function NotesPage({ locale }: { locale: Locale }) {
  const t = pages[locale].notes;

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">{t.eyebrow}</div>
          <h1>{t.heading}</h1>
          <p className="lead">{t.lead}</p>
          <SectionNav
            locale={locale}
            current="notes"
            items={KNOWLEDGE_NAV.map((item) => ({ page: item.page, label: item[locale] }))}
          />
        </div>
      </section>
      <section className="section">
        <div className="wrap notes-list">
          {t.items.map((note) => (
            <article key={note.title} className="note-card">
              <div className="note-meta">
                <span className="meta-line">{note.date}</span>
                <span className="note-tags">{note.tags.join(' ')}</span>
              </div>
              <h2>{note.title}</h2>
              <p>{note.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
