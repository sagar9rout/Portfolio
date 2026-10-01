import { useEffect, useRef, useState } from 'react';

const skillGroups = [
  {
    id:'SECURITY',
    label:'SECURITY',
    items:['IAM','RBAC','VAPT','Web Security','OSINT','Zero Trust','Least Privilege','Threat Modeling'],
  },
  {
    id:'NETWORKING',
    label:'NETWORKING',
    items:['TCP/IP','DNS','HTTP/HTTPS','Firewalls','VPN','Network Enumeration','Port Scanning'],
  },
  {
    id:'TOOLS',
    label:'TOOLS & PLATFORMS',
    items:['Kali Linux','Nmap','Wireshark','Burp Suite','Docker','Keycloak','Metasploitable2','DVWA'],
  },
  {
    id:'PROGRAMMING',
    label:'PROGRAMMING',
    items:['Python','JavaScript','Bash (Basic)','SQL'],
  },
  {
    id:'CLOUD',
    label:'CLOUD & IAM',
    items:['Cloud IAM Policies','RBAC in Cloud','Attack Paths','IAM Misconfigurations','Docker'],
  },
  {
    id:'CONCEPTS',
    label:'CONCEPTS',
    items:['OWASP Top 10','SQL Injection','XSS','Authentication Flows','Security Logging','Reconnaissance'],
  },
];

const Skills = () => {
  const [vis, setVis] = useState(false);
  const [active, setActive] = useState('SECURITY');
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold:.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const current = skillGroups.find(g => g.id === active);

  return (
    <div ref={ref} style={{ background:'var(--bg-1)', borderTop:'1px solid var(--border)' }}>
      <div className="container" style={{ padding:'6rem 2rem' }}>

        <div style={{ opacity:vis?1:0, transition:'opacity .6s ease' }}>
          <div className="section-label">SKILLS</div>

          <h2 style={{
            fontFamily:"'Cinzel',serif",
            fontSize:'clamp(1.4rem,3vw,2rem)',
            fontWeight:600, color:'#fff', marginBottom:'3rem',
          }}>TECHNICAL CAPABILITIES</h2>
        </div>

        <div style={{
          display:'grid', gridTemplateColumns:'220px 1fr', gap:'2.5rem', alignItems:'start',
          opacity:vis?1:0, transform:vis?'none':'translateY(20px)', transition:'all .7s ease .2s',
        }} className="col-m">

          {/* Category tabs */}
          <div style={{ display:'flex', flexDirection:'column', gap:'.3rem' }}>
            {skillGroups.map(g => (
              <button key={g.id} onClick={() => setActive(g.id)}
                style={{
                  background: active===g.id ? 'var(--bg-3)' : 'transparent',
                  border:`1px solid ${active===g.id ? 'var(--red)' : 'transparent'}`,
                  borderLeft:`2px solid ${active===g.id ? 'var(--red)' : 'transparent'}`,
                  padding:'.7rem 1rem',
                  textAlign:'left', cursor:'pointer',
                  fontFamily:"'IBM Plex Mono',monospace",
                  fontSize:'.7rem', letterSpacing:'.12em',
                  color: active===g.id ? '#fff' : 'var(--text-faint)',
                  transition:'all .2s',
                }}
                onMouseEnter={e => { if (active!==g.id) e.currentTarget.style.color='var(--text-dim)'; }}
                onMouseLeave={e => { if (active!==g.id) e.currentTarget.style.color='var(--text-faint)'; }}>
                {g.label}
              </button>
            ))}
          </div>

          {/* Tags panel */}
          <div style={{
            background:'var(--bg-2)',
            border:'1px solid var(--border)',
            padding:'2rem',
            minHeight:280,
          }}>
            <div style={{
              fontFamily:"'IBM Plex Mono',monospace",
              fontSize:'.62rem', color:'var(--red)',
              letterSpacing:'.18em', marginBottom:'1.5rem',
            }}>
              // {current?.label}
            </div>

            <div style={{ display:'flex', flexWrap:'wrap', gap:'.6rem' }}>
              {current?.items.map((item, i) => (
                <span key={item}
                  className="tag"
                  style={{
                    padding:'.45rem 1rem',
                    fontSize:'.78rem',
                    opacity:vis ? 1 : 0,
                    transform: vis ? 'none' : 'translateY(8px)',
                    transition:`all .4s ease ${i*.04}s`,
                  }}>
                  {item}
                </span>
              ))}
            </div>

            {/* Bottom note */}
            <div style={{
              marginTop:'2rem',
              paddingTop:'1.2rem',
              borderTop:'1px solid var(--border)',
              fontFamily:"'IBM Plex Mono',monospace",
              fontSize:'.62rem', color:'var(--text-faint)',
              fontStyle:'italic',
            }}>
              // Skills actively developed through labs and projects — not theoretical claims.
            </div>
          </div>
        </div>

        {/* Discipline line */}
        <div style={{
          textAlign:'center', marginTop:'4rem',
          fontFamily:"'IBM Plex Mono',monospace",
          fontSize:'.65rem', color:'var(--text-faint)',
          letterSpacing:'.35em',
          opacity:vis?1:0, transition:'opacity 1s ease .5s',
        }}>
          DISCIPLINE &nbsp;·&nbsp; CURIOSITY &nbsp;·&nbsp; SECURITY
        </div>
      </div>
    </div>
  );
};

export default Skills;