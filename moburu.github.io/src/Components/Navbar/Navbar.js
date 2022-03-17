import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './Navbar.css';

class Navbar extends Component {
    state = {  }

    handleClick1(e) {
        e.preventDefault();
        const _links = document.getElementsByClassName('links')[0];
        _links.classList.toggle('active');
    }


    render() {
        return (
            <nav className="Navbar">
                <h2 className="name">Steven Schiffner</h2>
                <a href="/#" class="toggle-button" onClick={this.handleClick1}>
                    <span class='bar'></span>
                    <span class='bar'></span>
                    <span class='bar'></span>
                </a>
                <ul className='links'>
                    <li className='link'><a href="#about">About</a></li>
                    <li className='link'><a href="#projects">Projects</a></li>
                    <li className='link'><a href="#skills">Skills</a></li>
                    <li className='link'><a href='#contact'>Contact</a></li>
                    <li className='resume'><a href="StevenSchiffnerResume.pdf" download>Resume</a></li>
                    <li className='link'><a href="https://www.linkedin.com/in/steven-schiffner-b972b5163/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    <li id='last-link' className='link'><a href="https://github.com/Moburu" target="_blank" rel="noreferrer">GitHub</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
