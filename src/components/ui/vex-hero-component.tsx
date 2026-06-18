import React, { useEffect, useState } from 'react';
import { GooeyText } from './gooey-text-morphing';

// --- FadeIn Component ---
type FadeInProps = {
  delay: number;
  duration?: number;
  children: React.ReactNode;
  className?: string;
};

export const FadeIn: React.FC<FadeInProps> = ({
  delay,
  duration = 1000,
  children,
  className = '',
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-opacity ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

type AnimatedHeadingProps = {
  text: string;
  initialDelay?: number;
  charDelay?: number;
  duration?: number;
  className?: string;
};

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  initialDelay = 200,
  charDelay = 30,
  duration = 500,
  className = "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-normal mb-4 tracking-tight text-white select-none",
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  const lines = text.split('\n');

  return (
    <h1
      className={className}
      style={{ letterSpacing: '-0.04em' }}
    >
      {lines.map((line, lineIndex) => {
        const lineLength = line.length;

        return (
          <span key={lineIndex} className="block whitespace-nowrap">
            {line.split('').map((char, charIndex) => {
              // Formula: (lineIndex * lineLength * charDelay) + (charIndex * charDelay)
              const delay = (lineIndex * lineLength * charDelay) + (charIndex * charDelay);

              return (
                <span
                  key={charIndex}
                  className="inline-block transition-all ease-out"
                  style={{
                    opacity: animate ? 1 : 0,
                    transform: animate ? 'translateX(0)' : 'translateX(-18px)',
                    transitionDuration: `${duration}ms`,
                    transitionDelay: `${delay}ms`,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
};

// --- VexHero Component ---
export const VexHero: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => {
  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden select-none">
      {/* Background Video */}
      <video
        key={theme}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        src={theme === 'dark' ? '/dark.mp4' : '/light.mp4'}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Bottom Fade Out Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-[5]" />

      {/* Main Content Layout Container */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        
        {/* Spacer at the top to account for the fixed global header */}
        <div className="w-full h-24 pointer-events-none" />

        {/* Hero Content (Bottom of viewport) */}
        <div className="w-full px-6 md:px-12 lg:px-16 pb-12 lg:pb-16 flex-1 flex flex-col justify-end">
          <div className="lg:grid lg:grid-cols-2 lg:items-end gap-8">
            
            {/* Left Column - Main Content */}
            <div className="flex flex-col items-start w-full">
              {/* Animated Heading */}
              <AnimatedHeading 
                text="MS" 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold mb-2 tracking-tight text-white select-none"
              />
              <AnimatedHeading 
                text="BUILDER & DEVELOPERS" 
                initialDelay={400}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-normal mb-4 tracking-tight text-white/80 select-none"
              />

              {/* Gooey Text Morphing Tagline */}
              <FadeIn delay={800} duration={1000} className="w-full relative z-10 -mt-2">
                <GooeyText
                  texts={["Dream", "Design", "Deliver"]}
                  morphTime={1.2}
                  cooldownTime={1.0}
                  className="w-full flex justify-start my-2"
                  textClassName="text-white font-bold uppercase tracking-widest text-3xl md:text-4xl lg:text-5xl"
                />
              </FadeIn>

              {/* Buttons Row */}
              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4 mt-6">
                  <a 
                    href="https://wa.me/919743399992" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 cursor-pointer inline-block"
                  >
                    Start a Chat
                  </a>
                  <a 
                    href="https://www.instagram.com/ms__builders__developers?igsh=MTRpazB3N2FvY2xhMw%3D%3D&utm_source=qr" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300 cursor-pointer inline-block"
                  >
                    Instagram
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right Column - Empty (Tag card removed as requested) */}
            <div className="hidden lg:block"></div>

          </div>
        </div>

      </div>
    </div>
  );
};
