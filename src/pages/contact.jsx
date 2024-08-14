import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm('service_3hzrqpx', 'template_hvcb45x', e.target, 'AgxZWK99qCUAhP4Fh')
            .then((result) => {
                setIsSubmitting(false);
                setSubmissionStatus('Votre message a été envoyé avec succès !');
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                setIsSubmitting(false);
                setSubmissionStatus('Une erreur est survenue, veuillez réessayer.');
            });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="contact min-h-screen bg-gray-800 text-white"
        >
            <div className="container mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold mb-8 text-center">Contactez-moi</h2>
                <p className="text-lg mb-12 text-center">
                    Vous pouvez me contacter en remplissant le formulaire ci-dessous. Je vous répondrai dès que possible.
                </p>

                <div className="flex justify-center">
                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-lg bg-gray-900 p-8 rounded-lg shadow-lg"
                    >
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-lg font-semibold mb-2">Nom</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            ></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300 ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`}
                            >
                                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                            </button>
                        </div>
                        {submissionStatus && (
                            <p className={`text-center mt-4 ${submissionStatus.includes('succès') ? 'text-green-400' : 'text-red-400'}`}>
                                {submissionStatus}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
