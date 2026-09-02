export const SITE = 'https://vitalykhoruzhko.com';

export const LOCALES = ['en', 'ru', 'be'] as const;
export type Locale = (typeof LOCALES)[number];

export const ROUTED_LOCALES = ['ru', 'be'] as const;
export type RoutedLocale = (typeof ROUTED_LOCALES)[number];

export const PAGES = ['home', 'projects', 'about', 'contact'] as const;
export type Page = (typeof PAGES)[number];

export const LANG_KEY = 'vk-lang';

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function isRoutedLocale(value: string): value is RoutedLocale {
  return (ROUTED_LOCALES as readonly string[]).includes(value);
}

export function htmlLang(locale: Locale): string {
  return locale === 'be' ? 'be-tarask' : locale;
}

export function localePrefix(locale: Locale): string {
  return locale === 'en' ? '' : `/${locale}`;
}

export function href(locale: Locale, page: Page): string {
  const prefix = localePrefix(locale);
  if (page === 'home') return prefix || '/';
  return `${prefix}/${page}`;
}

export function canonical(locale: Locale, page: Page): string {
  const path = href(locale, page);
  if (path === '/') return `${SITE}/`;
  return `${SITE}${path}/`;
}

export function stripLocale(pathname: string): string {
  const cleaned = pathname.replace(/^\/(en|ru|be)(?=\/|$)/, '');
  return cleaned || '/';
}

export function siblingHref(pathname: string, target: Locale): string {
  const rest = stripLocale(pathname);
  if (target === 'en') return rest;
  if (rest === '/') return `/${target}`;
  return `/${target}${rest}`;
}

export function pageFromPath(pathname: string): Page {
  const rest = stripLocale(pathname).replace(/\/$/, '');
  if (rest === '/projects') return 'projects';
  if (rest === '/about') return 'about';
  if (rest === '/contact') return 'contact';
  return 'home';
}

export function projectLinks(locale: Locale) {
  const suffix = locale === 'en' ? '/' : `/${locale}/`;
  return {
    alfakit: `https://alfakit.by${suffix === '/' ? '/' : suffix}`,
    semper: `https://semperinmotu.com${suffix === '/' ? '/' : suffix}`,
    heritage: `https://heritavia.vitalykhoruzhko.com${suffix === '/' ? '/' : suffix}`,
  };
}
