import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid'; // Utilisation d'une icône de HeroIcons pour le bouton

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Afficher le bouton uniquement lorsque l'utilisateur défile vers le bas
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Fonction pour faire défiler vers le haut
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-secondary transition-colors duration-300"
                >
                    <ArrowUpIcon className="h-6 w-6" />
                </button>
            )}
        </div>
    );
}

export default ScrollToTop;
