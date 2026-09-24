import { ui } from '@/lib/content';
import { href, projectLinks, type Locale } from '@/lib/i18n';
import Link from 'next/link';

export function Footer({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const links = projectLinks(locale);

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid footer-grid--4">
          <div>
            <div className="footer-brand">Vitaly Khoruzhko</div>
            <p className="fine footer-tagline">{t.tagline}</p>
          </div>
          <div className="footer-col">
            <h4>{t.buildingCol}</h4>
            <ul>
              <li>
                <a href={links.semper}>Semper In Motu</a>
              </li>
              <li>
                <a href={links.heritage}>Heritavia</a>
              </li>
              <li>
                <Link href={href(locale, 'building')}>{t.building}</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t.knowledgeCol}</h4>
            <ul>
              <li>
                <Link href={href(locale, 'expertise')}>{t.expertise}</Link>
              </li>
              <li>
                <Link href={href(locale, 'knowledge-cases')}>{t.experienceCol}</Link>
              </li>
              <li>
                <Link href={href(locale, 'notes')}>{t.notes}</Link>
              </li>
              <li>
                <Link href={href(locale, 'photography')}>{t.photography}</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t.contactCol}</h4>
            <ul>
              <li>
                <a href="mailto:info@vitalykhoruzhko.com">info@vitalykhoruzhko.com</a>
              </li>
              <li>
                <a href="https://t.me/N_FT210993" rel="noopener">
                  Telegram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/vitalykhoruzhko" rel="noopener">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2001-{new Date().getFullYear()} Vitaly Khoruzhko</span>
        </div>
      </div>
    </footer>
  );
}
