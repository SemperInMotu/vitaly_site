import { ui } from '@/lib/content';
import type { Locale } from '@/lib/i18n';

export function PhotoPlate({
  locale,
  title,
  year,
  caption,
  meta,
  story,
}: {
  locale: Locale;
  title: string;
  year: string;
  caption: string;
  meta?: string;
  story?: string;
}) {
  const t = ui[locale];
  return (
    <figure className="photo-plate">
      <div className="photo-plate__frame" role="img" aria-label={t.archivePlate} />
      <figcaption>
        <div className="photo-plate__head">
          <span className="photo-plate__title">{title}</span>
          <span className="meta-line">{year}</span>
        </div>
        <p>{caption}</p>
        {meta ? <p className="meta-line">{meta}</p> : null}
        {story ? <p className="photo-plate__story">{story}</p> : null}
      </figcaption>
    </figure>
  );
}
