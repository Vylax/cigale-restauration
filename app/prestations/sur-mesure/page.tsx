'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SurMesure() {
  return (
    <div className="min-h-screen py-20 bg-beige">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="section-title text-center">Services Sur Mesure</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-playfair text-olive mb-4">Votre Vision, Notre Expertise</h2>
            <p className="mb-6">
              Chaque événement est unique et mérite une attention particulière. 
              Nous créons des expériences culinaires personnalisées qui correspondent 
              parfaitement à vos envies et à vos besoins spécifiques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-playfair text-olive mb-4">Personnalisation</h2>
              <ul className="space-y-4">
                <li>🎨 Thèmes sur mesure</li>
                <li>🍽️ Menus personnalisés</li>
                <li>🌿 Régimes spéciaux</li>
                <li>🎵 Ambiances uniques</li>
                <li>✨ Décoration adaptée</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-playfair text-olive mb-4">Notre Approche</h2>
              <ul className="space-y-4">
                <li>👥 Consultation dédiée</li>
                <li>📝 Planning détaillé</li>
                <li>🤝 Suivi personnalisé</li>
                <li>⭐ Service premium</li>
                <li>💫 Attention aux détails</li>
              </ul>
            </motion.div>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Créer votre événement sur mesure
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}