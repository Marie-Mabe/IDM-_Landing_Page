'use client';

import React from 'react';
import { PinContainer } from '@/components/ui/3d-pin';
import { div } from 'framer-motion/client';

export function AnimatedMapPin(): JSX.Element {
  return (
    <PinContainer
      title="Localisation des Ménages"
      href="#"
      className=""
      containerClassName="w-[400px] h-[400px] lg:w-[600px] lg:h-[600px]"
    >
    
      <div className="flex basis-full flex-col items-center justify-center p-4">
        {/* <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
          Carte interactive
        </h3> */}
        {/* <div className="text-base !m-0 !p-0 font-normal">
          <span className="text-slate-500">
            Visualisez la localisation des ménages sur une carte dynamique.
          </span>
        </div> */}
        <div className="flex flex-1 w-full mt-64 rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31727.821386107276!2d1.2793573608435709!3d6.26666649651937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023fb6fc0372009%3A0xb3ebfad997c5aa4f!2zRMOpIEtvcMOp!5e0!3m2!1sen!2stg!4v1747674496046!5m2!1sen!2stg"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </PinContainer>
  );
}
