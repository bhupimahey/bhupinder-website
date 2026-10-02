import { Page, Sec } from '../../components/ui';
import { work } from '../../lib/data';
import { meta } from '../../lib/seo';

export const metadata = meta('Selected Work | Bhupinder Mahey', 'Selected web, e-commerce and business projects delivered by Bhupinder Mahey. Detailed case studies are in preparation.', '/work/');

export default function Work() {
  return (<Page crumbs={[['Work', '/work/']]} h1="Selected work" lead="Projects delivered across e-commerce, business and community websites." cta={{ title: 'Build Something Similar', text: 'Build Something Similar', event: 'cta_work' }}>
    <Sec><ul className="work">{work.map(w => <li key={w}>{w}<small>Case study in preparation</small></li>)}</ul></Sec>
    <Sec cls="alt"><h2>How each case study will be structured</h2><p className="sub">Challenge, solution, technology, business impact, key features and screenshots. Results are published only when they can be verified.</p></Sec>
  </Page>);
}
