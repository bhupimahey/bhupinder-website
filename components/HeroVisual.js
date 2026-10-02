import Icon from './Icon';
const cards = [['c1', 'monitor', 'Web Applications', 'Modern & scalable'], ['c2', 'cpu', 'AI & Automation', 'Integrate & innovate'], ['c3', 'phone', 'Mobile Apps', 'iOS & Android'], ['c4', 'link', 'API Integrations', 'Connect Your Systems'], ['c5', 'layers', 'Custom Software', 'Built for Your Business']];
export default function HeroVisual() {
  return (
    <div className="hv" aria-hidden="true">
      <div className="hv-globe" />
      <div className="hv-laptop"><div className="hv-screen">
        <aside><i /><i /><i /><i /><i /><i /></aside>
        <div className="hv-main"><b>Good Morning!</b>
          <div className="hv-stats"><span><em>Total Revenue</em>$24,780</span><span><em>Active Users</em>1,245</span><span><em>Projects</em>86</span></div>
          <svg viewBox="0 0 200 50" preserveAspectRatio="none"><path d="M0 42 C25 34 35 46 60 28 S100 14 130 22 S175 6 200 10" fill="none" stroke="#22e86d" strokeWidth="2" /></svg>
          <div className="hv-bars">{[30, 45, 38, 60, 50, 72, 64, 85, 70, 92].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
        </div>
      </div></div>
      <div className="hv-phone"><b /><i /><i /><i /></div>
      {cards.map(([c, i, t, s]) => <div key={c} className={`fc ${c}`}><span><Icon n={i} /></span><div><b>{t}</b><small>{s}</small></div></div>)}
    </div>
  );
}
