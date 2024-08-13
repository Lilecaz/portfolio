import React from 'react';
import { motion } from 'framer-motion';


const Adm4u = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen bg-primary flex flex-col"
        >
            <main className="adm4u flex-grow">
                <Content />
            </main>
        </motion.div>
    );
};

const Content = () => {
    return (
        <div className="container mx-auto py-16">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center justify-center h-screen px-8"
            >
                <h1 className="text-4xl font-bold text-white mb-4">ADM4U</h1>
                <h2 className="text-2xl font-semibold text-white mb-4">Création d'un logiciel d'automatisation & sécurisation de tâches SAP</h2>
                <p className="text-gray-300 text-center mb-8">
                    ADM4U (Administration for you) automatise et sécurise plusieurs tâches réalisées par les administrateurs SAP, améliorant ainsi l'efficacité et la fiabilité des opérations. En réduisant les erreurs humaines et en optimisant les processus, ADM4U contribue à une meilleure gestion des systèmes SAP, permettant aux équipes IT de se concentrer sur des tâches à plus haute valeur ajoutée.
                </p>


                <h3 className="text-xl font-semibold text-white mb-4">Fonctionnalités clés</h3>
                <ul className="text-gray-300 text-center mb-8">
                    <li>Monitoring de la disponibilité des instances SAP & Hana</li>
                    <li>Installation automatique des bases Hana</li>
                    <li>Upgrade Hana & Kernel SAP</li>
                    <li>Refresh automatique SAP avec export/import des tables</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-4">Technologies utilisées</h3>
                <ul className="text-gray-300 text-center mb-8">
                    <li>JavaScript (Electron-JS/React)</li>
                    <li>GitHub</li>
                    <li>Scripts Shell</li>
                </ul>
            </motion.div>
        </div>
    );
};

export default Adm4u;
