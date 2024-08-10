import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

function Home() {
    const [isProjectsVisible, setIsProjectsVisible] = useState(false);

    const handleShowProjects = () => {
        setIsProjectsVisible(true);
    };
    const projects = [
        {
            title: 'ADM4U',
            description: 'Automatisation et sécurisation de tâches SAP',
            technologies: 'JavaScript (Electron-JS/React), GitHub, Scripts Shell',
            link: '/projets/adm4u',
        },
        {
            title: 'Air Traffic Controller',
            description: 'Contrôleur de trafic aérien avec Multi-Threading',
            technologies: 'Multi-Threading, Java, Github',
            link: '/projets/atc',
        },
        {
            title: 'Salle de sport',
            description: 'Échange réseau entre serveur Python et client Java',
            technologies: 'Java, Python, sockets, base de données PostgreSQL',
            link: '/projets/salle-de-sport',
        },
        {
            title: 'Artificial Intelligence',
            description: 'Logiciel expliquant des algorithmes d\'IA',
            technologies: 'Java, Github',
            link: '/projets/artificial-intelligence',
        },
        {
            title: 'Simulateur de tournoi sportif',
            description: 'Gestion de tournoi de football avec Multi-Threading (C)',
            technologies: 'Langage C',
            link: '/projets/simulateur-de-tournoi-sportif',
        },
        {
            title: 'Site web de résultat de Football',
            description: 'Consultation des résultats de matchs en temps réel',
            technologies: 'HTML, CSS, PHP, JavaScript',
            link: '/projets/site-web-de-resultat-de-football',
        },
    ];
    return (
        <div className="home min-h-screen bg-primary">
            {/* Section 1: Présentation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center justify-center h-screen px-8"
            >
                <h1 className="text-4xl font-bold text-white mb-4">Celil Yılmaz</h1>
                <h2 className="text-2xl font-medium text-white mb-8">
                    Ingénieur Logiciel et Management des Systèmes d'Information
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                    Passionné par le développement logiciel et l'innovation.
                </p>
                <a
                    href="#projets"
                    className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-indigo-900 transition duration-300 "
                    onClick={handleShowProjects}
                >
                    Voir mes projets
                </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`container mx-auto py-16 ${isProjectsVisible ? 'show-projects' : ''}`}
                id="projets"
            >
                <h2 className="text-3xl font-bold text-white mb-8">Projets</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}



export default Home;
