'use client';

import { HoverEffect } from "./ui/card-hover-effect";
import { motion } from "framer-motion";
import {
  ScanEye,
  Languages,
  BrainCog,
} from 'lucide-react';

export default function ObjectivesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
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
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className=" sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
              <HoverEffect items={projects} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export const projects = [
  {
    title: "Attribuer un identifiant unique à chaque ménage",
    description:
      "Pour structurer les données locales et en faciliter l’exploitation.",
    icon: <ScanEye className="w-10 h-10 text-blue-500" />,
    link: "",
  },
  {
    title: "Faciliter l’accès aux données techniques via le langage naturel",
    description:
      "Grâce à un assistant IA, les utilisateurs peuvent interroger des cartes SIG, rapports PDF ou statistiques sans expertise technique.",
    icon: <Languages className="w-10 h-10 text-purple-500" />,
    link: "",
  },
  {
    title: "Favoriser une gouvernance locale intelligente",
    description:
      "En créant un socle numérique pour les collectivités, accessible localement, sans dépendance au cloud.",
    icon: <BrainCog className="w-10 h-10 text-green-500" />,
    link: "",
  },
];
