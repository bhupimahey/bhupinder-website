import { notFound } from 'next/navigation';
import { Page, Sec, L } from '../../../components/ui';
import { services, SITE } from '../../../lib/data';
import { meta } from '../../../lib/seo';

export const dynamicParams = false;
export const generateStaticParams = () => services.map(s => ({ slug: s.slug }));
const find = async (params) => { const { slug } = await params; return services.find(s => s.slug === slug); };

export async function generateMetadata({ params }) {
  const s = await find(params);
  return meta(`${s.title} Services | Bhupinder Mahey`, `${s.short} ${s.solves} Built with ${s.tech}.`, `/services/${s.slug}/`);
}
export default async function Service({ params }) {
  const s = await find(params);
  if (!s) notFound();
  return (<Page crumbs={[['Services', '/services/'], [s.title, `/services/${s.slug}/`]]} h1={s.title} lead={s.short}
    ld={[{ '@type': 'Service', name: s.title, serviceType: s.title, areaServed: 'Worldwide', provider: { '@type': 'ProfessionalService', name: 'Bhupinder Mahey', url: SITE + '/' } }]}
    cta={{ title: 'Discuss Your Requirements', text: 'Discuss Your Requirements', event: 'cta_service_page' }}>
    <Sec><div className="grid info">
      <div><h3>What it solves</h3><p>{s.solves}</p></div>
      <div><h3>Who it is for</h3><p>{s.who}</p></div>
      <div><h3>Typical deliverables</h3><L items={s.deliver} /></div>
      <div><h3>Technologies</h3><p>{s.tech}</p></div>
      <div><h3>Business benefits</h3><L items={s.benefits} /></div>
    </div></Sec>
  </Page>);
}
