import { notFound } from 'next/navigation';
import { isRoutedLocale, type RoutedLocale } from './i18n';

export function generateLocaleParams() {
  return [{ locale: 'ru' }, { locale: 'be' }];
}

export async function localeFrom(
  params: Promise<{ locale: string }>,
): Promise<RoutedLocale> {
  const { locale } = await params;
  if (!isRoutedLocale(locale)) notFound();
  return locale;
}
