import React from 'react';
import './TechStacks.css';
import TechStackCard from '../../components/TechStackCard/TechStackCard';
// import abstractShape from './abstract/19.svg';

const techStacks = [
  { name: 'HTML', icon: './techstacks/reactjs.svg' },
  { name: 'CSS', icon: './techstacks/css.svg' },
  { name: 'JavaScript', icon: './techstacks/js.svg' },
  { name: 'React', icon: './techstacks/reactjs.svg' },
  { name: 'Node', icon: './techstacks/nodejs.svg' },
  { name: 'Bootstrap', icon: './techstacks/bootstrap.svg' },
  { name: 'MongoDB', icon: './techstacks/mongodb.svg' },
  { name: 'Redux', icon: './techstacks/redux.svg' },
  { name: 'VSCode', icon: './techstacks/vscode.svg' },
  { name: 'Vite', icon: './techstacks/vite.svg' },
];

const TechStacks = () => {
  return (
    <section className='tech_stacks_container section'>
      <img src={'./abstract/19.svg'} alt="Abstract Shape" className="abstract_shape" />
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-start align-items-center">
            <h6 className='tech_stacks_head'>Tech Stacks |</h6>
          </div>
        </div>
        <div className="row tech_stacks_icon_wrapper">
          {techStacks.map((stack, index) => (
            <div className="col-md-1 col-3 tech_stacks_icon_inner_wrapper" key={index}>
              <TechStackCard icon={stack.icon} name={stack.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStacks;
