'use client';

import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';


interface Marker {
  lat: number;
  lng: number;
  color: string;
}

export default function MyGlobe() {
  const globeRef = useRef<any>(null);
  const [isError, setIsError] = useState(false);

  const markerData: Marker[] = [
    { lat: 48.8566, lng: 2.3522, color: 'red' },
    { lat: 40.7128, lng: -74.006, color: 'blue' },
    { lat: -1.2921, lng: 36.8219, color: 'green' },
    { lat: 5.6037, lng: -0.1870, color: 'white' },
    { lat: 6.1319, lng: 1.2220, color: 'purple' },
  ];

  useEffect(() => {
    if (globeRef.current) {
      try {
        const controls = (globeRef.current.controls() as any);
        controls.enabled = true;
        controls.enableZoom = true;
        controls.enablePan = true;
        controls.enableRotate = true;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1.5;
        controls.maxDistance = 2000;
        controls.minDistance = 200;
      } catch (error) {
        console.error('Error initializing globe controls:', error);
        setIsError(true);
      }
    }
  }, []);

  if (isError) {
    return <div className="w-full h-[500px] flex items-center justify-center text-red-500">Erreur lors du chargement du globe</div>;
  }

  return (
    <div className="w-full h-[800px] relative z-0">
     <Globe
        ref={globeRef}
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere
        atmosphereColor="#3399ff"
        htmlElementsData={markerData}
        htmlLat={(d) => (d as Marker).lat}
        htmlLng={(d) => (d as Marker).lng}
        htmlElement={(d) => {
          const marker = d as Marker;
          const el = document.createElement('div');
          el.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="${marker.color}" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 
                0-2.5-1.12-2.5-2.5s1.12-2.5 
                2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          `;
          el.style.transform = 'translate(-50%, -50%)';
          el.style.pointerEvents = 'none';
          return el;
        }}
      />

    </div>
  );
}
