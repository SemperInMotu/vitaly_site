'use client';

import { hint } from '@/lib/content';
import { LANG_KEY } from '@/lib/i18n';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const LANG_PATH = { ru: '/ru/', be: '/be/' } as const;

function detectPreferred(): 'ru' | 'be' | null {
  const tags = (
    navigator.languages?.length ? navigator.languages : [navigator.language || '']
  ).map((tag) => tag.toLowerCase());

  const byLanguage = tags.find((tag) => tag.startsWith('be') || tag.startsWith('ru'));
  const byRegion = tags.find((tag) => /-(by|ru|kz)\b/.test(tag));

  if (byLanguage) return byLanguage.startsWith('be') ? 'be' : 'ru';
  if (byRegion) return 'ru';
  return null;
}

function remember(lang: string) {
  try {
    window.localStorage.setItem(LANG_KEY, lang);
  } catch {
    /* private mode */
  }
}

export function LangHint() {
  const pathname = usePathname() || '/';
  const [detected, setDetected] = useState<'ru' | 'be' | null>(null);

  useEffect(() => {
    if (pathname !== '/') return;

    const params = new URLSearchParams(window.location.search);
    const forced = params.get('lang');
    if (forced === 'en' || forced === 'ru' || forced === 'be') remember(forced);

    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(LANG_KEY);
    } catch {
      stored = null;
    }

    const preferred = detectPreferred();
    if (!preferred) return;

    if (!stored) {
      remember(preferred);
      window.location.replace(LANG_PATH[preferred] + window.location.hash);
      return;
    }

    if (stored === 'en') setDetected(preferred);
  }, [pathname]);

  if (pathname !== '/' || !detected) return null;

  const copy = hint[detected];

  return (
    <div className="lang-hint">
      <div className="wrap lang-hint-inner">
        <p>{copy.text}</p>
        <a
          className="btn btn-sm"
          href={LANG_PATH[detected]}
          onClick={() => remember(detected)}
        >
          {copy.action}
        </a>
        <button
          type="button"
          className="lang-hint-close"
          aria-label="Dismiss"
          onClick={() => setDetected(null)}
        >
          ×
        </button>
      </div>
    </div>
  );
}
