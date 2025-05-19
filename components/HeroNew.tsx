'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const MyGlobe = dynamic(() => import('./MyGlobe'), { ssr: false });

export default function HeroNew() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Fond gradient clair */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 via-white to-indigo-100" />

      {/* Globe */}
      <div className="absolute inset-0 z-10 hidden md:flex items-center justify-center pointer-events-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-[800px] h-[800px] cursor-grab"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MyGlobe />
        </motion.div>
      </div>

      {/* (Retiré : flou sombre inutile sur fond clair) */}

      {/* Contenu texte */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              IDM+ <br /> Votre Plateforme d'Identification de Ménages
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Une solution moderne et innovante pour la gestion et l'identification des ménages avec précision et efficacité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full font-semibold transition-all hover:opacity-90"
              >
                Commencer Maintenant
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-700 border border-blue-200 rounded-full font-semibold transition-all hover:bg-blue-50"
              >
                Contactez-nous
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
