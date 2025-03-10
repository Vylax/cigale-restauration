'use client';

import { motion } from 'framer-motion';

const images = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    alt: "Plat gastronomique",
    category: "Plats"
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
    alt: "Mariage en Provence",
    category: "Événements"
  },
  {
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d",
    alt: "Buffet provençal",
    category: "Buffets"
  },
  {
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
    alt: "Dessert signature",
    category: "Desserts"
  },
  {
    src: "https://images.unsplash.com/photo-1482275548304-a58859dc31b7",
    alt: "Table dressée",
    category: "Décorations"
  },
  {
    src: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
    alt: "Cocktail",
    category: "Boissons"
  }
];

export default function Gallery() {
  return (
    <div className="min-h-screen py-20 bg-beige">
      <div className="container-custom">
        <motion.h1
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Notre Galerie
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div 
                className="h-64 bg-cover bg-center rounded-lg shadow-lg overflow-hidden"
                style={{ backgroundImage: `url(${image.src})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <p className="text-lg font-playfair">{image.category}</p>
                      <p className="text-sm">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}