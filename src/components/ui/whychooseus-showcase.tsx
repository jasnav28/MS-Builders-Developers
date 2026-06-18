'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// --- Types for FeatureCard ---
type FeatureCardProps = {
  title: string;
  description?: string;
  video: string;
  size: 'tall' | 'wide' | 'square';
  index: number;
  label?: string;
  ctaText?: string;
  bottomText?: string;
};

// --- Single FeatureCard Component ---
export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  video,
  size,
  index,
  label,
  ctaText,
  bottomText,
}) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Grid classes based on card size
  const sizeClasses = {
    tall: 'md:col-span-1 md:row-span-2 h-[450px] md:h-full min-h-[500px]',
    wide: 'md:col-span-2 md:row-span-1 h-[280px]',
    square: 'md:col-span-1 md:row-span-1 h-[280px]',
  };

  const formattedNum = String(index).padStart(2, '0');

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-[28px] overflow-hidden bg-white/[0.02] backdrop-blur-[6px] border border-white/10 glow-border cursor-pointer select-none transition-all duration-500 ease-out flex flex-col justify-between p-8 group shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${sizeClasses[size]}`}
      style={{
        '--x': `${coords.x}px`,
        '--y': `${coords.y}px`,
        '--opacity': isHovered ? 1 : 0,
      } as React.CSSProperties}
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[28px]">
        <motion.video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover origin-center rounded-[28px]"
          animate={{
            scale: isHovered ? 1.08 : 1.02,
          }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        />
        {/* Darkened Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 z-[1] transition-opacity duration-300" />
        {/* Hover Radial Gradient Highlight */}
        <div 
          className="absolute inset-0 z-[2] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(300px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.05), transparent 60%)`
          }}
        />
      </div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 z-[3] pointer-events-none opacity-[0.03] rounded-[28px] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Top Meta info */}
      <div className="relative z-10 flex justify-between items-start text-xs font-mono text-white/60 select-none">
        {label ? (
          <span className="uppercase tracking-widest">{label}</span>
        ) : (
          <span>{formattedNum}/</span>
        )}
        {label ? (
          <span>{formattedNum}/</span>
        ) : (
          <span className="uppercase tracking-widest">Found in Curiosity</span>
        )}
      </div>

      {/* Bottom Text Content */}
      <div className="relative z-10 mt-auto flex flex-col items-start gap-3">
        {size === 'tall' ? (
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-[1.1] transition-transform duration-500 group-hover:translate-y-[-5px]">
            {title.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h3>
        ) : (
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-normal transition-transform duration-500 group-hover:translate-y-[-5px]">
            {title}
          </h3>
        )}

        {description && (
          <p className="text-xs md:text-sm text-white/70 leading-relaxed font-light max-w-[420px] transition-all duration-500 group-hover:text-white group-hover:translate-y-[-3px]">
            {description}
          </p>
        )}

        {ctaText && (
          <div className="mt-4 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black font-semibold text-xs border border-white/20 transition-all duration-300 backdrop-blur-[10px] cursor-pointer">
            {ctaText}
          </div>
        )}

        {bottomText && (
          <span className="mt-4 text-xs font-medium text-white/60 tracking-wider">
            {bottomText}
          </span>
        )}
      </div>

      {/* Dynamic Hover Border Glow CSS */}
      <style>{`
        .glow-border {
          position: relative;
        }
        .glow-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.5px;
          background: radial-gradient(350px circle at var(--x, 0px) var(--y, 0px), rgba(94, 210, 156, 0.45), transparent 50%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: var(--opacity, 0);
          transition: opacity 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }
      `}</style>
    </div>
  );
};

// --- Main WhyChooseUsShowcase Component ---
export const WhyChooseUsShowcase: React.FC = () => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: '-100px' });

  // Grid cards data
  const cardsData = [
    {
      index: 1,
      title: 'Foundation To Final Touch',
      description: 'Complete Design & Build\nFrom foundation to final finishes, we handle every stage with precision and craftsmanship',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-tunnel-of-blue-and-pink-futuristic-lights-42299-large.mp4',
      size: 'tall' as const,
      label: '01/'
    },
    {
      index: 2,
      title: 'In Time Delivery',
      description: 'On-Time Project Delivery\nEfficient planning and disciplined execution ensure your dream home is delivered on schedule.',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-orange-and-blue-light-streaks-running-across-screen-42398-large.mp4',
      size: 'wide' as const,
      label: '02/'
    },
    {
      index: 3,
      title: 'Direct Factory Materials',
      description: 'Premium Factory-Direct Materials\nWe source top-quality materials directly from trusted manufacturers for superior durability and finish.',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-hud-interface-futuristic-display-42282-large.mp4',
      size: 'square' as const,
      label: '03/'
    },
    {
      index: 4,
      title: 'End-To-End Support',
      description: 'Dedicated End-to-End Support\nFrom consultation to completion, we stay connected throughout every step of the journey.',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-highway-traffic-at-night-with-car-headlights-loop-41859-large.mp4',
      size: 'square' as const,
      label: '04/'
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-background text-foreground py-24 px-6 md:px-12 lg:px-16 overflow-hidden flex flex-col justify-center transition-colors duration-300">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#5ed29c]/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none z-0" />

      {/* Global Noise Overlay */}
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Section Header */}
      <div 
        ref={headingRef}
        className="w-full max-w-4xl mb-12 relative z-10"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground uppercase leading-none"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Why Choose Us?<span className="text-[#5ed29c]">.</span>
        </motion.h2>
      </div>

      {/* Masonry/Grid Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
        {cardsData.map((card, idx) => (
          <motion.div
            key={card.index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.25, 1, 0.5, 1] }}
            className={card.size === 'tall' ? 'md:row-span-2' : ''}
          >
            <FeatureCard
              index={card.index}
              title={card.title}
              description={card.description}
              video={card.video}
              size={card.size}
              label={card.label}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
