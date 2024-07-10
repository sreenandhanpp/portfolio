import React from 'react';
import './ProjectCard.css';
import { CiShare1 } from "react-icons/ci";


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
        {link && <a href={link} target="_blank" rel="noopener noreferrer"> <CiShare1 className='link-icon' /> </a>}
      </div>
    </div>
  );
};

export default ProjectCard;
