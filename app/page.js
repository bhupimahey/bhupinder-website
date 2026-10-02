import Link from 'next/link';
import Icon from '../components/Icon';
import HeroVisual from '../components/HeroVisual';
import { JsonLd } from '../components/ui';
import { hs, stats, projects, benefits, audience, steps2, testi, SAMPLE_TESTIMONIALS, EMAIL, SITE } from '../lib/data';
import { meta } from '../lib/seo';

export const metadata = meta('Software Development Partner for Businesses, Startups & Agencies | Bhupinder Mahey', 'Senior PHP, SaaS, API and AI development for international businesses, startups and agencies. White-label and dedicated development with 12+ years of experience.', '/');

const Arrow = () => <Icon n="arrow" />;
const Av = () => <div className="av" aria-hidden="true">{['JD', 'SM', 'MT', 'AK'].map(x => <i key={x}>{x}</i>)}</div>;
const Head = ({ eb, children }) => <><p className="eb">{eb}</p><h2>{children}</h2></>;

export default function Home() {
  return (<>
    <JsonLd data={[
      { '@type': 'WebSite', name: 'Bhupinder Mahey', url: SITE + '/' },
      { '@type': 'ProfessionalService', name: 'Bhupinder Mahey - Software & Digital Solutions', url: SITE + '/', email: EMAIL, areaServed: 'Worldwide', address: { '@type': 'PostalAddress', addressLocality: 'Jalandhar', addressRegion: 'Punjab', addressCountry: 'IN' }, founder: { '@type': 'Person', name: 'Bhupinder Mahey', jobTitle: 'Full-stack Developer' } },
    ]} />

    <section className="hero2"><div className="wrap hgrid">
      <div>
        <p className="eb">SOFTWARE • AI • DIGITAL • GLOBAL DELIVERY</p>
        <h1>Your Technology Partner.<br />From Idea to <em>Scalable Product.</em></h1>
        <p className="lead">I help businesses, startups and digital agencies build web applications, software, SaaS platforms, mobile apps, AI integrations and custom business software with a focus on long-term partnership, quality and results.</p>
        <div className="btns">
          <Link className="btn" href="/contact/" data-event="cta_hero_project">Start a Project<Arrow /></Link>
          <Link className="btn ghost" href="/work/" data-event="cta_hero_work"><Icon n="play" />Explore Our Work</Link>
        </div>
        <div className="trust"><Av /><p>Trusted by businesses, startups and agencies across USA, UK, Canada, Australia and beyond.</p></div>
      </div>
      <HeroVisual />
    </div></section>

    <section className="stats"><div className="wrap"><div className="box">
      {stats.map(([i, b, t]) => <div className="st" key={t}><span className="ico"><Icon n={i} /></span><div><b>{b}</b><span>{t}</span></div></div>)}
    </div></div></section>

    <section className="sx"><div className="wrap">
      <div className="shead"><div><Head eb="OUR SERVICES">Complete Digital Development Services</Head></div><Link className="tl2" href="/services/">View All Services<Arrow /></Link></div>
      <div className="sg">{hs.map(([i, t, d, h]) => <Link className="card" href={h} key={t}><span className="ico sq"><Icon n={i} /></span><h3>{t}</h3><p>{d}</p><span className="go"><Arrow /></span></Link>)}</div>
    </div></section>

    <section className="sx soft"><div className="wrap split">
      <div><Head eb="FEATURED WORK">Real Projects.<br />Real Business Impact.</Head>
        <p>A selection of web applications, SaaS platforms, mobile apps and custom software built for businesses, startups and agencies.</p>
        <Link className="btn" href="/work/" data-event="cta_cases">View All Case Studies<Arrow /></Link></div>
      <div className="pg">{projects.map(([tag, t, d, k]) => <Link className="card pj" href="/work/" key={t}><div className={`im ${k}`} aria-hidden="true" /><div className="bd"><small>{tag}</small><h3>{t}</h3><p>{d}</p></div><span className="go"><Arrow /></span></Link>)}</div>
    </div></section>

    <section className="sx"><div className="wrap split">
      <div><Head eb="WHY CHOOSE ME">A Reliable Technology Partner for Your Business</Head>
        <p>With 12+ years of development experience, I provide high-quality software solutions with a focus on long-term partnership, transparent communication and real business value.</p>
        <Link className="btn" href="/contact/" data-event="cta_why">Let’s Work Together<Arrow /></Link></div>
      <div className="bg3">{benefits.map(([i, t, d]) => <div className="bf" key={t}><span className="ico sq"><Icon n={i} /></span><div><h3>{t}</h3><p>{d}</p></div></div>)}</div>
    </div></section>

    <section className="sx soft"><div className="wrap split">
      <div><Head eb="BUILT FOR">Businesses, Startups & Digital Agencies</Head>
        <p>Whether you need a full product, an MVP, AI integration, or a reliable white-label development partner — I can help turn your ideas into powerful digital solutions.</p></div>
      <div className="ag">{audience.map(([i, t, d, a]) => <Link className="card" href={`/solutions/#${a}`} key={t}><span className="ico sq"><Icon n={i} /></span><h3>{t}</h3><p>{d}</p><span className="tl2">Explore Solutions<Arrow /></span></Link>)}</div>
    </div></section>

    <section className="sx"><div className="wrap split proc">
      <div><Head eb="OUR PROCESS">A Clear and Transparent Development Process</Head></div>
      <ol className="pr">{steps2.map(([i, t, d], k) => <li key={t}><span className="n">{String(k + 1).padStart(2, '0')}</span><span className="pi"><Icon n={i} /></span><h3>{t}</h3><p>{d}</p></li>)}</ol>
    </div></section>

    <section className="sx soft"><div className="wrap split">
      <div><Head eb="CLIENT FEEDBACK">What Clients Say</Head>
        <p>Trusted by businesses and agencies worldwide for high-quality development and long-term collaboration.</p>
        {SAMPLE_TESTIMONIALS && <p className="note">Sample feedback shown for layout purposes. Replace with verified client testimonials before launch.</p>}</div>
      <div className="tg">{testi.map(([q, n, c]) => <figure className="card tc" key={n}><blockquote><span aria-hidden="true">“</span>{q}</blockquote><figcaption><i aria-hidden="true">{n[0]}</i><span><b>{n}</b><small>{c}</small></span><span className="stars" role="img" aria-label="5 out of 5 stars">★★★★★</span></figcaption></figure>)}</div>
    </div></section>

    <section className="fcta"><div className="wrap fgrid">
      <div><p className="eb">LET’S BUILD TOGETHER</p><h2>Ready to discuss your project?</h2><p>Let’s turn your ideas into powerful digital solutions.</p></div>
      <div className="btns"><Link className="btn" href="/contact/" data-event="cta_final">Start a Conversation<Arrow /></Link><Link className="btn ghost" href="/work/" data-event="cta_final_work">View Our Work<Arrow /></Link></div>
      <div className="trust"><Av /><p>Trusted globally<br />for quality and results.</p></div>
    </div></section>
  </>);
}
