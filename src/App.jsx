import { useRef } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import HandsOn from './components/HandsOn';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => {
  const refs = {
    homeRef: useRef(null), aboutRef: useRef(null), projectsRef: useRef(null),
    labsRef: useRef(null), skillsRef: useRef(null), experienceRef: useRef(null), contactRef: useRef(null),
  };
  const scrollTo = (ref) => ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <main style={{ background: 'var(--bg)' }}>
      <Navbar scrollTo={scrollTo} refs={refs} />
      <section ref={refs.homeRef}><Home scrollTo={scrollTo} refs={refs} /></section>
      <section ref={refs.aboutRef} id="about"><About /></section>
      <section ref={refs.projectsRef} id="projects"><Projects /></section>
      <section ref={refs.labsRef} id="labs"><HandsOn /></section>
      <section ref={refs.skillsRef} id="skills"><Skills /></section>
      <section ref={refs.experienceRef} id="experience"><Experience /></section>
      <section ref={refs.contactRef} id="contact"><Contact /></section>
    </main>
  );
};
export default App;