import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './host/header/header'; // Adjust the path if necessary
import './host/header/header.css'; // Import the CSS file for styling

// import HomePage from '.host/pages/home/HomePage'; // Adjust the path if necessary
// import AboutPage from '.host/pages/about/AboutPage'; // Adjust the path if necessary
// import SkillsPage from '.host/pages/skills/SkillsPage'; // Adjust the path if necessary
// import ProjectsPage from '.host/pages/projects/ProjectsPage'; // Adjust the path if necessary
// import ContactPage from '.host/pages/contact/ContactPage'; // Adjust the path if necessary
import NotFoundPage from './host/pages/notfoundpage/NotFoundPage'; // Adjust the path if necessary

function App() {
  const buttons = [
    { text: 'HOME', to: '/' },
    { text: 'ABOUT', to: '/about' },
    { text: 'SKILLS', to: '/skills' },
    { text: 'PROJECTS', to: '/projects' },
    { text: 'CONTACT', to: '/contact' },
  ];

  return (
    <Router>
      <div className="App">
        <Header buttons={buttons} />
        <Routes>
          {/* <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/skills" component={SkillsPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/contact" component={ContactPage} /> */}
          <Route component={NotFoundPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
