'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const steps = [
  {
    title: "Localisation",
    description: 'Envoyé votre localisation pour la détection de votre ménage.',
    icon: '📍',
    color: 'from-blue-500 to-blue-700',
  },
  {
    title: 'Confirmation du ménage',
    description: 'Une fois la localisation envoyé, confirmez votre ménage sur la carte.',
    icon: '✅',
    color: 'from-indigo-500 to-indigo-700',
  },
      {
    title: 'Délimitez votre ménage si nécessaire',
    description: 'Délimitez votre ménage sur la carte en cas elle n\'est pas bien détecter sur la carte.',
    icon: '🗺️',
    color: 'from-green-500 to-green-700',
  },

  {
    title: 'Identifiant du ménage',
    description: 'Après confirmation ou délimitation, Vous recevrez l\'identifiant de votre.',
    icon: '🆔',
    color: 'from-yellow-500 to-yellow-700',
  },
  {
    title: 'Féllicitation',
    description: 'Félication vous venez d\'identifier votre ménage.',
    icon: '🎉',
    color: 'from-purple-500 to-purple-700',
  },
  {
    title: 'Validation & archivage',
    description: 'Les données sont sécurisées et archivées.',
    icon: '🔐',
    color: 'from-pink-500 to-pink-700',
  },
];

export default function StepIdentification() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % steps.length);
  const prev = () => setCurrent((prev) => (prev - 1 + steps.length) % steps.length);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-950 relative">
      <div className="max-w-4xl mx-auto px-4">

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent mb-4">
            Identifiez votre ménage en quelques étapes
          </h2>
        </motion.div>

        {/* Paragraphe */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 text-center max-w-xl mx-auto mb-8"
        >
          Suivez le processus d’identification rapide de votre ménage.
        </motion.p>

        {/* Flèches */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-4 mb-8"
        >
          <button onClick={prev} className="bg-white dark:bg-zinc-800 p-3 rounded-full shadow hover:scale-105 transition">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={next} className="bg-white dark:bg-zinc-800 p-3 rounded-full shadow hover:scale-105 transition">
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>

        {/* Carte de l'étape */}
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-zinc-800 rounded-3xl shadow-lg p-8 max-w-md mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.6 }}
            className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${steps[current].color} text-white text-2xl flex items-center justify-center shadow-lg`}
          >
            {steps[current].icon}
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-semibold mb-2"
          >
            {steps[current].title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 dark:text-gray-300"
          >
            {steps[current].description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
