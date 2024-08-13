import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

function Home() {
    const [isProjectsVisible] = useState(false);

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
        <div className="home min-h-screen bg-gradient-to-b from-primary via-accent to-secondary text-secondary">
            {/* Section 1: Présentation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center justify-center h-screen px-4 sm:px-8 text-center"
            >
                <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 sm:mb-6 tracking-wide">Celil Yılmaz</h1>
                <h2 className="text-xl sm:text-3xl font-medium text-gray-300 mb-6 sm:mb-10">
                    Ingénieur Logiciel et Management des Systèmes d'Information
                </h2>
                <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-10">
                    Passionné par le développement logiciel et l'innovation.
                </p>
                <a
                    href="#projets"
                    className="bg-white text-indigo-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-transparent hover:text-white border border-white transition duration-300 shadow-lg"
                    onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById('projets');
                        element.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    Voir mes projets
                </a>
            </motion.div>

            {/* Section 2: Projets */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`container mx-auto py-8 sm:py-16 ${isProjectsVisible ? 'show-projects' : ''}`}
                id="projets"
            >
                <h2 className="text-2xl sm:text-4xl font-bold text-secondary mb-8 sm:mb-12 text-center">Mes Projets</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            className="shadow-lg rounded-lg overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default Home;
