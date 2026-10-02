import ContactForm from '../../components/ContactForm';
import { Page } from '../../components/ui';
import { EMAIL } from '../../lib/data';
import { meta } from '../../lib/seo';
export const metadata = meta('Contact | Start a Project | Bhupinder Mahey', 'Tell Bhupinder Mahey about your software, SaaS, API or AI project and start a conversation.', '/contact/');
export default function Contact() {
  return (<Page crumbs={[['Contact', '/contact/']]} h1="Let’s build something" lead="Tell me about your project. Replies go to your email." cta={false}>
    <section className="dark"><div className="wrap narrow"><ContactForm /><p className="direct">Or email <a href={`mailto:${EMAIL}`} data-event="email_click">{EMAIL}</a></p></div></section>
  </Page>);
}
