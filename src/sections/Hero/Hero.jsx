import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <>
      <section id="home" className='section'>
        <div className="hero_wrapper jumbo">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-md-6 d-flex left-box">
                <div>
                  <h1 className="hero_head">FULL STACK <br /> DEVELOPER</h1>
                  <p className="hero_passage">
                    👋 Hi, I am Sreenandhan. A skilled Full <br /> Stack Developer hailing from Palakkad, <br /> Kerala, India.
                  </p>
                  <div className="hero_icon">
                    <img src="./icons/github.svg" alt="GitHub" />
                    <img src="./icons/linkedin.svg" alt="LinkedIn" />
                    <img src="./icons/twitter.svg" alt="Twitter" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex right-box">
                <img src="./images/hero.png" alt="Hero" className="hero_img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
