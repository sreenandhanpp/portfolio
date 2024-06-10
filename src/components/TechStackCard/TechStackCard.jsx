import React from 'react';
import './TechStackCard.css';

const TechStackCard = ({ icon, name }) => {
  return (
    <div className="tech-stack-card d-flex justify-content-center align-items-center">
      <img src={icon} alt={`${name} icon`} className="tech-icon" />
    </div>
  );
};

export default TechStackCard;
