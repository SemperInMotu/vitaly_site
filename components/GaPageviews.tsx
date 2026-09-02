'use client';

import { GA_ID } from '@/lib/ga';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function GaPageviews() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    window.gtag?.('config', GA_ID, { page_path: pathname });
  }, [pathname]);

  return null;
}
