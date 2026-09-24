export const SITE = 'https://vitalykhoruzhko.com';

export const LOCALES = ['en', 'ru', 'be'] as const;
export type Locale = (typeof LOCALES)[number];

export const ROUTED_LOCALES = ['ru', 'be'] as const;
export type RoutedLocale = (typeof ROUTED_LOCALES)[number];

export const PAGES = [
  'home',
  'building',
  'about',
  'contact',
  'expertise',
  'expertise-ai',
  'expertise-systems',
  'expertise-logistics',
  'genealogy',
  'genealogy-research',
  'genealogy-family-history',
  'genealogy-dna',
  'knowledge',
  'knowledge-articles',
  'knowledge-cases',
  'knowledge-research',
  'photography',
  'photography-people',
  'photography-places',
  'photography-traces',
  'photography-projects',
  'notes',
] as const;
export type Page = (typeof PAGES)[number];

export const NAV_PAGES = [
  'building',
  'expertise',
  'knowledge',
  'photography',
  'about',
  'contact',
] as const;
export type NavPage = (typeof NAV_PAGES)[number];

export const PAGE_PATH: Record<Page, string> = {
  home: '/',
  building: '/building',
  about: '/about',
  contact: '/contact',
  expertise: '/expertise',
  'expertise-ai': '/expertise/ai-data',
  'expertise-systems': '/expertise/business-systems',
  'expertise-logistics': '/expertise/logistics',
  genealogy: '/genealogy',
  'genealogy-research': '/genealogy/research',
  'genealogy-family-history': '/genealogy/family-history',
  'genealogy-dna': '/genealogy/dna',
  knowledge: '/knowledge',
  'knowledge-articles': '/knowledge/articles',
  'knowledge-cases': '/knowledge/cases',
  'knowledge-research': '/knowledge/research',
  photography: '/photography',
  'photography-people': '/photography/people',
  'photography-places': '/photography/places',
  'photography-traces': '/photography/traces',
  'photography-projects': '/photography/projects',
  notes: '/notes',
};

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
  const path = PAGE_PATH[page];
  if (path === '/') return prefix || '/';
  return `${prefix}${path}`;
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

function pathToPage(rest: string): Page {
  const clean = rest.replace(/\/$/, '') || '/';
  if (clean === '/projects' || clean === '/work') return 'building';
  const hit = (Object.entries(PAGE_PATH) as [Page, string][]).find(([, path]) => path === clean);
  return hit?.[0] ?? 'home';
}

export function pageFromPath(pathname: string): Page {
  return pathToPage(stripLocale(pathname));
}

export function navFromPath(pathname: string): NavPage | 'home' {
  const rest = stripLocale(pathname).replace(/\/$/, '') || '/';
  if (rest === '/projects' || rest === '/work' || rest.startsWith('/building')) return 'building';
  if (rest.startsWith('/expertise') || rest.startsWith('/genealogy')) return 'expertise';
  if (rest.startsWith('/knowledge') || rest.startsWith('/notes')) return 'knowledge';
  if (rest.startsWith('/photography')) return 'photography';
  if (rest === '/about') return 'about';
  if (rest === '/contact') return 'contact';
  return 'home';
}

export function projectLinks(locale: Locale) {
  const suffix = locale === 'en' ? '/' : `/${locale}/`;
  return {
    alfakit: `https://alfakit.by${suffix === '/' ? '/' : suffix}`,
    semper: `https://semperinmotu.com${suffix === '/' ? '/' : suffix}`,
    heritage: 'https://www.heritavia.com',
  };
}
