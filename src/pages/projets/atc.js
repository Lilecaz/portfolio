import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';

const ATC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="atc min-h-screen bg-gray-900 text-white"
        >
            <Header Title={"Contrôleur de trafic aérien"} />
            <div className="container mx-auto py-16">
                <h2 className="text-4xl font-bold mb-4 text-center">Projet : Contrôleur de trafic aérien</h2>
                <p className="text-lg mb-8 text-center">
                    J'ai développé un simulateur de contrôle aérien en Java, implémentant un thread distinct pour chaque avion afin de gérer leur mouvement en temps réel. Ce projet m'a permis de :
                </p>

                {/* Insertion de l'image pour illustrer le logiciel */}
                <div className="flex justify-center mb-8">
                    <img
                        src="/images/atc.png"
                        alt="Aperçu du simulateur de contrôle aérien"
                        className="w-full max-w-2xl rounded shadow-lg"
                    />
                </div>

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-center">Fonctionnalités détaillées</h3>
                <p className="text-lg mb-8 text-center">
                    Le simulateur de contrôle aérien propose plusieurs fonctionnalités avancées :
                </p>
                <ul className="list-disc list-inside mx-auto max-w-prose">
                    <li><strong>Pistes limitées :</strong> Les aéroports disposent de pistes avec une capacité limitée. Le simulateur gère les atterrissages en fonction de la disponibilité des pistes, évitant les conflits et optimisant le trafic.</li>
                    <li><strong>Altitudes distinctes :</strong> Pour éviter les collisions, chaque avion doit maintenir une altitude unique. Le système surveille et ajuste les altitudes des avions pour garantir la sécurité en vol.</li>
                    <li><strong>Communication entre avions :</strong> Les avions communiquent entre eux pour éviter les collisions. Le simulateur implémente des protocoles de communication pour coordonner les mouvements et prévenir les accidents.</li>
                    <li><strong>Atterrissage en urgence :</strong> En cas d'urgence, l'opérateur peut choisir un avion à faire atterrir en priorité. Le système prend en compte la disponibilité des pistes et ajuste les priorités en conséquence.</li>
                    <li><strong>Attente en cas de piste occupée :</strong> Si une piste est déjà en cours d'utilisation, les avions peuvent effectuer des manoeuvres d'attente, comme des "donuts" (circuits en rond), jusqu'à ce que la piste soit libre pour l'atterrissage.</li>
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
