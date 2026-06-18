'use client';

import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const SERVICES = [
  { 
    name: 'Interior', 
    src: '/ser/intt.png', 
    bg: '#1A365D', 
    bgImg: '/ser/int.png',
    desc: 'Bespoke interior spaces, custom modular furniture designs, detailed space planning, and beautiful layouts.' 
  },
  { 
    name: 'Exterior', 
    src: '/ser/extt.png', 
    bg: '#2D3748', 
    bgImg: '/ser/ext.png',
    desc: 'Architectural elevation concepts, modern landscape structures, and premium facade fabrications.' 
  },
  { 
    name: 'Real Estate', 
    src: '/ser/ree.png', 
    bg: '#1A202C', 
    bgImg: '/ser/real.png',
    desc: 'Professional real estate developments, properties consulting, and property sales transactions.' 
  },
  { 
    name: 'Renovation', 
    src: '/ser/renoo.png', 
    bg: '#2C5282', 
    bgImg: '/ser/reno.png',
    desc: 'Complete property structural remodeling, home extensions, restorations, and space renewals.' 
  },
  { 
    name: '2D Design', 
    src: '/ser/2dd.png', 
    bg: '#22543D', 
    bgImg: '/ser/2d.png',
    desc: 'High-fidelity 2D layouts, detailed blueprints, column positions, and precise architectural plans.' 
  },
  { 
    name: '3D Design', 
    src: '/ser/3dd.png', 
    bg: '#744210', 
    bgImg: '/ser/3d.png',
    desc: 'Ultra-realistic 3D walkthrough rendering animations for interior & exterior visualization.' 
  },
  { 
    name: 'Structural', 
    src: '/ser/stru.png', 
    bg: '#7B341E', 
    bgImg: '/ser/str.png',
    desc: 'Rigid structural designing, foundation details, RCC frame mappings, and engineering calculations.' 
  },
  { 
    name: 'Material Supply', 
    src: '/ser/supp.png', 
    bg: '#4C51BF', 
    bgImg: '/ser/sup.png',
    desc: 'Direct sourcing & supply of top-tier construction materials, aggregates, steel, and cement.' 
  },
];

export const ToonHubHero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Preload all images on mount
  useEffect(() => {
    SERVICES.forEach((item) => {
      const img = new Image();
      img.src = item.src;
      if (item.bgImg) {
        const bgImg = new Image();
        bgImg.src = item.bgImg;
      }
    });
  }, []);

  // Autoplay cycle
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        navigate('next');
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [activeIndex, isAnimating]);

  const navigate = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setActiveIndex((prev) => {
      if (direction === 'next') {
        return (prev + 1) % 8;
      } else {
        return (prev + 7) % 8;
      }
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 650);
  };

  return (
    <div
      className="relative w-full overflow-hidden transition-colors duration-650 animate-in fade-in duration-500"
      style={{
        backgroundColor: SERVICES[activeIndex].bg,
        transition: 'background-color 650ms cubic-bezier(0.4, 0, 0.2, 1)',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="relative w-full h-screen overflow-hidden">
        {/* 1. Grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-[50] opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat',
          }}
        />

        {/* 1.5. Background Images & Characters with Crossfade Transition */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${service.bgImg})`,
                opacity: index === activeIndex ? 1 : 0,
                transition: 'opacity 650ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {/* Character overlay aligned exactly with the background */}
              <img
                src={service.src}
                alt={`Service character - ${service.name}`}
                className="absolute bottom-0 left-1/2 select-none"
                style={{
                  transform: 'translateX(-50%)',
                  height: '80%',
                  width: 'auto',
                  objectFit: 'contain',
                  clipPath: index === activeIndex ? 'circle(120% at 50% 50%)' : 'circle(0% at 50% 50%)',
                  transition: 'clip-path 950ms cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* 3. Top-left brand label "SERVICES" */}
        <div className="absolute top-6 left-4 sm:left-8 z-[60] text-xs font-semibold uppercase text-white opacity-90 tracking-[0.18em]">
          SERVICES
        </div>

        {/* 5. Bottom-left text + nav buttons */}
        <div className="absolute bottom-6 left-4 sm:bottom-20 sm:left-24 z-[60] max-w-[320px] text-white">
          <p className="font-bold uppercase tracking-widest mb-2 sm:mb-3 text-base sm:text-[22px] opacity-95 leading-none">
            {SERVICES[activeIndex].name}
          </p>
          <p className="hidden sm:block text-xs sm:text-sm opacity-85 leading-[1.6] mb-4 sm:mb-5 font-normal">
            {SERVICES[activeIndex].desc}
          </p>
          <div className="flex gap-3 sm:gap-4 mt-2">
            <button
              onClick={() => navigate('prev')}
              className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-transparent border-2 border-white text-white transition-all duration-150 hover:scale-[1.08] hover:bg-white/10 active:scale-95 cursor-pointer"
              aria-label="Previous service"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.25} />
            </button>
            <button
              onClick={() => navigate('next')}
              className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-transparent border-2 border-white text-white transition-all duration-150 hover:scale-[1.08] hover:bg-white/10 active:scale-95 cursor-pointer"
              aria-label="Next service"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.25} />
            </button>
          </div>
        </div>

        {/* 6. Bottom-right link "DISCOVER IT" */}
        <div className="absolute bottom-6 right-4 sm:bottom-20 sm:right-10 z-[60]">
          <a
            href="https://wa.me/919743399992"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:opacity-100 opacity-95 transition-opacity duration-200 uppercase"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(20px, 4vw, 56px)',
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              textDecoration: 'none',
            }}
          >
            DISCOVER IT
            <ArrowRight className="w-5 h-5 sm:w-8 sm:h-8 shrink-0" strokeWidth={2.25} />
          </a>
        </div>
      </div>
    </div>
  );
};
