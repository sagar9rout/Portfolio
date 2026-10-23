import roninHero from '../assets/ronin-hero-samurai.jpeg';
import { GITHUB_URL } from '../data/labs';

const GHIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.57v-2.23c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
);

const Home = ({ scrollTo, refs }) => (
  <div className="hero">
    <div className="grid-bg" />
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'var(--red)', zIndex: 4 }} />

    <div className="hero-art" aria-hidden="true">
      {/* IMAGE_ASSET: ronin-hero-samurai.jpeg */}
      <img src={roninHero} alt="" fetchPriority="high" />
    </div>

    <div className="container" style={{ width: '100%' }}>
      <div className="hero-content">
        <div className="section-label fade-up">RONIN.SH</div>
        <h1 className="fade-up" style={{ animationDelay: '.1s', fontFamily: "'Cinzel',serif", fontSize: 'clamp(2.4rem,6vw,4.6rem)', fontWeight: 700, color: '#fff', lineHeight: 1.08, marginBottom: '1rem' }}>
          SUPRIT SAGAR ROUT
        </h1>
        <div className="fade-up mono" style={{ animationDelay: '.2s', fontSize: 'clamp(1rem,2vw,1.3rem)', color: 'var(--red)', letterSpacing: '.14em', marginBottom: '1rem', fontWeight: 600 }}>
          CYBERSECURITY ENGINEER
        </div>
        <div className="fade-up mono" style={{ animationDelay: '.3s', fontSize: '.88rem', color: 'var(--text-dim)', letterSpacing: '.08em', marginBottom: '1.6rem' }}>
          IAM • OFFENSIVE SECURITY • OSINT • CLOUD SECURITY • AI
        </div>
        <p className="fade-up lead" style={{ animationDelay: '.4s', maxWidth: 520, marginBottom: '2.4rem' }}>
          Building practical security systems, identity labs, vulnerability-testing environments, and AI-assisted applications.
        </p>
        <div className="fade-up" style={{ animationDelay: '.5s', display: 'flex', gap: '.9rem', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={() => scrollTo(refs.projectsRef)}>VIEW PROJECTS</button>
          <a className="btn" href={GITHUB_URL} target="_blank" rel="noreferrer"><GHIcon /> GITHUB</a>
          <a className="btn" href="/assets/resume.pdf" download="Suprit-Sagar-Rout-Resume.pdf">↓ RESUME</a>
        </div>
        <div className="mono fade-up" style={{ animationDelay: '.7s', marginTop: '3rem', fontSize: '.78rem', letterSpacing: '.3em', color: 'var(--text-faint)' }}>
          DISCIPLINE · CURIOSITY · SECURITY
        </div>
      </div>
    </div>
  </div>
);
export default Home;