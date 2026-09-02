'use client';

import { isTopic, ui } from '@/lib/content';
import type { Locale } from '@/lib/i18n';
import { useEffect, useState } from 'react';

export function ContactEnhancements({ locale }: { locale: Locale }) {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('sent') === '1') setSent(true);

    const topic = params.get('topic') ?? '';
    if (!isTopic(topic)) return;
    const select = document.querySelector<HTMLSelectElement>('select[name="topic"]');
    if (select) select.value = topic;
  }, []);

  if (!sent) return null;

  return (
    <p className="form-status" role="status" tabIndex={-1}>
      {ui[locale].sent}
    </p>
  );
}
