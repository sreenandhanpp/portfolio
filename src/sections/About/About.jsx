import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id='about' className='section'>
<div className='about_container'>
        <div className="container">
            <div className="row">
                <div className="col-md-6  d-flex align-items-center justify-content-end">
                    <img src="./images/about.svg" alt="" />
                </div>
                <div className="col-md-6  d-flex align-items-center justify-content-start">
                    <div>
                    <h6 className='about_me_header'>ABOUT ME</h6>
                    <h3 className='domain_header'>Full Stack Developer <br/> based in Kerala,India</h3>
                    <p>Hi,I am Sreenandhan.A skilled Full Stack <br/> Developer hailing from Palakkad, Kerala, India. </p>
                    <p>With expertise in MongoDB, Express.js,<br/> React.js, and Node.js.</p>
                    </div>      
                </div>
            </div>
        </div>
    </div>
    </section>
    
  )
}

export default About