// Construction.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Construction = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="construction-page min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center"
        >
            <h1 className="text-6xl font-bold mb-4">Page en Construction 🚧</h1>
            <p className="text-xl mb-8 text-center">
                Cette page est actuellement en cours de développement. Revenez bientôt pour découvrir son contenu !
            </p>
            <Link
                to="/"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300"
            >
                Retour à l'accueil
            </Link>
        </motion.div>
    );
};

export default Construction;
