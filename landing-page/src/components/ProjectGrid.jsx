import React from 'react';
import '../styles/ProjectGrid.css';
import img1 from '../assets/p7.jpeg';
import img2 from '../assets/p8.jpeg';
import img3 from '../assets/p3.avif';
import img4 from '../assets/p4.avif';


const projects = [
  {
    id: 1,
    title: 'First app',
    description: 'This is the description for project one.',
    image: img1,
    link: '#',
  },
  {
    id: 2,
    title: 'Calculator',
    description: 'This is the description for project two.',
    image: img2,
    link: '#',
  },
  {
    id: 3,
    title: 'Game',
    description: 'This is the description for project three.',
    image: img3,
    link: '#',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'This is the description for project four.',
    image: img4,
    link: '#',
  },
];

const ProjectGrid = () => {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`project-item ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
        >
          <div className="project-content">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-text">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} className="visit-button">Visit</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
