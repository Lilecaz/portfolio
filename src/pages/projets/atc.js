import React from 'react';
import { motion } from 'framer-motion';

const ATC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen bg-gray-900 text-white"
        >
            <div className="container mx-auto py-16">
                <h2 className="text-4xl font-bold mb-4 text-center">Projet : Contrôleur de trafic aérien</h2>
                <p className="text-lg mb-8 text-center">
                    J'ai développé un simulateur de contrôle aérien en Java, implémentant un thread distinct pour chaque avion afin de gérer leur mouvement en temps réel. Ce projet m'a permis de :
                </p>

                {/* La liste à puces avec l'alignement centré */}
                <ul className="list-disc list-inside mx-auto max-w-prose">
                    <li>Maîtriser la programmation multi-thread en Java</li>
                    <li>Modéliser le comportement des avions et des aéroports</li>
                    <li>Gérer les conflits aériens et les procédures de décollage/atterrissage</li>
                    <li>Utiliser Git pour la gestion de version</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-center">Technologies utilisées</h3>
                <ul className="list-disc list-inside mx-auto max-w-prose">
                    <li>Java</li>
                    <li>Multi-threading</li>
                    <li>GitHub</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-center">Démonstration (optionnel)</h3>
                <p className="text-center">
                    Lien vers le dépôt GitHub : <a href="https://github.com/Lilecaz/pdi" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Cliquez ici</a>
                </p>

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-center">Apports</h3>
                <p className="text-lg mb-8 text-center">
                    Ce projet m'a permis de développer mes compétences en :
                </p>
                <ul className="list-disc list-inside mx-auto max-w-prose">
                    <li>Algorithmique</li>
                    <li>Conception logicielle</li>
                    <li>Résolution de problèmes complexes</li>
                </ul>
            </div>
        </motion.div>
    );
};

export default ATC;
