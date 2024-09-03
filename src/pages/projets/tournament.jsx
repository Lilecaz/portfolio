// Tournament.js
import React from 'react';
import { motion } from 'framer-motion';

const Tournament = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="tournament min-h-screen bg-gray-900 text-white"
        >
            <div className="container mx-auto py-16">
                <h2 className="text-4xl font-bold mb-4 text-center">Projet : Simulateur de Tournoi Sportif</h2>
                <p className="text-lg mb-8 text-center">
                    Ce projet avait pour objectif de développer un simulateur capable de gérer un tournoi de football, en exploitant la puissance du Multi-Threading pour une gestion efficace des matchs.
                </p>

                {/* Illustration optionnelle pour le projet */}
                {/* <div className="flex justify-center mb-8">
                    <img
                        src="/images/tournament.png"
                        alt="Aperçu du simulateur de tournoi sportif"
                        className="w-full max-w-2xl rounded shadow-lg"
                    />
                </div> */}

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-center">Fonctionnalités du Simulateur</h3>
                <p className="text-lg mb-8 text-center">
                    Le simulateur de tournoi sportif propose les fonctionnalités suivantes :
                </p>
                <ul className="list-disc list-inside mx-auto max-w-prose">
                    <li><strong>Gestion de matchs :</strong> Chaque match est géré par un thread distinct, permettant une simulation parallèle des matchs pour un tournoi plus rapide et réaliste.</li>
                    <li><strong>Suivi du tournoi :</strong> Le programme gère les résultats des matchs, met à jour le classement des équipes, et détermine les équipes qualifiées pour les phases suivantes.</li>
                    <li><strong>Simulation des scores :</strong> Les scores des matchs sont générés de manière aléatoire, avec des paramètres configurables pour influencer les résultats en fonction des équipes.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-center">Technologies utilisées</h3>
                <ul className="list-disc list-inside mx-auto max-w-prose">
                    <li>Langage C</li>
                    <li>Multi-Threading</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-center">Apports</h3>
                <p className="text-lg mb-8 text-center">
                    Ce projet m'a permis de renforcer mes compétences en :
                </p>
                <ul className="list-disc list-inside mx-auto max-w-prose">
                    <li>Programmation concurrente et utilisation du Multi-Threading en C</li>
                    <li>Gestion de la synchronisation entre les threads pour éviter les conflits</li>
                    <li>Conception d'un simulateur réaliste et performant pour des tournois sportifs</li>
                </ul>
            </div>
        </motion.div>
    );
};

export default Tournament;
