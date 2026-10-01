import { useEffect, useRef, useState } from 'react';

const MailIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const GHIcon   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.57 0-.28-.01-1.23-.01-2.23-3.02.55-3.8-.73-4.04-1.41-.14-.34-.72-1.41-1.23-1.7-.42-.22-1.02-.77-.01-.79.94-.01 1.62.87 1.84 1.23 1.08 1.82 2.81 1.3 3.5.99.1-.78.42-1.3.76-1.6-2.67-.3-5.46-1.34-5.46-5.92 0-1.31.47-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3 0c2.29-1.56 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.9 1.23 3.22 0 4.6-2.8 5.62-5.47 5.92.44.38.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.3 0 .32.22.69.82.57A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>;
const LIIcon   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>;

const Contact = () => {
  const [vis, setVis]     = useState(false);
  const [form, setForm]   = useState({ name:'', email:'', message:'' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold:.06 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const onChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async e => {
    e.preventDefault();
    setStatus('sending');

    /* ── Web3Forms integration ──────────────────────────────────────────
       Replace YOUR_WEB3FORMS_KEY with your actual key from web3forms.com
       ──────────────────────────────────────────────────────────────────*/
    const payload = {
      access_key: 'YOUR_WEB3FORMS_KEY',  // ← replace
      name:    form.name,
      email:   form.email,
      message: form.message,
      subject: `Portfolio contact from ${form.name}`,
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name:'', email:'', message:'' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const inp = {
    width:'100%',
    background:'var(--bg-3)',
    border:'1px solid var(--border)',
    padding:'.8rem 1rem',
    fontFamily:"'IBM Plex Mono',monospace",
    fontSize:'.82rem',
    color:'var(--text)',
    outline:'none',
    letterSpacing:'.04em',
    transition:'border-color .25s',
    borderRadius:0,
  };

  const socialLinks = [
    { label:'supritsagarrout@gmail.com', href:'mailto:supritsagarrout@gmail.com', Icon:MailIcon },
    { label:'github.com/sagar9rout',      href:'https://github.com/sagar9rout',                Icon:GHIcon },
    { label:'linkedin.com/in/suprit-rout-4b8b44360', href:'https://www.linkedin.com/in/suprit-rout-4b8b44360/', Icon:LIIcon },
  ];

  return (
    <div ref={ref} style={{ background:'var(--bg-1)', borderTop:'1px solid var(--border)' }}>
      <div className="container" style={{ padding:'6rem 2rem 4rem' }}>

        <div style={{ opacity:vis?1:0, transform:vis?'none':'translateY(20px)', transition:'all .7s ease' }}>
          <div className="section-label">CONTACT</div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'start' }} className="col-m">

            {/* LEFT — info */}
            <div>
              <h2 style={{
                fontFamily:"'Cinzel',serif",
                fontSize:'clamp(1.8rem,4vw,2.8rem)',
                fontWeight:700, color:'#fff',
                lineHeight:1.1, marginBottom:'1.2rem',
              }}>
                LET'S<br/>
                <span style={{ color:'var(--red)' }}>CONNECT</span>
              </h2>

              <p style={{
                fontFamily:"'Inter',sans-serif",
                fontSize:'1rem', color:'var(--text-dim)',
                lineHeight:1.8, marginBottom:'2.5rem', maxWidth:380,
              }}>
                Interested in cybersecurity, security engineering, IAM,
                or technical collaboration? Get in touch.
              </p>

              {/* Contact links */}
              <div style={{ display:'flex', flexDirection:'column', gap:'.6rem', marginBottom:'2.5rem' }}>
                {socialLinks.map(link => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
                    style={{
                      display:'flex', alignItems:'center', gap:'1rem',
                      padding:'1rem 1.2rem',
                      background:'var(--bg-2)',
                      border:'1px solid var(--border)',
                      textDecoration:'none',
                      transition:'all .25s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor='var(--red)'; e.currentTarget.style.background='var(--bg-3)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.background='var(--bg-2)'; }}>
                    <span style={{ color:'var(--red)', display:'flex', alignItems:'center', flexShrink:0 }}>
                      <link.Icon/>
                    </span>
                    <span style={{
                      fontFamily:"'IBM Plex Mono',monospace",
                      fontSize:'.75rem', color:'var(--text-dim)',
                      letterSpacing:'.04em', lineHeight:1.4,
                      wordBreak:'break-all',
                    }}>{link.label}</span>
                  </a>
                ))}
              </div>

              {/* GitHub CTA */}
              <a href="https://github.com/sagar9rout" target="_blank" rel="noreferrer"
                className="btn" style={{ display:'inline-flex' }}>
                <GHIcon/> VIEW ALL PROJECTS
              </a>
            </div>

            {/* RIGHT — form */}
            <div>
              <div style={{
                fontFamily:"'IBM Plex Mono',monospace",
                fontSize:'.62rem', color:'var(--text-faint)',
                letterSpacing:'.18em', marginBottom:'1.5rem',
              }}>
                // SEND A MESSAGE
              </div>

              {status === 'success' ? (
                <div style={{
                  background:'rgba(39,174,96,.1)', border:'1px solid rgba(39,174,96,.3)',
                  padding:'2rem', textAlign:'center',
                }}>
                  <div style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'.8rem', color:'#27AE60', letterSpacing:'.1em', marginBottom:'.5rem' }}>
                    ✓ MESSAGE SENT
                  </div>
                  <p style={{ fontFamily:"'Inter',sans-serif", fontSize:'.85rem', color:'var(--text-dim)' }}>
                    Thanks — I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} style={{ display:'flex', flexDirection:'column', gap:'1.2rem' }}>
                  {/* Name */}
                  <div>
                    <label style={{ display:'block', fontFamily:"'IBM Plex Mono',monospace", fontSize:'.62rem', color:'var(--text-faint)', letterSpacing:'.18em', marginBottom:6 }}>
                      NAME
                    </label>
                    <input name="name" type="text" placeholder="Your name"
                      value={form.name} onChange={onChange} required
                      style={inp}
                      onFocus={e => e.target.style.borderColor='var(--red)'}
                      onBlur={e  => e.target.style.borderColor='var(--border)'}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display:'block', fontFamily:"'IBM Plex Mono',monospace", fontSize:'.62rem', color:'var(--text-faint)', letterSpacing:'.18em', marginBottom:6 }}>
                      EMAIL
                    </label>
                    <input name="email" type="email" placeholder="your@email.com"
                      value={form.email} onChange={onChange} required
                      style={inp}
                      onFocus={e => e.target.style.borderColor='var(--red)'}
                      onBlur={e  => e.target.style.borderColor='var(--border)'}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ display:'block', fontFamily:"'IBM Plex Mono',monospace", fontSize:'.62rem', color:'var(--text-faint)', letterSpacing:'.18em', marginBottom:6 }}>
                      MESSAGE
                    </label>
                    <textarea name="message" placeholder="Your message..."
                      rows={5} value={form.message} onChange={onChange} required
                      style={{ ...inp, resize:'vertical', minHeight:120, lineHeight:1.7 }}
                      onFocus={e => e.target.style.borderColor='var(--red)'}
                      onBlur={e  => e.target.style.borderColor='var(--border)'}
                    />
                  </div>

                  {status === 'error' && (
                    <div style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'.68rem', color:'var(--red)', letterSpacing:'.08em' }}>
                      ✗ Something went wrong. Try emailing directly.
                    </div>
                  )}

                  <button type="submit" disabled={status==='sending'} className="btn btn-primary"
                    style={{ alignSelf:'flex-start', opacity: status==='sending' ? .6 : 1 }}>
                    {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop:'4rem', paddingTop:'2rem',
          borderTop:'1px solid var(--border)',
          display:'flex', justifyContent:'space-between', alignItems:'center',
          flexWrap:'wrap', gap:'1rem',
          opacity:vis?1:0, transition:'opacity 1s ease .4s',
        }}>
          <div style={{ display:'flex', alignItems:'center', gap:'.8rem' }}>
            <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'.68rem', color:'var(--red)', letterSpacing:'.1em' }}>RONIN.SH</span>
            <span style={{ width:1, height:12, background:'var(--border)' }}/>
            <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'.65rem', color:'var(--text-faint)', letterSpacing:'.08em' }}>
              SUPRIT SAGAR ROUT
            </span>
          </div>
          <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'.6rem', color:'var(--text-faint)', letterSpacing:'.1em' }}>
            © 2025 &nbsp;·&nbsp; REACT + VITE
          </span>
        </div>
      </div>

      <style>{`
        input::placeholder, textarea::placeholder { color: var(--text-faint); font-style: italic; }
      `}</style>
    </div>
  );
};

export default Contact;