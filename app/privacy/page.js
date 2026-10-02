import { Page, Sec } from '../../components/ui';
import { meta } from '../../lib/seo';
export const metadata = meta('Privacy Policy | Bhupinder Mahey', 'Privacy Policy for bhupimahey.in.', '/privacy/');
export default function Privacy() {
  return (<Page crumbs={[['Privacy Policy', '/privacy/']]} h1="Privacy Policy" lead="Draft for review. Items marked [PLACEHOLDER] must be completed before launch." cta={false}>
    <Sec><div className="narrow prose">
      <p>Last updated: [PLACEHOLDER: date]. Operator: [PLACEHOLDER: legal name and address].</p>
      <h2>Data we collect</h2><p>When you use the contact form we receive your name, company, email, country, project details and budget range. This site does not set cookies of its own.</p>
      <h2>How it is used</h2><p>Only to respond to your enquiry. Messages are delivered by email. Retention period: [PLACEHOLDER].</p>
      <h2>Your rights</h2><p>Contact bhupimahey@gmail.com to access or delete your data. [PLACEHOLDER: jurisdiction-specific wording, e.g. GDPR].</p>
    </div></Sec></Page>);
}
