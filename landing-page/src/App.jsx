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
      <NavbarComponent text="SHRAVAN"
        scrollToProjects={() => scrollToSection(projectsRef)} 
        scrollToSkills={() => scrollToSection(skillsRef)} 
        scrollToContact={() => scrollToSection(contactRef)} 
        scrollToExperience={() => scrollToSection(experienceRef)} 
      />

      <div>
        <>
          <Header text="CREATIVE UI/UX DESIGNER & WEB DEVELOPER" /> 
          <ProfileSection  text="I’m an India-based web designer and developer focused on creating 
            clean & user-friendly experiences. I love to design beautiful and 
            functional websites for clients and businesses. This additional text 
            will be visible once you click 'Read More'. Here you can add more 
            details about your skills, experiences, or other relevant information 
            that you want to share with your audience." 
            scrollToContact={() => scrollToSection(contactRef)} /> 
        </>
      </div>
      {/* <div ref={experienceRef}>
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
      </div> */}
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
      
      {/* <div ref={contactRef}>
        <>
          <Header text="CONTACT ME" />
          <Contact />
        </>
      </div> */}
      <FAQs />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
