// Football.js
import React from 'react';
import { motion } from 'framer-motion';

const Football = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="football min-h-screen bg-gray-900 text-white"
        >
            <div className="container mx-auto py-16">
                <h2 className="text-4xl font-bold mb-4 text-center">Projet : Site Web de Résultats de Football</h2>
                <p className="text-lg mb-8 text-center">
                    Ce projet consistait à développer un site web permettant de consulter les résultats des matchs de football en temps réel. Ce site a été créé pour répondre à une demande de mes amis durant la Coupe du Monde 2022, afin de leur permettre de suivre la compétition en direct avec des comptes personnels.
                </p>

                {/* Illustration optionnelle pour le projet */}
                {/* <div className="flex justify-center mb-8">
                    <img
                        src="/images/football.png"
                        alt="Aperçu du site web de résultats de football"
                        className="w-full max-w-2xl rounded shadow-lg"
                    />
                </div> */}

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-center">Fonctionnalités du Site</h3>
                <p className="text-lg mb-8 text-center">
                    Le site offre plusieurs fonctionnalités clés pour les amateurs de football :
                </p>
                <ul className="list-disc list-inside mx-auto max-w-prose">
                    <li><strong>Résultats en temps réel :</strong> Les scores des matchs sont mis à jour automatiquement en utilisant une API de résultats de football, permettant aux utilisateurs de suivre l'évolution des matchs en direct.</li>
                    <li><strong>Comptes personnalisés :</strong> Chaque utilisateur peut créer un compte personnel pour suivre ses équipes et compétitions préférées avec des notifications personnalisées.</li>
                    <li><strong>Interface intuitive :</strong> Une interface utilisateur simple et élégante pour une navigation fluide entre les matchs, les équipes et les compétitions.</li>
                    <li><strong>Historique des matchs :</strong> Consulter les résultats passés et les statistiques des matchs pour une analyse complète de la compétition.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-center">Technologies utilisées</h3>
                <ul className="list-disc list-inside mx-auto max-w-prose">
                    <li>HTML, CSS, PHP, JavaScript</li>
                    <li>API de résultats de football pour les scores en temps réel</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-center">Apports</h3>
                <p className="text-lg mb-8 text-center">
                    Ce projet m'a permis de développer mes compétences en :
                </p>
                <ul className="list-disc list-inside mx-auto max-w-prose">
                    <li>Développement web full-stack avec une intégration d'API</li>
                    <li>Gestion d'utilisateurs et création de comptes personnalisés</li>
                    <li>Création d'une interface utilisateur réactive et intuitive</li>
                </ul>
            </div>
        </motion.div>
    );
};

export default Football;
