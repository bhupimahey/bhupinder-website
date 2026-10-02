'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Brand from './Brand';
import Icon from './Icon';
import { nav } from '../lib/data';

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname() || '/';
  const on = (h) => (h === '/' ? path === '/' : path.startsWith(h));
  const close = () => setOpen(false);
  return (
    <header className={`bar${open ? ' open' : ''}`}><div className="wrap">
      <Brand />
      <nav id="mnav" aria-label="Main">
        {nav.map(([n, h]) => <Link key={h} href={h} className={on(h) ? 'on' : ''} aria-current={on(h) ? 'page' : undefined} onClick={close}>{n}</Link>)}
        <Link className="btn only-m" href="/contact/" onClick={close}>Start a Project<Icon n="arrow" /></Link>
      </nav>
      <div className="acts">
        <Link className="btn sm hide-m" href="/contact/" data-event="cta_nav">Start a Project<Icon n="arrow" /></Link>
        <button className="burger" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mnav" onClick={() => setOpen(!open)}><Icon n={open ? 'x' : 'menu'} /></button>
      </div>
    </div></header>
  );
}
