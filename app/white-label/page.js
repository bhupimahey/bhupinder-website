import { Page, Sec, L } from '../../components/ui';
import { flow, SITE } from '../../lib/data';
import { meta } from '../../lib/seo';

export const metadata = meta('White-Label Development Partner for Agencies | Bhupinder Mahey', 'NDA-friendly white-label development for agencies: backend, frontend, e-commerce and long-term support, delivered under your brand.', '/white-label/');

export default function WhiteLabel() {
  return (<Page crumbs={[['White-Label', '/white-label/']]} h1="Your Clients. Your Brand. Your Development Partner." lead="White-label development for agencies with designers, marketers and clients, that need a reliable engineer behind the scenes."
    ld={[{ '@type': 'Service', name: 'White-Label Development', areaServed: 'Worldwide', provider: { '@type': 'ProfessionalService', name: 'Bhupinder Mahey', url: SITE + '/' } }]}
    cta={{ title: 'Become a Development Partner', text: 'Become a Development Partner', event: 'cta_white_label_page' }}>
    <Sec><h2>How it works</h2><ol className="flow">{flow.map(f => <li key={f}>{f}</li>)}</ol></Sec>
    <Sec cls="alt"><div className="grid cols3">
      <div><h3>What is covered</h3><L items={['Backend development', 'Frontend development', 'E-commerce and integrations', 'Maintenance and long-term support']} /></div>
      <div><h3>Agency-friendly workflow</h3><L items={['NDA-friendly collaboration', 'Direct communication', 'Your brand only, always', 'Flexible engagement']} /></div>
      <div><h3>Best for</h3><p>Design, marketing and web agencies that sell websites and software to clients but need dependable development capacity.</p></div>
    </div></Sec>
  </Page>);
}
