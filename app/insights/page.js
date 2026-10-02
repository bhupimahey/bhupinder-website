import { Page, Sec } from '../../components/ui';
import { meta } from '../../lib/seo';
export const metadata = { ...meta('Insights | Bhupinder Mahey', 'Engineering, AI and digital insights from Bhupinder Mahey.', '/insights/'), robots: { index: false } };
export default function Insights() {
  return (<Page crumbs={[['Insights', '/insights/']]} h1="Insights" lead="Practical articles on software architecture, AI in business, integrations and white-label development."><Sec><p className="sub">The first articles are being prepared. Check back soon.</p></Sec></Page>);
}
