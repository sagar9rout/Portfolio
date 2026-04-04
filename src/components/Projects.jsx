import { useEffect, useRef, useState } from 'react';
import swordsImg from '../assets/swords.jpeg';

const GH = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.57 0-.28-.01-1.23-.01-2.23-3.02.55-3.8-.73-4.04-1.41-.14-.34-.72-1.41-1.23-1.7-.42-.22-1.02-.77-.01-.79.94-.01 1.62.87 1.84 1.23 1.08 1.82 2.81 1.3 3.5.99.1-.78.42-1.3.76-1.6-2.67-.3-5.46-1.34-5.46-5.92 0-1.31.47-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013 0c2.29-1.56 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.9 1.23 3.22 0 4.6-2.8 5.62-5.47 5.92.44.38.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.3 0 .32.22.69.82.57A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
const Ext = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const projects = [
  { no:'P · 001', cat:'求人', title:'JOB PORTAL', subtitle:'MERN Stack Application', desc:'Full-stack job portal connecting recruiters and job seekers. Features real-time listings, user authentication with JWT, profile management, and application tracking. Built from scratch as a complete product.', tags:['MongoDB','Express.js','React','Node.js','JWT','REST API'], github:'#', live:'#', featured:true },
  { no:'P · 002', cat:'分析', title:'SALES DASHBOARD', subtitle:'Flipkart Mobile Analysis', desc:'Interactive data dashboard built with Python. Visualizes KPIs including revenue, profit, and customer region using Matplotlib & Pandas. Translates raw datasets into actionable business insights with clean chart layouts.', tags:['Python','Pandas','Matplotlib','NumPy','Data Analysis'], github:'#', live:null, featured:false },
  { no:'P · 003', cat:'映画', title:'IMDB TOP 250', subtitle:'Movies Analysis', desc:'Deep-dive exploratory data analysis on the IMDB Top 250 dataset. Identified hidden correlations between genre, director, release year, and ratings using Pandas. Delivered visual storytelling through data.', tags:['Python','Pandas','NumPy','EDA','Matplotlib'], github:'#', live:null, featured:false },
  { no:'P · 004', cat:'行動', title:'OTT VIEWER DASHBOARD', subtitle:'Behavior Analytics', desc:'Behavior analytics dashboard revealing patterns in OTT streaming — including binge-watching habits, preferred genres, and peak viewing hours. Presented insights in a clean, interactive dashboard format.', tags:['Python','Pandas','Power BI','Excel','Analytics'], github:'#', live:null, featured:false },
];

const FeaturedCard = ({ proj, vis, delay }) => {
  const [hov, setHov] = useState(false);
  return (
    <div className="proj-card" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', marginBottom:'2.5rem', opacity:vis?1:0, transform:vis?'none':'translateY(30px)', transition:`all .7s ease ${delay}s` }}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>
      <div style={{ background:'var(--ink)', padding:'3rem', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
        <div>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1.5rem' }}>
            <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:'.62rem', color:'var(--blood)', letterSpacing:'.3em' }}>{proj.no}</span>
            <span style={{ background:'var(--blood)', color:'#fff', padding:'.28rem .75rem', fontFamily:"'Cinzel Decorative',cursive", fontSize:'.52rem', letterSpacing:'.18em' }}>FEATURED</span>
          </div>
          <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:'2.2rem', color:'rgba(255,255,255,.15)', marginBottom:'.5rem', letterSpacing:'.1em' }}>{proj.cat}</div>
          <h3 style={{ fontFamily:"'Cinzel Decorative',cursive", fontSize:'clamp(1.2rem,2vw,1.9rem)', color:'#fff', fontWeight:900, lineHeight:1.1, marginBottom:'.5rem', letterSpacing:'.04em' }}>{proj.title}</h3>
          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'.88rem', color:'var(--ash)', fontStyle:'italic', letterSpacing:'.12em', marginBottom:'1.5rem' }}>{proj.subtitle}</div>
        </div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:'.45rem' }}>
          {proj.tags.map(t=><span key={t} style={{ border:'1px solid rgba(255,255,255,.25)', padding:'.25rem .7rem', fontFamily:"'Cormorant Garamond',serif", fontSize:'.75rem', color:'rgba(255,255,255,.7)', letterSpacing:'.08em' }}>{t}</span>)}
        </div>
      </div>
      <div style={{ background:'var(--bg)', padding:'3rem', borderLeft:'2px solid var(--ink)', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
        <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'1.05rem', color:'var(--ink-mid)', lineHeight:1.9, flex:1 }}>{proj.desc}</p>
        <div style={{ display:'flex', gap:'1rem', marginTop:'2.5rem', flexWrap:'wrap' }}>
          <a href={proj.github} target="_blank" rel="noreferrer" className="btn" style={{ textDecoration:'none' }}><GH/><span>REPOSITORY</span></a>
          {proj.live && <a href={proj.live} target="_blank" rel="noreferrer" className="btn btn-red" style={{ textDecoration:'none' }}><Ext/><span>LIVE DEMO</span></a>}
        </div>
      </div>
    </div>
  );
};

const RegCard = ({ proj, vis, delay }) => {
  const [hov, setHov] = useState(false);
  return (
    <div className="proj-card" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', marginBottom:'2rem', opacity:vis?1:0, transform:vis?'none':'translateY(25px)', transition:`all .65s ease ${delay}s` }}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>
      <div style={{ background:hov?'#1A1A1A':'var(--ink)', padding:'2.5rem', transition:'background .3s', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
        <div>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1.2rem' }}>
            <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:'.6rem', color:'var(--blood)', letterSpacing:'.25em' }}>{proj.no}</span>
          </div>
          <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:'1.8rem', color:'rgba(255,255,255,.12)', marginBottom:'.4rem' }}>{proj.cat}</div>
          <h3 style={{ fontFamily:"'Cinzel Decorative',cursive", fontSize:'1rem', color:'#fff', fontWeight:700, lineHeight:1.2, marginBottom:'.4rem', letterSpacing:'.04em' }}>{proj.title}</h3>
          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'.8rem', color:'var(--blood)', fontStyle:'italic', letterSpacing:'.1em' }}>{proj.subtitle}</div>
        </div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:'.4rem', marginTop:'1.2rem' }}>
          {proj.tags.map(t=><span key={t} style={{ border:'1px solid rgba(255,255,255,.2)', padding:'.2rem .55rem', fontFamily:"'Cormorant Garamond',serif", fontSize:'.72rem', color:'rgba(255,255,255,.65)', letterSpacing:'.06em' }}>{t}</span>)}
        </div>
      </div>
      <div style={{ background:'var(--bg)', padding:'2.5rem', borderLeft:'2px solid var(--ink)', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
        <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'.98rem', color:'var(--ink-mid)', lineHeight:1.85, flex:1 }}>{proj.desc}</p>
        <a href={proj.github} target="_blank" rel="noreferrer"
          style={{ display:'inline-flex', alignItems:'center', gap:'.45rem', fontFamily:"'Cinzel Decorative',cursive", fontSize:'.62rem', letterSpacing:'.18em', color:'var(--ink)', textDecoration:'none', fontWeight:700, borderBottom:'1.5px solid var(--ink)', paddingBottom:2, marginTop:'1.8rem', alignSelf:'flex-start', transition:'all .25s' }}
          onMouseEnter={e=>{e.currentTarget.style.color='var(--blood)';e.currentTarget.style.borderColor='var(--blood)';}}
          onMouseLeave={e=>{e.currentTarget.style.color='var(--ink)';e.currentTarget.style.borderColor='var(--ink)';}}>
          <GH/> VIEW REPOSITORY
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const [vis, setVis] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold:.06 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ background:'var(--bg)', borderTop:'4px solid var(--ink)' }}>

      <div className="chapter-bar">
        <span style={{ fontFamily:"'Noto Serif JP',serif", color:'rgba(255,255,255,.7)', fontSize:'.63rem', letterSpacing:'.4em' }}>第四章 · CHAPTER IV</span>
        <span style={{ fontFamily:"'Cinzel Decorative',cursive", color:'#fff', fontSize:'.72rem', letterSpacing:'.3em', fontWeight:700 }}>BATTLE RECORDS</span>
        <span style={{ fontFamily:"'Noto Serif JP',serif", color:'var(--blood)', fontSize:'.62rem', letterSpacing:'.3em' }}>業績</span>
      </div>

      {/* ── Swords banner — FULLY VISIBLE, dramatic ── */}
      <div style={{ position:'relative', height:280, overflow:'hidden', borderBottom:'4px solid var(--ink)' }}>

        {/* Image: full cover, darker for drama */}
        <img src={swordsImg} alt="Battle scene"
          style={{
            position:'absolute', inset:0,
            width:'100%', height:'100%',
            objectFit:'cover', objectPosition:'center 65%',
            display:'block',
            filter:'grayscale(20%) brightness(.65) contrast(1.2)',
            zIndex:1,
          }}
        />

        {/* Only very bottom/top vignette */}
        <div style={{
          position:'absolute', inset:0, zIndex:2,
          background:'linear-gradient(to bottom, rgba(0,0,0,.3) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 65%, rgba(0,0,0,.45) 100%)',
        }}/>

        {/* Text on image */}
        <div style={{
          position:'absolute', inset:0, zIndex:3,
          display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:8,
        }}>
          <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:'.68rem', color:'rgba(255,255,255,.9)', letterSpacing:'.5em', textShadow:'0 2px 10px rgba(0,0,0,.9)' }}>業績 · ACHIEVEMENTS</div>
          <div style={{ fontFamily:"'Cinzel Decorative',cursive", fontSize:'clamp(1.8rem,3.5vw,3rem)', color:'#fff', fontWeight:900, letterSpacing:'.2em', textShadow:'0 2px 20px rgba(0,0,0,.9)' }}>BATTLE RECORDS</div>
          {/* Blood underline */}
          <div style={{ width:80, height:2, background:'var(--blood)', marginTop:4 }}/>
        </div>
      </div>

      <div style={{ maxWidth:1350, margin:'0 auto', padding:'5rem 3rem' }}>
        <div className="stag">
          <span className="stag-num">04</span>
          <div className="stag-dash"/>
          <span className="stag-title">PROJECTS</span>
          <div className="stag-line"/>
        </div>

        {projects.filter(p=>p.featured).map((p,i)=><FeaturedCard key={p.title} proj={p} vis={vis} delay={i*.1}/>)}
        {projects.filter(p=>!p.featured).map((p,i)=><RegCard key={p.title} proj={p} vis={vis} delay={.3+i*.12}/>)}

        <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'.82rem', color:'var(--ash)', fontStyle:'italic', textAlign:'center', marginTop:'2.5rem', letterSpacing:'.1em' }}>
          Replace each <code style={{ background:'rgba(0,0,0,.06)', padding:'0 4px', borderRadius:2 }}>github: '#'</code> with your actual repository URLs.
        </p>
      </div>
    </div>
  );
};

export default Projects;