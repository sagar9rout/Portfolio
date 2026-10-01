import { useState, useEffect } from 'react';

const NAV = [
  { label: 'ABOUT',      key: 'aboutRef' },
  { label: 'PROJECTS',   key: 'projectsRef' },
  { label: 'SKILLS',     key: 'skillsRef' },
  { label: 'EXPERIENCE', key: 'experienceRef' },
  { label: 'CONTACT',    key: 'contactRef' },
];

const Navbar = ({ scrollTo, refs }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = key => { scrollTo(refs[key]); setOpen(false); };

  const borderB = scrolled ? '1px solid var(--border)' : '1px solid transparent';

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 1000,
        background: scrolled ? 'rgba(13,13,13,.96)' : 'rgba(13,13,13,.0)',
        backdropFilter: 'blur(12px)',
        borderBottom: borderB,
        transition: 'all .35s ease',
      }}>
        <div className="container" style={{
          height: 64,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>

          {/* LOGO */}
          <button onClick={() => scrollTo(refs.homeRef)}
            style={{ background:'none', border:'none', cursor:'pointer', display:'flex', alignItems:'center', gap:'0.6rem' }}>
            <div style={{
              width: 28, height: 28,
              border: '1px solid var(--red)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'.65rem', color:'var(--red)', fontWeight:600 }}>
                //
              </span>
            </div>
            <span style={{
              fontFamily: "'IBM Plex Mono',monospace",
              fontSize: '.88rem', fontWeight: 600,
              color: '#fff', letterSpacing: '.1em',
            }}>RONIN.SH</span>
          </button>

          {/* Desktop links */}
          <div className="hide-m" style={{ display:'flex', alignItems:'center', gap:'2.5rem' }}>
            {NAV.map(item => (
              <button key={item.key} onClick={() => go(item.key)}
                style={{
                  background:'none', border:'none', cursor:'pointer',
                  fontFamily:"'IBM Plex Mono',monospace",
                  fontSize:'.7rem', letterSpacing:'.15em',
                  color:'var(--text-dim)',
                  transition:'color .2s',
                  padding:'.25rem 0',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}>
                {item.label}
              </button>
            ))}
            <a href="/assets/resume.pdf" download
              className="btn btn-primary"
              style={{ padding:'.5rem 1.1rem', fontSize:'.68rem' }}>
              RESUME
            </a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)}
            className="mobile-ham"
            style={{
              background:'none', border:'none', cursor:'pointer',
              display:'none', flexDirection:'column', gap:5,
            }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display:'block', width:22, height:1.5,
                background: open && i===1 ? 'var(--red)' : 'var(--text)',
                transition:'all .3s',
              }}/>
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position:'fixed', inset:0, background:'rgba(13,13,13,.98)',
          backdropFilter:'blur(20px)',
          zIndex:999, display:'flex', flexDirection:'column',
          alignItems:'center', justifyContent:'center', gap:'2rem',
        }}>
          <button onClick={() => setOpen(false)} style={{
            position:'absolute', top:'1.5rem', right:'1.5rem',
            background:'none', border:'none', color:'var(--text-dim)',
            fontSize:'1.2rem', cursor:'pointer',
          }}>✕</button>

          <span style={{
            fontFamily:"'IBM Plex Mono',monospace",
            fontSize:'1rem', color:'var(--red)', letterSpacing:'.2em',
            marginBottom:'1rem',
          }}>RONIN.SH</span>

          {NAV.map(item => (
            <button key={item.key} onClick={() => go(item.key)}
              style={{
                background:'none', border:'none', cursor:'pointer',
                fontFamily:"'IBM Plex Mono',monospace",
                fontSize:'.85rem', letterSpacing:'.2em', color:'var(--text)',
              }}>
              {item.label}
            </button>
          ))}
          <a href="/assets/resume.pdf" download className="btn btn-primary" style={{marginTop:'1rem'}}>
            DOWNLOAD RESUME
          </a>
        </div>
      )}

      <style>{`
        @media(max-width:900px){
          .hide-m { display:none !important; }
          .mobile-ham { display:flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;