import { useRef } from 'react';
import './index.css';
import Navbar      from './Navbar';
import Home        from './Home';
import About       from './About';
import Projects    from './Projects';
import Skills      from './Skills';
import Experience  from './Experience';
import Contact     from './Contact';

const App = () => {
  const homeRef       = useRef(null);
  const aboutRef      = useRef(null);
  const projectsRef   = useRef(null);
  const skillsRef     = useRef(null);
  const experienceRef = useRef(null);
  const contactRef    = useRef(null);

  const scrollTo = ref =>
    ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const refs = {
    homeRef, aboutRef, projectsRef,
    skillsRef, experienceRef, contactRef,
  };

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar scrollTo={scrollTo} refs={refs} />
      <section ref={homeRef}>       <Home       scrollTo={scrollTo} refs={refs} /></section>
      <section ref={aboutRef}>      <About /></section>
      <section ref={projectsRef}>   <Projects /></section>
      <section ref={skillsRef}>     <Skills /></section>
      <section ref={experienceRef}> <Experience /></section>
      <section ref={contactRef}>    <Contact /></section>
    </div>
  );
};

export default App;