import { href, type Locale, type Page } from '@/lib/i18n';
import Link from 'next/link';

export function SectionNav({
  locale,
  items,
  current,
}: {
  locale: Locale;
  items: { page: Page; label: string }[];
  current: Page;
}) {
  return (
    <nav className="section-nav" aria-label="Section">
      {items.map((item) => (
        <Link
          key={item.page}
          href={href(locale, item.page)}
          aria-current={item.page === current ? 'page' : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
