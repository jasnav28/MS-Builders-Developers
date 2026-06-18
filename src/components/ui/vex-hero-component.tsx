import React, { useEffect, useState } from 'react';

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

      {/* Main Content Layout Container (Centered) */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-6 md:px-12">
        <div className="max-w-4xl space-y-6 flex flex-col items-center">
          
          {/* Centered Heading in one line with big size */}
          <AnimatedHeading 
            text="MS BUILDER & DEVELOPERS" 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white uppercase select-none leading-none drop-shadow-lg"
          />

          {/* Tagline in one line, static, below the heading */}
          <FadeIn delay={700} duration={1000}>
            <p className="text-white font-extrabold uppercase tracking-[0.3em] text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-md select-none">
              Dream <span className="text-[#FF5656]">✦</span> Design <span className="text-[#FF5656]">✦</span> Deliver
            </p>
          </FadeIn>


          {/* Centered Buttons Row */}
          <FadeIn delay={1100} duration={1000}>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a 
                href="https://wa.me/919743399992" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 cursor-pointer inline-block shadow-lg hover:shadow-xl"
              >
                Start a Chat
              </a>
              <a 
                href="https://www.instagram.com/ms__builders__developers?igsh=MTRpazB3N2FvY2xhMw%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300 cursor-pointer inline-block shadow-lg hover:shadow-xl"
              >
                Instagram
              </a>
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
};
