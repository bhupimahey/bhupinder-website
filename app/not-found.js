import Link from 'next/link';
import { PageHead, Sec } from '../components/ui';
export const metadata = { title: 'Page not found | Bhupinder Mahey', robots: { index: false } };
export default function NotFound() {
  return (<><PageHead crumbs={[['Not found', '/404/']]} h1="Page not found" lead="The page you are looking for does not exist or has moved." />
    <Sec><Link className="btn" href="/">Back to homepage</Link> <Link className="btn ghost dk" href="/services/">View services</Link></Sec></>);
}
