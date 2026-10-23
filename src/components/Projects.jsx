import { GITHUB_URL } from '../data/labs';

/* ─────────────────────────────────────────────────────────────
   HOW TO ADD REAL PROJECT EVIDENCE
   1. Put the screenshot in  src/assets/projects/
   2. import shot from '../assets/projects/iam-keycloak.png';
   3. Add to that project:  visuals: [{ src: shot, alt: 'Keycloak realm roles', caption: '...' }]
   Until then, a clearly marked placeholder is shown. Nothing is fabricated.
   repo: set the exact repository URL (falls back to your GitHub profile).
   caseStudy: set a URL when the write-up exists (otherwise shows "soon").
   ───────────────────────────────────────────────────────────── */
const projects = [
  {
    no: '01', title: 'Cybersecurity Foundations Lab',
    desc: 'A hands-on, controlled lab environment covering reconnaissance, network enumeration, vulnerability assessment, and web application security testing against intentionally vulnerable targets, with findings documented.',
    domains: ['Reconnaissance', 'Network Enumeration', 'Vulnerability Assessment', 'Web Security'],
    tech: ['Kali Linux', 'Nmap', 'Metasploitable2', 'DVWA'],
    expected: ['Terminal screenshots', 'Nmap results', 'DVWA testing', 'Metasploitable2', 'Lab diagram / reports'],
    visuals: [], repo: 'https://github.com/sagar9rout/Cybersecurity-foundations', caseStudy: null,
  },
  {
    no: '02', title: 'Cloud IAM Attack Path Lab',
    desc: 'A practical identity-security lab covering authentication, authorization, role-based access control, and simulated privilege-escalation scenarios, with security events analyzed under least-privilege and Zero Trust principles.',
    domains: ['Identity Security', 'RBAC', 'Privilege Escalation', 'Zero Trust', 'Least Privilege'],
    tech: ['Keycloak', 'Docker', 'Python'],
    expected: ['Keycloak screenshots', 'Architecture diagram', 'Attack-path diagram', 'Security-event evidence'],
    visuals: [], repo: 'https://github.com/sagar9rout/cloud-iam-attack-path-lab', caseStudy: null,
  },
  {
    no: '03', title: 'FinGuard — AI Financial Decision Advisor',
    desc: 'An AI-assisted decision-support application built from the HackerRank Orchestrate "Buy or Wait?" problem. A structured pipeline evaluates user financial profiles, spending preferences, and spending categories to produce personalized, explainable buy/wait recommendations, tested across 250 decision inputs.',
    domains: ['AI Decision Support', 'Structured Pipeline', 'Automated Evaluation', 'Data Processing'],
    tech: ['Python', 'AI', 'Data Analysis'],
    note: 'AI / software engineering project — not a cybersecurity project, and not a financial advisory service.',
    expected: ['FinGuard web UI screenshot', 'Decision workflow', 'Architecture', 'Evaluation output'],
    visuals: [], repo: 'https://github.com/sagar9rout/FinGuard', caseStudy: null,
  },
];


const Evidence = ({ visuals, expected }) =>
  visuals.length ? (
    <div className="evidence-grid">
      {visuals.map((v) => (
        <figure key={v.alt}>
          <img src={v.src} alt={v.alt} loading="lazy" />
          {v.caption && <figcaption className="mono" style={{ fontSize: '.78rem', color: 'var(--text-faint)', marginTop: '.4rem' }}>{v.caption}</figcaption>}
        </figure>
      ))}
    </div>
  ) : (
    <div className="evidence" role="img" aria-label="Project evidence placeholder">
      <div className="mono" style={{ color: 'var(--red)', letterSpacing: '.2em', fontSize: '.85rem' }}>PROJECT EVIDENCE</div>
      <div className="mono" style={{ color: 'var(--text-dim)', fontSize: '.85rem' }}>[ LOCAL SCREENSHOT WILL BE ADDED ]</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', justifyContent: 'center', marginTop: '.4rem' }}>
        {expected.map((e) => <span key={e} className="tag" style={{ fontSize: '.72rem' }}>{e}</span>)}
      </div>
    </div>
  );

const Projects = () => (
  <div className="section" style={{ background: 'var(--bg-1)' }}>
    <div className="container section-pad">
      <div className="section-label">SELECTED PROJECTS</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
        <h2 className="h2">Three real engineering projects.</h2>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="mono" style={{ color: 'var(--text-dim)', fontSize: '.85rem', textDecoration: 'none' }}>github.com/sagar9rout →</a>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {projects.map((p) => (
          <article key={p.no} className="card" style={{ padding: 'clamp(1.2rem,3vw,2.2rem)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.2rem', marginBottom: '1.4rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: "'Cinzel',serif", fontSize: '2.4rem', color: 'var(--red)', lineHeight: 1 }}>{p.no}</span>
              <h3 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.25rem,2.6vw,1.8rem)', color: '#fff', fontWeight: 600 }}>{p.title}</h3>
            </div>

            <Evidence visuals={p.visuals} expected={p.expected} />

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr .8fr', gap: '2.5rem', marginTop: '1.8rem' }} className="col-m">
              <div>
                <p className="lead">{p.desc}</p>
                {p.note && <p className="mono" style={{ marginTop: '1rem', fontSize: '.8rem', color: 'var(--text-faint)', borderLeft: '2px solid var(--border-hi)', paddingLeft: '.8rem', lineHeight: 1.6 }}>ℹ {p.note}</p>}
              </div>
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginBottom: '1rem' }}>
                  {p.domains.map((d) => <span key={d} className="tag tag-red">{d}</span>)}
                </div>
                <div className="mono" style={{ color: 'var(--text-dim)', fontSize: '.85rem', marginBottom: '1.4rem' }}>{p.tech.join(' • ')}</div>
                <div style={{ display: 'flex', gap: '.7rem', flexWrap: 'wrap' }}>
                  {p.caseStudy
                    ? <a className="btn btn-primary" href={p.caseStudy}>VIEW CASE STUDY</a>
                    : <span className="btn" aria-disabled="true">CASE STUDY · SOON</span>}
                  <a className="btn" href={p.repo || GITHUB_URL} target="_blank" rel="noreferrer">GITHUB</a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

    </div>
  </div>
);
export default Projects;