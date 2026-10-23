import roninField from '../assets/ronin-field-bg.jpeg';

const focus = [
  ['01', 'Identity & Access Management'],
  ['02', 'Vulnerability Assessment & Web Security'],
  ['03', 'OSINT & Reconnaissance'],
  ['04', 'Cloud Security'],
  ['05', 'AI-assisted Security Engineering'],
];

const About = () => (
  <div className="section">
    {/* IMAGE_ASSET: ronin-field-bg.jpeg */}
    <img className="bg-img about-bg" src={roninField} alt="" loading="lazy" style={{ opacity: 0.65 }} />
    <div className="bg-overlay" style={{ background: 'linear-gradient(90deg,rgba(11,11,12,.86) 0%,rgba(11,11,12,.6) 55%,rgba(11,11,12,.7) 100%)' }} />

    <div className="container section-pad" style={{ position: 'relative' }}>
      <div className="section-label">ABOUT</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: '4rem', alignItems: 'start' }} className="col-m">
        <div>
          <h2 className="h2" style={{ marginBottom: '1.6rem' }}>Practical security, built hands-on.</h2>
          <p className="lead" style={{ marginBottom: '1.2rem', borderLeft: '2px solid var(--red)', paddingLeft: '1.2rem' }}>
            I am an MCA graduate building hands-on cybersecurity experience through practical labs, security testing, identity and access management, and software projects.
          </p>
          <p className="lead" style={{ marginBottom: '2rem' }}>
            My current focus is understanding how systems, identities, and applications can be attacked, investigated, and secured.
          </p>
          <div style={{ display: 'flex', gap: '.7rem', flexWrap: 'wrap' }}>
            {['MCA · SGPA 9.25', 'Odisha, India', 'Continuous hands-on learning'].map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>

        <div>
          <div className="mono" style={{ fontSize: '.8rem', color: 'var(--text-faint)', letterSpacing: '.18em', marginBottom: '1rem' }}>// CURRENT FOCUS</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
            {focus.map(([n, t]) => (
              <div key={n} className="card" style={{ display: 'flex', gap: '1.1rem', padding: '1rem 1.2rem', background: 'rgba(22,22,24,.85)' }}>
                <span className="mono" style={{ color: 'var(--red)', fontSize: '.85rem' }}>{n}</span>
                <span style={{ fontWeight: 500, color: '#fff' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default About;