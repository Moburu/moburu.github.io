import React, { Component } from 'react';
import Project from '../Project/Project';
import './Projects.css';
import ravenous from './images/ravenous.jpg';

const projects = [
    {
        descRavenous: "Interects with the Yelp API to render search results for the user.",
        titleRavenous: "Ravenous",
        languageRavenous: "React.js",
        altRavenous: "A screenshot of Ravenous."
    },
    {
        descPlaceholder: "Coming soon!",
        titlePlaceholder: "Coming Soon",
        languagePlaceholder: 'n/a',
        altPlaceholder: 'Coming soon'
    }
]

class Projects extends Component {
    state = {  }
    render() {
        return (
            <div className='Projects'>
                <h1>Projects</h1>
                <div className='project-holder'>
                    <Project
                        className='project'
                        imageSrc={ravenous}
                        imgAlt={projects[0].altRavenous}
                        projectTitle={projects[0].titleRavenous}
                        projectLanguage={projects[0].languageRavenous}
                        projectDescription={projects[0].descRavenous}
                    />
                    <Project
                        className='project'
                        projectTitle={projects[1].titlePlaceholder}
                        projectLanguage={projects[1].languagePlaceholder}
                        projectDescription={projects[1].descPlaceholder}
                    />
                    <Project
                        className='project'
                        projectTitle={projects[1].titlePlaceholder}
                        projectLanguage={projects[1].languagePlaceholder}
                        projectDescription={projects[1].descPlaceholder}
                    />
                    <Project
                        className='project'
                        projectTitle={projects[1].titlePlaceholder}
                        projectLanguage={projects[1].languagePlaceholder}
                        projectDescription={projects[1].descPlaceholder}
                    />
                </div>
            </div>
        );
    }
}

export default Projects;
