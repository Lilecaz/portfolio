// Adm4u.js
import React from 'react';
import { motion } from 'framer-motion';

const Adm4u = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="adm4u min-h-screen bg-gray-900 text-white"
        >
            <div className="container mx-auto py-16">
                <h2 className="text-4xl font-bold mb-4 text-center">Projet : ADM4U</h2>
                <p className="text-lg mb-8 text-center">
                    ADM4U (Administration for You) est un logiciel qui automatise et sécurise plusieurs tâches administratives réalisées sur les systèmes SAP, améliorant ainsi l'efficacité et la fiabilité des opérations. Ce projet permet de réduire les erreurs humaines et d'optimiser les processus, libérant ainsi les équipes IT pour des tâches à plus haute valeur ajoutée.
                </p>

                {/* Section pour l'image (si disponible) */}
                {/* <div className="flex justify-center mb-8">
                    <img
                        src="/images/adm4u.png"
                        alt="Aperçu de ADM4U"
                        className="w-full max-w-2xl rounded shadow-lg"
                    />
                </div> */}

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-center">Fonctionnalités détaillées</h3>
                <p className="text-lg mb-8 text-center">
                    ADM4U propose plusieurs fonctionnalités clés pour la gestion et l'automatisation des tâches SAP :
                </p>
                <ul className="list-disc list-inside mx-auto max-w-prose">
                    <li><strong>Monitoring :</strong> Suivi de la disponibilité des instances SAP & Hana pour assurer une performance optimale.</li>
                    <li><strong>Installation automatique :</strong> Déploiement automatisé des bases de données Hana pour réduire les temps d'installation.</li>
                    <li><strong>Mises à jour :</strong> Automatisation des mises à jour de Hana et du Kernel SAP pour garantir un environnement à jour et sécurisé.</li>
                    <li><strong>Rafraîchissement SAP :</strong> Réalisation de rafraîchissements automatiques de SAP avec export/import des tables pour une gestion simplifiée des données.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-center">Technologies utilisées</h3>
                <ul className="list-disc list-inside mx-auto max-w-prose">
                    <li>JavaScript (Electron-JS/React) : pour la création de l'interface utilisateur et l'interaction avec le système.</li>
                    <li>GitHub : pour la gestion de version et la collaboration en équipe.</li>
                    <li>Scripts Shell : pour l'automatisation des tâches de maintenance et de mise à jour des systèmes.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-center">Apports</h3>
                <p className="text-lg mb-8 text-center">
                    Ce projet m'a permis de développer mes compétences en :
                </p>
                <ul className="list-disc list-inside mx-auto max-w-prose">
                    <li>Automatisation de processus complexes via scripting et programmation.</li>
                    <li>Développement d'interfaces utilisateur intuitives avec Electron-JS et React.</li>
                    <li>Gestion de versions et collaboration avec GitHub.</li>
                    <li>Amélioration des performances et de la sécurité des systèmes SAP.</li>
                </ul>
            </div>
        </motion.div>
    );
};

export default Adm4u;
