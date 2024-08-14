import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HomeIcon, ChevronDownIcon, ChevronUpIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleProjectsMenu = () => {
        setIsProjectsMenuOpen(!isProjectsMenuOpen);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const projects = [
        { title: 'ADM4U', link: '/projets/adm4u' },
        { title: 'Air Traffic Controller', link: '/projets/atc' },
        { title: 'Salle de sport', link: '/projets/sports' },
        { title: 'Artificial Intelligence', link: '/projets/ia' },
        { title: 'Simulateur de tournoi sportif', link: '/projets/tournoi' },
        { title: 'Site web de résultat de Football', link: '/projets/football' },
    ];

    return (
        <motion.header
            className="bg-primary shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto py-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-secondary">Celil Yılmaz</h1>
                <ul className="hidden md:flex space-x-6">
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <NavLink to="/" className="text-secondary hover:text-gray-400 flex items-center">
                            <HomeIcon className="h-6 w-6 inline-block mr-2" />
                            Accueil
                        </NavLink>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="relative"
                    >
                        <button onClick={toggleProjectsMenu} className="text-secondary hover:text-gray-400 flex items-center">
                            Projets {isProjectsMenuOpen ? <ChevronUpIcon className="h-4 w-4 ml-1" /> : <ChevronDownIcon className="h-4 w-4 ml-1" />}
                        </button>
                        <AnimatePresence>
                            {isProjectsMenuOpen && (
                                <motion.ul
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-full left-0 mt-2 w-48 bg-secondary text-primary shadow-lg rounded-md"
                                >
                                    {projects.map((project) => (
                                        <motion.li
                                            key={project.title}
                                            whileHover={{ backgroundColor: '#f0f0f0' }}
                                        >
                                            <NavLink
                                                to={project.link}
                                                className="block px-4 py-2 hover:text-indigo-900"
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
                        <NavLink to="/contact" className="text-secondary hover:text-gray-400">
                            Contact
                        </NavLink>
                    </motion.li>
                </ul>
                <button onClick={toggleMenu} className="md:hidden text-secondary">
                    {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden fixed top-0 right-0 w-64 h-auto bg-primary text-secondary shadow-lg z-50"
                    >
                        <div className="flex justify-end p-4">
                            <button onClick={closeMenu} className="text-secondary">
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                        </div>
                        <ul className="flex flex-col p-4">
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="py-2"
                            >
                                <NavLink to="/" className="block text-secondary hover:text-gray-400 flex items-center" onClick={closeMenu}>
                                    <HomeIcon className="h-6 w-6 inline-block mr-2" />
                                    Accueil
                                </NavLink>
                            </motion.li>
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative py-2"
                            >
                                <button onClick={toggleProjectsMenu} className="text-secondary hover:text-gray-400 flex items-center w-full">
                                    Projets {isProjectsMenuOpen ? <ChevronUpIcon className="h-4 w-4 ml-1" /> : <ChevronDownIcon className="h-4 w-4 ml-1" />}
                                </button>
                                <AnimatePresence>
                                    {isProjectsMenuOpen && (
                                        <motion.ul
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="ml-4 mt-2 bg-secondary text-primary shadow-lg rounded-md"
                                        >
                                            {projects.map((project) => (
                                                <motion.li
                                                    key={project.title}
                                                    whileHover={{ backgroundColor: '#f0f0f0' }}
                                                >
                                                    <NavLink
                                                        to={project.link}
                                                        className="block px-4 py-2 hover:text-indigo-900"
                                                        onClick={() => {
                                                            setIsProjectsMenuOpen(false);
                                                            closeMenu();
                                                        }}
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
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="py-2"
                            >
                                <NavLink to="/contact" className="block text-secondary hover:text-gray-400" onClick={closeMenu}>
                                    Contact
                                </NavLink>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
