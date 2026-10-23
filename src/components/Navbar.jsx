import { useState, useEffect } from 'react';

const NAV = [
  { label: 'ABOUT', key: 'aboutRef' },
  { label: 'PROJECTS', key: 'projectsRef' },
  { label: 'LABS', key: 'labsRef' },
  { label: 'SKILLS', key: 'skillsRef' },
  { label: 'EXPERIENCE', key: 'experienceRef' },
  { label: 'CONTACT', key: 'contactRef' },
];

const Navbar = ({ scrollTo, refs }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (key) => { scrollTo(refs[key]); setOpen(false); };
  const link = { background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'IBM Plex Mono',monospace", fontSize: '.82rem', letterSpacing: '.12em', color: 'var(--text-dim)', padding: '.3rem 0', transition: 'color .2s' };

  return (
    <>
      <nav aria-label="Primary" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, background: scrolled ? 'rgba(11,11,12,.95)' : 'rgba(11,11,12,.55)', backdropFilter: 'blur(12px)', borderBottom: '1px solid ' + (scrolled ? 'var(--border)' : 'transparent'), transition: 'all .3s' }}>
        <div className="container" style={{ height: 68, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={() => scrollTo(refs.homeRef)} aria-label="Back to top" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '.7rem' }}>
            <span style={{ width: 30, height: 30, border: '1px solid var(--red)', display: 'grid', placeItems: 'center', fontFamily: "'Noto Serif JP',serif", fontSize: '.85rem', color: 'var(--red)' }}>浪</span>
            <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '1rem', fontWeight: 600, color: '#fff', letterSpacing: '.1em' }}>RONIN.SH</span>
          </button>

          <div className="hide-m" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {NAV.map((n) => (
              <button key={n.key} onClick={() => go(n.key)} style={link}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}>{n.label}</button>
            ))}
            <a href="/assets/resume.pdf" download="Suprit-Sagar-Rout-Resume.pdf" className="btn btn-primary" style={{ padding: '.55rem 1.1rem', fontSize: '.78rem' }}>RESUME</a>
          </div>

          <button className="ham" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: 5, padding: 6 }}>
            {[0, 1, 2].map((i) => <span key={i} style={{ width: 24, height: 2, background: '#fff', display: 'block' }} />)}
          </button>
        </div>
      </nav>

      {open && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(11,11,12,.98)', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.6rem' }}>
          <button onClick={() => setOpen(false)} aria-label="Close menu" style={{ position: 'absolute', top: '1.3rem', right: '1.5rem', background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
          {NAV.map((n) => <button key={n.key} onClick={() => go(n.key)} style={{ ...link, fontSize: '1.05rem', color: '#fff' }}>{n.label}</button>)}
          <a href="/assets/resume.pdf" download="Suprit-Sagar-Rout-Resume.pdf" className="btn btn-primary" style={{ marginTop: '.8rem' }}>DOWNLOAD RESUME</a>
        </div>
      )}
      <style>{`@media(max-width:900px){.ham{display:flex!important}}`}</style>
    </>
  );
};
export default Navbar;