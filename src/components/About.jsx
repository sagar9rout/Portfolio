import { useEffect, useRef, useState } from 'react';

const focusAreas = [
  { num:'01', title:'Identity & Access Management',          desc:'RBAC, Zero Trust, Keycloak, privilege escalation simulation' },
  { num:'02', title:'Vulnerability Assessment & Web Security', desc:'OWASP Top 10, DVWA, Metasploitable2, Burp Suite' },
  { num:'03', title:'OSINT & Reconnaissance',               desc:'Network enumeration, Nmap, information gathering techniques' },
  { num:'04', title:'Cloud Security',                       desc:'Cloud IAM policies, attack paths, misconfigurations' },
  { num:'05', title:'AI-assisted Security Engineering',     desc:'Python pipelines, decision systems, AI-assisted analysis' },
];

const About = () => {
  const [vis, setVis] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold:.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ background:'var(--bg-1)', borderTop:'1px solid var(--border)' }}>
      <div className="container" style={{ padding:'6rem 2rem' }}>

        <div style={{ opacity:vis?1:0, transform:vis?'none':'translateY(20px)', transition:'all .7s ease' }}>
          <div className="section-label">ABOUT</div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'start' }} className="col-m">

            {/* Left */}
            <div>
              {/* Small JP accent */}
              <div style={{
                fontFamily:"'Noto Serif JP',serif",
                fontSize:'.72rem', color:'var(--red)',
                letterSpacing:'.3em', marginBottom:'1rem',
                opacity:.7,
              }}>浪人 · RONIN</div>

              <h2 style={{
                fontFamily:"'Cinzel',serif",
                fontSize:'clamp(1.6rem,3vw,2.4rem)',
                fontWeight:600, color:'#fff',
                lineHeight:1.2, marginBottom:'1.8rem',
              }}>
                SUPRIT SAGAR ROUT
              </h2>

              <p style={{
                fontFamily:"'Inter',sans-serif",
                fontSize:'1rem', color:'var(--text-dim)',
                lineHeight:1.85, marginBottom:'1.5rem',
                borderLeft:'2px solid var(--red)',
                paddingLeft:'1.2rem',
              }}>
                MCA graduate building hands-on cybersecurity experience through
                practical labs, security testing, identity and access management,
                and software engineering projects.
              </p>

              <p style={{
                fontFamily:"'Inter',sans-serif",
                fontSize:'1rem', color:'var(--text-dim)',
                lineHeight:1.85, marginBottom:'2.5rem',
              }}>
                My current focus is understanding how systems, identities, and
                applications can be attacked, investigated, and secured — building
                real projects as proof of that understanding.
              </p>

              {/* Quick facts */}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
                {[
                  { label:'DEGREE',   val:'MCA' },
                  { label:'SGPA',     val:'9.25' },
                  { label:'LOCATION', val:'Odisha, India' },
                  { label:'STATUS',   val:'Available' },
                ].map(item => (
                  <div key={item.label} style={{
                    background:'var(--bg-3)',
                    border:'1px solid var(--border)',
                    padding:'.8rem 1rem',
                  }}>
                    <div style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'.58rem', color:'var(--red)', letterSpacing:'.15em', marginBottom:3 }}>{item.label}</div>
                    <div style={{ fontFamily:"'Inter',sans-serif", fontSize:'.88rem', color:'#fff', fontWeight:500 }}>{item.val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Focus areas */}
            <div>
              <div style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'.68rem', color:'var(--text-faint)', letterSpacing:'.18em', marginBottom:'1.5rem' }}>
                // CURRENT FOCUS
              </div>

              <div style={{ display:'flex', flexDirection:'column', gap:'.6rem' }}>
                {focusAreas.map((item, i) => (
                  <div key={item.num}
                    style={{
                      display:'flex', gap:'1.2rem', alignItems:'flex-start',
                      padding:'1rem 1.2rem',
                      background:'var(--bg-2)',
                      border:'1px solid var(--border)',
                      transition:'border-color .25s, background .25s',
                      cursor:'default',
                      opacity:vis?1:0,
                      transform:vis?'none':'translateX(20px)',
                      transitionDelay:`${.1 + i*.06}s`,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor='var(--border-hi)'; e.currentTarget.style.background='var(--bg-3)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.background='var(--bg-2)'; }}>
                    <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'.7rem', color:'var(--red)', flexShrink:0, marginTop:2 }}>{item.num}</span>
                    <div>
                      <div style={{ fontFamily:"'Inter',sans-serif", fontSize:'.9rem', fontWeight:600, color:'#fff', marginBottom:3 }}>{item.title}</div>
                      <div style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'.65rem', color:'var(--text-faint)', lineHeight:1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;