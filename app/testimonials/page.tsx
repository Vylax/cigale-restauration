'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sophie & Pierre",
    event: "Mariage",
    text: "Un service exceptionnel pour notre mariage ! Les invités parlent encore des mets délicieux et de la présentation raffinée.",
    rating: 5
  },
  {
    name: "Marie Dubois",
    event: "Anniversaire",
    text: "La qualité des produits et le professionnalisme de l'équipe ont fait de notre événement un moment magique.",
    rating: 5
  },
  {
    name: "Entreprise Provence Tech",
    event: "Séminaire d'entreprise",
    text: "Un buffet qui a ravi tous nos collaborateurs. Service impeccable et cuisine délicieuse.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="min-h-screen py-20 bg-beige">
      <div className="container-custom">
        <motion.h1
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Témoignages & Avis
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>

              <div className="mt-4">
                <p className="font-semibold text-olive">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.event}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg mb-6">
            Votre satisfaction est notre priorité. Découvrez ce que nos clients disent de nous.
          </p>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Laisser un avis
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}