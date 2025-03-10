'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AnimatedHero() {
  return (
    <div className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      
      <motion.div 
        className="relative z-10 text-center text-white px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-playfair mb-6">
          Cigale Restauration
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-lora">
          Service traiteur gastronomique provençal
        </p>
        <Link href="/contact">
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Demander un devis
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}