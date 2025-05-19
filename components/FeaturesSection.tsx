'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Map, LocateFixed } from 'lucide-react';

const features = [
  {
    title: 'Ménage',
    description: 'Confirmez rapidement et facilement la géolocalisation de votre ménage avec notre interface intuitive. Grâce à notre outil de géolocalisation, vous pouvez facilement identifier et confirmer la position de votre ménage sur la carte. Il vous suffit de cliquer sur l\'emplacement souhaité pour le marquer.',
    image: '/images/close-up-people-typing-keyboard.jpg',
    icon: <CheckCircle className="w-4 h-4 mr-2" />,
  },
  {
    title: 'Plan à main levée',
    description: "Dessinez et géolocalisez votre plan d'habitation rapidement.Grâce à notre outil de dessin, vous pouvez créer un plan précis de votre ménage. Vous pouvez également ajouter des détails tels que les murs, les portes et les fenêtres pour une meilleure visualisation.",
    image: '/images/12708.jpg',
    icon: <Map className="w-4 h-4 mr-2" />,
  },
  {
    title: 'Services de base',
    description: 'Identifiez les services essentiels disponibles dans votre zone géographique. Grâce à notre outil de recherche, vous pouvez facilement trouver les services disponibles dans votre région. Que ce soit pour l\'électricité, l\'eau ou d\'autres services, vous pouvez rapidement obtenir les informations dont vous avez besoin.',
    image: '/images/medium-shot-man-holding-walkie-talkie.jpg',
    icon: <LocateFixed className="w-4 h-4 mr-2" />,
  },
];

const FeaturesSection: React.FC = () => {
  const [selected, setSelected] = useState(features[0]);

  return (
    <section className="py-20 bg-gradient-to-t from-white to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
              <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", bounce: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
            Fonctionnalités Clés
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des outils puissants pour vous aider à gérer vos ménages et vos services de manière efficace.
          </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">

            
          {/* Gauche : Boutons + Description */}
          <div className="flex-1">
            
            <div className="flex gap-3 mb-6 flex-wrap">
                         
              {features.map((feature) => (
                <button
                  key={feature.title}
                  onClick={() => setSelected(feature)}
                  className={`flex items-center px-4 py-2 rounded-full border transition ${
                    selected.title === feature.title
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-800 border-gray-300 hover:bg-blue-100'
                  }`}
                >
                  {feature.icon}
                  <span className="font-semibold">{feature.title}</span>
                </button>
              ))}
            </div>
            <motion.p
              key={selected.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-gray-600 text-base max-w-lg"
            >
              {selected.description}
            </motion.p>
          
          </div>

          {/* Droite : Image */}
          <motion.div
            
             initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", bounce: 0.2 }}
            className="flex-1 rounded-lg overflow-hidden shadow-lg max-h-[350px]"
          >
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
       

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
