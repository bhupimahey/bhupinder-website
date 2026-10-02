import Link from 'next/link';
export default function Brand() {
  return (<Link className="brand" href="/" aria-label="Bhupinder Mahey - home">
    <span className="mark" aria-hidden="true">B</span>
    <span className="bt"><b>Bhupinder Mahey</b><small>SOFTWARE & DIGITAL SOLUTIONS</small></span>
  </Link>);
}
