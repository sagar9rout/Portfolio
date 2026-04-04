import { useEffect, useRef, useState } from 'react';
import spartanImg from '../assets/spartan.jpeg';

/* Small icon components */
const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/>
  </svg>
);
const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.57 0-.28-.01-1.23-.01-2.23-3.02.55-3.8-.73-4.04-1.41-.14-.34-.72-1.41-1.23-1.7-.42-.22-1.02-.77-.01-.79.94-.01 1.62.87 1.84 1.23 1.08 1.82 2.81 1.3 3.5.99.1-.78.42-1.3.76-1.6-2.67-.3-5.46-1.34-5.46-5.92 0-1.31.47-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3 0c2.29-1.56 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.9 1.23 3.22 0 4.6-2.8 5.62-5.47 5.92.44.38.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.3 0 .32.22.69.82.57A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const Contact = () => {
  const [vis, setVis]   = useState(false);
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [sent, setSent] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: .06 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const onChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const onSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  /* Input style — bright borders, fully readable */
  const inp = {
    width: '100%',
    background: 'rgba(255,255,255,.12)',
    border: '1.5px solid rgba(255,255,255,.6)',
    padding: '.85rem 1.1rem',
    fontFamily: "'Cormorant Garamond',serif",
    fontSize: '1.05rem',
    fontWeight: 600,
    color: '#FFFFFF',
    outline: 'none',
    letterSpacing: '.05em',
    transition: 'border-color .3s, background .3s',
    borderRadius: 0,
  };

  const contactItems = [
    { jp:'電子メール', en:'EMAIL',    val:'supritsagarrout@gmail.com', href:'mailto:supritsagarrout@gmail.com', Icon: MailIcon },
    { jp:'電話',       en:'PHONE',    val:'+91 9937059394',             href:'tel:+919937059394',               Icon: PhoneIcon },
    { jp:'場所',       en:'LOCATION', val:'Dhenkanal, Odisha — 759014', href:null,                               Icon: PinIcon },
  ];

  return (
    <div ref={ref} style={{ background: 'var(--ink)', position:'relative', overflow:'hidden', borderTop:'4px solid var(--blood)' }}>

      {/* Background spartan image */}
      <img src={spartanImg} alt=""
        style={{
          position:'absolute', inset:0,
          width:'100%', height:'100%',
          objectFit:'cover', objectPosition:'center',
          filter:'grayscale(15%) brightness(.42) contrast(1.2)',
          zIndex:1, display:'block',
        }}
      />
      <div style={{ position:'absolute', inset:0, background:'rgba(8,8,8,.52)', zIndex:2 }}/>

      {/* Chapter bar */}
      <div className="chapter-bar" style={{ position:'relative', zIndex:5 }}>
        <span style={{ fontFamily:"'Noto Serif JP',serif", color:'rgba(255,255,255,.8)', fontSize:'.63rem', letterSpacing:'.4em', fontWeight:500 }}>
          第五章 · CHAPTER V
        </span>
        <span style={{ fontFamily:"'Cinzel Decorative',cursive", color:'#fff', fontSize:'.75rem', letterSpacing:'.3em', fontWeight:700 }}>
          REACH OUT
        </span>
        <span style={{ fontFamily:"'Noto Serif JP',serif", color:'var(--blood)', fontSize:'.65rem', letterSpacing:'.3em', fontWeight:700 }}>
          縁
        </span>
      </div>

      {/* Main content */}
      <div style={{
        position:'relative', zIndex:3,
        maxWidth:1300, margin:'0 auto',
        padding:'5rem 3rem 3rem',
        display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'start',
        opacity: vis ? 1 : 0,
        transform: vis ? 'none' : 'translateY(30px)',
        transition:'all .85s ease',
      }} className="grid-m1 stack-m">

        {/* ── LEFT — Info ── */}
        <div>
          {/* Section tag */}
          <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'2.5rem' }}>
            <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:'.65rem', color:'var(--blood)', letterSpacing:'.3em', fontWeight:700 }}>05</span>
            <div style={{ height:2, width:40, background:'var(--blood)' }}/>
            <span style={{ fontFamily:"'Cinzel Decorative',cursive", fontSize:'.8rem', letterSpacing:'.25em', color:'#FFFFFF', fontWeight:700 }}>CONTACT</span>
            <div style={{ height:1, flex:1, background:'rgba(255,255,255,.2)' }}/>
          </div>

          {/* Big heading */}
          <h2 style={{
            fontFamily:"'Cinzel Decorative',cursive",
            fontSize:'clamp(2rem,4vw,3.6rem)',
            fontWeight:900, color:'#FFFFFF',
            lineHeight:1.05, marginBottom:'1.2rem',
            textShadow:'0 2px 20px rgba(0,0,0,.8)',
          }}>
            LET'S<br/>
            <span style={{ color:'var(--blood)' }}>FORGE</span><br/>
            TOGETHER
          </h2>

          <p style={{
            fontFamily:"'Cormorant Garamond',serif",
            fontSize:'1.05rem', fontWeight:500,
            color:'rgba(255,255,255,.82)',
            lineHeight:1.9, marginBottom:'2.5rem',
            fontStyle:'italic', maxWidth:380,
            textShadow:'0 1px 8px rgba(0,0,0,.7)',
          }}>
            Open to entry-level opportunities in Web Development,
            Data Analytics, and Cybersecurity. I respond with
            the discipline of a warrior.
          </p>

          {/* Contact detail rows — each in a visible box */}
          <div style={{ display:'flex', flexDirection:'column', gap:'1rem', marginBottom:'3rem' }}>
            {contactItems.map(item => (
              <div key={item.en} style={{
                display:'flex', gap:'1rem', alignItems:'center',
                background:'rgba(255,255,255,.1)',
                border:'1px solid rgba(255,255,255,.25)',
                borderLeft:'3px solid var(--blood)',
                padding:'.9rem 1.2rem',
                backdropFilter:'blur(6px)',
                transition:'background .25s, border-color .25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background='rgba(139,0,0,.18)'; e.currentTarget.style.borderColor='var(--blood)'; }}
              onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,.1)'; e.currentTarget.style.borderColor='rgba(255,255,255,.25)'; }}>

                {/* Icon in blood circle */}
                <div style={{
                  flexShrink:0, width:36, height:36,
                  background:'var(--blood)', borderRadius:'50%',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  color:'#fff',
                }}>
                  <item.Icon/>
                </div>

                <div style={{ flex:1 }}>
                  <div style={{
                    fontFamily:"'Noto Serif JP',serif",
                    fontSize:'.55rem', fontWeight:700,
                    color:'rgba(255,255,255,.6)',
                    letterSpacing:'.25em', marginBottom:3,
                  }}>{item.jp} · {item.en}</div>

                  {item.href ? (
                    <a href={item.href} style={{
                      fontFamily:"'Cormorant Garamond',serif",
                      fontSize:'1rem', fontWeight:700,
                      color:'#FFFFFF', textDecoration:'none', display:'block',
                      letterSpacing:'.04em',
                      textShadow:'0 1px 6px rgba(0,0,0,.9)',
                      transition:'color .2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color='var(--blood)'}
                    onMouseLeave={e => e.currentTarget.style.color='#FFFFFF'}>
                      {item.val}
                    </a>
                  ) : (
                    <span style={{
                      fontFamily:"'Cormorant Garamond',serif",
                      fontSize:'1rem', fontWeight:700,
                      color:'#FFFFFF', display:'block',
                      letterSpacing:'.04em',
                      textShadow:'0 1px 6px rgba(0,0,0,.9)',
                    }}>{item.val}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social buttons */}
          <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
            {[
              { label:'LINKEDIN', href:'https://www.linkedin.com/in/suprit-rout-4b8b44360/', Icon: LinkedInIcon },
              { label:'GITHUB',   href:'#',                                                   Icon: GithubIcon  },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                style={{
                  display:'inline-flex', alignItems:'center', gap:'.5rem',
                  border:'2px solid rgba(255,255,255,.7)',
                  padding:'.7rem 1.6rem',
                  fontFamily:"'Cinzel Decorative',cursive",
                  fontSize:'.68rem', fontWeight:700,
                  letterSpacing:'.18em', color:'#FFFFFF',
                  textDecoration:'none', textTransform:'uppercase',
                  transition:'all .3s ease',
                  position:'relative', overflow:'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--blood)';
                  e.currentTarget.style.borderColor = 'var(--blood)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,.7)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}>
                <s.Icon/> {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── RIGHT — Contact form ── */}
        <div>
          {/* Form header */}
          <div style={{ marginBottom:'2rem' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'.6rem' }}>
              <div style={{ height:2, width:32, background:'var(--blood)' }}/>
              <span style={{
                fontFamily:"'Cinzel Decorative',cursive",
                fontSize:'.72rem', fontWeight:700,
                color:'#FFFFFF', letterSpacing:'.25em',
              }}>SEND A MESSAGE</span>
            </div>
            <p style={{
              fontFamily:"'Cormorant Garamond',serif",
              fontSize:'.95rem', fontWeight:500,
              color:'rgba(255,255,255,.75)',
              fontStyle:'italic', letterSpacing:'.05em',
            }}>
              Drop me a message — I'll get back within 24 hours.
            </p>
          </div>

          <form onSubmit={onSubmit} style={{ display:'flex', flexDirection:'column', gap:'1.6rem' }}>

            {/* Name */}
            <div>
              <label style={{
                display:'block',
                fontFamily:"'Cinzel Decorative',cursive",
                fontSize:'.6rem', fontWeight:700,
                color:'rgba(255,255,255,.85)',
                letterSpacing:'.25em', marginBottom:8,
                textShadow:'0 1px 6px rgba(0,0,0,.8)',
              }}>NAME</label>
              <input
                name="name" type="text" placeholder="Your full name"
                value={form.name} onChange={onChange} required
                style={inp}
                onFocus={e => { e.target.style.borderColor='var(--blood)'; e.target.style.background='rgba(255,255,255,.18)'; }}
                onBlur={e  => { e.target.style.borderColor='rgba(255,255,255,.6)'; e.target.style.background='rgba(255,255,255,.12)'; }}
              />
            </div>

            {/* Email */}
            <div>
              <label style={{
                display:'block',
                fontFamily:"'Cinzel Decorative',cursive",
                fontSize:'.6rem', fontWeight:700,
                color:'rgba(255,255,255,.85)',
                letterSpacing:'.25em', marginBottom:8,
                textShadow:'0 1px 6px rgba(0,0,0,.8)',
              }}>EMAIL</label>
              <input
                name="email" type="email" placeholder="your@email.com"
                value={form.email} onChange={onChange} required
                style={inp}
                onFocus={e => { e.target.style.borderColor='var(--blood)'; e.target.style.background='rgba(255,255,255,.18)'; }}
                onBlur={e  => { e.target.style.borderColor='rgba(255,255,255,.6)'; e.target.style.background='rgba(255,255,255,.12)'; }}
              />
            </div>

            {/* Message */}
            <div>
              <label style={{
                display:'block',
                fontFamily:"'Cinzel Decorative',cursive",
                fontSize:'.6rem', fontWeight:700,
                color:'rgba(255,255,255,.85)',
                letterSpacing:'.25em', marginBottom:8,
                textShadow:'0 1px 6px rgba(0,0,0,.8)',
              }}>MESSAGE</label>
              <textarea
                name="message" placeholder="Write your message here..."
                rows={5} value={form.message} onChange={onChange} required
                style={{ ...inp, resize:'vertical', minHeight:130, lineHeight:1.7 }}
                onFocus={e => { e.target.style.borderColor='var(--blood)'; e.target.style.background='rgba(255,255,255,.18)'; }}
                onBlur={e  => { e.target.style.borderColor='rgba(255,255,255,.6)'; e.target.style.background='rgba(255,255,255,.12)'; }}
              />
            </div>

            {/* Send button */}
            <button type="submit" style={{
              border:'2px solid #FFFFFF',
              background: sent ? 'var(--blood)' : 'rgba(255,255,255,.12)',
              padding:'1rem 2.8rem',
              fontFamily:"'Cinzel Decorative',cursive",
              fontSize:'.72rem', fontWeight:700,
              letterSpacing:'.28em',
              color:'#FFFFFF',
              cursor:'pointer', transition:'all .3s',
              alignSelf:'flex-start',
              display:'flex', alignItems:'center', gap:'.6rem',
              textShadow: sent ? 'none' : '0 1px 6px rgba(0,0,0,.8)',
            }}
            onMouseEnter={e => {
              if (!sent) {
                e.currentTarget.style.background = 'var(--blood)';
                e.currentTarget.style.borderColor = 'var(--blood)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(139,0,0,.5)';
              }
            }}
            onMouseLeave={e => {
              if (!sent) {
                e.currentTarget.style.background = 'rgba(255,255,255,.12)';
                e.currentTarget.style.borderColor = '#FFFFFF';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }
            }}>
              {sent ? (
                <>✓ MESSAGE SENT</>
              ) : (
                <>SEND MESSAGE
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div style={{
        position:'relative', zIndex:3,
        borderTop:'1px solid rgba(255,255,255,.2)',
        padding:'1.8rem 3rem',
        maxWidth:1300, margin:'0 auto',
        display:'flex', justifyContent:'space-between', alignItems:'center',
        flexWrap:'wrap', gap:'1rem',
      }}>
        {/* Name — fully white, bold, visible */}
        <div style={{ display:'flex', alignItems:'center', gap:'1rem' }}>
          <div style={{ width:24, height:24, border:'2px solid var(--blood)', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <span style={{ fontFamily:"'Cinzel Decorative',cursive", fontSize:'.55rem', color:'#FFFFFF', fontWeight:900 }}>S</span>
          </div>
          <span style={{
            fontFamily:"'Cinzel Decorative',cursive",
            fontSize:'.7rem', fontWeight:700,
            color:'#FFFFFF', letterSpacing:'.2em',
            textShadow:'0 1px 8px rgba(0,0,0,.9)',
          }}>SUPRIT SAGAR ROUT</span>
          <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:'.6rem', color:'rgba(255,255,255,.5)', letterSpacing:'.2em' }}>· 侍のポートフォリオ</span>
        </div>

        <div style={{ display:'flex', alignItems:'center', gap:'1.5rem' }}>
          <span style={{ fontFamily:"'Cinzel Decorative',cursive", fontSize:'.58rem', color:'rgba(255,255,255,.5)', letterSpacing:'.18em' }}>
            © 2025
          </span>
          <div style={{ height:12, width:1, background:'rgba(255,255,255,.2)' }}/>
          <span style={{ fontFamily:"'Cinzel Decorative',cursive", fontSize:'.58rem', color:'rgba(255,255,255,.5)', letterSpacing:'.18em' }}>
            REACT + TAILWIND
          </span>
        </div>
      </div>

      <style>{`
        input::placeholder, textarea::placeholder {
          color: rgba(255,255,255,.4) !important;
          font-style: italic;
        }
        input, textarea {
          color: #FFFFFF !important;
          font-weight: 600 !important;
        }
      `}</style>
    </div>
  );
};

export default Contact;