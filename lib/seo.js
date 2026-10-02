import { SITE } from './data';
export const meta = (title, description, path) => ({
  title, description, alternates: { canonical: path },
  openGraph: { title, description, url: path, type: 'website', siteName: 'Bhupinder Mahey', images: ['/img/bhupinder.jpg'] },
  twitter: { card: 'summary_large_image', title, description },
});
export const crumbsLd = (items) => ({ '@type': 'BreadcrumbList', itemListElement: [['Home', '/'], ...items].map(([name, p], i) => ({ '@type': 'ListItem', position: i + 1, name, item: SITE + p })) });
