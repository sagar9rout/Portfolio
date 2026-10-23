import { useEffect, useRef, useState } from 'react';

const Experience = () => {
  const [vis, setVis] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold:.06 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const blockAnim = (delay = 0) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? 'none' : 'translateY(18px)',
    transition: `all .7s ease ${delay}s`,
  });

  return (
    <div ref={ref} style={{ background:'var(--bg-1)', borderTop:'1px solid var(--border)' }}>
      <div className="container section-pad">

        <div className="section-label" style={{ opacity:vis?1:0, transition:'opacity .5s' }}>EXPERIENCE & EDUCATION</div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'2rem', alignItems:'start' }} className="col2-m">

          {/* ── INTERNSHIPS ── */}
          <div style={blockAnim(0)}>
            <div style={{ fontFamily:'var(--mono)', fontSize:'0.78rem', color:'var(--text-faint)', letterSpacing:'.18em', marginBottom:'1.4rem' }}>// INTERNSHIPS</div>

            {/* ThreatSys — primary */}
            <div style={{
              background:'var(--bg-2)', border:'1px solid var(--border)',
              borderLeft:'2px solid var(--red)', padding:'1.4rem', marginBottom:'1rem',
            }}>
              <div style={{ fontFamily:'var(--mono)', fontSize:'0.78rem', color:'var(--red)', letterSpacing:'.15em', marginBottom:5 }}>CYBERSECURITY</div>
              <div style={{ fontSize:'1.22rem', fontWeight:600, color:'#fff', marginBottom:3 }}>Cybersecurity Intern</div>
              <div style={{ fontSize:'1.04rem', color:'var(--text-dim)', marginBottom:'1rem' }}>ThreatSys &nbsp;·&nbsp; 2 Months</div>
              <ul style={{ fontSize:'1.07rem', color:'var(--text-muted)', lineHeight:1.85, paddingLeft:'1.1rem', margin:0 }}>
                <li>Network security, firewalls, system vulnerabilities</li>
                <li>Kali Linux hands-on — SQL Injection, XSS</li>
                <li>Practical security testing workflows</li>
              </ul>
            </div>

            {/* CTTC — secondary */}
            <div style={{
              background:'var(--bg-2)', border:'1px solid var(--border)',
              borderLeft:'2px solid var(--border-hi)', padding:'1.4rem',
            }}>
              <div style={{ fontFamily:'var(--mono)', fontSize:'0.78rem', color:'var(--text-faint)', letterSpacing:'.15em', marginBottom:5 }}>DATA ANALYTICS</div>
              <div style={{ fontSize:'1.16rem', fontWeight:600, color:'var(--text-dim)', marginBottom:3 }}>Data Analyst Intern</div>
              <div style={{ fontSize:'1.0rem', color:'var(--text-muted)', marginBottom:'1rem' }}>CTTC, Bhubaneswar &nbsp;·&nbsp; 2 Months</div>
              <ul style={{ fontSize:'1.04rem', color:'var(--text-muted)', lineHeight:1.85, paddingLeft:'1.1rem', margin:0 }}>
                <li>Real-world dataset analysis for trend identification</li>
                <li>Translated raw data into actionable reports</li>
              </ul>
            </div>
          </div>

          {/* ── EDUCATION ── */}
          <div style={blockAnim(.1)}>
            <div style={{ fontFamily:'var(--mono)', fontSize:'0.78rem', color:'var(--text-faint)', letterSpacing:'.18em', marginBottom:'1.4rem' }}>// EDUCATION</div>

            {[
              {
                degree: 'MCA',
                full: 'Master of Computer Applications',
                inst: 'Gandhi Institute of Excellent Technocrats',
                period: '2024 – 2026',
                note: 'SGPA: 9.25',
                active: true,
              },
              {
                degree: 'B.Sc Mathematics',
                full: 'Bachelor of Science in Mathematics',
                inst: 'Mahima (Degree) Mahavidyalaya, Joranda',
                period: 'Passed 2024',
                note: 'Utkal University',
                active: false,
              },
            ].map(edu => (
              <div key={edu.degree} style={{
                background:'var(--bg-2)', border:'1px solid var(--border)',
                borderLeft:`2px solid ${edu.active ? 'var(--red)' : 'var(--border-hi)'}`,
                padding:'1.4rem', marginBottom:'1rem',
              }}>
                <div style={{ fontFamily:'var(--mono)', fontSize:'0.78rem', color: edu.active ? 'var(--red)' : 'var(--text-faint)', letterSpacing:'.15em', marginBottom:5 }}>
                  {edu.period}
                </div>
                <div style={{ fontSize:'1.16rem', fontWeight:600, color: edu.active ? '#fff' : 'var(--text-dim)', marginBottom:3 }}>{edu.degree}</div>
                <div style={{ fontSize:'1.0rem', color:'var(--text-muted)', lineHeight:1.55, marginBottom:5 }}>{edu.inst}</div>
                <div style={{ fontFamily:'var(--mono)', fontSize:'0.78rem', color: edu.active ? 'var(--red)' : 'var(--text-faint)' }}>{edu.note}</div>
              </div>
            ))}
          </div>

          {/* ── CERTIFICATIONS ── */}
          <div style={blockAnim(.2)}>
            <div style={{ fontFamily:'var(--mono)', fontSize:'0.78rem', color:'var(--text-faint)', letterSpacing:'.18em', marginBottom:'1.4rem' }}>// CERTIFICATIONS</div>

            {[
              {
                issuer: 'PALO ALTO NETWORKS',
                title: 'Cybersecurity Professional Certificate',
                desc: 'Network, Cloud Security & Security Operations',
              },
              {
                issuer: 'TATA (FORAGE)',
                title: 'Cybersecurity Analyst Job Simulation',
                desc: 'IAM Fundamentals & IAM Strategy',
              },
              {
                issuer: 'TRYHACKME',
                title: 'Advent of Cyber 2025',
                desc: '24 Cybersecurity Challenges Completed',
              },
            ].map((cert, i) => (
              <div key={i} style={{
                background:'var(--bg-2)', border:'1px solid var(--border)',
                padding:'1.2rem', marginBottom:'.8rem',
                transition:'border-color .25s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor='var(--border-hi)'}
              onMouseLeave={e => e.currentTarget.style.borderColor='var(--border)'}>
                <div style={{ fontFamily:'var(--mono)', fontSize:'0.78rem', color:'var(--red)', letterSpacing:'.15em', marginBottom:4 }}>{cert.issuer}</div>
                <div style={{ fontSize:'1.07rem', fontWeight:600, color:'var(--text-dim)', marginBottom:4 }}>{cert.title}</div>
                <div style={{ fontSize:'1.0rem', color:'var(--text-muted)', lineHeight:1.55 }}>{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;