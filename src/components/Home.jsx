import { useEffect, useState } from 'react';
import samuraiImg   from '../assets/samurai-hero.jpeg';
import landscapeImg from '../assets/landscape-moon.jpeg';

/* ── Animated letter drop ── */
const AnimatedName = ({ text, color, delay = 0 }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);
  return (
    <span style={{ display:'block', perspective:600 }}>
      {text.split('').map((char, i) => (
        <span key={i} style={{
          display:'inline-block',
          fontFamily:"'Cinzel Decorative',cursive", fontWeight:900,
          fontSize:'clamp(2.8rem,5.5vw,5rem)',
          color: color || 'var(--ink)',
          letterSpacing:'-.01em', lineHeight:1.05,
          opacity:    visible ? 1 : 0,
          transform:  visible ? 'translateY(0) rotateX(0)' : 'translateY(-80px) rotateX(90deg)',
          filter:     visible ? 'blur(0)' : 'blur(8px)',
          transition:`opacity .6s ease ${delay+i*0.06}s,
                      transform .6s cubic-bezier(.2,.8,.3,1) ${delay+i*0.06}s,
                      filter .4s ease ${delay+i*0.06}s`,
        }}>{char}</span>
      ))}
    </span>
  );
};

/* ── Typewriter ── */
const roles = ['MERN Stack Developer','Data Analytics Enthusiast','Cybersecurity Learner','Frontend Craftsman'];
const Typewriter = () => {
  const [idx,setIdx]=useState(0); const [txt,setTxt]=useState(''); const [del,setDel]=useState(false);
  useEffect(()=>{
    const full=roles[idx];
    if(!del&&txt.length<full.length){const t=setTimeout(()=>setTxt(full.slice(0,txt.length+1)),65);return()=>clearTimeout(t);}
    if(!del&&txt.length===full.length){const t=setTimeout(()=>setDel(true),2000);return()=>clearTimeout(t);}
    if(del&&txt.length>0){const t=setTimeout(()=>setTxt(full.slice(0,txt.length-1)),35);return()=>clearTimeout(t);}
    if(del&&txt.length===0){setDel(false);setIdx(p=>(p+1)%roles.length);}
  },[txt,del,idx]);
  return (
    <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(1.1rem,2vw,1.4rem)',fontStyle:'italic',color:'var(--ink-mid)',letterSpacing:'.05em'}}>
      {txt}<span style={{animation:'blink .9s infinite',color:'var(--blood)'}}>|</span>
    </span>
  );
};

/* ── Ink burst rays (left-panel background) ── */
const InkBurst = () => (
  <svg viewBox="0 0 900 900" style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:.06,pointerEvents:'none',zIndex:1}}>
    {Array.from({length:36},(_,i)=>{
      const r=((i/36)*360*Math.PI)/180;
      return <line key={i} x1={450} y1={450} x2={450+Math.cos(r)*620} y2={450+Math.sin(r)*620} stroke="#0C0C0C" strokeWidth={i%3===0?2:1}/>;
    })}
    <circle cx={450} cy={450} r={80}  fill="none" stroke="#0C0C0C" strokeWidth={1.5}/>
    <circle cx={450} cy={450} r={180} fill="none" stroke="#0C0C0C" strokeWidth={.8}/>
    <circle cx={450} cy={450} r={300} fill="none" stroke="#0C0C0C" strokeWidth={.5}/>
  </svg>
);

const Splatter = ({style}) => (
  <svg viewBox="0 0 160 160" style={{position:'absolute',pointerEvents:'none',...style}}>
    <circle cx="80" cy="80" r="9"   fill="var(--blood)" opacity=".95"/>
    <circle cx="110" cy="58" r="4"  fill="var(--blood)" opacity=".7"/>
    <circle cx="55"  cy="95" r="5"  fill="var(--blood)" opacity=".6"/>
    <circle cx="130" cy="90" r="3"  fill="var(--blood)" opacity=".55"/>
    <circle cx="45"  cy="62" r="6"  fill="var(--blood)" opacity=".4"/>
    <ellipse cx="80" cy="80" rx="28" ry="7" fill="var(--blood)" opacity=".12" transform="rotate(-35 80 80)"/>
  </svg>
);

const Home = ({ scrollTo, refs }) => (
  /* 
   * KEY FIX: No mounted/opacity-0 state on the outer container or right panel.
   * Everything is visible immediately. Animations use CSS keyframes with
   * animation-fill-mode: both so elements start hidden without affecting layout.
   */
  <div style={{
    minHeight:'100vh', background:'var(--bg)',
    position:'relative', overflow:'hidden',
    display:'flex', alignItems:'stretch',
  }}>
    <InkBurst/>
    {/* Red accent below navbar */}
    <div style={{position:'absolute',top:72,left:0,right:0,height:3,background:'var(--blood)',zIndex:5}}/>

    {/* ══ LEFT PANEL ══ */}
    <div style={{
      flex:'0 0 52%', display:'flex', flexDirection:'column', justifyContent:'center',
      padding:'9rem 3.5rem 5rem 6rem',
      position:'relative', zIndex:10,
      animation:'slideInLeft .9s ease both',
    }}>
      {/* Vertical JP text */}
      <div className="jp-v hide-m" style={{
        position:'absolute', left:'1.6rem', top:'50%', transform:'translateY(-50%)',
        fontSize:'.68rem', color:'var(--ash)', letterSpacing:'.45em', fontWeight:300,
      }}>武士道　刀　剣士　忍者</div>

      {/* Kana */}
      <div style={{
        fontFamily:"'Noto Serif JP',serif", fontSize:'.75rem',
        letterSpacing:'.5em', color:'var(--blood)', marginBottom:'1rem',
        animation:'fadeUp .7s ease .2s both',
      }}>スプリット・サガル・ラウト</div>

      {/* Animated name letters */}
      <div style={{marginBottom:'.6rem',lineHeight:1.05}}>
        <AnimatedName text="SUPRIT" delay={.3}/>
        <AnimatedName text="SAGAR"  color="var(--blood)" delay={.55}/>
        <AnimatedName text="ROUT"   delay={.80}/>
      </div>

      {/* Brush stroke SVG */}
      <svg viewBox="0 0 320 16" style={{display:'block',width:'min(320px,80%)',height:16,marginBottom:'1.5rem',opacity:.7}}>
        <path d="M0,8 C60,2 130,14 200,8 C260,3 295,12 320,8"
          stroke="var(--blood)" strokeWidth="2.5" fill="none" strokeLinecap="round"
          style={{strokeDasharray:400,strokeDashoffset:400,animation:'drawStroke 1.2s ease 1.2s forwards'}}/>
      </svg>

      {/* Typewriter */}
      <div style={{height:36,marginBottom:'.8rem',display:'flex',alignItems:'center'}}>
        <Typewriter/>
      </div>

      {/* Subtitle */}
      <p style={{
        fontFamily:"'Cormorant Garamond',serif", fontSize:'1.05rem',
        color:'var(--ink-light)', letterSpacing:'.12em', lineHeight:2,
        maxWidth:400, marginBottom:'2.8rem',
        animation:'fadeUp .8s ease 1.4s both',
      }}>
        MCA Graduate · Dhenkanal, Odisha<br/>
        <em>Forging code with the discipline of a craftsman.</em>
      </p>

      {/* CTA buttons */}
      <div style={{display:'flex',gap:'1rem',flexWrap:'wrap',animation:'fadeUp .8s ease 1.6s both'}}>
        <button onClick={() => scrollTo(refs.projectsRef)} className="btn"><span>VIEW WORK</span></button>
        <a href="/assets/resume.pdf" download className="btn btn-red" style={{textDecoration:'none'}}><span>↓ RESUME</span></a>
      </div>

      {/* Social links */}
      <div style={{display:'flex',gap:'1.5rem',marginTop:'2.5rem',alignItems:'center',animation:'fadeUp .8s ease 1.8s both'}}>
        <span style={{fontFamily:"'Noto Serif JP',serif",fontSize:'.62rem',color:'var(--ash)',letterSpacing:'.2em'}}>FIND ME</span>
        <div style={{height:1,width:30,background:'var(--ash)'}}/>
        {[
          {label:'LINKEDIN',href:'https://www.linkedin.com/in/suprit-rout-4b8b44360/'},
          {label:'GITHUB',  href:'#'},
        ].map(s=>(
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
            fontFamily:"'Cinzel Decorative',cursive", fontSize:'.68rem', fontWeight:700,
            letterSpacing:'.18em', color:'var(--ink)', textDecoration:'none', transition:'color .2s',
          }}
          onMouseEnter={e=>e.currentTarget.style.color='var(--blood)'}
          onMouseLeave={e=>e.currentTarget.style.color='var(--ink)'}>
            {s.label}
          </a>
        ))}
      </div>
    </div>

    {/* ══ RIGHT PANEL ══
        ALWAYS VISIBLE — no opacity:0 state, no mounted flag.
        landscape-moon fills 100%, samurai layered on top with multiply blend.
    */}
    <div className="hide-m" style={{
      flex:'0 0 48%',
      position:'relative',
      borderLeft:'3px solid var(--ink)',
      overflow:'hidden',
      minHeight:'100vh',
      /* Fade in via CSS — does NOT affect layout, no layout shift */
      animation:'fadeIn 1.2s ease .3s both',
    }}>
      {/* 1. Landscape moon — completely fills panel */}
      <img src={landscapeImg} alt=""
        style={{
          position:'absolute', inset:0,
          width:'100%', height:'100%',
          objectFit:'cover', objectPosition:'center center',
          filter:'grayscale(10%) contrast(1.08) brightness(1.0)',
          zIndex:1, display:'block',
        }}
      />

      {/* 2. Thin left-blend only */}
      <div style={{
        position:'absolute', inset:0, zIndex:2,
        background:'linear-gradient(to right, rgba(255,255,255,.5) 0%, rgba(255,255,255,0) 18%)',
      }}/>

      {/* 3. Samurai on top — full cover, multiply blend composites over landscape */}
      <img src={samuraiImg} alt="Samurai warrior"
        style={{
          position:'absolute', inset:0,
          width:'100%', height:'100%',
          objectFit:'cover', objectPosition:'center 15%',
          filter:'grayscale(5%) contrast(1.12)',
          mixBlendMode:'multiply',
          zIndex:3, display:'block',
        }}
      />

      {/* Ink splatter */}
      <Splatter style={{top:'8%',left:'6%',width:100,height:100,opacity:.8,zIndex:4}}/>
      <Splatter style={{bottom:'22%',right:'4%',width:70,height:70,opacity:.45,zIndex:4}}/>

      {/* 侍 panel */}
      <div className="manga-panel" style={{
        position:'absolute', top:'5.5rem', left:'2rem', zIndex:5,
        padding:'1rem .9rem', background:'rgba(255,255,255,.88)', backdropFilter:'blur(6px)',
      }}>
        <div className="jp-v" style={{fontSize:'2.2rem',color:'var(--ink)',fontWeight:700,lineHeight:1.3}}>侍</div>
      </div>

      {/* Portfolio tag */}
      <div style={{
        position:'absolute', bottom:'2rem', left:'2rem', zIndex:5,
        fontFamily:"'Cinzel Decorative',cursive", fontSize:'.55rem',
        letterSpacing:'.25em', color:'#fff', opacity:.7,
        textShadow:'1px 1px 4px rgba(0,0,0,.8)',
      }}>NO.001 · PORTFOLIO</div>

      {/* Ripple ring */}
      <div style={{
        position:'absolute', bottom:'30%', right:'30%', zIndex:4,
        width:80, height:80, border:'1.5px solid var(--blood)', borderRadius:'50%',
        animation:'rippleOut 2.5s ease-in-out 2s infinite', pointerEvents:'none',
      }}/>
    </div>

    {/* Scroll cue — only on left half */}
    <div onClick={() => scrollTo(refs.aboutRef)} style={{
      position:'absolute', bottom:'2.2rem', left:'26%', transform:'translateX(-50%)',
      display:'flex', flexDirection:'column', alignItems:'center', gap:6,
      cursor:'pointer', zIndex:10,
      animation:'fadeUp 1s ease 2.6s both',
    }}>
      <span style={{fontFamily:"'Noto Serif JP',serif",fontSize:'.58rem',letterSpacing:'.35em',color:'var(--ash)'}}>SCROLL</span>
      <div style={{width:1,height:42,background:'linear-gradient(to bottom, var(--ink), transparent)',animation:'floatY 1.8s ease infinite'}}/>
    </div>

    {/* Bottom border */}
    <div style={{position:'absolute',bottom:0,left:0,right:0,height:4,background:'var(--ink)',zIndex:5}}/>

    <style>{`
      @keyframes slideInLeft { from{opacity:0;transform:translateX(-40px)} to{opacity:1;transform:translateX(0)} }
      @keyframes fadeIn      { from{opacity:0} to{opacity:1} }
      @keyframes fadeUp      { from{opacity:0;transform:translateY(25px)} to{opacity:1;transform:translateY(0)} }
      @keyframes drawStroke  { from{stroke-dashoffset:400} to{stroke-dashoffset:0} }
      @keyframes rippleOut   { 0%{opacity:.6;transform:scale(1)} 100%{opacity:0;transform:scale(3.2)} }
      @keyframes floatY      { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
      @keyframes blink       { 0%,100%{opacity:1} 50%{opacity:.3} }
    `}</style>
  </div>
);

export default Home;