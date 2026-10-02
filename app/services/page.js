import Link from 'next/link';
import { Page, Sec } from '../../components/ui';
import { services } from '../../lib/data';
import { meta } from '../../lib/seo';

export const metadata = meta('Software Development Services | Web, SaaS, API & AI | Bhupinder Mahey', 'Custom web applications, SaaS, e-commerce, API integrations, AI automation and dedicated development for businesses, startups and agencies.', '/services/');

export default function Services() {
  return (<Page crumbs={[['Services', '/services/']]} h1="Software development services" lead="Engineering for businesses, startups and agencies that need dependable software without building a large in-house team." cta={{ title: 'Discuss Your Requirements', text: 'Discuss Your Requirements', event: 'cta_services' }}>
    <Sec><div className="grid">{services.map(s => <article key={s.slug}><h3><Link href={`/services/${s.slug}/`}>{s.title}</Link></h3><p>{s.short}</p></article>)}</div></Sec>
  </Page>);
}
