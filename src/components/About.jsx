import { useEffect, useRef, useState } from 'react';
import animeImg from '../assets/anime-splatter.jpeg';

const TimelineItem = ({ period, place, detail, active }) => (
  <div style={{ display:'flex', gap:'1.2rem', padding:'1.2rem 0', borderBottom:'1px solid rgba(12,12,12,.08)' }}>
    <div style={{ flexShrink:0, width:4, background: active ? 'var(--blood)' : 'var(--ash)', borderRadius:2, alignSelf:'stretch', minHeight:50 }}/>
    <div>
      <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:'.62rem', color: active ? 'var(--blood)' : 'var(--ash)', letterSpacing:'.2em', marginBottom:3 }}>{period}</div>
      <div style={{ fontFamily:"'Cinzel Decorative',cursive", fontSize:'.72rem', fontWeight:700, color:'var(--ink)', letterSpacing:'.04em', marginBottom:4, lineHeight:1.4 }}>{place}</div>
      <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'.95rem', color:'var(--ink-mid)', lineHeight:1.75, fontStyle:'italic' }}>{detail}</div>
    </div>
  </div>
);

const About = () => {
  const [vis, setVis] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold:.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ background:'var(--bg)', borderTop:'4px solid var(--ink)' }}>

      <div className="chapter-bar">
        <span style={{ fontFamily:"'Noto Serif JP',serif", color:'rgba(255,255,255,.7)', fontSize:'.63rem', letterSpacing:'.4em' }}>第二章 · CHAPTER II</span>
        <span style={{ fontFamily:"'Cinzel Decorative',cursive", color:'#fff', fontSize:'.72rem', letterSpacing:'.3em', fontWeight:700 }}>ABOUT THE WARRIOR</span>
        <span style={{ fontFamily:"'Noto Serif JP',serif", color:'var(--blood)', fontSize:'.62rem', letterSpacing:'.3em' }}>武士道</span>
      </div>

      <div style={{ display:'flex', minHeight:'calc(100vh - 56px)' }} className="stack-m">

        {/* LEFT — anime-splatter image: high visibility */}
        <div className="hide-m" style={{
          width:'42%', position:'relative', borderRight:'3px solid var(--ink)', overflow:'hidden',
          opacity:vis?1:0, transform:vis?'none':'translateX(-30px)', transition:'all .85s ease',
        }}>
          {/* Image fills the whole panel — minimal filter */}
          <img src={animeImg} alt=""
            style={{
              position:'absolute', inset:0,
              width:'100%', height:'100%',
              objectFit:'cover', objectPosition:'30% top',
              display:'block',
              filter:'grayscale(20%) brightness(.85) contrast(1.15)',
              zIndex:1,
            }}
          />

          {/* Minimal left-bottom gradient only for quote readability */}
          <div style={{
            position:'absolute', inset:0, zIndex:2,
            background:'linear-gradient(to bottom, rgba(255,255,255,0) 40%, rgba(255,255,255,0.75) 85%, rgba(255,255,255,0.92) 100%)',
          }}/>

          {/* Quote box — sits above gradient */}
          <div className="manga-panel" style={{
            position:'absolute', bottom:'3rem', left:'2rem', right:'2rem', zIndex:3,
            padding:'1.5rem', background:'rgba(255,255,255,.92)', backdropFilter:'blur(8px)',
          }}>
            <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:'.6rem', color:'var(--blood)', letterSpacing:'.3em', marginBottom:6 }}>武士道の言葉</div>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'1.05rem', fontStyle:'italic', color:'var(--ink)', lineHeight:1.85 }}>
              "A warrior does not give up what he loves — he finds the love in what he does."
            </p>
          </div>

          {/* Chapter tag top-right */}
          <div style={{
            position:'absolute', top:'2rem', right:'2rem', zIndex:3,
            background:'var(--blood)', color:'#fff', padding:'.4rem .8rem',
            fontFamily:"'Cinzel Decorative',cursive", fontSize:'.55rem', letterSpacing:'.2em',
          }}>ABOUT · 武</div>
        </div>

        {/* RIGHT — content */}
        <div style={{
          flex:1, padding:'4rem',
          display:'flex', flexDirection:'column', justifyContent:'center',
          opacity:vis?1:0, transform:vis?'none':'translateX(30px)', transition:'all .85s ease .2s',
        }}>
          <div className="stag">
            <span className="stag-num">02</span>
            <div className="stag-dash"/>
            <span className="stag-title">ABOUT ME</span>
            <div className="stag-line"/>
          </div>

          <p style={{
            fontFamily:"'Cormorant Garamond',serif", fontSize:'1.12rem',
            lineHeight:2, color:'var(--ink-mid)',
            borderLeft:'3px solid var(--blood)', paddingLeft:'1.5rem', marginBottom:'2.5rem',
          }}>
            MCA graduate with working knowledge of <strong style={{color:'var(--ink)'}}>Java, Python</strong>,
            and front-end technologies including <strong style={{color:'var(--ink)'}}>HTML, CSS, and JavaScript</strong>.
            Enthusiastic fresher seeking an entry-level IT role to apply technical knowledge,
            contribute to development teams, and continuously enhance skills.
          </p>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem', marginBottom:'2.5rem' }} className="grid-m1">
            <div>
              <h3 style={{ fontFamily:"'Cinzel Decorative',cursive", fontSize:'.65rem', letterSpacing:'.25em', color:'var(--ink)', borderBottom:'1.5px solid var(--ink)', paddingBottom:8, marginBottom:'1rem' }}>EDUCATION</h3>
              <TimelineItem period="OCT 2024 – PRESENT" place="GIET, Technocrats" detail="MCA · Current SGPA: 8.67" active={true}/>
              <TimelineItem period="PASSED 2024" place="Mahima Mahavidyalaya, Joranda" detail="B.Sc Mathematics · Utkal University" active={false}/>
            </div>
            <div>
              <h3 style={{ fontFamily:"'Cinzel Decorative',cursive", fontSize:'.65rem', letterSpacing:'.25em', color:'var(--ink)', borderBottom:'1.5px solid var(--ink)', paddingBottom:8, marginBottom:'1rem' }}>INTERNSHIP</h3>
              <TimelineItem period="2 MONTHS" place="CTTC, Bhubaneswar" detail="Data Analyst Intern — Analyzed real-world datasets, identified trends & patterns, translated raw data into actionable reports." active={true}/>
              <TimelineItem period="2 MONTHS" place="ThreatSys" detail="Cybersecurity Intern — Gained foundational knowledge in cybersecurity principles & practices." active={false}/>
            </div>
          </div>

          <div style={{ display:'flex', border:'2px solid var(--ink)', overflow:'hidden' }}>
            {[{v:'OS-CIT',l:'Certified · Odisha'},{v:'8.67',l:'Current SGPA',dark:true},{v:'Co-ord',l:'GIET Hackfest 2025'}].map((s,i)=>(
              <div key={i} style={{ flex:1, padding:'1.1rem', textAlign:'center', borderRight:i<2?'2px solid var(--ink)':'none', background:s.dark?'var(--ink)':'transparent' }}>
                <div style={{ fontFamily:"'Cinzel Decorative',cursive", fontSize:'.95rem', fontWeight:700, color:s.dark?'#fff':'var(--blood)', marginBottom:4 }}>{s.v}</div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'.72rem', color:s.dark?'rgba(255,255,255,.65)':'var(--ash)', letterSpacing:'.1em', textTransform:'uppercase' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;