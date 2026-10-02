import { SITE, services } from '../lib/data';
export const dynamic = 'force-static';
export default function sitemap() {
  const paths = ['/', '/services/', ...services.map(s => `/services/${s.slug}/`), '/white-label/', '/solutions/', '/contact/', '/about/', '/work/', '/privacy/', '/terms/'];
  return paths.map(p => ({ url: SITE + p, lastModified: '2026-10-02' }));
}
