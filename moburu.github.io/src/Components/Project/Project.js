import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
    state = {  }
    render() {
        return (
            <div className='Project'>
                <h2>{this.props.projectTitle}</h2>
                <h3>{this.props.projectLanguage}</h3>
                <p id='hover-text'>
                    {this.props.projectDescription}
                </p>
                <img className='project-card' src={this.props.imageSrc} alt={this.props.imgAlt} />
            </div>
        );
    }
}

export default Project;
