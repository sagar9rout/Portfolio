import { useEffect, useRef, useState } from 'react';

const Experience = () => {
  const [vis, setVis] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold:.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const block = { opacity:vis?1:0, transform:vis?'none':'translateY(20px)', transition:'all .7s ease' };

  return (
    <div ref={ref} style={{ background:'var(--bg)', borderTop:'1px solid var(--border)' }}>
      <div className="container" style={{ padding:'6rem 2rem' }}>
        <div className="section-label">EXPERIENCE</div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'2rem', alignItems:'start' }} className="col-m">

          {/* ── EXPERIENCE ── */}
          <div style={{ ...block }}>
            <div style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'.62rem', color:'var(--text-faint)', letterSpacing:'.18em', marginBottom:'1.5rem' }}>
              // INTERNSHIPS
            </div>

            {/* ThreatSys */}
            <div style={{
              background:'var(--bg-2)', border:'1px solid var(--border)',
              borderLeft:'2px solid var(--red)',
              padding:'1.4rem', marginBottom:'1rem',
            }}>
              <div style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'.6rem', color:'var(--red)', letterSpacing:'.15em', marginBottom:4 }}>
                CYBERSECURITY
              </div>
              <div style={{ fontFamily:"'Inter',sans-serif", fontSize:'.95rem', fontWeight:600, color:'#fff', marginBottom:2 }}>
                Cybersecurity Intern
              </div>
              <div style={{ fontFamily:"'Inter',sans-serif", fontSize:'.82rem', color:'var(--text-dim)', marginBottom:'.8rem' }}>
                ThreatSys &nbsp;·&nbsp; 2 Months
              </div>
              <ul style={{ fontFamily:"'Inter',sans-serif", fontSize:'.8rem', color:'var(--text-faint)', lineHeight:1.8, paddingLeft:'1rem', margin:0 }}>
                <li>Practical cybersecurity concepts & network security</li>
                <li>Firewalls, system vulnerabilities, security testing</li>
                <li>Kali Linux hands-on — SQL Injection, XSS</li>
              </ul>
            </div>

            {/* CTTC */}
            <div style={{
              background:'var(--bg-2)', border:'1px solid var(--border)',
              borderLeft:'2px solid var(--border-hi)',
              padding:'1.4rem',
            }}>
              <div style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'.6rem', color:'var(--text-faint)', letterSpacing:'.15em', marginBottom:4 }}>
                DATA ANALYTICS
              </div>
              <div style={{ fontFamily:"'Inter',sans-serif", fontSize:'.95rem', fontWeight:600, color:'var(--text-dim)', marginBottom:2 }}>
                Data Analyst Intern
              </div>
              <div style={{ fontFamily:"'Inter',sans-serif", fontSize:'.82rem', color:'var(--text-faint)', marginBottom:'.8rem' }}>
                CTTC, Bhubaneswar &nbsp;·&nbsp; 2 Months
              </div>
              <ul style={{ fontFamily:"'Inter',sans-serif", fontSize:'.8rem', color:'var(--text-faint)', lineHeight:1.8, paddingLeft:'1rem', margin:0 }}>
                <li>Analyzed real-world datasets for trends & patterns</li>
                <li>Translated raw data into actionable reports</li>
              </ul>
            </div>
          </div>

          {/* ── EDUCATION ── */}
          <div style={{ ...block, transitionDelay:'.1s' }}>
            <div style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'.62rem', color:'var(--text-faint)', letterSpacing:'.18em', marginBottom:'1.5rem' }}>
              // EDUCATION
            </div>

            {[
              {
                degree:'Master of Computer Applications',
                short:'MCA',
                inst:'Gandhi Institute of Excellent Technocrats',
                period:'2024 – 2026',
                note:'SGPA: 9.25',
                active:true,
              },
              {
                degree:'Bachelor of Science in Mathematics',
                short:'B.Sc Mathematics',
                inst:'Mahima (Degree) Mahavidyalaya, Joranda',
                period:'Passed 2024',
                note:'Utkal University',
                active:false,
              },
            ].map(edu => (
              <div key={edu.short} style={{
                background:'var(--bg-2)', border:'1px solid var(--border)',
                borderLeft:`2px solid ${edu.active ? 'var(--red)' : 'var(--border-hi)'}`,
                padding:'1.4rem', marginBottom:'1rem',
              }}>
                <div style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'.58rem', color: edu.active ? 'var(--red)' : 'var(--text-faint)', letterSpacing:'.15em', marginBottom:4 }}>
                  {edu.period}
                </div>
                <div style={{ fontFamily:"'Inter',sans-serif", fontSize:'.92rem', fontWeight:600, color: edu.active ? '#fff' : 'var(--text-dim)', marginBottom:2 }}>
                  {edu.short}
                </div>
                <div style={{ fontFamily:"'Inter',sans-serif", fontSize:'.78rem', color:'var(--text-faint)', lineHeight:1.5, marginBottom:4 }}>
                  {edu.inst}
                </div>
                <div style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'.62rem', color: edu.active ? 'var(--red)' : 'var(--text-faint)' }}>
                  {edu.note}
                </div>
              </div>
            ))}
          </div>

          {/* ── CERTIFICATIONS ── */}
          <div style={{ ...block, transitionDelay:'.2s' }}>
            <div style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'.62rem', color:'var(--text-faint)', letterSpacing:'.18em', marginBottom:'1.5rem' }}>
              // CERTIFICATIONS
            </div>

            {[
              {
                issuer:'PALO ALTO NETWORKS',
                title:'Cybersecurity Professional Certificate',
                desc:'Network, Cloud Security & Security Operations',
              },
              {
                issuer:'TATA',
                title:'Cybersecurity Analyst Job Simulation',
                desc:'IAM Fundamentals & IAM Strategy',
              },
              {
                issuer:'TRYHACKME',
                title:'Advent of Cyber 2025',
                desc:'24 Cybersecurity Challenges Completed',
              },
            ].map((cert, i) => (
              <div key={i} style={{
                background:'var(--bg-2)', border:'1px solid var(--border)',
                padding:'1.2rem', marginBottom:'.8rem',
                transition:'border-color .25s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor='var(--border-hi)'}
              onMouseLeave={e => e.currentTarget.style.borderColor='var(--border)'}>
                <div style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'.58rem', color:'var(--red)', letterSpacing:'.15em', marginBottom:3 }}>
                  {cert.issuer}
                </div>
                <div style={{ fontFamily:"'Inter',sans-serif", fontSize:'.85rem', fontWeight:600, color:'var(--text-dim)', marginBottom:3 }}>
                  {cert.title}
                </div>
                <div style={{ fontFamily:"'Inter',sans-serif", fontSize:'.75rem', color:'var(--text-faint)', lineHeight:1.5 }}>
                  {cert.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;