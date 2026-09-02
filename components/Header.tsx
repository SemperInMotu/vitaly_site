'use client';

import { ui } from '@/lib/content';
import { href, LANG_KEY, LOCALES, pageFromPath, siblingHref, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

function remember(lang: string) {
  try {
    window.localStorage.setItem(LANG_KEY, lang);
  } catch {
    /* private mode */
  }
}

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname() || '/';
  const current = pageFromPath(pathname);
  const t = ui[locale];
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Link className="brand" href={href(locale, 'home')}>
          Vitaly Khoruzhko
        </Link>
        <div className="header-tools">
          <nav className="lang-switch" aria-label={t.langAria}>
            {LOCALES.map((code) =>
              code === locale ? (
                <span key={code} className="lang-current" aria-current="page">
                  {code.toUpperCase()}
                </span>
              ) : (
                <Link
                  key={code}
                  href={siblingHref(pathname, code)}
                  hrefLang={code}
                  onClick={() => remember(code)}
                >
                  {code.toUpperCase()}
                </Link>
              ),
            )}
          </nav>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {t.menu}
          </button>
        </div>
        <nav className={open ? 'nav is-open' : 'nav'} id="site-nav">
          <Link href={href(locale, 'projects')} aria-current={current === 'projects' ? 'page' : undefined}>
            {t.projects}
          </Link>
          <Link href={href(locale, 'about')} aria-current={current === 'about' ? 'page' : undefined}>
            {t.about}
          </Link>
          <Link
            className="nav-cta"
            href={href(locale, 'contact')}
            aria-current={current === 'contact' ? 'page' : undefined}
          >
            {t.contact}
          </Link>
        </nav>
      </div>
    </header>
  );
}
