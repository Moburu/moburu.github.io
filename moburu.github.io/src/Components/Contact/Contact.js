import React, { useState } from 'react';
import './Contact.css';
import email from './images/email.png';
import linkedin from './images/linkedin.png';
import github from './images/github.jpg';

const Contact = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { name, email, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
      alert(result.status);
};

    return (
        <div className='Contact'>
            <a className='anchor' id='contact'></a>
            <h1>Contact Me</h1>
            <div className='contact-links'>
                <a href="mailto:stevenschiffner3@gmail.com" className='icon-holder'>
                    <img id="email" className='icon' src={email} alt="An email icon." />
                    <span className='icon-title'>Email</span>
                </a>
                    <a href="https://www.linkedin.com/in/steven-schiffner-b972b5163/" className='icon-holder'>
                    <img id="linkedin" className='icon' src={linkedin} alt="The LinkedIn logo." />
                    <span className='icon-title'>LinkedIn</span>
                </a>
                <a href="https://github.com/Moburu" className='icon-holder'>
                    <img id="github" className='icon' src={github} alt="The GitHub logo." />
                    <span className='icon-title'>GitHub</span>
                </a>
            </div>
        </div>
    );
    }


export default Contact;


{/* <div className="inner-contact">
<div className='contact-map'>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.4519800891903!2d-74.39087388426873!3d40.79606064040504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a89613428bcf%3A0x950d2d9c1f811e1!2s250%20Ridgedale%20Ave%2C%20Florham%20Park%2C%20NJ%2007932!5e0!3m2!1sen!2sus!4v1647215198814!5m2!1sen!2sus"
        width="90%"
        height="90%"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        title="mymap"
        className="mymap">
    </iframe>
</div>
<div className='contact-form'>
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Name' className='form-txt' id='name' /> <br />
        <input type='text' placeholder='Email' className='form-txt' id='email' /> <br />
        <textarea placeholder='Message' className='form-txtarea' id='message' /> <br />
        <button type='submit' className='form-submit'>{status}</button>
    </form>
</div>
</div> */}
