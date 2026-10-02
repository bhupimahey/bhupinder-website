import { Page, Sec } from '../../components/ui';
import { meta } from '../../lib/seo';
export const metadata = meta('Terms & Conditions | Bhupinder Mahey', 'Terms & Conditions for bhupimahey.in.', '/terms/');
export default function Terms() {
  return (<Page crumbs={[['Terms & Conditions', '/terms/']]} h1="Terms & Conditions" lead="Draft for review. Items marked [PLACEHOLDER] must be completed before launch." cta={false}>
    <Sec><div className="narrow prose">
      <p>Last updated: [PLACEHOLDER: date]. Operator: [PLACEHOLDER: legal name and address].</p>
      <h2>Use of this website</h2><p>The content is provided for general information. It is not an offer or contract. Project work is governed by a separate written agreement.</p>
      <h2>Liability and governing law</h2><p>[PLACEHOLDER: liability limits and governing law, to be confirmed with legal counsel].</p>
    </div></Sec></Page>);
}
