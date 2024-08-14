import React from 'react';
import { motion } from 'framer-motion';

const SalleDeSport = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="salle-de-sport min-h-screen bg-gray-900 text-white"
        >
            <div className="container mx-auto py-16">
                <h2 className="text-4xl font-bold mb-4 text-center">Projet : Salle de sport</h2>
                <p className="text-lg mb-8 text-center">
                    Ce projet visait à établir un échange réseau entre un serveur (utilisant le langage Python) et un client (utilisant le langage Java).
                    Son objectif était de concevoir un badge permettant aux membres d’une salle de sport d’accéder à celle-ci, d’acheter des produits et d’afficher le nombre de séances restantes.
                </p>

                {/* Insertion d'une image illustrant le projet */}
                <div className="flex justify-center mb-8">
                    <img
                        src="/images/salle-de-sport.png"
                        alt="Aperçu du projet Salle de sport"
                        className="w-full max-w-2xl rounded shadow-lg"
                    />
                </div>

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-center">Fonctionnalités détaillées</h3>
                <p className="text-lg mb-8 text-center">
                    Le système de gestion pour la salle de sport offre les fonctionnalités suivantes :
                </p>
                <ul className="list-disc list-inside mx-auto max-w-prose">
                    <li><strong>Accès sécurisé :</strong> Les membres peuvent accéder à la salle de sport grâce à un badge sécurisé.</li>
                    <li><strong>Achat de produits :</strong> Les membres peuvent acheter des produits directement via leur badge.</li>
                    <li><strong>Suivi des séances :</strong> Affichage du nombre de séances restantes pour chaque membre.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-center">Protocole de communication</h3>
                <p className="text-lg mb-8 text-center">
                    Pour les échanges réseau entre le client et le serveur, nous avons utilisé le protocole TCP (Transmission Control Protocol). Ce choix a été motivé par les avantages spécifiques qu'offre TCP, notamment :
                </p>
                <ul className="list-disc list-inside mx-auto max-w-prose">
                    <li><strong>Fiabilité :</strong> TCP garantit que les données sont transmises dans le bon ordre et sans perte. C'est essentiel pour les transactions critiques, comme l'accès sécurisé à la salle ou l'achat de produits.</li>
                    <li><strong>Contrôle de flux :</strong> TCP régule la vitesse de transmission des données, empêchant la surcharge du réseau et assurant une communication stable.</li>
                    <li><strong>Reprise automatique :</strong> En cas de perte de paquets, TCP réenvoie automatiquement les données manquantes, ce qui assure une transmission complète et correcte.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-center">Technologies utilisées</h3>
                <ul className="list-disc list-inside mx-auto max-w-prose">
                    <li>Java</li>
                    <li>Python</li>
                    <li>Utilisation de sockets avec protocole TCP</li>
                    <li>Base de données PostgreSQL</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-center">Apports</h3>
                <p className="text-lg mb-8 text-center">
                    Ce projet m'a permis de développer mes compétences en :
                </p>
                <ul className="list-disc list-inside mx-auto max-w-prose">
                    <li>Programmation réseau avec sockets</li>
                    <li>Intégration de systèmes hétérogènes (Java et Python)</li>
                    <li>Gestion de bases de données avec PostgreSQL</li>
                    <li>Utilisation du protocole TCP pour des échanges fiables</li>
                </ul>
            </div>
        </motion.div>
    );
};

export default SalleDeSport;
