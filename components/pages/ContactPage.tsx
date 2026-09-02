import { pages } from '@/lib/content';
import { canonical, type Locale } from '@/lib/i18n';
import { ContactEnhancements } from './ContactEnhancements';

const TOPICS = ['general', 'alfakit', 'semper', 'heritavia', 'other'] as const;

export function ContactPage({ locale }: { locale: Locale }) {
  const t = pages[locale].contact;
  const nextUrl = `${canonical(locale, 'contact')}?sent=1`;

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">{t.eyebrow}</div>
          <h1>{t.heading}</h1>
          <p className="lead">
            <a href="mailto:info@vitalykhoruzhko.com">info@vitalykhoruzhko.com</a>
            {t.leadAfter}
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap" style={{ maxWidth: 640 }}>
          <ContactEnhancements locale={locale} />
          <form
            className="panel lead-form"
            action="https://formsubmit.co/info@vitalykhoruzhko.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="vitalykhoruzhko.com — enquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={nextUrl} />
            <input
              type="text"
              name="_honey"
              defaultValue=""
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: 'absolute', left: '-9999px', height: 0, width: 0, opacity: 0 }}
            />
            <label htmlFor="topic">{t.topic}</label>
            <select id="topic" name="topic" required defaultValue="general">
              {TOPICS.map((value) => (
                <option key={value} value={value}>
                  {t.topics[value]}
                </option>
              ))}
            </select>
            <label htmlFor="name">{t.name}</label>
            <input id="name" name="name" required autoComplete="name" />
            <label htmlFor="email">{t.email}</label>
            <input id="email" name="email" type="email" required autoComplete="email" />
            <label htmlFor="message">{t.message}</label>
            <textarea id="message" name="message" required />
            <div className="form-actions">
              <button className="btn btn-ink" type="submit">
                {t.submit}
              </button>
            </div>
          </form>
          <ul className="channels">
            <li>
              <a href="tel:+375296757858">+375 29 675-78-58</a>
            </li>
            <li>
              <a href="https://t.me/N_FT210993" rel="noopener">
                Telegram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/vitalykhoruzhko" rel="noopener">
                linkedin.com/in/vitalykhoruzhko
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
