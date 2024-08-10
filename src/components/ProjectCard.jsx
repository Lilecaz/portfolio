import React from 'react';

function ProjectCard({ title, description, technologies, link }) {
    return (
        <a href={link} rel="noopener noreferrer" className="project-card">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-300 mb-2">{description}</p>
            <p className="text-gray-300 text-sm">{technologies}</p>
        </a>
    );
}

export default ProjectCard;
