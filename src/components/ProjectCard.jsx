import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ title, description, technologies, link }) {
    return (
        <Link to={link} className="text-blue-500 hover:text-blue-700">
            <div className="project-card bg-white shadow-lg rounded-lg p-6 m-4">
                <h2 className="text-2xl font-bold mb-2 text-black">{title}</h2>
                <p className="text-gray-700 mb-4">{description}</p>
                <p className="text-gray-500 mb-4">{technologies}</p>
            </div>
        </Link>
    );
}

export default ProjectCard;
