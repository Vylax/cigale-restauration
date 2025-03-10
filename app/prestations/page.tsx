'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const prestations = [
  {
    title: "Mariages",
    description: "Une cuisine raffinée pour sublimer votre jour J",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
    link: "/prestations/mariages"
  },
  {
    title: "Événements privés",
    description: "Des moments uniques pour vos célébrations",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d",
    link: "/prestations/evenements-prives"
  },
  {
    title: "Repas d'entreprise",
    description: "Une touche gastronomique pour vos événements professionnels",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
    link: "/prestations/entreprise"
  },
  {
    title: "Services sur mesure",
    description: "Des prestations personnalisées selon vos envies",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    link: "/prestations/sur-mesure"
  },
];

export default function Prestations() {
  return (
    <div className="min-h-screen py-20 bg-beige">
      <div className="container-custom">
        <motion.h1 
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nos Prestations
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {prestations.map((prestation, index) => (
            <motion.div
              key={prestation.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${prestation.image})` }}
              />
              <div className="p-6">
                <h2 className="text-2xl font-playfair font-bold text-olive mb-3">
                  {prestation.title}
                </h2>
                <p className="text-gray-700">
                  {prestation.description}
                </p>
                <Link href={prestation.link}>
                  <motion.button
                    className="btn-primary mt-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    En savoir plus
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}