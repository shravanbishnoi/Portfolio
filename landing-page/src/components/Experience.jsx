import React from 'react';
import '../styles/Experience.css';
import internship1 from '../assets/internship1.jpeg';
import internship2 from '../assets/internship22.jpeg';

const experiences = [
  {
    id: 1,
    title: 'QAE Intern at Glean',
    description: 'At Glean, you worked on API and UI automation testing, focusing on enhancing feature reliability and testing efficiency. You developed automated test cases, optimizing scripts for faster and more accurate testing. Collaborating with developers and product managers, you ensured feature updates met specifications and were free from critical bugs, strengthening your skills in automation and quality assurance.',
    image: internship1,
    link: internship1,
  },
  {
    id: 2,
    title: 'Data Engineering Intern at Trademo',
    description: 'At Trademo, you focused on data extraction, cleaning, and processing, using Selenium and BeautifulSoup for web scraping, and Airflow for pipeline automation. You also leveraged Tabula for processing data from PDFs. This role involved optimizing data workflows and maintaining data quality, contributing to a more reliable and efficient data pipeline.',
    image: internship2,
    link: internship2,
  },
];

const Experience = () => {
  const handleClick = pdf => {
    window.open (pdf, '_blank');
  };

  return (
    <div className="experience-grid">
      {experiences.map ((experience, index) => (
        <div
          key={experience.id}
          className={`experience-item ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
        >
          <div className="experience-content">
            <img
              src={experience.image}
              alt={experience.title}
              className="experience-image"
            />
            <div className="experience-text">
              <h2>{experience.title}</h2>
              <p>{experience.description}</p>
              <button
                onClick={() => handleClick (experience.link)}
                className="visit-button"
              >
                Certificate
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
