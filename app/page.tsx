'use client';

import React from 'react';
import HeroNew from '@/components/HeroNew';
import ObjectivesSection from '@/components/ObjectivesSection';
import FeaturesSection from '@/components/FeaturesSection';
import CallToAction from '@/components/CallToAction';
import StepIdentification from '@/components/StepIdentification';


import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';




export default function Home() {


  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black overflow-x-hidden">
      {/* Section Navbar */}
      <Navbar />
      {/* Section Hero */}
      <HeroNew />

      {/* Section Objectifs */}
      <ObjectivesSection />

      {/* Section Features */}
      <FeaturesSection />
      {/* Section Infinite Moving Cards */}
      <StepIdentification />

      {/* Section Chatbot */}
      {/* <ChatbotUI /> */}

      {/* Section Testimonials */}
      {/* <TestimonialsSection /> */}
      {/* Section Testimonials */}
      {/* Section FAQ */}
      {/* <FAQSection /> */}

      {/* Section Call to Action */}
      <CallToAction />
      {/* Section Footer */}
      <Footer />
    </main>
  );
}
