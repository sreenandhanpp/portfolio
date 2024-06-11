import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <div className='img-container'>
        <img src={image} alt={title} />
        </div>
      </div>
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && <a href={link} target="_blank" rel="noopener noreferrer"> <img className='share-icon' src="./icons/share.svg" alt="share" /> </a>}
      </div>
    </div>
  );
};

export default ProjectCard;
