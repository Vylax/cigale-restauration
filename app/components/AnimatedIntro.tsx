'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AnimatedIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto"
    >
      <h2 className="section-title">Bienvenue chez Cigale Restauration</h2>
      <p className="text-lg mb-8">
        Spécialistes de la gastronomie provençale, nous sublimons vos événements 
        avec des mets d'exception. De l'intime repas familial aux grandes 
        célébrations, nous créons des moments inoubliables.
      </p>
      <Link href="/prestations" className="btn-primary inline-block">
        Découvrir nos prestations
      </Link>
    </motion.div>
  );
}