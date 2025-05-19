'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const MyGlobe = dynamic(() => import('./MyGlobe'), { ssr: false });

export default function HeroNew() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Fond gradient clair */}
      <div className="absolute inset-0 z-0 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-100" />

        {/* Globe visible à partir de md */}
        <div className="absolute inset-0 z-10 hidden md:flex items-center justify-end pr-60 mt-24 pointer-events-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] cursor-grab"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MyGlobe />
          </motion.div>
        </div>

        {/* Texte */}
        <div className="relative z-20 w-full mx-4 px-4 sm:mx-6 lg:mx-8 ml-0 sm:ml-0 mr-0 sm:mr-24 lg:mr-64">
          <div className="max-w-3xl sm:max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 text-center sm:text-left">
                IDM+ <br className="hidden sm:block" /> Votre Plateforme <br className="hidden sm:block" /> d'Identification de Ménages
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto sm:mx-0 text-center sm:text-left">
                Une solution moderne et innovante pour la gestion et l'identification des ménages avec précision et efficacité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-4 py-3 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full font-semibold text-sm sm:text-base transition-all hover:opacity-90"
                >
                  Commencer Maintenant
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-4 py-3 sm:px-6 sm:py-3 bg-white text-blue-700 border border-blue-200 rounded-full font-semibold text-sm sm:text-base transition-all hover:bg-blue-50"
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
