import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <section id='contact' className='section'>
            <div className='contact_container'>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-md-10">
                            <h3 className='contact_header'>CONTACT</h3>
                            <p>Get in touch! Reach out to me directly via email. Whether you have questions, feedback, or simply <br /> want to connect, feel free to send me a message. Looking forward to hearing from you!</p>
                            <div>
                                <div className="contact_details">
                                    <span> <img src="./icons/Map.svg" alt="location" />  <span className='location me-5'>Palakkad,kerala,India</span></span>
                                    <span> <img src="./icons/Mail.svg" alt="email" /> <span className='email'>sreenandhanpp@gmail.com</span> </span>
                                </div>
                            </div>
                            <p>You can also find me in these platforms too.</p>
                            <div className='hero_icon'>
                                <img src="./icons/github.svg" alt="" />
                                <img src="./icons/linkedin.svg" alt="" />
                                <img src="./icons/twitter.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contact