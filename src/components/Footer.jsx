import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-primary text-secondary py-8"
        >
            <div className="container mx-auto flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-4">Celil Yılmaz</h2>
                <p className="text-center">Étudiant en informatique à L'ESIEE-IT.</p>
                <p className="text-center">Master en Ingénierie Informatique et Management des systèmes d'information specialité Génie Logiciel et Innovation numérique </p>
                <a href="mailto:lilecaz0090@gmail.com" className="flex items-center mt-4">
                    <span className="text-xl">
                        Mail : lilecaz0090@gmail.com
                    </span>
                </a>
            </div>
        </motion.footer>
    );
};

export default Footer;