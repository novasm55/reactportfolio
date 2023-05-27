import React from 'react';

const Project = ({ project }) => {
    return (
        <div>
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <a href={project.deployedUrl}>Deployed Application</a>
            <a href={project.githubUrl}>GitHub Repository</a>
        </div>
    );
}

export default Project;
