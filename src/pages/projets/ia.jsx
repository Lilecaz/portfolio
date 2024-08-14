import React from 'react';
import { motion } from 'framer-motion';

const IA = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="artificial-intelligence min-h-screen bg-gray-900 text-white"
        >
            <div className="container mx-auto py-16">
                <h2 className="text-4xl font-bold mb-4 text-center">Projet : Intelligence Artificielle</h2>
                <p className="text-lg mb-8 text-center">
                    Ce projet de groupe avait pour objectif de créer un logiciel éducatif expliquant trois algorithmes majeurs d'intelligence artificielle : Minimax, A*, et le réseau neuronal.
                </p>

                {/* Insertion d'une image illustrant le projet */}
                {/* <div className="flex justify-center mb-8">
                    <img
                        src="/images/artificial-intelligence.png"
                        alt="Aperçu du projet Intelligence Artificielle"
                        className="w-full max-w-2xl rounded shadow-lg"
                    />
                </div> */}

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-center">Fonctionnalités détaillées</h3>
                <p className="text-lg mb-8 text-center">
                    Le logiciel développé propose une explication interactive des trois algorithmes d'intelligence artificielle suivants :
                </p>
                <ul className="list-disc list-inside mx-auto max-w-prose">
                    <li><strong>Algorithme Minimax :</strong> Utilisé principalement dans les jeux à somme nulle, cet algorithme permet de déterminer le meilleur coup à jouer en minimisant les pertes maximales. Dans ce projet, je me suis concentré sur l'implémentation de cet algorithme pour un jeu du morpion.</li>
                    <li><strong>Algorithme A* :</strong> Un algorithme de recherche de chemin utilisé dans les jeux vidéo et les systèmes de navigation pour trouver le chemin le plus court entre deux points.</li>
                    <li><strong>Réseau Neuronal :</strong> Modélisation inspirée du cerveau humain, utilisée pour l'apprentissage automatique et la reconnaissance de motifs complexes.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-center">Technologies utilisées</h3>
                <ul className="list-disc list-inside mx-auto max-w-prose">
                    <li>Java</li>
                    <li>GitHub</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-center">Apports</h3>
                <p className="text-lg mb-8 text-center">
                    Ce projet m'a permis de développer mes compétences en :
                </p>
                <ul className="list-disc list-inside mx-auto max-w-prose">
                    <li>Implémentation de l'algorithme Minimax en Java pour un jeu du morpion</li>
                    <li>Conception de logiciels éducatifs interactifs</li>
                    <li>Utilisation de GitHub pour la gestion de version</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-center">Téléchargement</h3>
                <p className="text-lg mb-8 text-center">
                    Vous pouvez télécharger le fichier exécutable de ce projet en cliquant sur le lien ci-dessous :
                </p>
                <div className="flex justify-center">
                    <a
                        href="/IA.jar"
                        download
                        className="bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600 transition duration-300"
                    >
                        Télécharger IA.jar
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default IA;
