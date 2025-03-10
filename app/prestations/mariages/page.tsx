'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Mariages() {
  return (
    <div className="min-h-screen py-20 bg-beige">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="section-title text-center">Mariages</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-playfair text-olive mb-4">Une Célébration Inoubliable</h2>
            <p className="mb-6">
              Votre mariage est un moment unique qui mérite une attention particulière. 
              Notre équipe met tout son savoir-faire à votre service pour créer un 
              moment gastronomique d'exception.
            </p>
            <p className="mb-6">
              De l'apéritif au dessert, nous vous proposons une cuisine raffinée qui 
              ravira vos convives et sublimera votre réception.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-playfair text-olive mb-4">Nos Services</h2>
              <ul className="space-y-4">
                <li>🥂 Cocktail apéritif</li>
                <li>🍽️ Service à table</li>
                <li>🎂 Pièce montée et desserts</li>
                <li>👨‍🍳 Personnel de service qualifié</li>
                <li>🪑 Location de matériel</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-playfair text-olive mb-4">Notre Engagement</h2>
              <ul className="space-y-4">
                <li>✨ Qualité premium</li>
                <li>🤝 Service personnalisé</li>
                <li>🌿 Produits locaux</li>
                <li>📅 Accompagnement sur-mesure</li>
                <li>💝 Attention aux détails</li>
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
                Demander un devis pour votre mariage
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}