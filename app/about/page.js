import { Page, Sec, L } from '../../components/ui';
import { SITE } from '../../lib/data';
import { meta } from '../../lib/seo';

export const metadata = meta('About Bhupinder Mahey | Senior Full-Stack Developer', '12+ years of PHP and web application development. Why businesses, startups and agencies trust Bhupinder Mahey with their software.', '/about/');

export default function About() {
  return (<Page crumbs={[['About', '/about/']]} h1="Why companies trust me with their software" lead="12+ years building and maintaining web software for real businesses, with long-term reliability as the working principle."
    ld={[{ '@type': 'Person', name: 'Bhupinder Mahey', jobTitle: 'Full-stack Developer', url: SITE + '/about/', address: { '@type': 'PostalAddress', addressLocality: 'Jalandhar', addressCountry: 'IN' } }]}>
    <Sec><div className="grid cols3">
      <div><h3>Experience</h3><p>More than 12 years in web development across PHP, CodeIgniter, Symfony, WordPress, OpenCart and React, including payment gateway and REST API integrations.</p></div>
      <div><h3>Long-term reliability</h3><p>Ten years as senior developer at one company (2008–2018), then team lead since 2018.</p></div>
      <div><h3>Business understanding</h3><p>Projects start with the business problem, not the framework. The goal is software that stays useful after launch.</p></div>
    </div></Sec>
    <Sec cls="alt"><h2>Experience</h2>
      <ul className="tl"><li><b>2018–present</b> Team Leader, Three Dots Media Pvt. Ltd., Jalandhar</li><li><b>2008–2018</b> Senior Software Developer, Dreamweavers Group, Jalandhar</li><li><b>2007–2008</b> Junior Developer, Creativer, Jalandhar</li><li><b>2002–2006</b> B.Tech. Computers, L.L.R.I.E.T., Moga</li></ul>
      <p className="sub">Languages: English, Punjabi, Hindi. Based in India (IST), working with clients internationally.</p></Sec>
    <Sec><h2>Development philosophy</h2><L items={['Understand the problem before choosing the tools.', 'Keep architecture simple enough to maintain.', 'Communicate directly and early.', 'Deliver clean, documented handovers.']} /></Sec>
  </Page>);
}
