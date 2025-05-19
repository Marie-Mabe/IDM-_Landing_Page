'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ScanEye,
  Languages,
  BrainCog,
} from 'lucide-react';

interface Objective {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const objectives: Objective[] = [
  {
    title: 'Attribuer un identifiant unique à chaque ménage',
    description: 'Pour structurer les données locales et en faciliter l’exploitation',
    icon: <ScanEye className="w-10 h-10 text-blue-500" />,
  },
  {
    title: 'Faciliter l’accès aux données techniques via le langage naturel',
    description: 'Grâce à un assistant IA, les utilisateurs peuvent interroger des cartes SIG, rapports PDF ou statistiques sans expertise technique',
    icon: <Languages className="w-10 h-10 text-purple-500" />,
  },
  {
    title: 'Favoriser une gouvernance locale intelligente',
    description: 'En créant un socle numérique pour les collectivités, accessible localement, sans dépendance au cloud',
    icon: <BrainCog className="w-10 h-10 text-green-500" />,
  },
];

const ObjectivesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', bounce: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
            Pourquoi choisir IDM+ ?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une Plateforme qui vous propose des solutions innovantes pour faciliter votre quotidien et améliorer la gestion de vos ménages.
            <br />

          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: 'easeOut',
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 mb-4 mx-auto flex items-center justify-center">
                {objective.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{objective.title}</h3>
              <p className="text-gray-600">{objective.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
