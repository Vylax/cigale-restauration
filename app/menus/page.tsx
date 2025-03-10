'use client';

import { motion } from 'framer-motion';

const menus = [
  {
    name: "Menu Provence",
    price: "45€",
    items: [
      "Tapenade d'olives noires sur pain de campagne",
      "Soupe au pistou",
      "Daube provençale et ses légumes du soleil",
      "Tarte aux fruits de saison"
    ]
  },
  {
    name: "Menu Méditerranée",
    price: "55€",
    items: [
      "Anchoïade de légumes croquants",
      "Bouillabaisse traditionnelle",
      "Fromages affinés de la région",
      "Calisson d'Aix"
    ]
  },
  {
    name: "Menu Gastronomique",
    price: "75€",
    items: [
      "Foie gras maison et chutney de figues",
      "Loup grillé aux herbes de Provence",
      "Agneau de Sisteron en croûte d'herbes",
      "Dessert signature du Chef"
    ]
  }
];

export default function Menus() {
  return (
    <div className="min-h-screen py-20 bg-beige">
      <div className="container-custom">
        <motion.h1
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nos Menus & Spécialités
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menus.map((menu, index) => (
            <motion.div
              key={menu.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-playfair font-bold text-olive mb-2">
                  {menu.name}
                </h2>
                <p className="text-terracotta text-xl mb-4">{menu.price} par personne</p>
                <ul className="space-y-2">
                  {menu.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-olive mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="btn-primary w-full mt-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Réserver ce menu
                </motion.button>
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
            Tous nos menus sont personnalisables selon vos préférences et régimes alimentaires.
          </p>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Demander un devis personnalisé
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}