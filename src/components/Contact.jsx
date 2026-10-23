import { useState } from 'react';
import roninSwords from '../assets/ronin-swords-texture.jpeg';
import { GITHUB_URL } from '../data/labs';

// Free provider: Web3Forms. Put your key in a .env file at the project root:
//   VITE_WEB3FORMS_KEY=your-access-key
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const links = [
  ['Email', 'supritsagarrout@gmail.com', 'mailto:supritsagarrout@gmail.com'],
  ['GitHub', 'github.com/sagar9rout', GITHUB_URL],
  ['LinkedIn', 'linkedin.com/in/suprit-rout-4b8b44360', 'https://www.linkedin.com/in/suprit-rout-4b8b44360/'],
];

const field = { width: '100%', background: 'rgba(30,30,33,.9)', border: '1px solid var(--border-hi)', padding: '.85rem 1rem', color: '#fff', fontFamily: "'Inter',sans-serif", fontSize: '1rem', outline: 'none', borderRadius: 0 };
const label = { display: 'block', fontFamily: "'IBM Plex Mono',monospace", fontSize: '.78rem', letterSpacing: '.16em', color: 'var(--text-dim)', marginBottom: '.4rem' };

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error | unconfigured
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (e.target.botcheck?.checked) return;
    if (!WEB3FORMS_KEY) return setStatus('unconfigured');
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject: `Portfolio message from ${form.name}`, ...form }),
      });
      const data = await res.json();
      if (data.success) { setStatus('success'); setForm({ name: '', email: '', message: '' }); } else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <div className="section" style={{ background: 'var(--bg-1)' }}>
      {/* IMAGE_ASSET: ronin-swords-texture.jpeg */}
      <img className="bg-img" src={roninSwords} alt="" loading="lazy" style={{ opacity: 0.6 }} />
      <div className="bg-overlay" style={{ background: 'linear-gradient(180deg,rgba(16,16,18,.78),rgba(16,16,18,.62))' }} />

      <div className="container section-pad" style={{ position: 'relative' }}>
        <div className="section-label">CONTACT</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }} className="col-m">
          <div>
            <h2 className="h2" style={{ fontSize: 'clamp(2rem,4.5vw,3rem)', marginBottom: '1.2rem' }}>LET'S <span style={{ color: 'var(--red)' }}>CONNECT</span></h2>
            <p className="lead" style={{ marginBottom: '2rem', maxWidth: 420 }}>
              Interested in cybersecurity, security engineering, IAM, or technical collaboration? Get in touch.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.7rem' }}>
              {links.map(([k, v, href]) => (
                <a key={k} href={href} target={k === 'Email' ? undefined : '_blank'} rel="noreferrer" className="card"
                  style={{ display: 'flex', gap: '1rem', padding: '1rem 1.2rem', textDecoration: 'none', background: 'rgba(22,22,24,.9)', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <span className="mono" style={{ color: 'var(--red)', fontSize: '.8rem', letterSpacing: '.14em', minWidth: 70 }}>{k.toUpperCase()}</span>
                  <span style={{ color: '#fff', fontWeight: 500, wordBreak: 'break-all' }}>{v}</span>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
            <div><label htmlFor="name" style={label}>NAME</label><input id="name" name="name" required value={form.name} onChange={onChange} style={field} /></div>
            <div><label htmlFor="email" style={label}>EMAIL</label><input id="email" name="email" type="email" required value={form.email} onChange={onChange} style={field} /></div>
            <div><label htmlFor="message" style={label}>MESSAGE</label><textarea id="message" name="message" rows={5} required value={form.message} onChange={onChange} style={{ ...field, resize: 'vertical' }} /></div>
            <button className="btn btn-primary" type="submit" disabled={status === 'sending'} style={{ alignSelf: 'flex-start' }}>
              {status === 'sending' ? 'SENDING…' : 'SEND MESSAGE →'}
            </button>
            <div role="status" aria-live="polite" style={{ minHeight: '1.6rem', fontSize: '.95rem' }}>
              {status === 'success' && <span style={{ color: '#4cd27a' }}>✓ Message sent. Thank you — I'll reply soon.</span>}
              {status === 'error' && <span style={{ color: 'var(--red)' }}>✗ Could not send. Please email me directly.</span>}
              {status === 'unconfigured' && <span style={{ color: 'var(--red)' }}>✗ Form not configured yet. Please email me directly.</span>}
            </div>
          </form>
        </div>

        <div className="mono" style={{ marginTop: '4rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '.8rem', fontSize: '.8rem', color: 'var(--text-faint)' }}>
          <span><span style={{ color: 'var(--red)' }}>RONIN.SH</span> · SUPRIT SAGAR ROUT</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
};
export default Contact;