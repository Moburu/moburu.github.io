import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {
    state = {  }
    render() {
        return (
            <div className='Skills'>
                <a className='anchor' id='skills'></a>
                <h1>Skills</h1>
                <div className='skill-grid'>
                    <div className='skill'>HTML/CSS</div>
                    <div className='skill'>Responsive Design</div>
                    <div className='skill'>Vanilla JS</div>
                    <div className='skill'>React</div>
                    <div className='skill'>Python</div>
                    <div className='skill'>Django</div>
                    <div className='skill'>SQL</div>
                    <div className='skill'>Numpy + Pandas</div>
                </div>
            </div>
        );
    }
}

export default Skills;
