import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
    state = {  }
    render() {
        return (
            <nav className="Navbar">
                <ul className='links'>
                    <li className="name"><h3>Steven Schiffner</h3></li>
                    <li className='link'><a href="#About">About</a></li>
                    <li className='link'><a href="#Projects">Projects</a></li>
                    <li className='link'><a href="#Skills">Skills</a></li>
                    <li className='link'><a href='#Contact'>Contact Me</a></li>
                    <li className='resume'>Resume</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
