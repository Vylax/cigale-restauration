'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen py-20 bg-beige">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="section-title text-center">Notre Histoire</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-playfair text-olive mb-4">Notre Passion</h2>
            <p className="mb-6">
              Depuis plus de 15 ans, Cigale Restauration sublime la gastronomie provençale 
              en proposant une cuisine authentique et raffinée. Notre histoire commence dans 
              les marchés colorés de Provence, où nous sélectionnons chaque jour les 
              meilleurs produits locaux et de saison.
            </p>
            <p>
              Notre équipe de passionnés s'engage à créer des moments inoubliables pour 
              vos événements, en alliant tradition provençale et créativité culinaire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-playfair text-olive mb-4">Nos Valeurs</h2>
              <ul className="space-y-4">
                <li>🌿 Produits locaux et de saison</li>
                <li>👨‍🍳 Savoir-faire artisanal</li>
                <li>♻️ Démarche éco-responsable</li>
                <li>💝 Service personnalisé</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-playfair text-olive mb-4">Notre Équipe</h2>
              <p className="mb-4">
                Notre équipe est composée de professionnels passionnés, formés aux 
                meilleures techniques culinaires et au service d'excellence.
              </p>
              <p>
                Sous la direction du Chef Marc Laurent, nous créons des expériences 
                gastronomiques uniques qui célèbrent la richesse de la cuisine provençale.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}