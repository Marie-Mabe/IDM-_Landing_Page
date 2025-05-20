'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: "Capture de l'image",
    description: 'Prenez une photo nette de votre ménage.',
    icon: '📸',
    color: 'from-blue-500 to-blue-700',
  },
  {
    number: 2,
    title: 'Analyse IA',
    description: 'L’IA détecte automatiquement les éléments visibles.',
    icon: '🤖',
    color: 'from-indigo-500 to-indigo-700',
  },
  {
    number: 3,
    title: 'Filtrage intelligent',
    description: 'Les données non pertinentes sont filtrées.',
    icon: '🧠',
    color: 'from-green-500 to-green-700',
  },
  {
    number: 4,
    title: 'Identification',
    description: 'Chaque ménage reçoit un identifiant unique.',
    icon: '🆔',
    color: 'from-yellow-500 to-yellow-700',
  },
  {
    number: 5,
    title: 'Rapport personnalisé',
    description: 'Un rapport est généré avec suggestions.',
    icon: '📊',
    color: 'from-purple-500 to-purple-700',
  },
  {
    number: 6,
    title: 'Validation & archivage',
    description: 'Les données sont sécurisées et archivées.',
    icon: '🔐',
    color: 'from-pink-500 to-pink-700',
  },
];

export default function StepIdentification() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent mb-4">
            Identifiez votre ménage en 6 étapes simples
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Suivez le processus d’identification rapide et intelligent.
          </p>
        </div>

        {/* Flèches */}
        <div className="flex justify-end gap-4 mb-4">
          <button onClick={() => scroll('left')} className="bg-white dark:bg-zinc-800 p-2 rounded-full shadow hover:scale-105 transition">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => scroll('right')} className="bg-white dark:bg-zinc-800 p-2 rounded-full shadow hover:scale-105 transition">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory scroll-smooth"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[280px] lg:min-w-[320px] bg-white dark:bg-zinc-800 rounded-3xl shadow-lg p-6 snap-start flex-shrink-0 hover:scale-[1.02] transition-transform"
            >
              <div
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} text-white font-bold flex items-center justify-center text-xl shadow-lg mb-4`}
              >
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
