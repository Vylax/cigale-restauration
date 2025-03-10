'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EvenementsPrives() {
  return (
    <div className="min-h-screen py-20 bg-beige">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="section-title text-center">Événements Privés</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-playfair text-olive mb-4">Des Moments Privilégiés</h2>
            <p className="mb-6">
              Anniversaires, baptêmes, communions, ou simples réunions familiales, 
              chaque événement mérite une attention particulière. Notre équipe vous 
              accompagne dans la création d'un moment gastronomique sur mesure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-playfair text-olive mb-3">Anniversaires</h3>
              <p className="mb-4">Un moment festif et gourmand pour célébrer une année de plus</p>
              <ul className="text-sm space-y-2">
                <li>🎂 Gâteau personnalisé</li>
                <li>🍽️ Menu sur mesure</li>
                <li>🎉 Décoration thématique</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-playfair text-olive mb-3">Baptêmes</h3>
              <p className="mb-4">Une célébration familiale dans la tradition provençale</p>
              <ul className="text-sm space-y-2">
                <li>👶 Menu adapté</li>
                <li>🍬 Buffet de douceurs</li>
                <li>💐 Décoration élégante</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-playfair text-olive mb-3">Réceptions</h3>
              <p className="mb-4">Des moments conviviaux à partager en famille ou entre amis</p>
              <ul className="text-sm space-y-2">
                <li>🥂 Cocktails élégants</li>
                <li>🍖 Buffets généreux</li>
                <li>🤝 Service attentionné</li>
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
                Organiser votre événement
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}