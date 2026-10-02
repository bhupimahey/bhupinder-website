'use client';
import { useEffect } from 'react';
// Pushes data-event clicks to window.dataLayer (connect Google Tag Manager / GA4 later).
export default function Track() {
  useEffect(() => {
    const h = (e) => { const a = e.target.closest('[data-event]'); if (a) (window.dataLayer = window.dataLayer || []).push({ event: a.dataset.event }); };
    document.addEventListener('click', h);
    return () => document.removeEventListener('click', h);
  }, []);
  return null;
}
