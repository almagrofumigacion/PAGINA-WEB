'use client';

import { useEffect, useState } from 'react';

export function PageLoader() {
  const [phase, setPhase] = useState<'loading' | 'leaving' | 'hidden'>('loading');

  useEffect(() => {
    const started = performance.now();
    let scheduled = false;
    let fadeTimer: ReturnType<typeof setTimeout>;
    let removeTimer: ReturnType<typeof setTimeout>;

    const finish = () => {
      if (scheduled) return;
      scheduled = true;
      const remaining = Math.max(0, 750 - (performance.now() - started));
      fadeTimer = setTimeout(() => {
        setPhase('leaving');
        removeTimer = setTimeout(() => setPhase('hidden'), 300);
      }, remaining);
    };

    // Cached pages finish immediately; slow or failed assets never trap visitors.
    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', finish, { once: true });
    const safetyTimer = setTimeout(finish, 3500);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Tab') finish();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('load', finish);
      window.removeEventListener('keydown', onKeyDown);
      clearTimeout(safetyTimer);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (phase === 'hidden') return null;

  return (
    <>
      <div className={`page-loader ${phase === 'leaving' ? 'is-leaving' : ''}`} role="status" aria-live="polite" aria-label="Cargando Almagro Fumigación">
        <div className="page-loader-brand">
          <div className="page-loader-mark">
            <img src="/logo.webp" alt="Almagro Fumigación" width="120" height="120" fetchPriority="high" />
          </div>
          <p>ALMAGRO <span>FUMIGACIÓN</span></p>
          <div className="page-loader-progress" aria-hidden="true"><span /></div>
          <small>Cargando…</small>
        </div>
      </div>
      <noscript><style>{'.page-loader{display:none!important}'}</style></noscript>
    </>
  );
}
