import React, {useState} from 'react';
import '../styles/ProfileSection.css';
import mypic from '../assets/mypic.jpeg';

const ProfileSection = ({text, scrollToContact}) => {
  const [isExpanded, setIsExpanded] = useState (false);

  const toggleExpand = () => {
    setIsExpanded (!isExpanded);
  };

  return (
    <section className="profile-section">
      <div className="profile-container">
        <div className="image-block">
          <img src={mypic} alt="Profile" className="profile-image" />
        </div>
        <div className="text-block">
          <h1>HELLO !</h1>
          <p>
            {isExpanded ? text : `${text.substring (0, 300)}...`}
          </p>
          <button className="contact-button" onClick={scrollToContact}>
            Contact
          </button>
          <button className="contact-button" onClick={toggleExpand}>
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
