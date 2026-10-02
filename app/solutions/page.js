import Link from 'next/link';
import { Page, Sec } from '../../components/ui';
import { meta } from '../../lib/seo';
export const metadata = meta('Software Solutions for Businesses, Startups & Agencies | Bhupinder Mahey', 'Custom software solutions for businesses modernizing systems, startups building products, and agencies needing a white-label development partner.', '/solutions/');
const S = [['businesses', 'For Businesses', 'Streamline operations, automate manual processes and modernize legacy systems with custom business software, integrations and AI automation.', '/services/web-application-development/', 'Web application development'],
  ['startups', 'For Startups', 'Go from idea to MVP and scale your product with the right architecture, SaaS foundations and a long-term technical partner.', '/services/saas-development/', 'SaaS development'],
  ['agencies', 'For Agencies', 'White-label development for your client projects: NDA-friendly, direct communication and your brand only.', '/white-label/', 'White-label development']];
export default function Solutions() {
  return (<Page crumbs={[['Solutions', '/solutions/']]} h1="Solutions by business need" lead="Whether you need a full product, an MVP, AI integration or a white-label partner.">
    {S.map(([id, t, d, h, l], i) => <Sec key={id} id={id} cls={i % 2 ? 'alt' : ''}><h2>{t}</h2><p className="sub">{d}</p><p className="more"><Link className="btn" href={h}>{l}</Link></p></Sec>)}
  </Page>);
}
