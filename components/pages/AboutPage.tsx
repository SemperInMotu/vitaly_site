import { pages } from '@/lib/content';
import { href, type Locale } from '@/lib/i18n';
import Link from 'next/link';

export function AboutPage({locale}: { locale: Locale }) {
  const t = pages[locale].about;

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
        <div className="wrap about-story">

          <section className="about-block">
            <h2>{t.story.introTitle}</h2>
            {t.story.intro.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </section>

          <section className="about-block">
            <h2>{t.story.buildingTitle}</h2>
            {t.story.building.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </section>

          <section className="about-block">
            <h2>{t.story.dataTitle}</h2>
            {t.story.data.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </section>

          <section className="about-block">
            <h2>{t.story.genealogyTitle}</h2>
            {t.story.genealogy.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </section>

          <section className="about-block">
            <h2>{t.story.connectionTitle}</h2>
            {t.story.connection.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </section>

          <section className="about-block">
            <h2>{t.story.nowTitle}</h2>
            {t.story.now.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </section>

          <section className="about-closing">
            {t.story.closing.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

            <p className="about-signature">
              {t.story.signature}
            </p>
          </section>

          <div className="about-cta">
            <p className="muted">{t.products}</p>

            <Link
              className="btn btn-ink"
              style={{ marginTop: '1.25rem' }}
              href={href(locale, 'contact')}
            >
              {t.cta}
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}