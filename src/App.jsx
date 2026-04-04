import { useRef, useState, useEffect } from 'react';
import './index.css';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const homeRef     = useRef(null);
  const aboutRef    = useRef(null);
  const skillsRef   = useRef(null);
  const projectsRef = useRef(null);
  const contactRef  = useRef(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [ringX, setRingX] = useState(0);
  const [ringY, setRingY] = useState(0);

  useEffect(() => {
    const move = e => {
      setCurX(e.clientX); setCurY(e.clientY);
      setTimeout(() => { setRingX(e.clientX); setRingY(e.clientY); }, 80);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const scrollTo = ref => ref?.current?.scrollIntoView({ behavior:'smooth', block:'start' });
  const refs = { homeRef, aboutRef, skillsRef, projectsRef, contactRef };

  return (
    <>
      {/* Custom cursor */}
      <div style={{ position:'fixed', left:curX, top:curY, width:8, height:8, background:'var(--blood)', borderRadius:'50%', pointerEvents:'none', zIndex:99999, transform:'translate(-50%,-50%)', transition:'transform .1s' }} />
      <div style={{ position:'fixed', left:ringX, top:ringY, width:30, height:30, border:'1.5px solid var(--ink)', borderRadius:'50%', pointerEvents:'none', zIndex:99998, transform:'translate(-50%,-50%)', transition:'all .12s ease' }} />

      <Navbar scrollTo={scrollTo} refs={refs} />
      <section ref={homeRef}><Home scrollTo={scrollTo} refs={refs} /></section>
      <section ref={aboutRef}><About /></section>
      <section ref={skillsRef}><Skills /></section>
      <section ref={projectsRef}><Projects /></section>
      <section ref={contactRef}><Contact /></section>
    </>
  );
};

export default App;