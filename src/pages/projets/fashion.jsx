import React from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const FashionEcommerce = () => {
    const handleStartEcommerce = async () => {
        try {
            await axios.post('http://localhost:5001/api/start-ecommerce');
            alert('Le projet e-commerce est en cours de démarrage...');
        } catch (error) {
            console.error('Erreur lors du démarrage du projet e-commerce:', error);
            alert('Erreur lors du démarrage du projet e-commerce.');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="fashion-ecommerce min-h-screen bg-gray-900 text-white"
        >
            <div className="container mx-auto py-16">
                <h2 className="text-4xl font-bold mb-4 text-center">Projet : Site E-commerce de Mode</h2>
                <p className="text-lg mb-8 text-center">
                    Ce projet consistait à créer un site e-commerce pour vendre des vêtements de mode pour femmes, en mettant l'accent sur les robes. Le site permet aux utilisateurs de parcourir les collections, de consulter les détails des produits et de finaliser leurs achats en ligne.
                </p>

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-center">Fonctionnalités détaillées</h3>
                <p className="text-lg mb-8 text-center">
                    Le site e-commerce offre une expérience d'achat complète avec les fonctionnalités suivantes :
                </p>
                <ul className="list-disc list-inside mx-auto max-w-prose">
                    <li><strong>Catalogue de Produits :</strong> Présentation des différentes collections de robes avec filtres par taille, couleur et prix.</li>
                    <li><strong>Panier d'Achat :</strong> Ajout et gestion des articles dans le panier avec mise à jour des quantités et calculs automatiques du total.</li>
                    <li><strong>Processus de Paiement :</strong> Finalisation de l'achat via un processus de commande sécurisé.</li>
                    <li><strong>Compte Utilisateur :</strong> Création de comptes pour suivre les commandes et gérer les informations personnelles.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-center">Technologies utilisées</h3>
                <ul className="list-disc list-inside mx-auto max-w-prose">
                    <li>React.js : pour le front-end et l'interface utilisateur.</li>
                    <li>Node.js et Express : pour le back-end, la gestion des requêtes et des données.</li>
                    <li>MongoDB : pour stocker les informations sur les produits, les utilisateurs et les commandes.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-center">Apports</h3>
                <p className="text-lg mb-8 text-center">
                    Ce projet m'a permis de développer mes compétences en :
                </p>
                <ul className="list-disc list-inside mx-auto max-w-prose">
                    <li>Développement d'applications web complètes avec React, Node et Express.</li>
                    <li>Création d'une interface utilisateur réactive et intuitive pour améliorer l'expérience client.</li>
                    <li>Gestion des états complexes avec React pour un suivi précis des interactions utilisateur.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-center">Accéder au Site</h3>
                <p className="text-lg mb-8 text-center">
                    Vous pouvez visiter le site de démonstration en cliquant sur le lien ci-dessous :
                </p>
                <div className="flex justify-center mb-8">
                    <button
                        onClick={handleStartEcommerce}
                        className="bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600 transition duration-300"
                    >
                        Démarrer le Site E-commerce
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default FashionEcommerce;
