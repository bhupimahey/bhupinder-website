import Link from 'next/link';
import Brand from './Brand';
import Icon from './Icon';
import { nav, EMAIL, GITHUB, LINKEDIN, WHATSAPP } from '../lib/data';
import { crumbsLd } from '../lib/seo';

export { default as Header } from './Header';
export function Footer() {
  const soc = [['github', 'GitHub', GITHUB], ['linkedin', 'LinkedIn', LINKEDIN], ['mail', 'Email', `mailto:${EMAIL}`], ['whatsapp', 'WhatsApp', WHATSAPP]].filter(x => x[2]);
  return (<footer className="foot"><div className="wrap foot-row">
    <Brand />
    <nav aria-label="Footer">{nav.map(([n, h]) => <Link key={h} href={h}>{n}</Link>)}</nav>
    <div className="soc">{soc.map(([i, l, h]) => <a key={i} href={h} aria-label={l} {...(h.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} data-event={`${i}_click`}><Icon n={i} /></a>)}</div>
  </div><div className="wrap foot-bot"><p>© {new Date().getFullYear()} Bhupinder Mahey. All rights reserved.</p><p><Link href="/privacy/">Privacy Policy</Link> <Link href="/terms/">Terms</Link></p></div></footer>);
}
export const Sec = ({ id, cls = '', children }) => <section id={id} className={cls}><div className="wrap">{children}</div></section>;
export const L = ({ items }) => <ul>{items.map(x => <li key={x}>{x}</li>)}</ul>;
export const JsonLd = ({ data }) => <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': data }) }} />;
export function PageHead({ crumbs, h1, lead }) {
  return (<section className="phead dark"><div className="wrap">
    <p className="crumbs"><Link href="/">Home</Link>{crumbs.map(([n, p], i) => i < crumbs.length - 1 ? <span key={p}> / <Link href={p}>{n}</Link></span> : <span key={p}> / {n}</span>)}</p>
    <h1>{h1}</h1><p className="lead">{lead}</p>
  </div></section>);
}
export const CtaBand = ({ title = 'Let’s Build Something', text = 'Start a Conversation', event = 'cta_footer' }) => (
  <section className="dark"><div className="wrap narrow"><h2>{title}</h2><p className="cta"><Link className="btn" href="/contact/" data-event={event}>{text}</Link></p></div></section>);
export function Page({ crumbs, h1, lead, children, cta, ld = [] }) {
  return (<>
    <JsonLd data={[crumbsLd(crumbs), ...ld]} />
    <PageHead crumbs={crumbs} h1={h1} lead={lead} />
    {children}
    {cta !== false && <CtaBand {...(cta || {})} />}
  </>);
}
