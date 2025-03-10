'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Entreprise() {
  return (
    <div className="min-h-screen py-20 bg-beige">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="section-title text-center">Repas d'Entreprise</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-playfair text-olive mb-4">Excellence Professionnelle</h2>
            <p className="mb-6">
              Donnez une dimension gastronomique à vos événements professionnels. 
              Séminaires, inaugurations, cocktails d'affaires ou repas de fin d'année, 
              nous vous proposons des prestations haut de gamme adaptées à vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-playfair text-olive mb-4">Nos Formules</h2>
              <ul className="space-y-4">
                <li>🥪 Plateaux repas gourmets</li>
                <li>🍽️ Déjeuners d'affaires</li>
                <li>🥂 Cocktails dînatoires</li>
                <li>📅 Séminaires complets</li>
                <li>🎉 Soirées d'entreprise</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-playfair text-olive mb-4">Nos Services</h2>
              <ul className="space-y-4">
                <li>📋 Devis personnalisé</li>
                <li>🚚 Livraison ponctuelle</li>
                <li>👨‍🍳 Personnel qualifié</li>
                <li>♻️ Démarche éco-responsable</li>
                <li>📱 Service client dédié</li>
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
                Demander un devis entreprise
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}