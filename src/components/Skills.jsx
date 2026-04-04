import { useEffect, useRef, useState } from 'react';
import fieldImg from '../assets/samurai-field.jpeg';

const domains = [
  { cat:'言語',      label:'LANGUAGES',     icon:'⚔', front_desc:'Core programming languages used across projects and internships.', skills:['Java','Python','JavaScript'], tools:['OOP','Algorithms','Scripting'], level:'APPRENTICE → ADEPT' },
  { cat:'前端',      label:'FRONTEND',      icon:'🎌', front_desc:'Crafting responsive, accessible, and visually compelling interfaces.', skills:['React.js','HTML5','CSS3','Tailwind CSS'], tools:['Responsive Design','Component Architecture','Animations'], level:'ADEPT → SKILLED' },
  { cat:'後端',      label:'BACKEND',       icon:'⛩', front_desc:'Server-side development with the MERN stack — actively learning.', skills:['Node.js','Express.js','REST APIs'], tools:['Routing','Middleware','JWT Auth'], level:'LEARNING → ADEPT' },
  { cat:'データ',    label:'DATA ANALYTICS',icon:'📊', front_desc:'Turning raw datasets into actionable insights through analysis.', skills:['Pandas','NumPy','Power BI','Excel','Matplotlib'], tools:['EDA','Trend Analysis','KPI Dashboards'], level:'ADEPT → SKILLED' },
  { cat:'セキュリティ',label:'CYBERSECURITY',icon:'🛡', front_desc:'Foundation built during internship at ThreatSys. Continuously growing.', skills:['Security Principles','Threat Analysis','CIA Triad'], tools:['Risk Awareness','Network Basics'], level:'APPRENTICE' },
  { cat:'データベース',label:'DATABASE',     icon:'💾', front_desc:'Structuring and querying data for web applications and analytics.', skills:['MongoDB','SQL','NoSQL Basics'], tools:['CRUD Operations','Aggregation','Schemas'], level:'APPRENTICE → ADEPT' },
];

const SkillCard = ({ domain, delay, vis }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="skill-card" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
      style={{ opacity:vis?1:0, transform:vis?'none':'translateY(30px)', transition:`opacity .6s ease ${delay}s, transform .6s ease ${delay}s` }}>
      <div style={{ position:'absolute', inset:5, border:'1px solid rgba(12,12,12,.1)', pointerEvents:'none', zIndex:2, transition:'border-color .4s' }} className={hovered?'dark-inner':''}/>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'1.2rem' }}>
        <div>
          <div className="sk-cat" style={{ fontFamily:"'Noto Serif JP',serif", fontSize:'1.3rem', color:'var(--blood)', fontWeight:700, lineHeight:1, marginBottom:4, transition:'color .4s' }}>{domain.cat}</div>
          <div className="sk-label" style={{ fontFamily:"'Cinzel Decorative',cursive", fontSize:'.62rem', letterSpacing:'.25em', color:'var(--ink)', fontWeight:700, transition:'color .4s' }}>{domain.label}</div>
        </div>
        <span style={{ fontSize:'1.4rem', opacity:.65 }}>{domain.icon}</span>
      </div>
      <div className="sk-div" style={{ height:1, background:'rgba(12,12,12,.1)', marginBottom:'1.3rem', transition:'background .4s' }}/>
      <p className="sk-item" style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'.9rem', color:hovered?'rgba(255,255,255,.75)':'var(--ink-light)', fontStyle:'italic', lineHeight:1.7, marginBottom:'1.2rem', transition:'color .4s', minHeight:52 }}>
        {domain.front_desc}
      </p>
      <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:'1.2rem' }}>
        {domain.skills.map(s=>(
          <span key={s} className="sk-tag" style={{ border:'1px solid rgba(12,12,12,.2)', padding:'.25rem .7rem', fontFamily:"'Cormorant Garamond',serif", fontSize:'.82rem', color:'var(--ink)', letterSpacing:'.06em', transition:'all .4s' }}>{s}</span>
        ))}
      </div>
      <div style={{ display:'flex', flexWrap:'wrap', gap:4, marginBottom:'1.2rem', opacity:.7 }}>
        {domain.tools.map(t=>(
          <span key={t} className="sk-item" style={{ fontFamily:"'Noto Serif JP',serif", fontSize:'.55rem', color:hovered?'rgba(255,255,255,.5)':'var(--ash)', letterSpacing:'.12em', transition:'color .4s' }}>· {t}</span>
        ))}
      </div>
      <div style={{ borderTop:`1px solid ${hovered?'rgba(255,255,255,.15)':'rgba(12,12,12,.08)'}`, paddingTop:'.75rem', transition:'border-color .4s' }}>
        <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:'.58rem', color:hovered?'rgba(255,100,100,.8)':'var(--blood)', letterSpacing:'.2em', fontWeight:500, transition:'color .4s' }}>
          MASTERY: {domain.level}
        </span>
      </div>
    </div>
  );
};

const Skills = () => {
  const [vis, setVis] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold:.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ background:'var(--bg)', borderTop:'4px solid var(--ink)' }}>

      <div className="chapter-bar">
        <span style={{ fontFamily:"'Noto Serif JP',serif", color:'rgba(255,255,255,.7)', fontSize:'.63rem', letterSpacing:'.4em' }}>第三章 · CHAPTER III</span>
        <span style={{ fontFamily:"'Cinzel Decorative',cursive", color:'#fff', fontSize:'.72rem', letterSpacing:'.3em', fontWeight:700 }}>THE ARSENAL</span>
        <span style={{ fontFamily:"'Noto Serif JP',serif", color:'var(--blood)', fontSize:'.62rem', letterSpacing:'.3em' }}>技術</span>
      </div>

      {/* ── Cinematic full-width banner — samurai-field FULLY VISIBLE ── */}
      <div style={{ position:'relative', height:320, overflow:'hidden', borderBottom:'4px solid var(--ink)' }}>

        {/* Image: full cover, good brightness */}
        <img src={fieldImg} alt="Samurai in field"
          style={{
            position:'absolute', inset:0,
            width:'100%', height:'100%',
            objectFit:'cover', objectPosition:'center 60%',
            display:'block',
            filter:'grayscale(15%) brightness(.78) contrast(1.15)',
            zIndex:1,
          }}
        />

        {/* Only darken top and bottom edges — center stays clear */}
        <div style={{
          position:'absolute', inset:0, zIndex:2,
          background:'linear-gradient(to bottom, rgba(0,0,0,.35) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,.4) 100%)',
        }}/>

        {/* Centered text overlay */}
        <div style={{
          position:'absolute', inset:0, zIndex:3,
          display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:10,
        }}>
          <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:'3rem', color:'#fff', fontWeight:900, letterSpacing:'.2em', textShadow:'0 2px 20px rgba(0,0,0,.8)' }}>技術</div>
          <div style={{ fontFamily:"'Cinzel Decorative',cursive", fontSize:'clamp(1.8rem,4vw,3.4rem)', color:'#fff', fontWeight:900, letterSpacing:'.25em', textShadow:'0 2px 20px rgba(0,0,0,.8)' }}>THE ARSENAL</div>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'1.05rem', fontStyle:'italic', color:'rgba(255,255,255,.85)', letterSpacing:'.18em', textShadow:'0 1px 8px rgba(0,0,0,.7)' }}>
            Hover each domain to reveal the depths
          </p>
        </div>
      </div>

      {/* ── Skill cards ── */}
      <div style={{ maxWidth:1350, margin:'0 auto', padding:'5rem 3rem' }}>
        <div className="stag">
          <span className="stag-num">03</span>
          <div className="stag-dash"/>
          <span className="stag-title">SKILL DOMAINS</span>
          <div className="stag-line"/>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'2.2rem' }} className="grid-m1">
          {domains.map((d,i) => <SkillCard key={d.label} domain={d} delay={i*.1} vis={vis}/>)}
        </div>

        <div style={{ marginTop:'3.5rem', textAlign:'center' }}>
          <div style={{ fontFamily:"'Cinzel Decorative',cursive", fontSize:'.62rem', letterSpacing:'.3em', color:'var(--ash)', marginBottom:'1.2rem' }}>ADDITIONAL TOOLS & TRAITS</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'.7rem', justifyContent:'center' }}>
            {['Critical Thinking','Problem Solving','Growth Mindset','Git','REST APIs','Agile Learning','VS Code','Figma Basics','Postman'].map(tag=>(
              <span key={tag}
                style={{ border:'1px solid var(--ink)', padding:'.4rem 1rem', fontFamily:"'Cormorant Garamond',serif", fontSize:'.88rem', color:'var(--ink)', letterSpacing:'.08em', cursor:'default', transition:'all .25s ease' }}
                onMouseEnter={e=>{e.currentTarget.style.background='var(--ink)';e.currentTarget.style.color='var(--bg)';}}
                onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color='var(--ink)';}}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`.skill-card:hover .dark-inner{border-color:rgba(255,255,255,.15)!important}`}</style>
    </div>
  );
};

export default Skills;