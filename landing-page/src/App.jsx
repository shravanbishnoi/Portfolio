import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useRef } from 'react';
import NavbarComponent from './components/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ScrollToTop from './components/ScrollToTop';
import CarouselComponent from './components/SlidingComponent';
import FAQs from './components/FAQs';


function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className='App'>
      <NavbarComponent text="SHRAVAN RAM"
        scrollToProjects={() => scrollToSection(projectsRef)} 
        scrollToSkills={() => scrollToSection(skillsRef)} 
        scrollToContact={() => scrollToSection(contactRef)} 
        scrollToExperience={() => scrollToSection(experienceRef)} 
      />

      <div>
        <>
          <Header text="Step Right In – <br /> Where Code Meets Curiosity!" /> 
          <ProfileSection  text="Hi, I'm Shravan, a Computer Science student at Sitare University in my third year. With a strong foundation in Python, Java, and a solid grasp of Data Structures, Algorithms, and AI/ML, I'm passionate about solving problems and building innovative solutions. My coursework spans areas like Database Management, Information Retrieval, AI, Machine Learning, Deep Learning, and Web Development. Beyond academics, I enjoy spending time on the cricket field, which keeps me energized and motivated. Welcome to my portfolio – take a look around to learn more about my projects and experiences!" 
            scrollToContact={() => scrollToSection(contactRef)} /> 
        </>
      </div>
      <div ref={experienceRef}>
        <>
          <Header text="EXPERIENCE" />
          <Experience />
        </>
      </div>
      <div ref={skillsRef}>
        <>
          <Header text="SKILLS" />
          <Skills />
        </>
      </div>
      <div ref={projectsRef}>
        <>
          <Header text="PROJECTS" />
          <ProjectGrid />
        </>
      </div>
      <div>
        <>
        <CarouselComponent />
        </>
      </div>
      
      <div ref={contactRef}>
        <>
          <Header text="CONTACT ME" />
          <Contact />
        </>
      </div>
      {/* <FAQs /> */}
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
