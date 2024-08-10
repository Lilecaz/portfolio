import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HomeIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid';

const Header = ({ Title }) => {
    const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false);

    const toggleProjectsMenu = () => {
        setIsProjectsMenuOpen(!isProjectsMenuOpen);
    };

    const projects = [
        { title: 'ADM4U', link: '/projets/adm4u' },
        { title: 'Air Traffic Controller', link: '/projets/atc' },
        { title: 'Salle de sport', link: '/projets/salle-de-sport' },
        { title: 'Artificial Intelligence', link: '/projets/artificial-intelligence' },
        { title: 'Simulateur de tournoi sportif', link: '/projets/simulateur-de-tournoi-sportif' },
        { title: 'Site web de résultat de Football', link: '/projets/site-web-de-resultat-de-football' },
    ];

    return (
        <motion.header
            className="bg-white shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">"{Title}" réalisé par Celil YILMAZ</h1>
                <nav>
                    <ul className="flex space-x-4 items-center">
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <NavLink to="/" className="text-gray-900 hover:text-indigo-900" activeClassName="font-bold">
                                <HomeIcon className="h-6 w-6" />
                            </NavLink>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="relative"
                        >
                            <button onClick={toggleProjectsMenu} className="text-gray-900 hover:text-indigo-900 flex items-center">
                                Projets {isProjectsMenuOpen ? <ChevronUpIcon className="h-4 w-4 ml-1" /> : <ChevronDownIcon className="h-4 w-4 ml-1" />}
                            </button>
                            <AnimatePresence>
                                {isProjectsMenuOpen && (
                                    <motion.ul
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md"
                                    >
                                        {projects.map((project) => (
                                            <motion.li
                                                key={project.title}
                                                whileHover={{ backgroundColor: '#f0f0f0' }}
                                            >
                                                <NavLink
                                                    to={project.link}
                                                    className="block px-4 py-2 text-gray-900 hover:text-indigo-900"
                                                    activeClassName="font-bold"
                                                    onClick={() => setIsProjectsMenuOpen(false)}
                                                >
                                                    {project.title}
                                                </NavLink>
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <NavLink to="/projets/adm4u/a-propos" className="text-gray-900 hover:text-indigo-900" activeClassName="font-bold">
                                À propos
                            </NavLink>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <NavLink to="/projets/adm4u/contact" className="text-gray-900 hover:text-indigo-900" activeClassName="font-bold">
                                Contact
                            </NavLink>
                        </motion.li>
                    </ul>
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;
