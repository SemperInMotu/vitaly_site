import { pages } from '@/lib/content';
import { type Locale } from '@/lib/i18n';

// Словарик с переводами для нового блока
const customText = {
  en: {
    intro: "Let's talk. I’m always open to interesting ideas, projects and conversations - whether they are about software, AI, data, genealogy, or something completely unexpected.",
    projects: "Projects",
  },
  ru: {
    intro: "Я всегда открыт для интересных идей, проектов и общения — будь то разработка ПО, искусственный интеллект, работа с данными, генеалогия или что-то совершенно неожиданное.",
    projects: "Проекты",
  },
  // Замените 'be' на тот код локали, который вы используете для тарашкевицы (например, 'be-tarask', если у вас так)
  be: {
    intro: "Я заўжды адкрыты да цікавых ідэяў, праектаў і размоваў — няхай гэта будзе праграмнае забесьпячэньне, штучны інтэлект, дадзеныя, генеалёгія ці штосьці цалкам нечаканае.",
    projects: "Праекты",
  }
};

export function ContactPage({ locale }: { locale: Locale }) {
  const t = pages[locale].contact;
  
  // Получаем нужный текст по ключу локали. Если ключ не найден, показываем английский по умолчанию.
  const text = customText[locale as keyof typeof customText] || customText.en;

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">{t.eyebrow}</div>
          <h1>{t.heading}</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap" style={{ maxWidth: 640 }}>
          <div className="panel" style={{ padding: '2rem' }}>
            <p className="lead" style={{ marginBottom: '2rem' }}>
              {text.intro}
            </p>
            
            <p style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 500 }}>
              <a href="mailto:info@vitalykhoruzhko.com">info@vitalykhoruzhko.com</a>
            </p>
            
            <p style={{ marginBottom: '2.5rem', fontSize: '1.125rem' }}>
              <a href="https://t.me/N_FT210993" rel="noopener noreferrer" target="_blank">Telegram</a>
              {' · '}
              <a href="https://www.linkedin.com/in/vitalykhoruzhko" rel="noopener noreferrer" target="_blank">LinkedIn</a>
            </p>

            <h3 style={{ marginBottom: '0.5rem' }}>{text.projects}</h3>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-ink-muted, #666)' }}>
            <a href="https://alfakit.by" rel="noopener noreferrer" target="_blank">ALFAKIT</a>
              {' · '}
              <a href="https://semperinmotu.com" rel="noopener noreferrer" target="_blank">Semper In Motu</a>
              {' · '}
              <a href="https://heritavia.vitalykhoruzhko.com" rel="noopener noreferrer" target="_blank">Heritavia</a>              
            </p>
          </div>
        </div>
      </section>
    </>
  );
}