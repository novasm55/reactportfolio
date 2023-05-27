import React from 'react';
import Project from './Project';

const Portfolio = () => {
    // Define your projects here. Each project should have a title, image, deployed URL, and GitHub repo URL.
    const projects = [/* ... */];

    return (
        <section>
            <h2>Portfolio</h2>
            {projects.map(project => <Project key={project.title} project={project} />)}
        </section>
    );
}

export default Portfolio;
