import React, { Component } from 'react';
import './About.css'
import programmer from './programmer.png';

class About extends Component {
    state = {  }
    render() {
        return (
            <div id="about" className="About">
                <div className='intro'>
                    <h1 className="intro-header">Hi! I'm Steven.</h1>
                    <div className='intro-p'>
                        <p>I'm an aspiring full-stack web developer from New Jersey. After finishing
                        my Bachelor's in math, I've taken an interest in programming. Here you can
                        view the various projects I've worked on. Outside of math and programming, I'm
                        an avid gamer and lover of music (currently learning piano). Feel free to get
                        in touch with me by e-mail with any questions or concerns!</p>
                    </div>
                </div>
                <div id='intro-img'>
                    <img className='programmer' src={programmer} alt='Someone programming' />
                </div>
            </div>
        );
    }
}

export default About;
