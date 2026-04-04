import { useState, useEffect } from 'react';

const NAV = [
  { label:'HOME',     kanji:'道', key:'homeRef' },
  { label:'ABOUT',    kanji:'武', key:'aboutRef' },
  { label:'SKILLS',   kanji:'技', key:'skillsRef' },
  { label:'PROJECTS', kanji:'業', key:'projectsRef' },
  { label:'CONTACT',  kanji:'縁', key:'contactRef' },
];

const Navbar = ({ scrollTo, refs }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState('homeRef');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = key => { scrollTo(refs[key]); setOpen(false); setActive(key); };

  /* 
   * KEY FIX: Navbar is ALWAYS visible.
   * - Starts with white semi-transparent bg so it never disappears on white page.
   * - Scrolled state adds full white + shadow.
   * - NO animation that could hide it (removed slideDown animation).
   */
  return (
    <>
      <nav style={{
        position:'fixed', top:0, width:'100%', zIndex:1000,
        background: scrolled
          ? 'rgba(255,255,255,0.97)'
          : 'rgba(255,255,255,0.82)',          /* always at least 82% opaque */
        backdropFilter:'blur(16px)',
        borderBottom: scrolled
          ? '2px solid var(--ink)'
          : '1px solid rgba(12,12,12,0.12)',   /* subtle border always */
        boxShadow: scrolled
          ? '0 2px 24px rgba(0,0,0,.1)'
          : '0 1px 8px rgba(0,0,0,.04)',
        transition:'background .3s ease, border-color .3s ease, box-shadow .3s ease',
      }}>
        <div style={{
          maxWidth:1400, margin:'0 auto', padding:'0 3rem',
          height:72, display:'flex', justifyContent:'space-between', alignItems:'center',
        }}>

          {/* LOGO */}
          <button onClick={() => go('homeRef')}
            style={{background:'none',border:'none',cursor:'pointer',display:'flex',alignItems:'center',gap:10}}>
            <div style={{
              width:38, height:38, border:'2.5px solid var(--ink)',
              display:'flex', alignItems:'center', justifyContent:'center', position:'relative', flexShrink:0,
            }}>
              <div style={{position:'absolute',inset:4,border:'1px solid var(--blood)'}}/>
              <span style={{fontFamily:"'Cinzel Decorative',cursive",fontWeight:900,fontSize:'.85rem',color:'var(--ink)',lineHeight:1}}>S</span>
            </div>
            <div>
              <div style={{fontFamily:"'Cinzel Decorative',cursive",fontWeight:900,fontSize:'.8rem',letterSpacing:'.2em',color:'var(--ink)',lineHeight:1}}>SUPRIT</div>
              <div style={{fontFamily:"'Noto Serif JP',serif",fontSize:'.5rem',color:'var(--blood)',letterSpacing:'.3em',lineHeight:1.6}}>侍の開発者</div>
            </div>
          </button>

          {/* Desktop nav links */}
          <div className="hide-m" style={{display:'flex',gap:'2.8rem',alignItems:'center'}}>
            {NAV.map(item => {
              const isActive = active === item.key;
              return (
                <button key={item.key} onClick={() => go(item.key)} style={{
                  background:'none', border:'none', cursor:'pointer',
                  display:'flex', flexDirection:'column', alignItems:'center', gap:3,
                  padding:'.3rem 0', position:'relative',
                }}>
                  <span style={{
                    fontFamily:"'Noto Serif JP',serif", fontSize:'.62rem',
                    color: isActive ? 'var(--blood)' : 'var(--ash)',
                    lineHeight:1, transition:'color .3s',
                  }}>{item.kanji}</span>
                  <span style={{
                    fontFamily:"'Cinzel Decorative',cursive",
                    fontSize:'.72rem', fontWeight:700, letterSpacing:'.22em',
                    color: isActive ? 'var(--blood)' : 'var(--ink)',
                    lineHeight:1, transition:'color .3s',
                  }}>{item.label}</span>
                  {/* Active underline */}
                  <span style={{
                    position:'absolute', bottom:-6, left:0, right:0,
                    height:2, background:'var(--blood)',
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin:'left',
                    transition:'transform .3s ease',
                  }}/>
                </button>
              );
            })}
          </div>

          {/* Hamburger — mobile only */}
          <button onClick={() => setOpen(!open)} className="ham-btn"
            style={{background:'none',border:'none',cursor:'pointer',display:'none',flexDirection:'column',gap:5,padding:'4px'}}>
            {[0,1,2].map(i=>(
              <span key={i} style={{display:'block',width:26,height:2.5,background:'var(--ink)',borderRadius:2,transition:'all .3s'}}/>
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      {open && (
        <div style={{
          position:'fixed', inset:0, background:'var(--bg)', zIndex:999,
          display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'2.5rem',
        }}>
          <button onClick={() => setOpen(false)}
            style={{position:'absolute',top:'1.5rem',right:'2rem',background:'none',border:'none',fontSize:'1.6rem',cursor:'pointer',color:'var(--ink)',lineHeight:1}}>
            ✕
          </button>
          {NAV.map(item => (
            <button key={item.key} onClick={() => go(item.key)}
              style={{background:'none',border:'none',cursor:'pointer',textAlign:'center'}}>
              <div style={{fontFamily:"'Noto Serif JP',serif",fontSize:'2rem',color:'var(--blood)',marginBottom:4}}>{item.kanji}</div>
              <div style={{fontFamily:"'Cinzel Decorative',cursive",fontSize:'.9rem',letterSpacing:'.3em',color:'var(--ink)',fontWeight:700}}>{item.label}</div>
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width:900px){
          .hide-m  { display:none !important; }
          .ham-btn { display:flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;