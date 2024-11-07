import React from 'react';
import '../styles/Skills.css';
import python from '../assets/python.png';
import java from '../assets/java.png';
import js from '../assets/js.png';
import ai from '../assets/ai.png';
import database from '../assets/database.png';
import django from '../assets/django.png';
import reactpng from '../assets/reactpng.png';
import numpy from '../assets/numpy.png';
import pandas from '../assets/pandas.png';
import git from '../assets/git.png';

const skills = [
  {id: 1, name: 'Python', logo: python},
  {id: 2, name: 'Java', logo: java},
  {id: 3, name: 'Javascript', logo: js},
  {id: 4, name: 'AI', logo: ai},
  {id: 5, name: 'Database', logo: database},
  {id: 6, name: 'Django', logo: django},
  {id: 7, name: 'ReactJS', logo: reactpng},
  {id: 8, name: 'Git', logo: git},
  {id: 9, name: 'Pandas', logo: pandas},
  {id: 10, name: 'Numpy', logo: numpy},
];

const Skills = () => {
  return (
    <div className="skills-grid">
      {skills.map (skill => (
        <div key={skill.id} className="skill-item">
          <img src={skill.logo} alt={skill.name} className="skill-logo" />
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
