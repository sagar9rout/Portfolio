import { useEffect, useState } from 'react';

/* Subtle animated grid lines */
const GridOverlay = () => (
  <div style={{
    position:'absolute', inset:0, zIndex:0,
    backgroundImage:`
      linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)
    `,
    backgroundSize:'60px 60px',
    pointerEvents:'none',
  }}/>
);

/* Typed text hook */
const useTyped = (words, speed = 80, pause = 2200) => {
  const [idx, setIdx]     = useState(0);
  const [text, setText]   = useState('');
  const [del, setDel]     = useState(false);

  useEffect(() => {
    const full = words[idx];
    if (!del && text.length < full.length) {
      const t = setTimeout(() => setText(full.slice(0, text.length + 1)), speed);
      return () => clearTimeout(t);
    }
    if (!del && text.length === full.length) {
      const t = setTimeout(() => setDel(true), pause);
      return () => clearTimeout(t);
    }
    if (del && text.length > 0) {
      const t = setTimeout(() => setText(full.slice(0, text.length - 1)), speed / 2);
      return () => clearTimeout(t);
    }
    if (del && text.length === 0) {
      setDel(false);
      setIdx(p => (p + 1) % words.length);
    }
  }, [text, del, idx, words, speed, pause]);

  return text;
};

const roles = [
  'CYBERSECURITY ENGINEER',
  'IAM & VAPT PRACTITIONER',
  'OSINT RESEARCHER',
  'BUILDING IN PROGRESS',
];

const Home = ({ scrollTo, refs }) => {
  const typed = useTyped(roles);
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 60); return () => clearTimeout(t); }, []);

  return (
    <div style={{
      minHeight:'100vh',
      background:'var(--bg)',
      position:'relative',
      display:'flex',
      alignItems:'center',
      overflow:'hidden',
    }}>
      <GridOverlay/>

      {/* Red accent line — top */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:'var(--red)', zIndex:2 }}/>

      {/* Subtle Japanese accent — right side */}
      <div className="hide-m" style={{
        position:'absolute', right:'3rem', top:'50%', transform:'translateY(-50%)',
        fontFamily:"'Noto Serif JP',serif",
        fontSize:'7rem', fontWeight:700,
        color:'rgba(255,255,255,.025)',
        letterSpacing:'.1em', zIndex:1,
        lineHeight:1, pointerEvents:'none',
        userSelect:'none',
      }}>浪人</div>

      {/* Content */}
      <div className="container" style={{ position:'relative', zIndex:3, paddingTop:'6rem', paddingBottom:'4rem' }}>

        {/* Brand tag */}
        <div style={{
          animation: vis ? 'fadeUp .6s ease .1s both' : 'none',
        }}>
          <div className="section-label" style={{ marginBottom:'2rem' }}>
            RONIN.SH — PERSONAL PORTFOLIO
          </div>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily:"'Cinzel',serif",
          fontSize:'clamp(2.2rem,5.5vw,4.5rem)',
          fontWeight:700, color:'#fff',
          lineHeight:1.1, letterSpacing:'.02em',
          marginBottom:'.8rem',
          animation: vis ? 'fadeUp .7s ease .2s both' : 'none',
        }}>
          SUPRIT SAGAR ROUT
        </h1>

        {/* Typewriter role */}
        <div style={{
          fontFamily:"'IBM Plex Mono',monospace",
          fontSize:'clamp(.9rem,1.8vw,1.15rem)',
          color:'var(--red)',
          letterSpacing:'.12em',
          marginBottom:'1.5rem',
          height:'1.8rem',
          animation: vis ? 'fadeUp .7s ease .35s both' : 'none',
        }}>
          {typed}
          <span style={{ animation:'blinkCursor .9s infinite', opacity:1, color:'var(--text-dim)' }}>▌</span>
        </div>

        {/* Focus line */}
        <div style={{
          fontFamily:"'IBM Plex Mono',monospace",
          fontSize:'.72rem', color:'var(--text-dim)',
          letterSpacing:'.1em', marginBottom:'2rem',
          animation: vis ? 'fadeUp .7s ease .45s both' : 'none',
        }}>
          CYBERSECURITY &nbsp;·&nbsp; IAM &nbsp;·&nbsp; VAPT &nbsp;·&nbsp; OSINT &nbsp;·&nbsp; CLOUD SECURITY &nbsp;·&nbsp; AI
        </div>

        {/* Description */}
        <p style={{
          fontFamily:"'Inter',sans-serif",
          fontSize:'1rem', color:'var(--text-dim)',
          lineHeight:1.8, maxWidth:520,
          marginBottom:'2.8rem',
          animation: vis ? 'fadeUp .7s ease .55s both' : 'none',
        }}>
          Building practical security systems, identity labs,
          vulnerability-testing environments, and AI-assisted applications.
        </p>

        {/* Buttons */}
        <div style={{
          display:'flex', gap:'1rem', flexWrap:'wrap',
          animation: vis ? 'fadeUp .7s ease .65s both' : 'none',
        }}>
          <button onClick={() => scrollTo(refs.projectsRef)} className="btn btn-primary">
            VIEW PROJECTS
          </button>
          <a href="https://github.com/sagar9rout" target="_blank" rel="noreferrer" className="btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.57 0-.28-.01-1.23-.01-2.23-3.02.55-3.8-.73-4.04-1.41-.14-.34-.72-1.41-1.23-1.7-.42-.22-1.02-.77-.01-.79.94-.01 1.62.87 1.84 1.23 1.08 1.82 2.81 1.3 3.5.99.1-.78.42-1.3.76-1.6-2.67-.3-5.46-1.34-5.46-5.92 0-1.31.47-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3 0c2.29-1.56 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.9 1.23 3.22 0 4.6-2.8 5.62-5.47 5.92.44.38.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.3 0 .32.22.69.82.57A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            GITHUB
          </a>
          <a href="/assets/resume.pdf" download className="btn">
            ↓ RESUME
          </a>
        </div>

        {/* Status indicator */}
        <div style={{
          display:'flex', alignItems:'center', gap:'.6rem',
          marginTop:'3rem',
          animation: vis ? 'fadeUp .7s ease .8s both' : 'none',
        }}>
          <div style={{
            width:7, height:7, borderRadius:'50%',
            background:'#27AE60',
            animation:'pulse 2s ease infinite',
          }}/>
          <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'.65rem', color:'var(--text-faint)', letterSpacing:'.12em' }}>
            OPEN TO OPPORTUNITIES — CYBERSECURITY / IAM / VAPT
          </span>
        </div>
      </div>

      {/* Scroll cue */}
      <div onClick={() => scrollTo(refs.aboutRef)} style={{
        position:'absolute', bottom:'2rem', left:'50%', transform:'translateX(-50%)',
        display:'flex', flexDirection:'column', alignItems:'center', gap:6,
        cursor:'pointer', zIndex:3,
        animation: vis ? 'fadeIn 1s ease 1.5s both' : 'none',
      }}>
        <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'.58rem', color:'var(--text-faint)', letterSpacing:'.2em' }}>SCROLL</span>
        <div style={{ width:1, height:36, background:'linear-gradient(to bottom, var(--border-hi), transparent)' }}/>
      </div>

      <style>{`
        @keyframes fadeUp    { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn    { from{opacity:0} to{opacity:1} }
        @keyframes blinkCursor { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse     { 0%,100%{opacity:.5} 50%{opacity:1} }
      `}</style>
    </div>
  );
};

export default Home;