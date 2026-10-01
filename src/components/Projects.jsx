import { useEffect, useRef, useState } from 'react';

const GHIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.57 0-.28-.01-1.23-.01-2.23-3.02.55-3.8-.73-4.04-1.41-.14-.34-.72-1.41-1.23-1.7-.42-.22-1.02-.77-.01-.79.94-.01 1.62.87 1.84 1.23 1.08 1.82 2.81 1.3 3.5.99.1-.78.42-1.3.76-1.6-2.67-.3-5.46-1.34-5.46-5.92 0-1.31.47-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3 0c2.29-1.56 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.9 1.23 3.22 0 4.6-2.8 5.62-5.47 5.92.44.38.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.3 0 .32.22.69.82.57A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
const ExtIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const primaryProjects = [
  {
    no: '01',
    category: 'IDENTITY SECURITY',
    title: 'Cloud IAM Attack Path Lab',
    subtitle: 'Identity Security · RBAC · Privilege Escalation',
    desc: 'Built a practical IAM security lab to understand authentication, authorization, role-based access control, and simulated privilege-escalation scenarios.',
    desc2: 'Simulated identity security risks and analyzed security events while applying least-privilege and Zero Trust concepts.',
    tags: ['Keycloak','Docker','Python','IAM','RBAC','Zero Trust'],
    github: '#', // ← replace: https://github.com/sagar9rout/YOUR-REPO
    caseStudy: '#',
    accent: '#C0392B',
  },
  {
    no: '02',
    category: 'AI · SOFTWARE ENGINEERING',
    title: 'FinGuard',
    subtitle: 'AI Financial Decision Advisor',
    desc: 'Built an AI-assisted financial decision advisor for the "Buy or Wait?" problem, generating personalized recommendations from user financial profiles and spending preferences.',
    desc2: 'Designed a structured decision pipeline that analyzes spending categories and produces explainable buy/wait recommendations, with automated evaluation across 250 decision cases.',
    tags: ['Python','AI','Data Analysis','Decision Systems','Pipeline'],
    github: '#', // ← replace: https://github.com/sagar9rout/YOUR-REPO
    caseStudy: '#',
    accent: '#2980B9',
    note: 'AI & software engineering project — not cybersecurity',
  },
  {
    no: '03',
    category: 'PENETRATION TESTING',
    title: 'Cybersecurity Foundations Lab',
    subtitle: 'Reconnaissance · Vulnerability Assessment · Web Security',
    desc: 'Built a hands-on cybersecurity laboratory covering reconnaissance, vulnerability assessment, network enumeration, and web application security testing.',
    desc2: 'Practiced security testing against controlled lab targets including Metasploitable2 and DVWA, documenting findings and security observations.',
    tags: ['Kali Linux','Nmap','Metasploitable2','DVWA','Burp Suite'],
    github: '#', // ← replace: https://github.com/sagar9rout/YOUR-REPO
    caseStudy: '#',
    accent: '#27AE60',
  },
];

const earlierWork = [
  {
    title: 'Sales Dashboard — Flipkart Mobile',
    tags: ['Python','Pandas','Matplotlib'],
    desc: 'KPI visualization dashboard analyzing revenue, profit, and customer region data.',
    github: '#',
  },
  {
    title: 'IMDB Top 250 Analysis',
    tags: ['Python','Pandas','EDA'],
    desc: 'Exploratory data analysis identifying correlations between genre, director, and ratings.',
    github: '#',
  },
  {
    title: 'OTT Viewer Behavior Dashboard',
    tags: ['Python','Pandas','Power BI'],
    desc: 'Behavior analytics revealing streaming patterns, genres, and peak viewing hours.',
    github: '#',
  },
  {
    title: 'Job Portal',
    tags: ['MongoDB','Express','React','Node.js'],
    desc: 'Full-stack job portal with JWT auth, real-time listings, and application tracking.',
    github: '#',
  },
];

const PrimaryCard = ({ proj, index, vis }) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display:'grid', gridTemplateColumns:'1fr 1fr',
        border:`1px solid ${hov ? proj.accent+'66' : 'var(--border)'}`,
        background: hov ? 'var(--bg-2)' : 'var(--bg-1)',
        transition:'all .3s ease',
        opacity:vis?1:0,
        transform:vis?'none':'translateY(24px)',
        transitionDelay:`${index*.12}s`,
        marginBottom:'1.5rem',
      }}
      className="col-m">

      {/* LEFT */}
      <div style={{
        padding:'2.5rem',
        borderRight:'1px solid var(--border)',
        display:'flex', flexDirection:'column', justifyContent:'space-between',
      }}>
        <div>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'1.5rem' }}>
            <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'.65rem', color:'var(--red)', letterSpacing:'.15em' }}>
              PROJECT_{proj.no}
            </span>
            <span style={{
              fontFamily:"'IBM Plex Mono',monospace",
              fontSize:'.58rem', letterSpacing:'.12em',
              color: proj.accent,
              border:`1px solid ${proj.accent}44`,
              padding:'.18rem .6rem',
            }}>{proj.category}</span>
          </div>

          <h3 style={{
            fontFamily:"'Cinzel',serif",
            fontSize:'clamp(1.1rem,2vw,1.5rem)',
            fontWeight:600, color:'#fff',
            lineHeight:1.2, marginBottom:'.5rem',
          }}>{proj.title}</h3>

          <div style={{
            fontFamily:"'IBM Plex Mono',monospace",
            fontSize:'.68rem', color:'var(--text-faint)',
            letterSpacing:'.08em', marginBottom:'1.5rem',
          }}>{proj.subtitle}</div>

          {proj.note && (
            <div style={{
              fontFamily:"'IBM Plex Mono',monospace",
              fontSize:'.62rem', color:'#2980B9',
              border:'1px solid #2980B922',
              padding:'.3rem .7rem',
              marginBottom:'1rem',
              background:'rgba(41,128,185,.06)',
            }}>ℹ {proj.note}</div>
          )}
        </div>

        <div style={{ display:'flex', flexWrap:'wrap', gap:'.4rem' }}>
          {proj.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>

      {/* RIGHT */}
      <div style={{ padding:'2.5rem', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
        <div>
          <p style={{ fontFamily:"'Inter',sans-serif", fontSize:'.95rem', color:'var(--text-dim)', lineHeight:1.8, marginBottom:'1rem' }}>
            {proj.desc}
          </p>
          <p style={{ fontFamily:"'Inter',sans-serif", fontSize:'.88rem', color:'var(--text-faint)', lineHeight:1.8 }}>
            {proj.desc2}
          </p>
        </div>
        <div style={{ display:'flex', gap:'.8rem', marginTop:'2rem', flexWrap:'wrap' }}>
          <a href={proj.github} target="_blank" rel="noreferrer" className="btn">
            <GHIcon/> VIEW GITHUB
          </a>
          <a href={proj.caseStudy} className="btn" style={{ borderColor:'var(--border-hi)' }}>
            <ExtIcon/> CASE STUDY
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [vis, setVis] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold:.06 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ background:'var(--bg)', borderTop:'1px solid var(--border)' }}>
      <div className="container" style={{ padding:'6rem 2rem' }}>

        <div style={{ opacity:vis?1:0, transition:'opacity .6s ease' }}>
          <div className="section-label">PROJECTS</div>

          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'3rem', flexWrap:'wrap', gap:'1rem' }}>
            <h2 style={{
              fontFamily:"'Cinzel',serif",
              fontSize:'clamp(1.4rem,3vw,2rem)',
              fontWeight:600, color:'#fff',
            }}>PRIMARY WORK</h2>
            <a href="https://github.com/sagar9rout" target="_blank" rel="noreferrer"
              style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'.68rem', color:'var(--text-faint)', letterSpacing:'.1em', textDecoration:'none' }}
              onMouseEnter={e => e.currentTarget.style.color='var(--red)'}
              onMouseLeave={e => e.currentTarget.style.color='var(--text-faint)'}>
              github.com/sagar9rout →
            </a>
          </div>
        </div>

        {/* Primary projects */}
        {primaryProjects.map((proj, i) => (
          <PrimaryCard key={proj.no} proj={proj} index={i} vis={vis}/>
        ))}

        {/* Earlier work */}
        <div style={{ marginTop:'4rem', opacity:vis?1:0, transition:'opacity .8s ease .4s' }}>
          <div style={{
            display:'flex', alignItems:'center', gap:'1rem',
            marginBottom:'1.5rem',
          }}>
            <div style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'.65rem', color:'var(--text-faint)', letterSpacing:'.18em' }}>
              // EARLIER WORK
            </div>
            <div style={{ flex:1, height:1, background:'var(--border)' }}/>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'1rem' }}>
            {earlierWork.map(proj => (
              <div key={proj.title}
                style={{
                  padding:'1.2rem',
                  border:'1px solid var(--border)',
                  background:'var(--bg-2)',
                  transition:'border-color .25s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor='var(--border-hi)'}
                onMouseLeave={e => e.currentTarget.style.borderColor='var(--border)'}>
                <div style={{ fontFamily:"'Inter',sans-serif", fontSize:'.85rem', fontWeight:600, color:'var(--text-dim)', marginBottom:'.4rem' }}>
                  {proj.title}
                </div>
                <p style={{ fontFamily:"'Inter',sans-serif", fontSize:'.8rem', color:'var(--text-faint)', lineHeight:1.6, marginBottom:'.8rem' }}>
                  {proj.desc}
                </p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'.35rem', marginBottom:'.8rem' }}>
                  {proj.tags.map(t => <span key={t} className="tag" style={{ fontSize:'.6rem' }}>{t}</span>)}
                </div>
                <a href={proj.github} target="_blank" rel="noreferrer"
                  style={{
                    fontFamily:"'IBM Plex Mono',monospace", fontSize:'.62rem',
                    color:'var(--text-faint)', textDecoration:'none', letterSpacing:'.1em',
                    display:'inline-flex', alignItems:'center', gap:'.4rem',
                    transition:'color .2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color='var(--red)'}
                  onMouseLeave={e => e.currentTarget.style.color='var(--text-faint)'}>
                  <GHIcon/> GITHUB
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;